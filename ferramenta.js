// ============================================================
// FERRAMENTA: Análise de Tendência Espiritual — Homem
// Mentoria Homem Espiritual · Claudio Alecrim
//
// Eixos:
//   1. Dons de ministério (1 Co 12) — 8 dons, 4 perguntas cada
//   2. Dons motivacionais (Rm 12)   — 7 dons, 4 perguntas cada
//   3. Feridas emocionais           — 5 feridas, 4 perguntas cada (projetivo)
//   4. Saúde espiritual             — constância, obediência, comunhão
//   5. Temperamento (LaHaye)        — 4 tipos, 3 perguntas cada
//
// Devolutiva: visão unificada mentor + mentorado (sem botão de agendamento)
// ============================================================

window.FERRAMENTA_CONFIG = {

  nome:        'Análise de Tendência Espiritual',
  autor:       'Claudio Alecrim',
  titulo:      'Como você foi desenhado por Deus?',
  descricao:   'Uma análise do seu perfil espiritual, emocional e de temperamento. Responda a partir de como você realmente age — não de como gostaria de agir.',
  tituloResultado: 'Perfil espiritual de {nome}',
  formato:     'mentorado',

  // apiKey: 'sk-ant-...',
  // webhookUrl: '/api/ate-homem',

  aviso: `Responda a partir do que <strong>de fato acontece</strong> na sua vida — não do que você acredita que deveria acontecer. Não há resposta certa ou errada. Quanto mais honesto, mais preciso o resultado.`,

  camposExtras: [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      tipo: 'tel',
      placeholder: '(00) 00000-0000'
    },
    {
      id: 'tempo_fe',
      label: 'Há quanto tempo você é cristão?',
      tipo: 'select',
      opcoes: [
        { valor: 'menos_1',  label: 'Menos de 1 ano' },
        { valor: '1_5',      label: '1 a 5 anos' },
        { valor: '5_10',     label: '5 a 10 anos' },
        { valor: 'mais_10',  label: 'Mais de 10 anos' },
        { valor: 'nao_sou',  label: 'Não sou cristão' },
      ]
    }
  ],

  // ── TIPOS DE EIXO (define a escala de interpretação) ──────
  // 'dom'   = alto é positivo (Latente → Dominante)
  // 'saude' = alto é positivo mas com labels de saúde
  // 'prob'  = alto é negativo (Leve → Dominante)
  tiposEixo: {
    don_apostolo: 'dom', don_profeta: 'dom', don_mestre: 'dom', don_milagres: 'dom',
    don_cura: 'dom', don_socorros: 'dom', don_governo: 'dom', don_linguas: 'dom',
    mot_profecia: 'dom', mot_servico: 'dom', mot_ensino: 'dom', mot_exortacao: 'dom',
    mot_contribuicao: 'dom', mot_lideranca: 'dom', mot_misericordia: 'dom',
    saude_esp: 'saude',
  },

  // ── EIXOS ─────────────────────────────────────────────────
  eixos: [
    // Dons de ministério (1Co12)
    { id: 'don_apostolo',  label: 'Apóstolo',    perguntas: ['M_Q1','M_Q2','M_Q3','M_Q4'] },
    { id: 'don_profeta',   label: 'Profeta',      perguntas: ['M_Q5','M_Q6','M_Q7','M_Q8'] },
    { id: 'don_mestre',    label: 'Mestre',       perguntas: ['M_Q9','M_Q10','M_Q11','M_Q12'] },
    { id: 'don_milagres',  label: 'Milagres',     perguntas: ['M_Q13','M_Q14','M_Q15','M_Q16'] },
    { id: 'don_cura',      label: 'Cura',         perguntas: ['M_Q17','M_Q18','M_Q19','M_Q20'] },
    { id: 'don_socorros',  label: 'Socorros',     perguntas: ['M_Q21','M_Q22','M_Q23','M_Q24'] },
    { id: 'don_governo',   label: 'Governos',     perguntas: ['M_Q25','M_Q26','M_Q27','M_Q28'] },
    { id: 'don_linguas',   label: 'Línguas',      perguntas: ['M_Q29','M_Q30','M_Q31','M_Q32'] },
    // Dons motivacionais (Rm12)
    { id: 'mot_profecia',     label: 'Profecia (Rm)',     perguntas: ['R_Q1','R_Q2','R_Q3','R_Q4'] },
    { id: 'mot_servico',      label: 'Serviço',           perguntas: ['R_Q5','R_Q6','R_Q7','R_Q8'] },
    { id: 'mot_ensino',       label: 'Ensino',            perguntas: ['R_Q9','R_Q10','R_Q11','R_Q12'] },
    { id: 'mot_exortacao',    label: 'Exortação',         perguntas: ['R_Q13','R_Q14','R_Q15','R_Q16'] },
    { id: 'mot_contribuicao', label: 'Contribuição',      perguntas: ['R_Q17','R_Q18','R_Q19','R_Q20'] },
    { id: 'mot_lideranca',    label: 'Liderança',         perguntas: ['R_Q21','R_Q22','R_Q23','R_Q24'] },
    { id: 'mot_misericordia', label: 'Misericórdia',      perguntas: ['R_Q25','R_Q26','R_Q27','R_Q28'] },
    // Saúde espiritual
    { id: 'saude_esp',    label: 'Saúde espiritual',  perguntas: ['SE_Q1','SE_Q2','SE_Q3','SE_Q4','SE_Q5','SE_Q6'] },
  ],

  // ── MAPEAMENTO DE FERIDAS ──────────────────────────────────
  mapeamentoFeridas: {
    REJEICAO:   ['F_Q1','F_Q2','F_Q3','F_Q4'],
    ABANDONO:   ['F_Q5','F_Q6','F_Q7','F_Q8'],
    HUMILHACAO: ['F_Q9','F_Q10','F_Q11','F_Q12'],
    TRAICAO:    ['F_Q13','F_Q14','F_Q15','F_Q16'],
    INJUSTICA:  ['F_Q17','F_Q18','F_Q19','F_Q20'],
  },

  // ── MAPEAMENTO DE TEMPERAMENTO ─────────────────────────────
  mapeamentoTemperamento: {
    COLERICO:    ['T_Q1','T_Q2','T_Q3'],
    MELANCOLICO: ['T_Q4','T_Q5','T_Q6'],
    SANGUINEO:   ['T_Q7','T_Q8','T_Q9'],
    FLEUMATICO:  ['T_Q10','T_Q11','T_Q12'],
  },

  // ── TEXTOS BASE DOS DONS (injetados no prompt da IA) ───────
  // Ficam aqui para não poluir o prompt.js que é genérico
  donsMinisterio: {
    don_apostolo:  { nome: 'Apóstolo',  descricao: 'Capacidade de fundar, expandir e estruturar o reino em novos territórios. Visão ampla, tolerância alta a adversidade, facilidade de operar em terreno desconhecido.', sombra: 'Tendência a atropelar estruturas existentes. Dificuldade de se submeter a autoridades que não compartilham a visão.' },
    don_profeta:   { nome: 'Profeta',   descricao: 'Percepção aguçada de alinhamento ou desalinhamento espiritual. Discernimento de ambientes, intenções e momentos. Zelo por verdade e obediência.', sombra: 'Julgamento prematuro. Dificuldade de tolerar processos lentos. Pode ferir sem intenção com a força da percepção.' },
    don_mestre:    { nome: 'Mestre',    descricao: 'Prazer profundo em estudar, organizar e transmitir verdade. Clareza para explicar o complexo de forma acessível. Percebe inconsistências teológicas com facilidade.', sombra: 'Intelectualismo que não desce para a prática. Pode ensinar muito e transformar pouco.' },
    don_milagres:  { nome: 'Milagres',  descricao: 'Fé ativa diante do impossível. Ousadia para orar e agir onde outros recuam. Expectativa natural por intervenção sobrenatural.', sombra: 'Dificuldade de aceitar o "não" de Deus. Pode criar expectativas irrealistas nas pessoas ao redor.' },
    don_cura:      { nome: 'Cura',      descricao: 'Compaixão profunda por pessoas feridas. Inclinação para interceder por restauração física, emocional e espiritual. Presença que acolhe e cria segurança.', sombra: 'Absorção da dor alheia. Dificuldade de estabelecer limites saudáveis no cuidado.' },
    don_socorros:  { nome: 'Socorros',  descricao: 'Capacidade de apoiar, organizar e sustentar para que tudo funcione. Alegria em servir nos bastidores. Confiabilidade em momentos de necessidade.', sombra: 'Invisibilidade que vira ressentimento quando o serviço não é reconhecido.' },
    don_governo:   { nome: 'Governos',  descricao: 'Capacidade de organizar pessoas, funções e processos com clareza. Transforma desordem em estrutura. Liderança prática e responsável.', sombra: 'Controle excessivo. Dificuldade de dar espaço para o processo das pessoas.' },
    don_linguas:   { nome: 'Línguas',   descricao: 'Vida de oração intensa e profunda. Comunhão com Deus que ultrapassa o racional. Sensibilidade espiritual na presença de Deus.', sombra: 'Dificuldade de traduzir a experiência espiritual em linguagem prática para outros.' },
  },

  donsMotivacionais: {
    mot_profecia:     { nome: 'Profecia',     descricao: 'Motivado por revelar verdade e confrontar o que está errado. Age com urgência quando percebe desvio.', sombra: 'Rigidez. Dificuldade de ser misericordioso com o processo das pessoas.' },
    mot_servico:      { nome: 'Serviço',      descricao: 'Motivado por atender necessidades práticas. Percebe o que precisa ser feito antes que alguém peça.', sombra: 'Dificuldade de dizer não. Pode ser explorado por quem não tem escrúpulos.' },
    mot_ensino:       { nome: 'Ensino',       descricao: 'Motivado por pesquisar, verificar e transmitir com precisão. Alta resistência a informação superficial.', sombra: 'Lentidão na aplicação. Pesquisa mais do que age.' },
    mot_exortacao:    { nome: 'Exortação',    descricao: 'Motivado por encorajar, aconselhar e conduzir pessoas ao crescimento. Facilidade para ver o potencial antes que o outro veja.', sombra: 'Pode ser percebido como superficial se não tiver profundidade nos fundamentos.' },
    mot_contribuicao: { nome: 'Contribuição', descricao: 'Motivado por investir recursos — dinheiro, tempo, habilidades — de forma estratégica no reino. Alta discernimento sobre onde e quando contribuir.', sombra: 'Pode usar a contribuição como forma de controle ou distanciamento emocional.' },
    mot_lideranca:    { nome: 'Liderança',    descricao: 'Motivado por visão de longo prazo. Capacidade de motivar e organizar pessoas em direção a um objetivo claro.', sombra: 'Impaciência com quem não acompanha o ritmo. Pode sacrificar pessoas pelo resultado.' },
    mot_misericordia: { nome: 'Misericórdia', descricao: 'Motivado por sentir e aliviar a dor alheia. Alta empatia. Percebe o estado emocional das pessoas sem que digam.', sombra: 'Dificuldade de confrontar. Evita verdades que machucam mesmo quando necessárias.' },
  },

  // ── BLOCOS DE PERGUNTAS ────────────────────────────────────
  blocos: [

    // ── BLOCO 1: DONS DE MINISTÉRIO 1Co12 (A–D) ───────────────
    {
      id: 'ministerio_ab',
      nome: 'Como você opera — parte 1',
      categoria: 'Perfil espiritual',
      descricao: 'Situações do dia a dia. Responda pelo que de fato acontece, não pelo que você acha que deveria acontecer.',
      perguntas: [
        // APÓSTOLO (M_Q1–4)
        {
          id: 'M_Q1',
          texto: 'Quando você entra em um ambiente novo — uma comunidade, um projeto, um grupo — o que mais acontece naturalmente?',
          opcoes: [
            'Observo e me adapto ao que já existe.',
            'Identifico lacunas e penso em como fortalecer o que está aqui.',
            'Começo a ver o que poderia ser construído ou expandido a partir desse lugar.',
            'Sinto um impulso claro de fundar ou estruturar algo novo, mesmo que isso não exista ainda.'
          ]
        },
        {
          id: 'M_Q2',
          texto: 'Diante de resistência ou adversidade em algo que você acredita, qual é sua tendência?',
          opcoes: [
            'Recuo e reavejo se vale continuar.',
            'Persisto, mas com desgaste.',
            'A resistência me incomoda mas não me detém — sigo.',
            'A resistência me confirma que estou no caminho certo — avança com mais convicção.'
          ]
        },
        {
          id: 'M_Q3',
          texto: 'Você se sente mais vivo em terreno conhecido ou em territórios que ainda precisam ser desbravados?',
          opcoes: [
            'Em terreno conhecido — segurança me libera para produzir.',
            'Prefiro o conhecido, mas me aventuro quando necessário.',
            'Terrenos novos me atraem — gosto de pioneirismo.',
            'Terreno novo é onde funciono melhor — o desconhecido me energiza.'
          ]
        },
        {
          id: 'M_Q4',
          texto: 'Quando pensa em impacto, o que mais move você?',
          opcoes: [
            'Aprofundar o que já está construído.',
            'Fortalecer a comunidade que já existe ao meu redor.',
            'Expandir o alcance além do meu círculo atual.',
            'Abrir novos territórios onde o evangelho ainda não chegou.'
          ]
        },
        // PROFETA (M_Q5–8)
        {
          id: 'M_Q5',
          texto: 'Quando algo está errado em um ambiente — mesmo que ninguém esteja falando — o que acontece com você?',
          opcoes: [
            'Percebo vagamente, mas deixo pra lá se não é comigo.',
            'Percebo e fico desconfortável, mas raramente falo.',
            'Percebo com clareza e sinto peso para falar quando o momento é certo.',
            'Percebo imediatamente e sinto urgência de nomear o que está errado.'
          ]
        },
        {
          id: 'M_Q6',
          texto: 'Quando alguém próximo está tomando uma decisão que você percebe como errada, o que você faz?',
          opcoes: [
            'Respeito a decisão dele e não interfiro.',
            'Menciono uma vez e deixo ele decidir.',
            'Sinto peso para falar com clareza, mesmo que isso gere tensão.',
            'Falo diretamente e com convicção — silenciar quando vejo algo errado é difícil para mim.'
          ]
        },
        {
          id: 'M_Q7',
          texto: 'Com que frequência você tem impressões, percepções ou direções que depois se confirmam como certas?',
          opcoes: [
            'Raramente — não costumo ter esse tipo de percepção.',
            'Às vezes — acontece, mas não é consistente.',
            'Com frequência — e aprendi a levar a sério.',
            'Constantemente — é uma das formas mais frequentes de como Deus fala comigo.'
          ]
        },
        {
          id: 'M_Q8',
          texto: 'Como você reage quando percebe que alguém está sendo desonesto ou manipulador — mesmo que sutilmente?',
          opcoes: [
            'Demoro para perceber — não sou muito sensível a isso.',
            'Percebo eventualmente, mas duvido da minha leitura.',
            'Percebo com relativa rapidez e fico em guarda.',
            'Percebo quase imediatamente — intenções e motivações são difíceis de esconder de mim.'
          ]
        },
        // MESTRE (M_Q9–12)
        {
          id: 'M_Q9',
          texto: 'Quando você se depara com um tema que não domina, qual é sua tendência?',
          opcoes: [
            'Pego o essencial e sigo — prefiro aprender fazendo.',
            'Leio o suficiente para me sentir seguro.',
            'Pesquiso com cuidado antes de opinar ou agir.',
            'Mergulho fundo — preciso entender de verdade antes de avançar.'
          ]
        },
        {
          id: 'M_Q10',
          texto: 'Quando você explica algo que domina para alguém que não entende, o que mais acontece?',
          opcoes: [
            'Explico o básico e sigo — não tenho muita paciência para o processo.',
            'Explico de forma razoável, mas não é algo que me energiza.',
            'Gosto de explicar bem — me satisfaz quando a pessoa entende.',
            'Sinto prazer genuíno em quebrar o complexo até que faça sentido para qualquer pessoa.'
          ]
        },
        {
          id: 'M_Q11',
          texto: 'Quando alguém ensina algo de forma superficial ou com erros, o que acontece em você?',
          opcoes: [
            'Aceito sem problema — prefiro não confrontar.',
            'Percebo, mas deixo passar na maioria das vezes.',
            'Fico incomodado internamente e às vezes corrijo.',
            'Tenho dificuldade de deixar passar — imprecisão e superficialidade me perturbam.'
          ]
        },
        {
          id: 'M_Q12',
          texto: 'Como você se relaciona com estudo sistemático da Palavra?',
          opcoes: [
            'É uma disciplina que pratico, mas não naturalmente.',
            'Gosto quando tenho tempo e disposição.',
            'É uma das formas que mais me nutre espiritualmente.',
            'É onde me sinto mais vivo — estudo profundo é o coração da minha vida espiritual.'
          ]
        },
      ]
    },

    // ── BLOCO 2: DONS DE MINISTÉRIO 1Co12 (C–D) ───────────────
    {
      id: 'ministerio_cd',
      nome: 'Como você opera — parte 2',
      categoria: 'Perfil espiritual',
      descricao: 'Continue respondendo a partir do que realmente acontece.',
      perguntas: [
        // MILAGRES (M_Q13–16)
        {
          id: 'M_Q13',
          texto: 'Quando a situação é humanamente impossível, o que acontece com a sua fé?',
          opcoes: [
            'Tende a diminuir — o impossível me intimida.',
            'Fica estável, mas não necessariamente expectante.',
            'Se levanta — o impossível desperta algo em mim.',
            'Se fortalece com clareza — é onde minha fé opera melhor.'
          ]
        },
        {
          id: 'M_Q14',
          texto: 'Quando você ora por alguém em necessidade — física, emocional ou espiritual — com qual postura você chega?',
          opcoes: [
            'Com humildade, mas sem muita expectativa de resultado imediato.',
            'Com fé, mas sem grande ousadia.',
            'Com expectativa real de que algo pode acontecer.',
            'Com ousadia e convicção — oro crendo que Deus vai agir.'
          ]
        },
        {
          id: 'M_Q15',
          texto: 'Você já viveu situações em que algo incomum aconteceu após oração ou posicionamento de fé?',
          opcoes: [
            'Não me recordo de nada assim.',
            'Talvez, mas não tenho certeza se foi coincidência.',
            'Sim, algumas vezes — e esses momentos me marcaram.',
            'Sim, com frequência — faz parte da minha trajetória de fé.'
          ]
        },
        {
          id: 'M_Q16',
          texto: 'Como você lida com a ideia de pedir algo grande a Deus?',
          opcoes: [
            'Com cautela — prefiro não criar expectativas.',
            'Peço, mas com muita moderação.',
            'Peço com fé, mesmo que às vezes com hesitação.',
            'Peço com ousadia — Deus não se impressiona com pedidos pequenos.'
          ]
        },
        // CURA (M_Q17–20)
        {
          id: 'M_Q17',
          texto: 'Quando você está perto de alguém que está sofrendo — de qualquer forma — o que acontece em você?',
          opcoes: [
            'Percebo, mas mantenho distância emocional.',
            'Sinto empatia, mas não necessariamente um impulso de agir.',
            'Sinto compaixão real e impulso de acolher.',
            'A dor da pessoa me toca profundamente e quase não consigo ignorar.'
          ]
        },
        {
          id: 'M_Q18',
          texto: 'Como você reage quando alguém compartilha algo doloroso com você?',
          opcoes: [
            'Ouço e ofereço soluções práticas — prefiro resolver.',
            'Ouço com atenção, mas não sei sempre o que fazer com o que sinto.',
            'Ouço com cuidado e naturalmente crio espaço para a pessoa se expressar.',
            'Pessoas em dor costumam encontrar em mim um lugar seguro — isso acontece com frequência.'
          ]
        },
        {
          id: 'M_Q19',
          texto: 'Você tem inclinação para interceder — orar especificamente pela restauração e cura de outras pessoas?',
          opcoes: [
            'Raramente — não é meu perfil natural de oração.',
            'Às vezes, quando me pedem.',
            'Com frequência — a intercessão faz parte da minha vida de oração.',
            'É um dos pilares da minha oração — carrego pessoas e situações com constância.'
          ]
        },
        {
          id: 'M_Q20',
          texto: 'Como você se sente ministrar cuidado, apoio ou oração sobre alguém que está ferido?',
          opcoes: [
            'Desconfortável — não sei bem como agir nessas situações.',
            'Faço quando necessário, mas não é algo natural.',
            'Sinto paz — consigo estar presente sem me perder.',
            'Sinto que estou no meu elemento — é onde opero com mais naturalidade.'
          ]
        },
        // SOCORROS (M_Q21–24)
        {
          id: 'M_Q21',
          texto: 'Quando um evento ou projeto está sendo organizado, qual é o seu instinto natural?',
          opcoes: [
            'Participar como convidado — não gosto de responsabilidade logística.',
            'Ajudo quando solicitado, mas não me ofereço espontaneamente.',
            'Identifico o que precisa ser feito e me coloco à disposição.',
            'Naturalmente assumo funções de suporte antes mesmo de ser pedido.'
          ]
        },
        {
          id: 'M_Q22',
          texto: 'Você tem facilidade para trabalhar nos bastidores — sem visibilidade ou reconhecimento — por longos períodos?',
          opcoes: [
            'Não — preciso de reconhecimento para manter a motivação.',
            'Funciono por um tempo, mas o reconhecimento importa.',
            'Consigo, mas eventualmente a invisibilidade pesa.',
            'Sim — servir nos bastidores é onde me sinto mais útil e em paz.'
          ]
        },
        {
          id: 'M_Q23',
          texto: 'Quando há uma necessidade prática — alguém precisando de ajuda, algo que precisa ser resolvido — como você reage?',
          opcoes: [
            'Espero que alguém com mais disposição cuide disso.',
            'Ajudo quando diretamente solicitado.',
            'Percebo e frequentemente me ofereço antes de ser pedido.',
            'Percebo antes dos outros e já começo a agir — é quase automático.'
          ]
        },
        {
          id: 'M_Q24',
          texto: 'As pessoas ao seu redor costumam recorrer a você em momentos de necessidade ou pressão?',
          opcoes: [
            'Raramente — não sou o tipo que as pessoas buscam para suporte.',
            'Às vezes, em situações específicas.',
            'Com alguma frequência — sou considerado confiável.',
            'Com muita frequência — sou a referência de confiabilidade no meu círculo.'
          ]
        },
        // GOVERNOS (M_Q25–28)
        {
          id: 'M_Q25',
          texto: 'Quando um grupo está sem direção clara ou em desordem, o que acontece com você?',
          opcoes: [
            'Aguardo que alguém tome a frente.',
            'Fico desconfortável, mas prefiro não assumir.',
            'Naturalmente começo a organizar — mesmo sem ser pedido.',
            'Assumo a coordenação com clareza — desordem me ativa.'
          ]
        },
        {
          id: 'M_Q26',
          texto: 'Você tem facilidade para pensar em sistemas, processos e estruturas — para transformar ideias em algo que funcione na prática?',
          opcoes: [
            'Não — prefiro execução a estruturação.',
            'Faço quando necessário, mas não é meu ponto forte.',
            'Sim — tenho facilidade de traduzir visão em estrutura.',
            'Sim, com clareza — ver sistemas e como organizá-los é natural para mim.'
          ]
        },
        {
          id: 'M_Q27',
          texto: 'Como você se sente conduzindo ambientes com responsabilidade — reuniões, grupos, processos?',
          opcoes: [
            'Desconfortável — prefiro ser liderado a liderar.',
            'Funciono, mas prefiro não ser o responsável.',
            'Bem — liderança responsável faz sentido para mim.',
            'Satisfeito — é onde me sinto útil e alinhado.'
          ]
        },
        {
          id: 'M_Q28',
          texto: 'Quando você assume responsabilidade por algo, como é sua tendência de execução?',
          opcoes: [
            'Faço o que for pedido, sem muito além disso.',
            'Faço bem, mas dentro do escopo definido.',
            'Naturalmente expando o escopo — vejo o que mais pode ser feito.',
            'Estruturo, delego, monitoro e garanto resultado — não descansa enquanto não funciona.'
          ]
        },
        // LÍNGUAS (M_Q29–32)
        {
          id: 'M_Q29',
          texto: 'Como você descreveria sua vida de oração hoje?',
          opcoes: [
            'Esporádica — não tenho constância.',
            'Regular, mas mais por disciplina do que por desejo.',
            'Consistente — é um pilar real da minha vida.',
            'Intensa e profunda — é onde me sinto mais vivo espiritualmente.'
          ]
        },
        {
          id: 'M_Q30',
          texto: 'Em momentos de adoração e oração, o que você costuma experimentar?',
          opcoes: [
            'Pouca movimentação interna — é mais uma prática do que uma experiência.',
            'Algo às vezes, mas não com frequência ou intensidade.',
            'Com frequência percebo movimentação espiritual real.',
            'Forte e consistente — minha comunhão com Deus vai muito além do racional.'
          ]
        },
        {
          id: 'M_Q31',
          texto: 'Como é a sua sensibilidade espiritual na presença de Deus — em culto, em oração, em silêncio?',
          opcoes: [
            'Baixa — não tenho muito o que descrever.',
            'Existe, mas não é frequente ou intensa.',
            'Alta — percebo a presença de Deus de forma clara.',
            'Muito alta — é uma das marcas mais consistentes da minha vida espiritual.'
          ]
        },
        {
          id: 'M_Q32',
          texto: 'Sua comunhão com Deus é mais racional/estruturada ou mais intuitiva/experiencial?',
          opcoes: [
            'Totalmente racional — oração é mais reflexão do que experiência.',
            'Predominantemente racional, com momentos experienciais.',
            'Equilibrado — há profundidade nos dois.',
            'Predominantemente experiencial — minha fé opera muito no território além da razão.'
          ]
        },
      ]
    },

    // ── BLOCO 3: DONS MOTIVACIONAIS Rm12 ──────────────────────
    {
      id: 'motivacionais',
      nome: 'O que te move por dentro',
      categoria: 'Dons motivacionais',
      descricao: 'Situações concretas que revelam o que te mobiliza naturalmente — sem esforço, sem precisar se convencer.',
      perguntas: [
        // PROFECIA Rm (R_Q1–4)
        {
          id: 'R_Q1',
          texto: 'Quando você percebe algo errado em uma situação — comportamento, decisão, direção — o que te move?',
          opcoes: [
            'Prefiro não me envolver — não é meu papel julgar.',
            'Menciono quando perguntado.',
            'Sinto peso para nomear o que está errado, com cuidado.',
            'Sinto urgência de falar — o silêncio diante do errado é difícil para mim.'
          ]
        },
        {
          id: 'R_Q2',
          texto: 'Como você reage quando alguém usa a Bíblia de forma imprecisa ou fora de contexto?',
          opcoes: [
            'Não percebo com facilidade.',
            'Percebo, mas deixo passar.',
            'Fico incomodado e eventualmente corrijo.',
            'Tenho dificuldade de não corrigir — precisão na Palavra é inegociável para mim.'
          ]
        },
        {
          id: 'R_Q3',
          texto: 'Você tem tendência a ver preto no branco — as coisas são certas ou erradas, sem muita área cinza?',
          opcoes: [
            'Não — tenho facilidade de ver nuances.',
            'Às vezes — depende do assunto.',
            'Com frequência — clareza moral é importante para mim.',
            'Sim — a zona cinza me incomoda. Prefiro definições claras.'
          ]
        },
        {
          id: 'R_Q4',
          texto: 'Como você lida com arrependimento e acerto de contas — na sua vida e na dos outros?',
          opcoes: [
            'Com suavidade — prefiro não confrontar.',
            'Com equilíbrio — confronto quando necessário.',
            'Com clareza — acredito que nomear o pecado é parte do cuidado.',
            'Com urgência — o acerto com Deus não pode esperar e eu sinto isso com intensidade.'
          ]
        },
        // SERVIÇO (R_Q5–8)
        {
          id: 'R_Q5',
          texto: 'Você percebe necessidades práticas ao seu redor antes que alguém as verbalize?',
          opcoes: [
            'Raramente — não tenho esse radar.',
            'Às vezes — quando estou atento.',
            'Com frequência — vejo o que precisa ser feito.',
            'Quase sempre — é automático. Vejo antes dos outros e já começo a agir.'
          ]
        },
        {
          id: 'R_Q6',
          texto: 'Quando você ajuda alguém com uma tarefa prática — e isso funciona — o que você sente?',
          opcoes: [
            'Satisfação por ter cumprido o que foi pedido.',
            'Alegria de ter sido útil.',
            'Uma satisfação profunda — servir bem me realiza.',
            'É onde me sinto mais eu mesmo — serviço prático é minha expressão de amor mais natural.'
          ]
        },
        {
          id: 'R_Q7',
          texto: 'Como você reage quando há coisas práticas inacabadas ou mal feitas ao seu redor?',
          opcoes: [
            'Não me incomoda muito — há coisas mais importantes.',
            'Percebo, mas não me movo necessariamente.',
            'Me incomoda — e frequentemente termino ou corrijo.',
            'Tenho dificuldade de ignorar — coisa inacabada me ativa.'
          ]
        },
        {
          id: 'R_Q8',
          texto: 'Você considera cuidar de detalhes práticos uma forma de amar e honrar as pessoas?',
          opcoes: [
            'Não vejo dessa forma — amor se expressa de outras maneiras.',
            'Às vezes — em certas situações faz sentido.',
            'Sim — cuidar do prático é uma forma clara de cuidado.',
            'Totalmente — para mim, amor se demonstra em ação prática mais do que em palavras.'
          ]
        },
        // ENSINO (R_Q9–12)
        {
          id: 'R_Q9',
          texto: 'Quando você vai ensinar ou explicar algo, como você se prepara?',
          opcoes: [
            'Improviso na maioria das vezes.',
            'Preparo o suficiente para não me perder.',
            'Pesquiso com cuidado e estruturo bem.',
            'Mergulho fundo — preciso dominar antes de transmitir.'
          ]
        },
        {
          id: 'R_Q10',
          texto: 'O que mais te incomoda em um ensino ou pregação?',
          opcoes: [
            'Quando é entediante ou sem energia.',
            'Quando não tem aplicação prática.',
            'Quando é impreciso ou fora de contexto.',
            'Quando é superficial — falta profundidade e fundamento.'
          ]
        },
        {
          id: 'R_Q11',
          texto: 'Você tem tendência a verificar informações antes de aceitá-las — mesmo vindo de fontes confiáveis?',
          opcoes: [
            'Raramente — confio nas fontes que escolho.',
            'Às vezes — quando o assunto é importante.',
            'Com frequência — gosto de checar.',
            'Sempre — não aceito informação de segunda mão sem verificar.'
          ]
        },
        {
          id: 'R_Q12',
          texto: 'Quando você ensina e alguém entende algo que estava confuso, o que acontece em você?',
          opcoes: [
            'Satisfação normal — cumpri o objetivo.',
            'Alegria — gosto de ver as pessoas entendendo.',
            'Satisfação profunda — ver alguém captar a verdade é significativo.',
            'É um dos momentos de maior realização que conheço.'
          ]
        },
        // EXORTAÇÃO (R_Q13–16)
        {
          id: 'R_Q13',
          texto: 'Quando alguém está desanimado ou paralisado, qual é o seu instinto?',
          opcoes: [
            'Dar espaço — não gosto de me intrometer.',
            'Ouvir e validar o que a pessoa sente.',
            'Ouvir e naturalmente começar a apontar caminhos.',
            'Quase não consigo ficar quieto — sinto urgência de encorajar e mostrar a saída.'
          ]
        },
        {
          id: 'R_Q14',
          texto: 'Você tem facilidade para ver o potencial das pessoas antes que elas mesmas vejam?',
          opcoes: [
            'Raramente — não tenho esse olhar aguçado.',
            'Às vezes — em pessoas que conheço bem.',
            'Com frequência — percebo o que as pessoas carregam.',
            'Consistentemente — é quase automático. Vejo o que a pessoa pode se tornar.'
          ]
        },
        {
          id: 'R_Q15',
          texto: 'Como você se sente acompanhando alguém ao longo de um processo de crescimento?',
          opcoes: [
            'É desgastante — prefiro interações pontuais.',
            'Faço quando necessário.',
            'Tenho prazer nisso — o processo me interessa tanto quanto o resultado.',
            'É um dos maiores privilégios que conheço — acompanhar alguém crescendo me realiza profundamente.'
          ]
        },
        {
          id: 'R_Q16',
          texto: 'Quando você dá conselho, qual é seu estilo natural?',
          opcoes: [
            'Teórico — aponto princípios e deixo a pessoa resolver.',
            'Equilibrado — princípio e aplicação.',
            'Prático — prefiro passos concretos.',
            'Personalizado — intuitivamente adapto o que falo para onde a pessoa está.'
          ]
        },
        // CONTRIBUIÇÃO (R_Q17–20)
        {
          id: 'R_Q17',
          texto: 'Quando você decide dar — dinheiro, tempo, recursos — o que orienta sua decisão?',
          opcoes: [
            'Obrigação — dou porque devo dar.',
            'Emoção — dou quando me toca.',
            'Oportunidade — dou quando vejo necessidade clara.',
            'Estratégia — avalio impacto e direciono onde vai gerar mais fruto.'
          ]
        },
        {
          id: 'R_Q18',
          texto: 'Você tem discernimento apurado sobre quando e onde investir seus recursos?',
          opcoes: [
            'Não — não me considero estratégico nisso.',
            'Às vezes — tenho alguns critérios.',
            'Com frequência — penso antes de comprometer recursos.',
            'Sim — tenho critérios claros e raramente me arrependo das escolhas que faço.'
          ]
        },
        {
          id: 'R_Q19',
          texto: 'Quando você contribui para algo, qual é a sua postura em relação ao reconhecimento?',
          opcoes: [
            'Gosto de ser reconhecido — é motivador.',
            'Reconhecimento é agradável, mas não essencial.',
            'Prefiro contribuir em silêncio na maioria das vezes.',
            'Reconhecimento me desconforta — prefiro que minha contribuição fale por si.'
          ]
        },
        {
          id: 'R_Q20',
          texto: 'Você sente satisfação em ver algo crescer por causa de um investimento seu — mesmo que ninguém saiba que foi você?',
          opcoes: [
            'Pouca — preciso de algum retorno visível.',
            'Alguma — mas o reconhecimento ainda importa.',
            'Bastante — o fruto já é suficiente.',
            'Total — o fruto invisível é tão satisfatório quanto o visível.'
          ]
        },
        // LIDERANÇA (R_Q21–24)
        {
          id: 'R_Q21',
          texto: 'Você pensa naturalmente no longo prazo — em onde as coisas precisam chegar daqui a anos?',
          opcoes: [
            'Raramente — vivo muito no presente.',
            'Às vezes — quando o assunto exige.',
            'Com frequência — a visão de longo prazo está sempre presente.',
            'Constantemente — é difícil não pensar onde isso vai chegar em anos.'
          ]
        },
        {
          id: 'R_Q22',
          texto: 'Você tem facilidade para mobilizar pessoas em direção a um objetivo?',
          opcoes: [
            'Não — não me sinto confortável nesse papel.',
            'Em grupos pequenos e conhecidos.',
            'Sim — consigo engajar pessoas com clareza.',
            'Sim, com naturalidade — mobilizar pessoas para uma visão é algo que faço bem.'
          ]
        },
        {
          id: 'R_Q23',
          texto: 'Como você reage quando uma equipe está perdendo o foco ou o ritmo?',
          opcoes: [
            'Espero que o líder corrija.',
            'Menciono o problema, mas deixo para quem lidera resolver.',
            'Naturalmente faço movimentos para reorientar.',
            'Sinto responsabilidade de agir — não consigo assistir a deriva sem fazer algo.'
          ]
        },
        {
          id: 'R_Q24',
          texto: 'Quando você lidera, qual é sua postura em relação às pessoas que não acompanham o ritmo?',
          opcoes: [
            'Compreensão total — cada um tem seu tempo.',
            'Paciência com o processo, mas com alguma tensão.',
            'Encorajo e empurro, mas sem deixar o objetivo escorregar.',
            'Impaciência real — a velocidade do grupo me frustra quando fica muito abaixo do necessário.'
          ]
        },
        // MISERICÓRDIA (R_Q25–28)
        {
          id: 'R_Q25',
          texto: 'Você tem facilidade para sentir o que o outro está sentindo — mesmo sem ele falar?',
          opcoes: [
            'Raramente — não tenho muito esse radar emocional.',
            'Às vezes — em pessoas próximas.',
            'Com frequência — percebo estados emocionais com relativa clareza.',
            'Quase sempre — sinto o que está acontecendo emocionalmente antes de ouvir.'
          ]
        },
        {
          id: 'R_Q26',
          texto: 'Como você reage diante de alguém que sofre — mesmo que o sofrimento seja resultado de uma escolha ruim?',
          opcoes: [
            'Com objetividade — aponto a causa e o que precisa mudar.',
            'Com equilíbrio — acolho e ainda assim aponto a responsabilidade.',
            'Com compaixão — o sofrimento me toca mais do que o erro.',
            'Predominantemente com compaixão — confrontar alguém que sofre é muito difícil para mim.'
          ]
        },
        {
          id: 'R_Q27',
          texto: 'Você tem tendência a absorver o estado emocional das pessoas ao seu redor?',
          opcoes: [
            'Não — mantenho boa separação emocional.',
            'Às vezes — com pessoas próximas.',
            'Com frequência — ambientes e pessoas me afetam.',
            'Constantemente — é um dos meus maiores desafios: não absorver o que está ao redor.'
          ]
        },
        {
          id: 'R_Q28',
          texto: 'Você tem dificuldade de confrontar alguém que está sofrendo — mesmo sabendo que a confrontação é necessária?',
          opcoes: [
            'Não — consigo confrontar sem que o sofrimento me paralise.',
            'Às vezes — o sofrimento pesa, mas consigo.',
            'Com frequência — fica difícil confrontar quando a pessoa está em dor.',
            'Quase sempre — é muito raro conseguir confrontar alguém que está sofrendo.'
          ]
        },
      ]
    },

    // ── BLOCO 4: FERIDAS (projetivo) ───────────────────────────
    {
      id: 'feridas',
      nome: 'Padrões internos',
      categoria: 'Saúde emocional',
      descricao: 'Situações do cotidiano. Responda pelo primeiro impulso — sem pensar muito.',
      perguntas: [
        // REJEIÇÃO
        { id: 'F_Q1',  texto: 'Quando você está em um grupo e sua opinião não é considerada, o que acontece?', opcoes: ['Percebo mas não levo para o lado pessoal.','Fico um pouco incomodado mas passo.','Fico quieto e me pergunto se fiz algo errado.','Me recolho e decido falar menos da próxima vez.'] },
        { id: 'F_Q2',  texto: 'Antes de se expor em algo novo — uma ideia, um projeto, uma conversa difícil — o que mais acontece?', opcoes: ['Avalio e avanço sem peso sobre como serei recebido.','Penso bastante mas acabo me expondo.','Preciso de um empurrão — a insegurança de como vou ser recebido me paralisa.','Frequentemente desisto antes de tentar.'] },
        { id: 'F_Q3',  texto: 'Quando algo que você fez não teve o retorno esperado, como isso te afeta?', opcoes: ['Percebo mas não muda minha percepção de mim mesmo.','Fico pensativo por um tempo.','Questiono se o que fiz tinha valor.','Começo a me diminuir internamente com facilidade.'] },
        { id: 'F_Q4',  texto: 'Em relação a ocupar espaço — liderar, se posicionar, ser visto — como você se sente?', opcoes: ['Natural — não tenho dificuldade.','Faço quando preciso, mas não é sempre confortável.','Prefiro que outros tomem a frente.','Ativamente evito estar no centro.'] },
        // ABANDONO
        { id: 'F_Q5',  texto: 'Quando alguém importante fica mais distante por um tempo, o que acontece?', opcoes: ['Percebo mas não catastrofico.','Fico um pouco mais atento mas passo bem.','Fico inseguro e me pergunto se fiz algo errado.','A ansiedade é forte — preciso entender o que aconteceu.'] },
        { id: 'F_Q6',  texto: 'Quando você precisa ficar um tempo sozinho, como se sente?', opcoes: ['Bem — aproveito para recarregar.','Funciono, mas prefiro companhia.','Me sinto inquieto — o silêncio pesa.','Evito ficar sozinho — há um desconforto real.'] },
        { id: 'F_Q7',  texto: 'Quanto peso coloca na aprovação de pessoas próximas antes de tomar uma decisão importante?', opcoes: ['Ouço mas decido a partir das minhas convicções.','Considero bastante — a opinião de quem importa pesa.','Preciso que concordem para me sentir seguro.','Tenho dificuldade de agir sem a aprovação de quem importa.'] },
        { id: 'F_Q8',  texto: 'Como lida com a possibilidade de ser deixado — em um projeto, relacionamento ou comunidade?', opcoes: ['Uma possibilidade real que aceito sem peso.','Pesa mas não me paralisa.','Tenho medo real e às vezes ajo para evitar.','É um dos meus maiores medos e orienta muitas escolhas.'] },
        // HUMILHAÇÃO
        { id: 'F_Q9',  texto: 'Quando você precisa pedir ajuda, como é isso?', opcoes: ['Natural — peço quando preciso.','Um pouco desconfortável mas faço.','Evito sempre que possível.','Muito difícil — pedir parece fraqueza.'] },
        { id: 'F_Q10', texto: 'Quando alguém faz algo por você sem você pedir, como se sente?', opcoes: ['Grato — recebo bem.','Grato mas um pouco desconfortável.','Desconfortável — sinto que estou devendo.','Constrangido — prefiro que não façam isso.'] },
        { id: 'F_Q11', texto: 'Quando você erra na frente de outros, qual é sua reação interna?', opcoes: ['Reconheço, corrijo e sigo.','Fico constrangido por um tempo mas passo.','Me cobro muito mais do que a situação mereceria.','É devastador — o erro vira evidência de que não sou suficiente.'] },
        { id: 'F_Q12', texto: 'Como se posiciona em relação às suas próprias necessidades?', opcoes: ['Cuido de mim — sei que meu bem-estar importa.','Às vezes me descuido.','Tenho dificuldade de priorizar sem culpa.','Coloco todos à minha frente como regra.'] },
        // TRAIÇÃO
        { id: 'F_Q13', texto: 'Quando delega algo importante para alguém, o que acontece internamente?', opcoes: ['Confio e deixo.','Delego mas acompanho mais do que deveria.','Tenho dificuldade real de soltar.','Prefiro fazer sozinho — é mais seguro.'] },
        { id: 'F_Q14', texto: 'Como lida com situações fora do seu controle?', opcoes: ['Aceito o que não posso mudar e foco no que depende de mim.','Pesa mas consigo funcionar.','Me angustia — preciso sentir que tenho algum controle.','Me paralisa ou irrita muito.'] },
        { id: 'F_Q15', texto: 'Quando alguém age diferente do esperado — sem má intenção — como interpreta?', opcoes: ['Busco entender antes de concluir.','Fico um pouco desconfiante mas busco checar.','Interpreto como descaso.','Interpreto como evidência de que não posso confiar.'] },
        { id: 'F_Q16', texto: 'Como se relaciona com depender de alguém para algo importante?', opcoes: ['Tranquilo — aceito que preciso das pessoas.','Um pouco desconfortável mas funciono.','Evito ao máximo — dependência me deixa vulnerável.','Não dependo de ninguém se puder evitar.'] },
        // INJUSTIÇA
        { id: 'F_Q17', texto: 'Quando comete um erro, como é seu processo interno?', opcoes: ['Reconheço, corrijo e sigo.','Fico me cobrando por um tempo mas passo.','Me cobro muito — o padrão interno é alto.','A autocrítica é severa e duradoura.'] },
        { id: 'F_Q18', texto: 'Quando algo injusto acontece com você, como reage?', opcoes: ['Expresso quando faz sentido e sigo.','Fico remoendo por um tempo antes de soltar.','Tenho dificuldade de soltar.','Carrego ressentimento por longo tempo.'] },
        { id: 'F_Q19', texto: 'Como lida com pessoas que não cumprem o que dizem?', opcoes: ['Converso e ajusto a expectativa.','Fico irritado mas consigo lidar.','Tenho dificuldade de confiar novamente.','Corto a relação — não tenho tolerância.'] },
        { id: 'F_Q20', texto: 'Quando olha para suas conquistas, como costuma se sentir?', opcoes: ['Satisfeito — reconheço sem precisar ser perfeito.','Satisfeito mas sempre vejo o que poderia ser melhor.','Raramente satisfeito — nunca parece suficiente.','Quase nunca satisfeito.'] },
      ]
    },

    // ── BLOCO 5: SAÚDE ESPIRITUAL ──────────────────────────────
    {
      id: 'saude_espiritual',
      nome: 'Sua vida com Deus hoje',
      categoria: 'Saúde espiritual',
      descricao: 'Como estão as bases da sua vida espiritual na prática — não em momentos especiais, mas na rotina.',
      perguntas: [
        { id: 'SE_Q1', texto: 'Quando a semana fica pesada, o que acontece primeiro?', opcoes: ['Minha vida com Deus segue — é o que me sustenta.','Oscila mas consigo retomar.','Oração, leitura e comunhão são as primeiras a cair.','Já há tempo isso não tem lugar real na minha rotina.'] },
        { id: 'SE_Q2', texto: 'Quando percebe que precisa fazer um ajuste espiritual, qual é sua tendência?', opcoes: ['Respondo com prontidão.','Reconheço mas demoro a agir.','Percebo mas encontro razões para adiar.','Tenho dificuldade de transformar percepção em obediência.'] },
        { id: 'SE_Q3', texto: 'Em períodos de pressão emocional, como fica sua vida espiritual?', opcoes: ['Continua sendo meu lugar de fortalecimento.','Sofre impacto mas preservo a base.','Oscila junto com meu estado interno.','Enfraquece de forma perceptível.'] },
        { id: 'SE_Q4', texto: 'Ao tomar decisões importantes, quanto sua direção espiritual participa na prática?', opcoes: ['É parte central do processo.','Participa com constância.','Só recorro mais quando estou inseguro.','Na prática minhas decisões quase não passam por isso.'] },
        { id: 'SE_Q5', texto: 'Depois de períodos mais secos ou distantes, como você costuma reagir?', opcoes: ['Volto com relativa rapidez.','Preciso de tempo para reencontrar o ritmo.','Demoro bastante para recuperar constância.','Tendo a permanecer desconectado por longos períodos.'] },
        { id: 'SE_Q6', texto: 'Como você descreveria hoje a relação entre perceber direção espiritual e obedecer a ela?', opcoes: ['Percebo e respondo com coerência.','Percebo e nem sempre sustento.','Percebo mas existe distância entre perceber e viver.','Há mais percepção do que constância na resposta.'] },
      ]
    },

    // ── BLOCO 6: TEMPERAMENTO ──────────────────────────────────
    {
      id: 'temperamento',
      nome: 'Seu jeito de ser',
      categoria: 'Temperamento',
      descricao: 'Como você se comporta naturalmente — não como gostaria de ser, mas como de fato é.',
      perguntas: [
        { id: 'T_Q1',  texto: 'Em um ambiente novo, como você costuma se comportar?', opcoes: ['Observo e analiso antes de agir.','Interajo com facilidade e me conecto naturalmente.','Assumo postura de direção e começo a estruturar.','Me adapto ao ritmo do grupo sem precisar mudar as coisas.'] },
        { id: 'T_Q2',  texto: 'Diante de um problema para resolver, qual é sua tendência?', opcoes: ['Analiso com cuidado antes de agir.','Busco as pessoas — converso para pensar junto.','Tomo a frente — prefiro agir rápido.','Espero o momento certo — não gosto de precipitar.'] },
        { id: 'T_Q3',  texto: 'Para sustentar algo por longo prazo, o que mais te desafia?', opcoes: ['Manter o padrão alto sem cair na autocrítica paralisante.','Manter o foco quando a novidade passa.','Manter a paciência com o processo quando os resultados demoram.','Tomar iniciativa — começo bem mas preciso de empurrão.'] },
        { id: 'T_Q4',  texto: 'Você sente as coisas com profundidade — alegrias e dores afetam mais do que parecem afetar outros?', opcoes: ['Não — tenho boa estabilidade emocional.','Às vezes.','Com frequência.','Sim — sinto tudo com intensidade maior que a maioria.'] },
        { id: 'T_Q5',  texto: 'Você tem padrão de qualidade alto e dificuldade de aceitar resultados mediocres?', opcoes: ['Não — aceito bom o suficiente.','Depende da área.','Sim, na maioria das coisas.','Sim — o padrão alto é constante e me cobra muito.'] },
        { id: 'T_Q6',  texto: 'Prefere fazer as coisas sozinho para garantir que sai do jeito certo?', opcoes: ['Não — delego com facilidade.','Às vezes.','Com frequência.','Quase sempre.'] },
        { id: 'T_Q7',  texto: 'Você cria conexão com facilidade com pessoas que acabou de conhecer?', opcoes: ['Não — prefiro conhecer bem antes de me abrir.','Às vezes.','Com frequência.','Sim — me conecto fácil e rápido.'] },
        { id: 'T_Q8',  texto: 'Se entusiasma com novidades mas tem dificuldade de sustentar quando chega a fase de execução?', opcoes: ['Não — sou consistente independente da fase.','Às vezes.','Com frequência.','Sim — o começo é sempre mais fácil que o meio.'] },
        { id: 'T_Q9',  texto: 'Você tende a falar mais do que ouvir e anima ambientes com sua presença?', opcoes: ['Não — sou mais observador.','Às vezes.','Com frequência.','Sim — animo ambientes naturalmente.'] },
        { id: 'T_Q10', texto: 'É reconhecido como alguém estável — que raramente perde o controle sob pressão?', opcoes: ['Não — me desestabilizo com facilidade.','Às vezes.','Com frequência.','Sim — sou a pessoa mais estável que conheço.'] },
        { id: 'T_Q11', texto: 'Você tem dificuldade de tomar decisões rápidas — prefere ponderar mesmo quando a situação pede agilidade?', opcoes: ['Não — decido rápido quando preciso.','Às vezes.','Com frequência.','Sim — a lentidão para decidir é um padrão meu.'] },
        { id: 'T_Q12', texto: 'Você tende a evitar conflito mesmo sabendo que precisaria se posicionar?', opcoes: ['Não — me posiciono quando preciso.','Às vezes.','Com frequência.','Sim — evitar o conflito é quase automático.'] },
      ]
    }

  ], // fim blocos

  // ── PROMPT PERSONALIZADO PARA A ATE ───────────────────────
  // Sobrescreve a função de montagem do prompt.js para incluir
  // a visão do mentor + mentorado unificadas sem botão de agendamento
  promptPersonalizado: function(nome, relatorio, config) {
    const { eixos, niveis, ferida, temperamento } = relatorio;

    // Identificar dom de ministério dominante
    const donsMin = ['don_apostolo','don_profeta','don_mestre','don_milagres','don_cura','don_socorros','don_governo','don_linguas'];
    const donMinDom = donsMin.reduce((a, b) => (eixos[a]?.percentual || 0) > (eixos[b]?.percentual || 0) ? a : b);
    const donMinDados = config.donsMinisterio[donMinDom];

    // Identificar dom motivacional dominante
    const donsMot = ['mot_profecia','mot_servico','mot_ensino','mot_exortacao','mot_contribuicao','mot_lideranca','mot_misericordia'];
    const donMotDom = donsMot.reduce((a, b) => (eixos[a]?.percentual || 0) > (eixos[b]?.percentual || 0) ? a : b);
    const donMotDados = config.donsMotivacionais[donMotDom];

    const saude = eixos['saude_esp'];
    const saudeNivel = saude ? (saude.percentual <= 25 ? 'baixa' : saude.percentual <= 50 ? 'instável' : saude.percentual <= 75 ? 'em processo' : 'consistente') : '';

    const F = window.Prompt?.FERIDAS || {};
    const T = window.Prompt?.TEMPERAMENTOS || {};
    const dadosFerida = ferida ? F[ferida.predominante] : null;
    const dadosTemp   = temperamento ? T[temperamento.dominante] : null;

    return `Você é Claudio Alecrim, mentor de homens cristãos com foco em maturidade espiritual e governo pessoal. Seu tom é direto, confrontador, com autoridade espiritual e paterna. Sem clichê, sem suavização excessiva, sem linguagem clínica.

DADOS DO RESPONDENTE: ${nome}

DOM DE MINISTÉRIO DOMINANTE (1Co12): ${donMinDados?.nome}
${donMinDados?.descricao}
Sombra: ${donMinDados?.sombra}

DOM MOTIVACIONAL DOMINANTE (Rm12): ${donMotDados?.nome}
${donMotDados?.descricao}
Sombra: ${donMotDados?.sombra}

SAÚDE ESPIRITUAL: ${saudeNivel} (${saude?.percentual || 0}%)

FERIDA PREDOMINANTE: ${dadosFerida?.nome} — ${dadosFerida?.mascara}
${dadosFerida?.descricao}
Padrão: ${dadosFerida?.padrao}
Custo: ${dadosFerida?.custo}

TEMPERAMENTO: ${dadosTemp?.nome}
${dadosTemp?.descricao}
Sombra: ${dadosTemp?.sombra}
Potencial: ${dadosTemp?.potencial}

INSTRUÇÃO:
Gere uma devolutiva unificada — visão completa para o mentorado E para o mentor, integradas em um único texto corrido. Não separe com cabeçalhos "para o mentorado" e "para o mentor". Escreva como se estivesse falando DIRETAMENTE para ${nome}, mas com profundidade e precisão que um mentor experiente usaria.

Estrutura obrigatória:
1. Abertura: como ${nome} foi desenhado — a combinação do dom de ministério com o motivacional. O que isso significa na prática de vida dele.
2. A ferida que está travando esse design: como ela opera nos comportamentos, nas decisões, nos relacionamentos. Seja específico e confrontador.
3. Como o temperamento amplifica tanto o potencial quanto a ferida.
4. O estado atual da saúde espiritual e o que isso significa para o processo de desenvolvimento.
5. O que precisa acontecer — não um pitch de mentoria, mas a nomeação clara do próximo movimento interno que esse homem precisa fazer.

Sem botão de agendamento. Sem CTA comercial. Esse texto é o produto — entregue com tudo.`;
  }

}; // fim FERRAMENTA_CONFIG
