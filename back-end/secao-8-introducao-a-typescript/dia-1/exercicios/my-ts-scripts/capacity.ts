const capacityUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml' ];

function convertCapacity(valor: number, unidadeBase: string, unidadeConversao: string): number {
  const indexUnidadeBase = capacityUnits.indexOf(unidadeBase);
  const indexUnidadeConversao = capacityUnits.indexOf(unidadeConversao);
  const expoente = indexUnidadeConversao - indexUnidadeBase;

  return valor * Math.pow(10, expoente);
}