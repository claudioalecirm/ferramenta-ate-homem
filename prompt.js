// ============================================================
// MOTOR DIAGNÓSTICO — prompt.js
// Textos base fixos. Usados tanto no frontend (cards visuais)
// quanto no backend (montagem do prompt para a IA).
// ============================================================

const Prompt = (() => {

  const FERIDAS = {
    REJEICAO:   { nome: 'Rejeição',   mascara: 'O Fugitivo',    descricao: 'Essa ferida opera em silêncio. O homem que carrega rejeição aprendeu cedo que sua presença incomoda ou não é bem-vinda. Desenvolveu um instinto refinado de desaparecer antes de ser dispensado.', padrao: 'Evita exposição. Diminui a si mesmo antes que os outros façam isso. Tem dificuldade de ocupar espaço — em reuniões, em casa, nos relacionamentos. Quando algo começa a ir bem, sabota. Porque no fundo não acredita que merece permanecer.', custo: 'Você não está sendo humilde. Está sendo invisível. E invisibilidade não é virtude — é fuga. O custo é uma vida vivida abaixo do que você foi chamado a ser.' },
    ABANDONO:   { nome: 'Abandono',   mascara: 'O Dependente',  descricao: 'A ferida de abandono cria um homem que precisa de presença constante para se sentir inteiro. Não necessariamente presença física — pode ser aprovação, atenção, validação.', padrao: 'Dificuldade de estar só consigo mesmo. Decisões tomadas a partir do que os outros vão pensar. Relacionamentos usados como âncora emocional. Quando alguém se afasta, mesmo que por um momento, o alarme interno dispara.', custo: 'Você entregou o controle da sua estabilidade para outras pessoas. Qualquer mudança no comportamento delas te desestabiliza. Isso é dependência emocional — e ela está custando sua liderança, sua paz e sua identidade.' },
    HUMILHACAO: { nome: 'Humilhação', mascara: 'O Masoquista',  descricao: 'Quem carrega humilhação aprendeu que suas necessidades são um peso para os outros. Desenvolveu o hábito de se colocar em último lugar — e muitas vezes transformou isso em identidade.', padrao: 'Dificuldade de receber. Coloca as necessidades dos outros sempre à frente. Sente que pedir é fraqueza. Aceita tratamento abaixo do que merece. Quando alguém o elogia, minimiza. Quando alguém o maltrata, justifica.', custo: 'Você confundiu serviço com autoanulação. Servir com excelência é uma forma de força. Servir por medo do que acontece se você não servir é escravidão emocional.' },
    TRAICAO:    { nome: 'Traição',    mascara: 'O Controlador', descricao: 'A ferida de traição cria um homem que aprendeu que não pode confiar. Desenvolveu hipervigilância como mecanismo de proteção — e controle como forma de garantir que não vai ser surpreendido.', padrao: 'Dificuldade de delegar. Precisa estar no controle de tudo e de todos. Desconfia das intenções das pessoas mesmo sem evidência. Ciúme, possessividade e rigidez nos relacionamentos. Quando algo sai do controle, a reação é desproporcional.', custo: 'Você está gastando energia monumental controlando o que não pode ser controlado. Relacionamentos não sobrevivem a esse nível de tensão. E você está se esgotando tentando proteger o que o controle não tem capacidade de proteger.' },
    INJUSTICA:  { nome: 'Injustiça',  mascara: 'O Rígido',      descricao: 'Quem carrega injustiça desenvolveu uma exigência muito alta — primeiro consigo mesmo, depois com todos ao redor. Tudo precisa estar certo, justo, merecido.', padrao: 'Perfeccionismo. Dificuldade de aceitar erros — os próprios e os dos outros. Senso de justiça muito aguçado que vira ressentimento quando a vida não corresponde. Autocrítica severa. Frieza emocional como proteção.', custo: 'Você criou um padrão impossível de sustentar. Ninguém ao redor consegue atingir — inclusive você. O resultado é isolamento, ressentimento acumulado e uma rigidez que fecha as portas que a vida tenta abrir.' }
  };

  const TEMPERAMENTOS = {
    COLERICO:    { nome: 'Colérico',    descricao: 'Orientado para resultado, liderança natural, tomada de decisão rápida. Funciona bem sob pressão. Tende a atropelar pessoas no caminho para o objetivo.', sombra: 'Impaciência, dificuldade de ouvir, relacionamentos usados como instrumentos para fins.', potencial: 'Quando governado, transforma ambientes. Lidera com direção e coragem.' },
    MELANCOLICO: { nome: 'Melancólico', descricao: 'Profundidade analítica, sensibilidade elevada, alto padrão de qualidade. Pensa antes de agir. Sente com mais intensidade que a maioria.', sombra: 'Paralisia por análise, autocrítica destrutiva, tendência à depressão quando os padrões não são atingidos.', potencial: 'Quando governado, produz obras de excelência. Percebe o que outros não veem.' },
    SANGUINEO:   { nome: 'Sanguíneo',   descricao: 'Energia social, otimismo, capacidade de conectar pessoas. Presença que anima ambientes. Vive no presente com intensidade.', sombra: 'Superficialidade, dificuldade de comprometimento de longo prazo, fuga de processos e de dor.', potencial: 'Quando governado, inspira e mobiliza. Tem dom de criar pertencimento.' },
    FLEUMATICO:  { nome: 'Fleumático',  descricao: 'Estabilidade emocional, paciência, capacidade de mediar conflitos. Confiável, consistente, difícil de desequilibrar.', sombra: 'Passividade, dificuldade de tomar posição, tendência a evitar conflito a qualquer custo.', potencial: 'Quando governado, sustenta estruturas por anos. É a âncora que os outros precisam.' }
  };

  return { FERIDAS, TEMPERAMENTOS };
})();

// Expor globalmente para o motor.html
window.Prompt = Prompt;
