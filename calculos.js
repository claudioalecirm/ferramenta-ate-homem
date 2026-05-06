// ============================================================
// MOTOR DIAGNÓSTICO — calculos.js
// Engine de pontuação. Não depende de nenhuma ferramenta específica.
// Recebe respostas brutas, devolve perfis calculados.
// ============================================================

const Calculos = (() => {

  // ------------------------------------------------------------
  // 1. PONTUAÇÃO POR EIXO
  // Recebe: respostas = { id_pergunta: valor_numerico (0-3) }
  //         eixos = [{ id, perguntas: ['Q1','Q2',...] }]
  // Devolve: { id_eixo: { pontos, max, percentual } }
  // ------------------------------------------------------------
  function calcularEixos(respostas, eixos) {
    const resultado = {};
    for (const eixo of eixos) {
      const pontos = eixo.perguntas.reduce((acc, id) => acc + (respostas[id] ?? 0), 0);
      const max = eixo.perguntas.length * 3;
      resultado[eixo.id] = {
        pontos,
        max,
        percentual: max > 0 ? Math.round((pontos / max) * 100) : 0
      };
    }
    return resultado;
  }

  // ------------------------------------------------------------
  // 2. IDENTIFICAR PERFIL DE UM EIXO
  // 4 faixas: 0-25% NIVEL_1 · 26-50% NIVEL_2 · 51-75% NIVEL_3 · 76-100% NIVEL_4
  // ------------------------------------------------------------
  function identificarNivel(percentual) {
    if (percentual <= 25) return 1;
    if (percentual <= 50) return 2;
    if (percentual <= 75) return 3;
    return 4;
  }

  // ------------------------------------------------------------
  // 3. IDENTIFICAR FERIDA PREDOMINANTE
  // Cada pergunta de ferida está mapeada para uma das 5 feridas.
  // Devolve a ferida com maior pontuação total.
  // ------------------------------------------------------------
  function identificarFerida(respostas, mapeamentoFeridas) {
    // mapeamentoFeridas = { REJEICAO: ['F1','F2',...], ABANDONO: [...], ... }
    const scores = {};
    for (const [ferida, ids] of Object.entries(mapeamentoFeridas)) {
      scores[ferida] = ids.reduce((acc, id) => acc + (respostas[id] ?? 0), 0);
    }
    const predominante = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    const ordenadas = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .map(([ferida, pts]) => ({ ferida, pts }));
    return { predominante, scores, ordenadas };
  }

  // ------------------------------------------------------------
  // 4. IDENTIFICAR TEMPERAMENTO DOMINANTE
  // Retorna o temperamento com maior pontuação.
  // ------------------------------------------------------------
  function identificarTemperamento(respostas, mapeamentoTemp) {
    // mapeamentoTemp = { COLERICO: ['T1','T2',...], MELANCOLICO: [...], ... }
    const scores = {};
    for (const [temp, ids] of Object.entries(mapeamentoTemp)) {
      scores[temp] = ids.reduce((acc, id) => acc + (respostas[id] ?? 0), 0);
    }
    const dominante = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    const secundario = Object.entries(scores).sort((a, b) => b[1] - a[1])[1][0];
    return { dominante, secundario, scores };
  }

  // ------------------------------------------------------------
  // 5. RELATÓRIO COMPLETO
  // Função principal — recebe tudo, devolve tudo calculado.
  // ------------------------------------------------------------
  function gerarRelatorio(respostas, config) {
    const eixos = calcularEixos(respostas, config.eixos || []);
    const niveis = {};
    for (const [id, dados] of Object.entries(eixos)) {
      niveis[id] = identificarNivel(dados.percentual);
    }
    const ferida = config.mapeamentoFeridas
      ? identificarFerida(respostas, config.mapeamentoFeridas)
      : null;
    const temperamento = config.mapeamentoTemperamento
      ? identificarTemperamento(respostas, config.mapeamentoTemperamento)
      : null;

    return { eixos, niveis, ferida, temperamento };
  }

  return { calcularEixos, identificarNivel, identificarFerida, identificarTemperamento, gerarRelatorio };
})();
