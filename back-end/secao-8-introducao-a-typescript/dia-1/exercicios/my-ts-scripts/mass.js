var massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convertMass(valor, unidadeBase, unidadeConversao) {
    var indexUnidadeBase = massUnits.indexOf(unidadeBase);
    var indexUnidadeConversao = massUnits.indexOf(unidadeConversao);
    var expoente = indexUnidadeConversao - indexUnidadeBase;
    return valor * Math.pow(10, expoente);
}
