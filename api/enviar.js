// api/enviar.js — ATE Homem Espiritual v3
// Variáveis de ambiente necessárias no Vercel:
//   ANTHROPIC_API_KEY
//   RESEND_API_KEY
//   SUPABASE_URL
//   SUPABASE_SERVICE_KEY

export const config = { maxDuration: 60 };

const MENTOR_EMAIL = 'claudioalecrim@icloud.com';
const REMETENTE    = 'resultado@claudioalecrim.com.br';

// ── TEXTOS BASE ───────────────────────────────────────────────
const FERIDAS = {
  REJEICAO:   { nome: 'Rejeição',   mascara: 'O Fugitivo',    descricao: 'Essa ferida opera em silêncio. O homem que carrega rejeição aprendeu cedo que sua presença incomoda ou não é bem-vinda. Desenvolveu um instinto refinado de desaparecer antes de ser dispensado.', padrao: 'Evita exposição. Diminui a si mesmo antes que os outros façam isso. Tem dificuldade de ocupar espaço — em reuniões, em casa, nos relacionamentos. Quando algo começa a ir bem, sabota. Porque no fundo não acredita que merece permanecer.', custo: 'Você não está sendo humilde. Está sendo invisível. E invisibilidade não é virtude — é fuga. O custo é uma vida vivida abaixo do que você foi chamado a ser.' },
  ABANDONO:   { nome: 'Abandono',   mascara: 'O Dependente',  descricao: 'A ferida de abandono cria um homem que precisa de presença constante para se sentir inteiro. Não necessariamente presença física — pode ser aprovação, atenção, validação.', padrao: 'Dificuldade de estar só consigo mesmo. Decisões tomadas a partir do que os outros vão pensar. Relacionamentos usados como âncora emocional. Quando alguém se afasta, mesmo que por um momento, o alarme interno dispara.', custo: 'Você entregou o controle da sua estabilidade para outras pessoas. Qualquer mudança no comportamento delas te desestabiliza. Isso é dependência emocional — e ela está custando sua liderança, sua paz e sua identidade.' },
  HUMILHACAO: { nome: 'Humilhação', mascara: 'O Masoquista',  descricao: 'Quem carrega humilhação aprendeu que suas necessidades são um peso para os outros. Desenvolveu o hábito de se colocar em último lugar — e muitas vezes transformou isso em identidade.', padrao: 'Dificuldade de receber. Coloca as necessidades dos outros sempre à frente. Sente que pedir é fraqueza. Aceita tratamento abaixo do que merece. Quando alguém o elogia, minimiza. Quando alguém o maltrata, justifica.', custo: 'Você confundiu serviço com autoanulação. Servir com excelência é uma forma de força. Servir por medo do que acontece se você não servir é escravidão emocional.' },
  TRAICAO:    { nome: 'Traição',    mascara: 'O Controlador', descricao: 'A ferida de traição cria um homem que aprendeu que não pode confiar. Desenvolveu hipervigilância como mecanismo de proteção — e controle como forma de garantir que não vai ser surpreendido.', padrao: 'Dificuldade de delegar. Precisa estar no controle de tudo e de todos. Desconfia das intenções das pessoas mesmo sem evidência. Ciúme, possessividade e rigidez nos relacionamentos. Quando algo sai do controle, a reação é desproporcional.', custo: 'Você está gastando energia monumental controlando o que não pode ser controlado. Relacionamentos não sobrevivem a esse nível de tensão. E você está se esgotando tentando proteger o que o controle não tem capacidade de proteger.' },
  INJUSTICA:  { nome: 'Injustiça',  mascara: 'O Rígido',      descricao: 'Quem carrega injustiça desenvolveu uma exigência muito alta — primeiro consigo mesmo, depois com todos ao redor. Tudo precisa estar certo, justo, merecido.', padrao: 'Perfeccionismo. Dificuldade de aceitar erros — os próprios e os dos outros. Senso de justiça muito aguçado que vira ressentimento quando a vida não corresponde. Autocrítica severa. Frieza emocional como proteção.', custo: 'Você criou um padrão impossível de sustentar. Ninguém ao redor consegue atingir — inclusive você. O resultado é isolamento, ressentimento acumulado e uma rigidez que fecha as portas que a vida tenta abrir.' }
};

const TEMPERAMENTOS = {
  COLERICO:    { nome: 'Colérico',    descricao: 'Orientado para resultado, liderança natural, tomada de decisão rápida. Funciona bem sob pressão.', sombra: 'Impaciência, dificuldade de ouvir, relacionamentos usados como instrumentos para fins.', potencial: 'Quando governado, transforma ambientes. Lidera com direção e coragem.' },
  MELANCOLICO: { nome: 'Melancólico', descricao: 'Profundidade analítica, sensibilidade elevada, alto padrão de qualidade. Pensa antes de agir.', sombra: 'Paralisia por análise, autocrítica destrutiva, tendência à depressão quando os padrões não são atingidos.', potencial: 'Quando governado, produz obras de excelência. Percebe o que outros não veem.' },
  SANGUINEO:   { nome: 'Sanguíneo',   descricao: 'Energia social, otimismo, capacidade de conectar pessoas. Presença que anima ambientes.', sombra: 'Superficialidade, dificuldade de comprometimento de longo prazo, fuga de processos e de dor.', potencial: 'Quando governado, inspira e mobiliza. Tem dom de criar pertencimento.' },
  FLEUMATICO:  { nome: 'Fleumático',  descricao: 'Estabilidade emocional, paciência, capacidade de mediar conflitos. Confiável e consistente.', sombra: 'Passividade, dificuldade de tomar posição, tendência a evitar conflito a qualquer custo.', potencial: 'Quando governado, sustenta estruturas por anos. É a âncora que os outros precisam.' }
};

const DONS_MIN = {
  don_apostolo:  { nome: 'Apóstolo',  descricao: 'Capacidade de fundar, expandir e estruturar o reino em novos territórios. Visão ampla, tolerância alta a adversidade, facilidade de operar em terreno desconhecido.', sombra: 'Tendência a atropelar estruturas existentes. Dificuldade de se submeter a autoridades que não compartilham a visão.' },
  don_profeta:   { nome: 'Profeta',   descricao: 'Percepção aguçada de alinhamento ou desalinhamento espiritual. Discernimento de ambientes, intenções e momentos. Zelo por verdade e obediência.', sombra: 'Julgamento prematuro. Dificuldade de tolerar processos lentos. Pode ferir sem intenção com a força da percepção.' },
  don_mestre:    { nome: 'Mestre',    descricao: 'Prazer profundo em estudar, organizar e transmitir verdade. Clareza para explicar o complexo de forma acessível. Percebe inconsistências com facilidade.', sombra: 'Intelectualismo que não desce para a prática. Pode ensinar muito e transformar pouco.' },
  don_milagres:  { nome: 'Milagres',  descricao: 'Fé ativa diante do impossível. Ousadia para orar e agir onde outros recuam. Expectativa natural por intervenção sobrenatural.', sombra: 'Dificuldade de aceitar o não de Deus. Pode criar expectativas irrealistas nas pessoas ao redor.' },
  don_cura:      { nome: 'Cura',      descricao: 'Compaixão profunda por pessoas feridas. Inclinação para interceder por restauração física, emocional e espiritual. Presença que acolhe e cria segurança.', sombra: 'Absorção da dor alheia. Dificuldade de estabelecer limites saudáveis no cuidado.' },
  don_socorros:  { nome: 'Socorros',  descricao: 'Capacidade de apoiar, organizar e sustentar para que tudo funcione. Alegria em servir nos bastidores. Confiabilidade em momentos de necessidade.', sombra: 'Invisibilidade que vira ressentimento quando o serviço não é reconhecido.' },
  don_governo:   { nome: 'Governos',  descricao: 'Capacidade de organizar pessoas, funções e processos com clareza. Transforma desordem em estrutura. Liderança prática e responsável.', sombra: 'Controle excessivo. Dificuldade de dar espaço para o processo das pessoas.' },
  don_linguas:   { nome: 'Línguas',   descricao: 'Vida de oração intensa e profunda. Comunhão com Deus que ultrapassa o racional. Sensibilidade espiritual na presença de Deus.', sombra: 'Dificuldade de traduzir a experiência espiritual em linguagem prática para outros.' }
};

const DONS_MOT = {
  mot_profecia:     { nome: 'Profecia',     descricao: 'Motivado por revelar verdade e confrontar o que está errado. Age com urgência quando percebe desvio.', sombra: 'Rigidez. Dificuldade de ser misericordioso com o processo das pessoas.' },
  mot_servico:      { nome: 'Serviço',      descricao: 'Motivado por atender necessidades práticas. Percebe o que precisa ser feito antes que alguém peça.', sombra: 'Dificuldade de dizer não. Pode ser explorado por quem não tem escrúpulos.' },
  mot_ensino:       { nome: 'Ensino',       descricao: 'Motivado por pesquisar, verificar e transmitir com precisão. Alta resistência a informação superficial.', sombra: 'Lentidão na aplicação. Pesquisa mais do que age.' },
  mot_exortacao:    { nome: 'Exortação',    descricao: 'Motivado por encorajar e conduzir pessoas ao crescimento. Facilidade para ver o potencial antes que o outro veja.', sombra: 'Pode ser percebido como superficial se não tiver profundidade nos fundamentos.' },
  mot_contribuicao: { nome: 'Contribuição', descricao: 'Motivado por investir recursos de forma estratégica no reino. Alto discernimento sobre onde e quando contribuir.', sombra: 'Pode usar a contribuição como forma de controle ou distanciamento emocional.' },
  mot_lideranca:    { nome: 'Liderança',    descricao: 'Motivado por visão de longo prazo. Capacidade de motivar e organizar pessoas em direção a um objetivo claro.', sombra: 'Impaciência com quem não acompanha o ritmo. Pode sacrificar pessoas pelo resultado.' },
  mot_misericordia: { nome: 'Misericórdia', descricao: 'Motivado por sentir e aliviar a dor alheia. Alta empatia. Percebe o estado emocional das pessoas sem que digam.', sombra: 'Dificuldade de confrontar. Evita verdades que machucam mesmo quando necessárias.' }
};

// ── HELPERS ───────────────────────────────────────────────────
function domDominante(eixos, lista) {
  return lista.reduce((a, b) => (eixos[a]?.percentual || 0) >= (eixos[b]?.percentual || 0) ? a : b);
}

function nivelSaudeLabel(pct) {
  if (pct <= 25) return 'frágil';
  if (pct <= 50) return 'instável';
  if (pct <= 75) return 'em processo';
  return 'consistente';
}

function nivelDomLabel(pct) {
  if (pct <= 25) return 'Latente';
  if (pct <= 50) return 'Presente';
  if (pct <= 75) return 'Expressivo';
  return 'Dominante';
}

// ── PROMPT ────────────────────────────────────────────────────
function montarPrompt(nome, relatorio) {
  const { eixos, ferida, temperamento } = relatorio;

  const donsMinIds = Object.keys(DONS_MIN);
  const donsMomIds = Object.keys(DONS_MOT);
  const donMinKey  = domDominante(eixos, donsMinIds);
  const donMotKey  = domDominante(eixos, donsMomIds);
  const donMin     = DONS_MIN[donMinKey];
  const donMot     = DONS_MOT[donMotKey];
  const f          = ferida      ? FERIDAS[ferida.predominante]          : null;
  const t          = temperamento ? TEMPERAMENTOS[temperamento.dominante] : null;
  const saudePct   = eixos['saude_esp']?.percentual || 0;

  // Top 3 de cada grupo para contexto do mentor
  const top3Min = donsMinIds
    .map(k => ({ nome: DONS_MIN[k].nome, pct: eixos[k]?.percentual || 0, nivel: nivelDomLabel(eixos[k]?.percentual || 0) }))
    .sort((a, b) => b.pct - a.pct).slice(0, 3);
  const top3Mot = donsMomIds
    .map(k => ({ nome: DONS_MOT[k].nome, pct: eixos[k]?.percentual || 0, nivel: nivelDomLabel(eixos[k]?.percentual || 0) }))
    .sort((a, b) => b.pct - a.pct).slice(0, 3);

  return `Você é Claudio Alecrim, mentor de homens cristãos. Foco: maturidade espiritual e governo pessoal.

Tom: direto, confrontador, com autoridade espiritual e paterna. Fala como quem conhece o homem por dentro. Sem clichê motivacional. Sem linguagem de coach. Sem suavização que roube o impacto. Cada frase deve custar algo para quem lê.

RESPONDENTE: ${nome}

DOM DE MINISTÉRIO DOMINANTE (1Co12): ${donMin?.nome}
${donMin?.descricao}
Sombra: ${donMin?.sombra}
Ranking: ${top3Min.map(d => `${d.nome} ${d.pct}% (${d.nivel})`).join(' · ')}

DOM MOTIVACIONAL DOMINANTE (Rm12): ${donMot?.nome}
${donMot?.descricao}
Sombra: ${donMot?.sombra}
Ranking: ${top3Mot.map(d => `${d.nome} ${d.pct}% (${d.nivel})`).join(' · ')}

SAÚDE ESPIRITUAL: ${nivelSaudeLabel(saudePct)} — ${saudePct}%

FERIDA PREDOMINANTE: ${f?.nome} · ${f?.mascara}
Como opera: ${f?.descricao}
Padrão: ${f?.padrao}
Custo: ${f?.custo}

TEMPERAMENTO: ${t?.nome}
Como funciona: ${t?.descricao}
Sombra: ${t?.sombra}
Potencial quando governado: ${t?.potencial}

INSTRUÇÃO:

Escreva uma devolutiva endereçada diretamente a ${nome}. Um único texto corrido, sem cabeçalhos nem divisões visíveis. Fale como quem conhece esse homem — não como quem leu um relatório sobre ele.

Cinco movimentos obrigatórios, em sequência natural:

1. QUEM ELE FOI DESENHADO PARA SER
Não liste características. Narre. Mostre o que acontece quando o dom de ${donMin?.nome} e o impulso de ${donMot?.nome} operam juntos sem travamento. O que esse homem faz bem, como ele afeta os ambientes, o que as pessoas sentem quando ele está no eixo. Seja específico — generalidade não confronta ninguém.

2. O QUE ESTÁ TRAVANDO ESSE DESIGN
A ferida de ${f?.nome} não está travando a vida em geral — está travando exatamente o dom que ele carrega. Mostre como. Dê exemplos concretos de onde isso aparece: em como ele toma decisões, em como responde à exposição, ao fracasso, à autoridade, à intimidade. Sem rodeio. Sem gentileza que proteja o ego.

3. COMO O TEMPERAMENTO COMPLICA TUDO ISSO
O temperamento ${t?.nome} amplifica tanto o dom quanto a ferida. Mostre como os dois lados se intensificam. O que o temperamento faz bem e o que ele torna mais difícil de ver e mais caro de carregar.

4. O QUE A BASE ESPIRITUAL DIZ SOBRE ESSE MOMENTO
Com saúde espiritual ${nivelSaudeLabel(saudePct)} (${saudePct}%), diga o que isso significa para esse homem agora. Não sermão. Não encorajamento pastoral. A verdade sobre o que uma base ${nivelSaudeLabel(saudePct)} faz com alguém que carrega esses dons e essa ferida.

5. O QUE PRECISA ACONTECER
Não uma lista. Não passos. Uma nomeação clara do movimento interno que esse homem precisa fazer — não o que ele precisa fazer, mas o que ele precisa se tornar. Termine com uma frase que ele não consiga esquecer.

Tamanho: 650 a 900 palavras. Cada parágrafo denso. Nenhuma frase decorativa.`;
}

// ── ESCALA VISUAL (espelho do calculos.js para o backend) ─────
function resolverNivelLabel(eixoId, pct) {
  const donsIds = ['don_apostolo','don_profeta','don_mestre','don_milagres','don_cura','don_socorros','don_governo','don_linguas','mot_profecia','mot_servico','mot_ensino','mot_exortacao','mot_contribuicao','mot_lideranca','mot_misericordia'];
  if (eixoId === 'saude_esp') return nivelSaudeLabel(pct);
  if (donsIds.includes(eixoId)) return nivelDomLabel(pct);
  return pct <= 25 ? 'Leve' : pct <= 50 ? 'Moderado' : pct <= 75 ? 'Intenso' : 'Dominante';
}

function corNivel(eixoId, pct) {
  const donsIds = ['don_apostolo','don_profeta','don_mestre','don_milagres','don_cura','don_socorros','don_governo','don_linguas','mot_profecia','mot_servico','mot_ensino','mot_exortacao','mot_contribuicao','mot_lideranca','mot_misericordia'];
  if (eixoId === 'saude_esp') {
    return pct <= 25 ? '#c84a4a' : pct <= 50 ? '#c87a4a' : pct <= 75 ? '#c8a97a' : '#4a9e6e';
  }
  if (donsIds.includes(eixoId)) {
    return pct <= 25 ? '#3a3530' : pct <= 50 ? '#7a6a5a' : pct <= 75 ? '#c8a97a' : '#e8c88a';
  }
  return pct <= 25 ? '#4a9e6e' : pct <= 50 ? '#c8a97a' : pct <= 75 ? '#c87a4a' : '#c84a4a';
}

// ── EMAIL ALUNO ───────────────────────────────────────────────
function emailAluno(nome, devolutiva, relatorio) {
  const { eixos, ferida, temperamento } = relatorio;
  const f = ferida      ? FERIDAS[ferida.predominante]          : null;
  const t = temperamento ? TEMPERAMENTOS[temperamento.dominante] : null;

  const todosEixos = [
    ...Object.keys(DONS_MIN),
    ...Object.keys(DONS_MOT),
    'saude_esp'
  ];

  const labelEixo = (k) => DONS_MIN[k]?.nome || DONS_MOT[k]?.nome || (k === 'saude_esp' ? 'Saúde espiritual' : k);

  const barras = todosEixos.map(k => {
    const e   = eixos[k];
    if (!e) return '';
    const pct  = e.percentual;
    const cor  = corNivel(k, pct);
    const lbl  = resolverNivelLabel(k, pct);
    return `<tr>
      <td style="padding:5px 0;font-size:12px;color:#6b6055;width:150px;white-space:nowrap">${labelEixo(k)}</td>
      <td style="padding:5px 8px"><table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td style="background:#1e1e1e;border-radius:2px;height:2px">
          <div style="width:${pct}%;background:${cor};height:2px;border-radius:2px"></div>
        </td>
      </tr></table></td>
      <td style="padding:5px 0;font-size:11px;color:${cor};text-align:right;white-space:nowrap;width:80px">${lbl}</td>
    </tr>`;
  }).join('');

  const devolutivaHtml = devolutiva
    .split('\n\n').filter(p => p.trim())
    .map(p => `<p style="margin:0 0 20px;font-size:16px;color:#e8e0d4;line-height:1.9;font-family:Georgia,serif">${p.trim()}</p>`)
    .join('');

  const donMinNome = DONS_MIN[Object.keys(DONS_MIN).reduce((a,b) => (eixos[a]?.percentual||0) >= (eixos[b]?.percentual||0) ? a : b)]?.nome || '';
  const donMotNome = DONS_MOT[Object.keys(DONS_MOT).reduce((a,b) => (eixos[a]?.percentual||0) >= (eixos[b]?.percentual||0) ? a : b)]?.nome || '';

  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 20px">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

  <tr><td style="padding-bottom:28px;border-bottom:1px solid #1e1e1e">
    <p style="margin:0 0 6px;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:#c8a97a">Claudio Alecrim</p>
    <h1 style="margin:0;font-size:30px;font-weight:300;color:#e8e0d4;font-family:Georgia,serif">Seu perfil espiritual</h1>
  </td></tr>

  <tr><td style="padding:24px 0">
    <p style="margin:0;font-size:15px;color:#6b6055;line-height:1.7">${nome}, aqui está o resultado da sua análise. Leia com calma — não como um relatório, mas como um espelho.</p>
  </td></tr>

  <tr><td style="padding:20px;background:#111;border:1px solid #1e1e1e;border-radius:10px">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="width:50%;padding-right:16px;vertical-align:top">
          <p style="margin:0 0 4px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#c8a97a">Dom de ministério</p>
          <p style="margin:0;font-size:18px;font-weight:300;color:#e8e0d4;font-family:Georgia,serif">${donMinNome}</p>
        </td>
        <td style="width:50%;padding-left:16px;vertical-align:top;border-left:1px solid #1e1e1e">
          <p style="margin:0 0 4px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#c8a97a">Dom motivacional</p>
          <p style="margin:0;font-size:18px;font-weight:300;color:#e8e0d4;font-family:Georgia,serif">${donMotNome}</p>
        </td>
      </tr>
      <tr><td colspan="2" style="padding-top:16px;border-top:1px solid #1e1e1e">
        <table width="100%" cellpadding="0" cellspacing="0"><tr>
          <td style="width:50%;padding-right:16px;vertical-align:top">
            <p style="margin:0 0 4px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#c8a97a">Ferida predominante</p>
            <p style="margin:0;font-size:16px;font-weight:300;color:#e8e0d4;font-family:Georgia,serif">${f?.nome}</p>
            <p style="margin:2px 0 0;font-size:11px;color:#4a3a2a">${f?.mascara}</p>
          </td>
          <td style="width:50%;padding-left:16px;vertical-align:top;border-left:1px solid #1e1e1e">
            <p style="margin:0 0 4px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#c8a97a">Temperamento</p>
            <p style="margin:0;font-size:16px;font-weight:300;color:#e8e0d4;font-family:Georgia,serif">${t?.nome}</p>
          </td>
        </tr></table>
      </td></tr>
    </table>
  </td></tr>

  <tr><td style="padding:28px 0 8px">
    <p style="margin:0 0 16px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#2a2a2a">Perfil por eixo</p>
    <table width="100%" cellpadding="0" cellspacing="0">${barras}</table>
  </td></tr>

  <tr><td style="padding:28px 0 0;border-top:1px solid #1e1e1e">
    <p style="margin:0 0 24px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#2a2a2a">Análise</p>
    ${devolutivaHtml}
  </td></tr>

  <tr><td style="padding:36px 0 0;border-top:1px solid #1e1e1e">
    <p style="margin:0;font-size:12px;color:#2a2a2a;line-height:1.7">Claudio Alecrim · Mentor de Homens<br>
    <a href="https://claudioalecrim.com.br" style="color:#c8a97a;text-decoration:none">claudioalecrim.com.br</a></p>
  </td></tr>

</table></td></tr></table></body></html>`;
}

// ── EMAIL MENTOR ──────────────────────────────────────────────
function emailMentor(dados, devolutiva, relatorio) {
  const { eixos, ferida, temperamento } = relatorio;
  const f = ferida      ? FERIDAS[ferida.predominante]          : null;
  const t = temperamento ? TEMPERAMENTOS[temperamento.dominante] : null;

  const tempoLabel = { menos_1:'Menos de 1 ano','1_5':'1 a 5 anos','5_10':'5 a 10 anos',mais_10:'Mais de 10 anos',nao_sou:'Não é cristão' }[dados.tempo_fe] || dados.tempo_fe;

  const rankMin = Object.keys(DONS_MIN).map(k => ({ nome: DONS_MIN[k].nome, pct: eixos[k]?.percentual||0 })).sort((a,b)=>b.pct-a.pct);
  const rankMot = Object.keys(DONS_MOT).map(k => ({ nome: DONS_MOT[k].nome, pct: eixos[k]?.percentual||0 })).sort((a,b)=>b.pct-a.pct);

  const tabelaDons = (lista) => lista.map(d => {
    const cor = corNivel('don_apostolo', d.pct); // escala dom
    const lbl = nivelDomLabel(d.pct);
    return `<tr>
      <td style="padding:4px 0;font-size:12px;color:#6b6055">${d.nome}</td>
      <td style="padding:4px 0;font-size:11px;color:${cor};text-align:right">${d.pct}% · ${lbl}</td>
    </tr>`;
  }).join('');

  const devolutivaHtml = devolutiva.split('\n\n').filter(p=>p.trim())
    .map(p=>`<p style="margin:0 0 16px;font-size:15px;color:#e8e0d4;line-height:1.8;font-family:Georgia,serif">${p.trim()}</p>`).join('');

  const saudePct  = eixos['saude_esp']?.percentual || 0;
  const saudeCor  = corNivel('saude_esp', saudePct);
  const saudeLbl  = nivelSaudeLabel(saudePct);

  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 20px">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

  <tr><td style="padding-bottom:24px;border-bottom:1px solid #1e1e1e">
    <p style="margin:0 0 4px;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:#c8a97a">ATE · Roteiro do mentor</p>
    <h1 style="margin:0;font-size:26px;font-weight:300;color:#e8e0d4;font-family:Georgia,serif">${dados.nome}</h1>
  </td></tr>

  <tr><td style="padding:20px;background:#111;border:1px solid #1e1e1e;border-radius:8px;margin:20px 0">
    <p style="margin:0 0 12px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#2a2a2a">Lead</p>
    <table cellpadding="0" cellspacing="0">
      <tr><td style="padding:3px 16px 3px 0;font-size:12px;color:#3a3530">Email</td><td style="font-size:12px;color:#6b6055">${dados.email}</td></tr>
      ${dados.whatsapp ? `<tr><td style="padding:3px 16px 3px 0;font-size:12px;color:#3a3530">WhatsApp</td><td style="font-size:12px;color:#6b6055">${dados.whatsapp}</td></tr>` : ''}
      <tr><td style="padding:3px 16px 3px 0;font-size:12px;color:#3a3530">Tempo de fé</td><td style="font-size:12px;color:#6b6055">${tempoLabel}</td></tr>
      ${dados.religiao ? `<tr><td style="padding:3px 16px 3px 0;font-size:12px;color:#3a3530">Religião</td><td style="font-size:12px;color:#6b6055">${dados.religiao}</td></tr>` : ''}
    </table>
  </td></tr>

  <tr><td style="padding:24px 0 0">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="width:48%;vertical-align:top;padding-right:12px">
        <p style="margin:0 0 10px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#3a3530">Dons de ministério (1Co12)</p>
        <table width="100%" cellpadding="0" cellspacing="0">${tabelaDons(rankMin)}</table>
      </td>
      <td style="width:4%;border-left:1px solid #1e1e1e"></td>
      <td style="width:48%;vertical-align:top;padding-left:12px">
        <p style="margin:0 0 10px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#3a3530">Dons motivacionais (Rm12)</p>
        <table width="100%" cellpadding="0" cellspacing="0">${tabelaDons(rankMot)}</table>
      </td>
    </tr></table>
  </td></tr>

  <tr><td style="padding:20px 0">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="width:48%;background:#111;border:1px solid #1e1e1e;border-radius:8px;padding:16px;vertical-align:top">
        <p style="margin:0 0 4px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#c8a97a">Ferida</p>
        <p style="margin:0 0 8px;font-size:16px;font-weight:300;color:#e8e0d4;font-family:Georgia,serif">${f?.nome} · ${f?.mascara}</p>
        <p style="margin:0;font-size:12px;color:#4a3a2a;line-height:1.6">${f?.padrao}</p>
      </td>
      <td style="width:4%"></td>
      <td style="width:48%;background:#111;border:1px solid #1e1e1e;border-radius:8px;padding:16px;vertical-align:top">
        <p style="margin:0 0 4px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#c8a97a">Temperamento</p>
        <p style="margin:0 0 8px;font-size:16px;font-weight:300;color:#e8e0d4;font-family:Georgia,serif">${t?.nome}</p>
        <p style="margin:0;font-size:12px;color:#4a3a2a;line-height:1.6">${t?.sombra}</p>
      </td>
    </tr></table>
  </td></tr>

  <tr><td style="padding:0 0 24px">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid #1e1e1e;border-radius:8px;padding:16px"><tr>
      <td><p style="margin:0 0 4px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#c8a97a">Saúde espiritual</p>
        <p style="margin:0;font-size:14px;color:${saudeCor}">${saudeLbl} · ${saudePct}%</p>
      </td>
    </tr><tr><td style="padding-top:10px">
      <div style="background:#1e1e1e;border-radius:2px;height:2px"><div style="width:${saudePct}%;background:${saudeCor};height:2px;border-radius:2px"></div></div>
    </td></tr></table>
  </td></tr>

  <tr><td style="padding:8px 0 20px;border-top:1px solid #1e1e1e">
    <p style="margin:12px 0 0;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#2a2a2a">Devolutiva completa — o que ${dados.nome} recebeu</p>
  </td></tr>

  <tr><td>${devolutivaHtml}</td></tr>

  <tr><td style="padding:28px 0 0;border-top:1px solid #1e1e1e">
    <p style="margin:0;font-size:11px;color:#2a2a2a">ATE · Análise de Tendência Espiritual · Claudio Alecrim</p>
  </td></tr>

</table></td></tr></table></body></html>`;
}

// ── SALVAR NO SUPABASE ────────────────────────────────────────
async function salvarSupabase(dados, relatorio, devolutiva) {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
  if (!SUPABASE_URL || !SUPABASE_KEY) return;

  const { eixos, ferida, temperamento } = relatorio;
  const donsMinIds = Object.keys(DONS_MIN);
  const donsMomIds = Object.keys(DONS_MOT);

  const payload = {
    nome:         dados.nome,
    email:        dados.email,
    whatsapp:     dados.whatsapp || null,
    tempo_fe:     dados.tempo_fe || null,
    religiao:     dados.religiao || null,
    don_min_dom:  DONS_MIN[donsMinIds.reduce((a,b) => (eixos[a]?.percentual||0) >= (eixos[b]?.percentual||0) ? a : b)]?.nome || null,
    don_mot_dom:  DONS_MOT[donsMomIds.reduce((a,b) => (eixos[a]?.percentual||0) >= (eixos[b]?.percentual||0) ? a : b)]?.nome || null,
    ferida:       ferida?.predominante || null,
    temperamento: temperamento?.dominante || null,
    saude_esp_pct: eixos['saude_esp']?.percentual || 0,
    eixos:        eixos,
    relatorio:    relatorio,
    devolutiva:   devolutiva
  };

  await fetch(`${SUPABASE_URL}/rest/v1/diagnosticos_ate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(payload)
  });
}

// ── HANDLER PRINCIPAL ─────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ erro: 'Método não permitido' });

  const { dados, relatorio } = req.body;
  if (!dados?.nome || !dados?.email || !relatorio) return res.status(400).json({ erro: 'Dados incompletos' });

  const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY;
  const RESEND_KEY    = process.env.RESEND_API_KEY;
  if (!ANTHROPIC_KEY || !RESEND_KEY) return res.status(500).json({ erro: 'Variáveis de ambiente não configuradas' });

  try {
    // 1. GERAR DEVOLUTIVA
    const iaRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': ANTHROPIC_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 1500, messages: [{ role: 'user', content: montarPrompt(dados.nome, relatorio) }] })
    });
    const iaData     = await iaRes.json();
    const devolutiva = iaData.content?.[0]?.text;
    if (!devolutiva) throw new Error('IA não retornou conteúdo');

    // 2. SALVAR + EMAILS EM PARALELO
    await Promise.allSettled([
      salvarSupabase(dados, relatorio, devolutiva),
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_KEY}` },
        body: JSON.stringify({ from: `Claudio Alecrim <${REMETENTE}>`, to: [dados.email], subject: `${dados.nome}, seu perfil espiritual está aqui`, html: emailAluno(dados.nome, devolutiva, relatorio) })
      }),
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_KEY}` },
        body: JSON.stringify({ from: `ATE · Claudio Alecrim <${REMETENTE}>`, to: [MENTOR_EMAIL], subject: `ATE · ${dados.nome} · ${FERIDAS[relatorio.ferida?.predominante]?.nome || ''} · ${TEMPERAMENTOS[relatorio.temperamento?.dominante]?.nome || ''}`, html: emailMentor(dados, devolutiva, relatorio) })
      })
    ]);

    return res.status(200).json({ devolutiva });

  } catch (err) {
    console.error('Erro ATE:', err.message);
    return res.status(500).json({ erro: err.message });
  }
}
