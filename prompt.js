// ============================================================
// MOTOR DIAGNÓSTICO — prompt.js
// Textos base fixos (escritos por Claudio) + montagem do prompt para a IA.
// A IA não inventa o diagnóstico — ela narra o que os dados dizem,
// usando estes textos como base e o tom de Claudio Alecrim.
// ============================================================

const Prompt = (() => {

  // ------------------------------------------------------------
  // TEXTOS BASE — FERIDAS (Lise Bourbeau)
  // Cada ferida tem: nome, mascara, descricao, padrao, custo
  // ------------------------------------------------------------
  const FERIDAS = {
    REJEICAO: {
      nome: 'Rejeição',
      mascara: 'O Fugitivo',
      descricao: 'Essa ferida opera em silêncio. O homem que carrega rejeição aprendeu cedo que sua presença incomoda ou não é bem-vinda. Desenvolveu um instinto refinado de desaparecer antes de ser dispensado.',
      padrao: 'Evita exposição. Diminui a si mesmo antes que os outros façam isso. Tem dificuldade de ocupar espaço — em reuniões, em casa, nos relacionamentos. Quando algo começa a ir bem, sabota. Porque no fundo não acredita que merece permanecer.',
      custo: 'Você não está sendo humilde. Está sendo invisível. E invisibilidade não é virtude — é fuga. O custo é uma vida vivida abaixo do que você foi chamado a ser.'
    },
    ABANDONO: {
      nome: 'Abandono',
      mascara: 'O Dependente',
      descricao: 'A ferida de abandono cria um homem que precisa de presença constante para se sentir inteiro. Não necessariamente presença física — pode ser aprovação, atenção, validação.',
      padrao: 'Dificuldade de estar só consigo mesmo. Decisões tomadas a partir do que os outros vão pensar. Relacionamentos usados como âncora emocional. Quando alguém se afasta, mesmo que por um momento, o alarme interno dispara.',
      custo: 'Você entregou o controle da sua estabilidade para outras pessoas. Qualquer mudança no comportamento delas te desestabiliza. Isso é dependência emocional — e ela está custando sua liderança, sua paz e sua identidade.'
    },
    HUMILHACAO: {
      nome: 'Humilhação',
      mascara: 'O Masoquista',
      descricao: 'Quem carrega humilhação aprendeu que suas necessidades são um peso para os outros. Desenvolveu o hábito de se colocar em último lugar — e muitas vezes transformou isso em identidade.',
      padrao: 'Dificuldade de receber. Coloca as necessidades dos outros sempre à frente. Sente que pedir é fraqueza. Aceita tratamento abaixo do que merece. Quando alguém o elogia, minimiza. Quando alguém o maltrata, justifica.',
      custo: 'Você confundiu serviço com autoanulação. Servir com excelência é uma forma de força. Servir por medo do que acontece se você não servir é escravidão emocional.'
    },
    TRAICAO: {
      nome: 'Traição',
      mascara: 'O Controlador',
      descricao: 'A ferida de traição cria um homem que aprendeu que não pode confiar. Desenvolveu hipervigilância como mecanismo de proteção — e controle como forma de garantir que não vai ser surpreendido.',
      padrao: 'Dificuldade de delegar. Precisa estar no controle de tudo e de todos. Desconfia das intenções das pessoas mesmo sem evidência. Ciúme, possessividade e rigidez nos relacionamentos. Quando algo sai do controle, a reação é desproporcional.',
      custo: 'Você está gastando energia monumental controlando o que não pode ser controlado. Relacionamentos não sobrevivem a esse nível de tensão. E você está se esgotando tentando proteger o que o controle não tem capacidade de proteger.'
    },
    INJUSTICA: {
      nome: 'Injustiça',
      mascara: 'O Rígido',
      descricao: 'Quem carrega injustiça desenvolveu uma exigência muito alta — primeiro consigo mesmo, depois com todos ao redor. Tudo precisa estar certo, justo, merecido.',
      padrao: 'Perfeccionismo. Dificuldade de aceitar erros — os próprios e os dos outros. Senso de justiça muito aguçado que vira ressentimento quando a vida não corresponde. Autocrítica severa. Frieza emocional como proteção.',
      custo: 'Você criou um padrão impossível de sustentar. Ninguém ao redor consegue atingir — inclusive você. O resultado é isolamento, ressentimento acumulado e uma rigidez que fecha as portas que a vida tenta abrir.'
    }
  };

  // ------------------------------------------------------------
  // TEXTOS BASE — TEMPERAMENTOS (LaHaye)
  // ------------------------------------------------------------
  const TEMPERAMENTOS = {
    COLERICO: {
      nome: 'Colérico',
      descricao: 'Orientado para resultado, liderança natural, tomada de decisão rápida. Funciona bem sob pressão. Tende a atropelar pessoas no caminho para o objetivo.',
      sombra: 'Impaciência, dificuldade de ouvir, relacionamentos usados como instrumentos para fins.',
      potencial: 'Quando governado, transforma ambientes. Lidera com direção e coragem.'
    },
    MELANCOLICO: {
      nome: 'Melancólico',
      descricao: 'Profundidade analítica, sensibilidade elevada, alto padrão de qualidade. Pensa antes de agir. Sente com mais intensidade que a maioria.',
      sombra: 'Paralisia por análise, autocrítica destrutiva, tendência à depressão quando os padrões não são atingidos.',
      potencial: 'Quando governado, produz obras de excelência. Percebe o que outros não veem.'
    },
    SANGUINEO: {
      nome: 'Sanguíneo',
      descricao: 'Energia social, otimismo, capacidade de conectar pessoas. Presença que anima ambientes. Vive no presente com intensidade.',
      sombra: 'Superficialidade, dificuldade de comprometimento de longo prazo, fuga de processos e de dor.',
      potencial: 'Quando governado, inspira e mobiliza. Tem dom de criar pertencimento.'
    },
    FLEUMATICO: {
      nome: 'Fleumático',
      descricao: 'Estabilidade emocional, paciência, capacidade de mediar conflitos. Confiável, consistente, difícil de desequilibrar.',
      sombra: 'Passividade, dificuldade de tomar posição, tendência a evitar conflito a qualquer custo.',
      potencial: 'Quando governado, sustenta estruturas por anos. É a âncora que os outros precisam.'
    }
  };

  // ------------------------------------------------------------
  // TEXTOS BASE — NÍVEIS GENÉRICOS (aplicável a qualquer eixo)
  // ------------------------------------------------------------
  const NIVEIS = {
    1: { label: 'Estável',      cor: '#4a9e6e', descricao: 'Área com estrutura. Não precisa de atenção imediata.' },
    2: { label: 'Em processo',  cor: '#c8a97a', descricao: 'Há base, mas oscilações presentes. Merece atenção.' },
    3: { label: 'Em colapso',   cor: '#c87a4a', descricao: 'Área impactando outras. Precisa ser endereçada.' },
    4: { label: 'Crítico',      cor: '#c84a4a', descricao: 'Área dominando negativamente. Intervenção prioritária.' }
  };

  // ------------------------------------------------------------
  // MONTAGEM DO PROMPT PARA A IA
  // Recebe o relatório calculado + dados da ferramenta + nome do respondente.
  // Devolve o prompt completo pronto para enviar à API.
  // ------------------------------------------------------------
  function montarPrompt({ nome, relatorio, config, formato }) {
    const { eixos, niveis, ferida, temperamento } = relatorio;

    // Monta resumo dos eixos
    const resumoEixos = config.eixos.map(e => {
      const dados = eixos[e.id];
      const nivel = NIVEIS[niveis[e.id]];
      return `- ${e.label}: ${dados.percentual}% — ${nivel.label} (${nivel.descricao})`;
    }).join('\n');

    // Ferida
    const dadosFerida = ferida ? FERIDAS[ferida.predominante] : null;
    const blocoFerida = dadosFerida ? `
FERIDA PREDOMINANTE: ${dadosFerida.nome} (${dadosFerida.mascara})
Descrição: ${dadosFerida.descricao}
Padrão comportamental: ${dadosFerida.padrao}
Custo real: ${dadosFerida.custo}
` : '';

    // Temperamento
    const dadosTemp = temperamento ? TEMPERAMENTOS[temperamento.dominante] : null;
    const blocoTemp = dadosTemp ? `
TEMPERAMENTO DOMINANTE: ${dadosTemp.nome}
Descrição: ${dadosTemp.descricao}
Sombra: ${dadosTemp.sombra}
Potencial quando governado: ${dadosTemp.potencial}
` : '';

    // Instrução por formato
    const instrucaoFormato = formato === 'mentorado'
      ? `Gere uma devolutiva para uso em sessão de mentoria. Seja direto e confrontador — você está falando com o mentorado na face, não escrevendo um relatório. Estruture em: abertura impactante (1 parágrafo que descreve o padrão sem nomear), padrão dominante identificado, o que está custando hoje, e o próximo passo concreto. Sem pitch de venda. Sem clichês motivacionais.`
      : `Gere uma devolutiva completa para produto digital PDF. Seja profundo e didático. Explique cada eixo, o que a ferida está operando, como o temperamento amplifica ou atenua, e o que precisa mudar. Estruture em seções claras. Encerre com link para claudioalecrim.com.br. Sem devolutiva de sessão — isso é o produto.`;

    return `Você é Claudio Alecrim, mentor de homens cristãos com foco em maturidade espiritual e governo pessoal. Seu tom é direto, confrontador, com autoridade espiritual. Sem suavização excessiva, sem clichês motivacionais, sem linguagem clínica. Você fala como alguém que conhece o homem por dentro.

DADOS DO RESPONDENTE:
Nome: ${nome}
Ferramenta: ${config.nome}

RESULTADO DOS EIXOS:
${resumoEixos}
${blocoFerida}
${blocoTemp}

INSTRUÇÃO:
${instrucaoFormato}

Responda APENAS com o conteúdo da devolutiva, sem introduções ou explicações sobre o que você vai fazer.`;
  }

  return { montarPrompt, FERIDAS, TEMPERAMENTOS, NIVEIS };
})();
