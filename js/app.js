/* Gincana do Saber Mirim – lógica do quiz (JavaScript puro).
   Tudo roda dentro de uma função isolada para não conflitar com questions.js. */
(function () {
  "use strict";
  const app = document.getElementById("app");
  const LET = ["A", "B", "C", "D", "E"];
  const ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  const EDICOES = ["Final 2022", "Semifinal 2022", "Edição 2024"];
  let st = null; // estado do quiz em andamento

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pad = n => String(n).padStart(2, "0");
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem("gsm_" + k)); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem("gsm_" + k, JSON.stringify(v)); } catch (e) { } }
  };
  const todas = () => TEMAS.reduce((acc, t) => acc.concat(t.perguntas.map(p => Object.assign({}, p, { tema: t.nome }))), []);
  const melhor = id => { const b = store.get("best_" + id); return b ? `<span class="rec">Melhor: ${b.acertos}/${b.total}</span>` : ""; };

  function linha(id, num, titulo, desc, qtd) {
    return `<li><button class="linha" data-id="${id}">
      <span class="num">${num}</span>
      <span class="txt"><strong>${esc(titulo)}</strong><small>${esc(desc)}</small></span>
      <span class="qtd">${qtd} questões ${melhor(id)}</span>
      <span class="seta" aria-hidden="true">→</span></button></li>`;
  }

  /* ---------- início ---------- */
  function home() {
    st = null;
    const all = todas();
    const porEdicao = EDICOES.map(e => ({ id: "ed_" + e, nome: e, perguntas: all.filter(p => p.f === e) }));
    app.innerHTML = `
      <section class="capa">
        <p class="kicker">Constituição em Miúdos</p>
        <h1>Gincana do Saber Mirim</h1>
        <p class="lead">Quizzes de estudo com as perguntas das edições Final 2022, Semifinal 2022 e 2024. Responda com calma: o gabarito comentado, com a página do livro, só é revelado ao final de cada quiz.</p>
        <div class="acoes">
          <button class="btn pri" data-id="todas">Quiz geral · ${all.length} questões</button>
          <button class="btn" data-id="sorteio">Sorteio de 10 questões</button>
        </div>
      </section>
      <section class="bloco">
        <h2><span>Por tema</span></h2>
        <ol class="indice">${TEMAS.map((t, i) => linha(t.id, ROM[i], t.nome, t.desc, t.perguntas.length)).join("")}</ol>
      </section>
      <section class="bloco">
        <h2><span>Por edição</span></h2>
        <ol class="indice">${porEdicao.map((e, i) => linha(e.id, "0" + (i + 1), e.nome, "Perguntas desta edição da gincana.", e.perguntas.length)).join("")}</ol>
      </section>`;
    app.querySelectorAll("[data-id]").forEach(b => b.onclick = () => abrir(b.dataset.id));
    window.scrollTo(0, 0);
  }

  function abrir(id) {
    const all = todas();
    if (id === "todas") return iniciar(id, "Quiz geral", all);
    if (id === "sorteio") return iniciar(id, "Sorteio de 10 questões", shuffle(all).slice(0, 10));
    if (id.indexOf("ed_") === 0) { const e = id.slice(3); return iniciar(id, e, all.filter(p => p.f === e)); }
    const t = TEMAS.find(x => x.id === id);
    iniciar(t.id, t.nome, t.perguntas.map(p => Object.assign({}, p, { tema: t.nome })));
  }

  /* ---------- quiz ---------- */
  function iniciar(id, nome, perguntas) {
    st = { id, nome, perguntas, resp: perguntas.map(() => null), i: 0 };
    quiz();
  }

  function quiz() {
    const { perguntas, resp, i } = st, p = perguntas[i], n = perguntas.length;
    const feitas = resp.filter(r => r !== null).length;
    const ultima = i === n - 1;
    const misto = st.id === "todas" || st.id === "sorteio" || st.id.indexOf("ed_") === 0;
    app.innerHTML = `
      <section class="quiz">
        <div class="quiz-topo">
          <button class="link" id="sair">← Sair do quiz</button>
          <span class="nome">${esc(st.nome)}</span>
        </div>
        <div class="prog"><span>Questão ${pad(i + 1)} de ${pad(n)}</span><span>${feitas} respondida${feitas === 1 ? "" : "s"}</span></div>
        <div class="barra"><i style="width:${(feitas / n) * 100}%"></i></div>
        <div class="pontos">${perguntas.map((_, k) => `<button class="ponto${k === i ? " atual" : ""}${resp[k] !== null ? " feito" : ""}" data-ir="${k}" aria-label="Ir para a questão ${k + 1}">${k + 1}</button>`).join("")}</div>
        <article class="pergunta">
          ${misto ? `<p class="tema">${esc(p.tema)}</p>` : ""}
          <h2>${esc(p.t)}</h2>
          <div class="opcoes" role="radiogroup" aria-label="Alternativas">
            ${p.o.map((o, k) => `<button class="opcao${resp[i] === k ? " marcada" : ""}" role="radio" aria-checked="${resp[i] === k}" data-op="${k}"><b>${LET[k]}</b><span>${esc(o)}</span></button>`).join("")}
          </div>
        </article>
        <div class="nav">
          <button class="btn" id="ant" ${i === 0 ? "disabled" : ""}>← Anterior</button>
          ${ultima ? `<button class="btn pri" id="fim">Finalizar e ver gabarito</button>` : `<button class="btn pri" id="prox">Próxima →</button>`}
        </div>
        <p class="dica">Atalhos: teclas A a D respondem; setas ← → navegam.</p>
      </section>`;
    app.querySelectorAll("[data-op]").forEach(b => b.onclick = () => { st.resp[i] = +b.dataset.op; quiz(); });
    app.querySelectorAll("[data-ir]").forEach(b => b.onclick = () => { st.i = +b.dataset.ir; quiz(); });
    app.querySelector("#sair").onclick = () => { if (confirm("Sair do quiz? O progresso será perdido.")) home(); };
    const ant = app.querySelector("#ant"), prox = app.querySelector("#prox"), fim = app.querySelector("#fim");
    if (ant) ant.onclick = () => { if (st.i > 0) { st.i--; quiz(); } };
    if (prox) prox.onclick = () => { st.i++; quiz(); };
    if (fim) fim.onclick = finalizar;
    window.scrollTo(0, 0);
  }

  function finalizar() {
    const vazias = st.resp.filter(r => r === null).length;
    if (vazias && !confirm(`Há ${vazias} questão(ões) sem resposta. Finalizar mesmo assim?`)) return;
    const acertos = st.perguntas.filter((p, k) => st.resp[k] === p.c).length;
    if (st.id !== "sorteio") {
      const b = store.get("best_" + st.id);
      if (!b || acertos / st.perguntas.length > b.acertos / b.total) store.set("best_" + st.id, { acertos, total: st.perguntas.length });
    }
    resultado(acertos, "todas");
  }

  /* ---------- resultado e gabarito ---------- */
  function resultado(acertos, filtro) {
    const n = st.perguntas.length, pct = Math.round(acertos / n * 100);
    const msg = pct === 100 ? "Aproveitamento total." : pct >= 70 ? "Ótimo desempenho." : pct >= 50 ? "Bom resultado; ainda há o que revisar." : "Vale revisar o conteúdo e tentar de novo.";
    const itens = st.perguntas.map((p, k) => ({ p, k, r: st.resp[k] })).filter(x => filtro === "todas" || x.r !== x.p.c);
    app.innerHTML = `
      <section class="resultado">
        <p class="kicker">Resultado · ${esc(st.nome)}</p>
        <div class="placar"><strong>${acertos}</strong><span>de ${n} · ${pct}%</span></div>
        <p class="lead centro">${msg}</p>
        <div class="acoes centro">
          <button class="btn pri" id="refazer">Refazer quiz</button>
          <button class="btn" id="inicio">Escolher outro quiz</button>
        </div>
        <div class="bloco">
          <h2><span>Gabarito comentado</span></h2>
          <div class="filtros">
            <button class="chip${filtro === "todas" ? " ativo" : ""}" data-f="todas">Todas (${n})</button>
            <button class="chip${filtro === "erradas" ? " ativo" : ""}" data-f="erradas">Erradas ou em branco (${n - acertos})</button>
          </div>
          ${itens.length ? itens.map(({ p, k, r }) => {
      const ok = r === p.c;
      return `<article class="rev ${ok ? "certa" : "errada"}">
              <div class="rev-topo"><span>Questão ${pad(k + 1)}</span><span class="selo">${ok ? "Correta" : r === null ? "Em branco" : "Incorreta"}</span></div>
              <h3>${esc(p.t)}</h3>
              <ul>${p.o.map((o, j) => `<li class="${j === p.c ? "gab" : ""}${j === r && !ok ? " sua" : ""}"><b>${LET[j]}</b><span>${esc(o)}${j === p.c ? " <em>Resposta correta</em>" : ""}${j === r && !ok ? " <em>Sua resposta</em>" : ""}</span></li>`).join("")}</ul>
              ${p.e ? `<p class="exp">${esc(p.e)}</p>` : ""}
              <p class="fonte">${p.p ? `Constituição em Miúdos, p. ${esc(p.p)} · ` : ""}${esc(p.f)}</p>
            </article>`;
    }).join("") : `<p class="vazio">Nenhuma questão errada. Parabéns!</p>`}
        </div>
      </section>`;
    app.querySelector("#refazer").onclick = () => { st.id === "sorteio" ? abrir("sorteio") : iniciar(st.id, st.nome, st.perguntas); };
    app.querySelector("#inicio").onclick = home;
    app.querySelectorAll("[data-f]").forEach(b => b.onclick = () => resultado(acertos, b.dataset.f));
    window.scrollTo(0, 0);
  }

  document.addEventListener("keydown", e => {
    if (!st || !app.querySelector(".pergunta") || e.ctrlKey || e.metaKey || e.altKey) return;
    const k = "abcde".indexOf(e.key.toLowerCase());
    if (e.key.length === 1 && k >= 0 && k < st.perguntas[st.i].o.length) { st.resp[st.i] = k; quiz(); }
    else if (e.key === "ArrowRight" && st.i < st.perguntas.length - 1) { st.i++; quiz(); }
    else if (e.key === "ArrowLeft" && st.i > 0) { st.i--; quiz(); }
  });

  document.getElementById("logo").onclick = e => { e.preventDefault(); if (!st || confirm("Voltar ao início? O quiz atual será perdido.")) home(); };
  home();
})();
