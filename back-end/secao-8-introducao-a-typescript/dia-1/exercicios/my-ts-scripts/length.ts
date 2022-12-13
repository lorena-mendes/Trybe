const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm' ];

function convert(valor: number, unidadeBase: string, unidadeConversao: string): number {
  const indexUnidadeBase = units.indexOf(unidadeBase);
  const indexUnidadeConversao = units.indexOf(unidadeConversao);
  const expoente = indexUnidadeConversao - indexUnidadeBase;

  return valor * Math.pow(10, expoente);
}
