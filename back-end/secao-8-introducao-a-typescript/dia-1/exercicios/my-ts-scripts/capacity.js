var capacityUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convertCapacity(valor, unidadeBase, unidadeConversao) {
    var indexUnidadeBase = capacityUnits.indexOf(unidadeBase);
    var indexUnidadeConversao = capacityUnits.indexOf(unidadeConversao);
    var expoente = indexUnidadeConversao - indexUnidadeBase;
    return valor * Math.pow(10, expoente);
}
