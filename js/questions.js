/* Banco de perguntas. Formato de cada pergunta:
   q(enunciado, [alternativas], índiceCorreto (0=A,1=B,2=C,3=D), "página", "fonte", "explicação opcional") */
const q = (t, o, c, p = "", f = "", e = "") => ({ t, o, c, p, f, e });
const F = "Final 2022", S = "Semifinal 2022", Y = "Edição 2024";

const TEMAS = [
  {
    id: "estado", icone: "🏛️", nome: "Princípios e Organização do Estado",
    desc: "Princípios da administração, sistemas de governo e objetivos fundamentais.",
    perguntas: [
      q("Quais são os 5 princípios básicos da administração pública?",
        ["Legística, Impessoalidade, Transparência, Ética e Eficácia", "Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência", "Compromisso, Impessoalidade, Legalidade, Validade e Juricidade", "Legalidade, Impessoalidade, Moralidade, Publicidade e Eficácia"], 1, "17", S),
      q("Qual dos princípios da administração pública traz a ideia de que os atos públicos devem perseguir princípios éticos, como a honestidade e a boa-fé em todas as decisões tomadas?",
        ["Princípio da Publicidade", "Princípio da Impessoalidade", "Princípio da Legalidade", "Princípio da Moralidade"], 3, "17", S),
      q("Qual princípio se refere à atuação da administração pública sempre em nome do interesse público e nunca em nome do interesse particular?",
        ["Legalidade", "Moralidade", "Impessoalidade", "Publicidade"], 2, "17", Y),
      q("Qual princípio exige a divulgação ampla de todos os atos da administração pública para que cheguem ao conhecimento de todos os cidadãos?",
        ["Legalidade", "Publicidade", "Moralidade", "Eficiência"], 1, "17", Y),
      q("Qual o sistema de governo escolhido em todas as consultas populares realizadas no Brasil?",
        ["Semipresidencialismo", "Presidencialismo", "Parlamentarismo", "Democrático"], 1, "20", S),
      q("Nos sistemas parlamentaristas ou semipresidencialistas, qual é a função do primeiro-ministro?",
        ["Chefe de Estado", "Chefe de Governo", "Líder da oposição", "Presidente do Parlamento"], 1, "98", Y),
      q("De acordo com a Organização do Estado, qual alternativa está correta?",
        ["O País é composto por 27 estados, incluindo o Distrito Federal.", "A União é composta por 26 unidades federativas, excluindo o Distrito Federal.", "O Distrito Federal é administrado pelo governo federal.", "Cada ente federativo possui autonomia e competência própria para agir."], 3, "16", Y),
      q("No Capítulo II, sobre os objetivos fundamentais da Constituição, qual alternativa está correta?",
        ["Construção de uma sociedade mais livre, mais justa e mais solidária e o fortalecimento do Estado Democrático de Direito.", "Construção de uma sociedade mais livre, mais justa e mais solidária; redução da pobreza, da marginalidade e das desigualdades sociais e regionais.", "A valorização da dignidade da pessoa humana e o fortalecimento do Estado Democrático de Direito.", "A redução da marginalidade e o pluralismo político."], 1, "14", Y,
        "As demais alternativas estão no artigo 1º da Constituição Federal, que trata dos fundamentos."),
      q("O que são Cláusulas Pétreas em uma Constituição?",
        ["Dispositivos que podem ser alterados para retirar direitos fundamentais.", "Limitações materiais ao poder de reforma da Constituição: não podem ser mudadas para retirar direitos, apenas para acrescentar.", "Normas transitórias que podem ser modificadas pelo Congresso Nacional a qualquer momento.", "Dispositivos legais que podem ser alterados para modificar qualquer parte da Constituição."], 1, "95", Y)
    ]
  },
  {
    id: "legislativo", icone: "⚖️", nome: "Poder Legislativo e Processo Legislativo",
    desc: "Como nascem as leis, o Congresso, medidas provisórias e controle de contas.",
    perguntas: [
      q("Para que uma lei seja elaborada, deve obedecer obrigatoriamente a quantos passos? Quais são eles?",
        ["5 passos: autoria, avaliação, votação, sanção ou veto e divulgação.", "5 passos: iniciativa do projeto, discussão, votação, sanção ou veto e publicação.", "4 passos: iniciativa do projeto, votação, sanção ou veto e publicação.", "4 passos: autoria, votação, sanção ou veto e publicação."], 1, "39 a 42", F),
      q("A iniciativa de um projeto de lei que trata da fixação de subsídios de prefeitos, governadores, parlamentares, ministros secretários e do Presidente da República cabe exclusivamente a qual poder?",
        ["Poder Legislativo", "Poder Executivo", "Poder Judiciário", "Tanto ao Poder Legislativo quanto ao Poder Executivo"], 0, "39", F),
      q("O quórum é o número mínimo de parlamentares presentes para dar início a um ato. Qual o valor da maioria absoluta do Senado Federal?",
        ["40", "41", "42", "45"], 1, "107", F),
      q("A cassação de mandato ocorre quando:",
        ["O político renuncia voluntariamente ao cargo.", "O político não comparece a um número mínimo de sessões legislativas.", "O político age de forma contrária ao Código de Decoro Parlamentar ou comete outra irregularidade.", "O político não consegue ser reeleito em uma nova eleição."], 2, "95", Y),
      q("O Tribunal de Contas é um órgão auxiliar de qual poder?",
        ["Poder Executivo", "Poder Judiciário", "Poder Legislativo", "Poder Legislativo e Poder Executivo"], 2, "42", S),
      q("Qual poder julga o chefe do Poder Executivo por um crime de responsabilidade?",
        ["Poder Legislativo", "Poder Judiciário", "Poder Legislativo com auxílio do Poder Judiciário", "Poder Legislativo com auxílio da Advocacia Pública"], 0, "43", Y),
      q("O que é uma Medida Provisória (MP) e qual é sua validade inicial?",
        ["Norma criada pelo Congresso Nacional com validade de 30 dias.", "Norma criada pelo presidente da República com validade de 60 dias, podendo ser prorrogada por mais 60 dias.", "Decreto criado pelo presidente da República com validade de 120 dias, sem possibilidade de prorrogação.", "Lei criada pelo Congresso Nacional com efeito imediato e validade de 90 dias."], 1, "97", Y)
    ]
  },
  {
    id: "judiciario", icone: "🔨", nome: "Poder Judiciário e Justiça",
    desc: "Tribunais, instâncias, STF e as funções essenciais à Justiça.",
    perguntas: [
      q("Determinadas autoridades, como deputados e chefes do Poder Executivo, têm um tratamento especial de serem julgadas. Qual o nome dessa prerrogativa?",
        ["Foro Privilegiado", "Quinto Constitucional", "Cláusula Pétrea", "Cota Parlamentar"], 0, "36", Y),
      q("Um trabalhador insatisfeito com a decisão dada em segunda instância poderá recorrer a outro órgão? Caso sim, qual?",
        ["Sim, ao Tribunal Superior do Trabalho.", "Não, a segunda instância já é a última.", "Sim, ao Ministério Público do Trabalho.", "Sim, ao Tribunal Regional do Trabalho."], 0, "35", Y),
      q("Quais são as três instâncias existentes na Justiça do Trabalho?",
        ["Juízes do Trabalho, Tribunais Regionais do Trabalho e Tribunal Superior do Trabalho", "Juízes do Trabalho, Desembargadores e Conciliadores", "Mediadores do Trabalho, Desembargadores e Ministros", "Juízes do Trabalho, Tribunais Regionais do Trabalho e Superior Tribunal de Justiça"], 0, "35", S),
      q("Quais são as justiças especiais previstas na Constituição Federal?",
        ["Justiça do Trabalho, Justiça Militar e Justiça Eleitoral", "Justiça do Trabalho, Justiça Federal e Justiça Militar", "Justiça do Trabalho, Justiça Desportiva e Justiça Militar", "Justiça Federal, Justiça do Trabalho e Justiça Eleitoral"], 0, "36", Y),
      q("Qual órgão julga as infrações penais comuns cometidas pelos comandantes do Exército, da Marinha e da Aeronáutica?",
        ["Conselho Nacional de Justiça", "Superior Tribunal Militar", "Superior Tribunal de Justiça", "Supremo Tribunal Federal"], 3, "36", Y),
      q("Quantos ministros compõem o Supremo Tribunal Federal?",
        ["27 ministros", "15 ministros", "11 ministros", "33 ministros"], 2, "104", Y),
      q("Na segunda instância do Poder Judiciário, um quinto dos membros são advogados indicados, e não aprovados em concurso. Como é chamada essa prática e por quem são indicados?",
        ["Quinto Jurisprudencial, indicados pelo Governador", "Quinto Constitucional, indicados pelo Presidente da República", "Quinto Constitucional, indicados pelo Governador", "Quinto Jurisdicional, indicados pelo Presidente da República"], 2, "94", F),
      q("Na composição dos tribunais superiores existentes no Brasil, em qual deles o mandato é vitalício?",
        ["TST – Tribunal Superior do Trabalho", "TSE – Tribunal Superior Eleitoral", "STM – Superior Tribunal Militar", "STF – Supremo Tribunal Federal"], 2, "104", F,
        "Gabarito oficial da Gincana: STM (Superior Tribunal Militar)."),
      q("Os Ministros atuam nos Tribunais Superiores e os Desembargadores nos Tribunais Regionais. E os Juízes, da primeira instância, como é chamado o seu território de atuação?",
        ["Regional jurídica", "Comarca", "Tribunal", "Fórum"], 1, "95", S, "Fórum não é a resposta correta."),
      q("Qual órgão especial da Justiça é responsável por fiscalizar e fazer cumprir as leis que defendem o patrimônio nacional e os interesses da sociedade e do cidadão?",
        ["Câmara Municipal", "Conselho Nacional de Justiça", "Defensoria Pública", "Ministério Público"], 3, "36", S),
      q("Quando a pessoa não tem condições de pagar um advogado, quem a socorre nos seus interesses particulares diante da Justiça?",
        ["Defensoria Pública", "Ministério Público", "OAB – Ordem dos Advogados do Brasil", "Advocacia Pública"], 0, "38", Y),
      q("Qual alternativa apresenta corretamente as exigências para ocupar o cargo de Advogado-Geral da União?",
        ["Advogado com mais de 35 anos; notável saber jurídico e reputação ilibada.", "Advogado com mais de 30 anos; notável saber jurídico e ficha limpa.", "Cidadãos comuns com mais de 35 anos; notável saber jurídico e reputação ilibada.", "Cidadãos comuns com mais de 35 anos; notável saber jurídico e ficha limpa."], 2, "106", S)
    ]
  },
  {
    id: "orcamento", icone: "💰", nome: "Orçamento e Finanças Públicas",
    desc: "Leis orçamentárias, tipos de despesa e responsabilidade fiscal.",
    perguntas: [
      q("A Lei de Diretrizes Orçamentárias é feita de quanto em quanto tempo?",
        ["Anualmente", "De dois em dois anos", "De quatro em quatro anos", "De cinco em cinco anos"], 0, "60", F),
      q("A prefeitura municipal adquiriu um grande lote para a construção de uma escola. Qual o tipo de despesa realizada?",
        ["Despesa Corrente", "Despesa Decorrente da Despesa de Capital", "Despesa de Capital", "Despesas Operacionais"], 2, "60", Y),
      q("Qual dos orçamentos da seguridade social garante o salário-família e o seguro-desemprego?",
        ["Assistência Social", "Previdência Social", "Orçamento de Investimentos", "Orçamento Fiscal"], 1, "72", Y),
      q("Qual lei define as responsabilidades e deveres do administrador público quanto aos orçamentos, limita os gastos com pessoal e proíbe a criação de despesas fixas sem fonte de receita?",
        ["Lei Orçamentária", "Lei de Diretrizes Orçamentárias", "Lei de Orçamento e Despesa Fiscal", "Lei de Responsabilidade Fiscal"], 3, "100", Y),
      q("Qual a destinação mínima de recursos que a União deve aplicar em educação e saúde, respectivamente?",
        ["Mínimo de 18% e mínimo de 10%", "Mínimo de 16% e mínimo de 10%", "Mínimo de 25% e mínimo de 10%", "Mínimo de 15% e mínimo de 10%"], 0, "111", F)
    ]
  },
  {
    id: "democracia", icone: "🗳️", nome: "Democracia, Eleições e Participação Popular",
    desc: "Voto, plebiscitos, referendos, iniciativa popular e acesso à informação.",
    perguntas: [
      q("Em que ano ocorreu o último referendo no Brasil, que consultou a população sobre a proibição do comércio de armas de fogo e munições no país?",
        ["2005", "2000", "2004", "2001"], 0, "102", F),
      q("Para ser aceito, um projeto de iniciativa popular precisa de um percentual mínimo de assinaturas do eleitorado nacional, distribuídas em uma quantidade mínima de unidades da federação. Qual é esse valor?",
        ["1% do eleitorado nacional, em pelo menos 5 unidades da federação", "2% do eleitorado nacional, em pelo menos 6 unidades da federação", "3% do eleitorado nacional, em pelo menos 5 unidades da federação", "1% do eleitorado nacional, em pelo menos 6 unidades da federação"], 0, "102", S),
      q("Segundo a Lei de Acesso à Informação, quando o órgão negar a informação solicitada, o cidadão pode recorrer à autoridade hierarquicamente superior. De quantos dias é o prazo para esse recurso?",
        ["2 dias", "5 dias", "7 dias", "10 dias"], 3, "108", S),
      q("Sabe-se que existem diferentes sistemas eleitorais no Brasil. Qual deles é responsável por eleger os Senadores da República?",
        ["Proporcional", "Misto", "Majoritário", "Distrital"], 2, "96", Y),
      q("Para quem o voto é obrigatório?",
        ["Analfabetos maiores de 18 anos", "Pessoas com mais de 16 e menos de 18 anos", "Pessoas maiores de 70 anos", "Pessoas com mais de 18 e menos de 70 anos"], 3, "", Y)
    ]
  },
  {
    id: "direitos", icone: "🧑‍🤝‍🧑", nome: "Direitos, Cidadania e Nacionalidade",
    desc: "Educação, direitos sociais, comunicação social, brasileiros natos e naturalizados.",
    perguntas: [
      q("Qual o período normal de duração da licença-paternidade, garantida pela Constituição Federal?",
        ["15 dias", "10 dias", "20 dias", "5 dias"], 3, "32", F),
      q("Pela Constituição, em qual etapa da educação básica o aluno deve sair preparado para a leitura, a escrita e o cálculo, e com capacidade de compreender o ambiente natural e social, o sistema político, a tecnologia, as artes e os valores básicos da sociedade e da família?",
        ["Ensino Infantil", "Ensino Superior", "Ensino Médio", "Ensino Fundamental"], 3, "25", F),
      q("Pela Constituição, em qual etapa da educação básica o aluno deve sair com noções básicas de cidadania, preparo para o trabalho, formação ética, autonomia intelectual e pensamento crítico desenvolvidos?",
        ["Ensino Fundamental", "Ensino Técnico", "Ensino Médio", "Ensino Profissionalizante"], 2, "25", Y),
      q("Pela Constituição Federal, a gratuidade dos transportes coletivos urbanos para idosos vale a partir de que idade?",
        ["65 anos", "60 anos", "55 anos", "50 anos"], 0, "22", Y),
      q("Ao tratar da Comunicação Social e da liberdade de informação jornalística, quais propagandas comerciais estão sujeitas a restrições legais?",
        ["Alimentos, bebidas não alcoólicas, veículos e roupas", "Cigarro, bebidas alcoólicas, medicamentos e agrotóxicos", "Produtos eletrônicos, brinquedos e serviços financeiros", "Serviços de saúde, turismo e educação"], 1, "82", Y),
      q("Estrangeiros de países que não falam o nosso idioma podem se naturalizar após quinze anos ininterruptos de residência. Qual o período ininterrupto exigido para os que vêm de países de língua portuguesa?",
        ["10 anos", "5 anos", "2 anos", "1 ano"], 3, "29", Y),
      q("No capítulo sobre nacionalidade, não há distinção entre brasileiros natos e naturalizados, salvo algumas exceções. Qual alternativa apresenta corretamente 3 delas?",
        ["Presidente, Vice-Presidente e Deputado Federal", "Presidente, Senador e Carreira Diplomática", "Presidente, Oficial das Forças Armadas e Presidente do Supremo Tribunal Federal", "Presidente, Vice-Presidente e Ministro de Estado da Defesa"], 3, "", F,
        "Só natos ocupam: Presidente e Vice-Presidente da República, Presidente da Câmara, Presidente do Senado, Ministro do STF, carreira diplomática, oficial das Forças Armadas e Ministro de Estado da Defesa."),
      q("Qual dos seguintes cargos só pode ser ocupado por alguém que seja brasileiro nato?",
        ["Ministro do Supremo Tribunal Federal", "Ministro da Educação", "Governador de Estado", "Prefeito"], 0, "24", Y),
      q("É necessário ser brasileiro nato para ocupar o cargo de:",
        ["Presidente de um partido político", "Ministro de Estado da Defesa", "Ministro da Economia", "Senador"], 1, "29", Y)
    ]
  },
  {
    id: "seguranca", icone: "🛡️", nome: "Segurança Pública e Defesa do Estado",
    desc: "Órgãos de segurança pública e situações excepcionais.",
    perguntas: [
      q("O combate ao tráfico de drogas e ao contrabando são funções de qual órgão da segurança pública?",
        ["Polícia Civil", "Polícia Federal", "Polícia Rodoviária Federal", "Polícia Penal"], 1, "54", Y),
      q("Quando pode ser decretado o Estado de Defesa?",
        ["Quando há uma crise financeira em uma região do país.", "Quando o governo deseja restringir temporariamente direitos civis em todo o território nacional.", "Quando a ordem pública ou a paz social, em locais específicos, estão ameaçadas por grave e iminente instabilidade institucional ou por calamidades naturais de grandes proporções.", "Quando é necessário responder a uma ameaça externa ou ataque estrangeiro."], 2, "", Y)
    ]
  }
];
