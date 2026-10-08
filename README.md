# Gincana do Saber Mirim – Quiz da Constituição
Site estático (HTML + CSS + JavaScript puro). Abra `index.html` no navegador.

- `index.html` – página principal
- `css/style.css` – estilos (responsivo, modo escuro automático)
- `js/questions.js` – banco de perguntas por tema
- `js/app.js` – lógica do quiz e gabarito

Adicionar pergunta (em `js/questions.js`, dentro do tema):
`q("Enunciado", ["A","B","C","D"], indiceCorreto, "página", "fonte", "explicação opcional")`  (0=A, 1=B, 2=C, 3=D)
