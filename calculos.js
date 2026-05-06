// ============================================================
// MOTOR DIAGNÓSTICO — calculos.js v2
// Duas escalas separadas:
//   ESCALA_DOM  — alto = expressão forte (dons espirituais)
//   ESCALA_PROB — alto = problema (feridas, saúde invertida)
// ============================================================

const Calculos = (() => {

  // ------------------------------------------------------------
  // 1. PONTUAÇÃO POR EIXO
  // ------------------------------------------------------------
  function calcularEixos(respostas, eixos) {
    const resultado = {};
    for (const eixo of eixos) {
      const pontos = eixo.perguntas.reduce((acc, id) => acc + (respostas[id] ?? 0), 0);
      const max    = eixo.perguntas.length * 3;
      resultado[eixo.id] = {
        pontos,
        max,
        percentual: max > 0 ? Math.round((pontos / max) * 100) : 0
      };
    }
    return resultado;
  }

  // ------------------------------------------------------------
  // 2. NÍVEIS — DOM (alto = positivo)
  // Latente · Presente · Expressivo · Dominante
  // ------------------------------------------------------------
  function nivelDom(percentual) {
    if (percentual <= 25) return { nivel: 1, label: 'Latente',    cor: '#3a3530' };
    if (percentual <= 50) return { nivel: 2, label: 'Presente',   cor: '#7a6a5a' };
    if (percentual <= 75) return { nivel: 3, label: 'Expressivo', cor: '#c8a97a' };
    return                       { nivel: 4, label: 'Dominante',  cor: '#e8c88a' };
  }

  // ------------------------------------------------------------
  // 3. NÍVEIS — PROBLEMA (alto = negativo)
  // Leve · Moderado · Intenso · Dominante
  // Usado para: feridas, saúde espiritual invertida
  // ------------------------------------------------------------
  function nivelProb(percentual) {
    if (percentual <= 25) return { nivel: 1, label: 'Leve',      cor: '#4a9e6e' };
    if (percentual <= 50) return { nivel: 2, label: 'Moderado',  cor: '#c8a97a' };
    if (percentual <= 75) return { nivel: 3, label: 'Intenso',   cor: '#c87a4a' };
    return                       { nivel: 4, label: 'Dominante', cor: '#c84a4a' };
  }

  // ------------------------------------------------------------
  // 4. SAÚDE ESPIRITUAL (alto = bom — escala dom)
  // Frágil · Instável · Em processo · Consistente
  // ------------------------------------------------------------
  function nivelSaude(percentual) {
    if (percentual <= 25) return { nivel: 1, label: 'Frágil',       cor: '#c84a4a' };
    if (percentual <= 50) return { nivel: 2, label: 'Instável',     cor: '#c87a4a' };
    if (percentual <= 75) return { nivel: 3, label: 'Em processo',  cor: '#c8a97a' };
    return                       { nivel: 4, label: 'Consistente',  cor: '#4a9e6e' };
  }

  // ------------------------------------------------------------
  // 5. RESOLVER NÍVEL POR TIPO DE EIXO
  // A ferramenta declara o tipo de cada eixo na config
  // ------------------------------------------------------------
  function resolverNivel(eixoId, percentual, config) {
    const tipo = config.tiposEixo?.[eixoId] || 'dom';
    if (tipo === 'saude')   return nivelSaude(percentual);
    if (tipo === 'prob')    return nivelProb(percentual);
    return nivelDom(percentual); // padrão: dom
  }

  // ------------------------------------------------------------
  // 6. FERIDA PREDOMINANTE
  // ------------------------------------------------------------
  function identificarFerida(respostas, mapeamento) {
    const scores = {};
    for (const [ferida, ids] of Object.entries(mapeamento)) {
      scores[ferida] = ids.reduce((acc, id) => acc + (respostas[id] ?? 0), 0);
    }
    const ordenadas   = Object.entries(scores).sort((a, b) => b[1] - a[1]).map(([ferida, pts]) => ({ ferida, pts }));
    const predominante = ordenadas[0][0];
    return { predominante, scores, ordenadas };
  }

  // ------------------------------------------------------------
  // 7. TEMPERAMENTO DOMINANTE
  // ------------------------------------------------------------
  function identificarTemperamento(respostas, mapeamento) {
    const scores = {};
    for (const [temp, ids] of Object.entries(mapeamento)) {
      scores[temp] = ids.reduce((acc, id) => acc + (respostas[id] ?? 0), 0);
    }
    const ordenados  = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const dominante  = ordenados[0][0];
    const secundario = ordenados[1][0];
    return { dominante, secundario, scores };
  }

  // ------------------------------------------------------------
  // 8. RELATÓRIO COMPLETO
  // ------------------------------------------------------------
  function gerarRelatorio(respostas, config) {
    const eixos  = calcularEixos(respostas, config.eixos || []);
    const niveis = {};
    for (const [id, dados] of Object.entries(eixos)) {
      niveis[id] = resolverNivel(id, dados.percentual, config);
    }
    const ferida       = config.mapeamentoFeridas       ? identificarFerida(respostas, config.mapeamentoFeridas)           : null;
    const temperamento = config.mapeamentoTemperamento  ? identificarTemperamento(respostas, config.mapeamentoTemperamento) : null;
    return { eixos, niveis, ferida, temperamento };
  }

  return { calcularEixos, nivelDom, nivelProb, nivelSaude, resolverNivel, identificarFerida, identificarTemperamento, gerarRelatorio };
})();
