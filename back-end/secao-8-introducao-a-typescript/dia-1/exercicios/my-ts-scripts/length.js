var units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convert(valor, unidadeBase, unidadeConversao) {
    var indexUnidadeBase = units.indexOf(unidadeBase);
    var indexUnidadeConversao = units.indexOf(unidadeConversao);
    var expoente = indexUnidadeConversao - indexUnidadeBase;
    return valor * Math.pow(10, expoente);
}
console.log(convert);
