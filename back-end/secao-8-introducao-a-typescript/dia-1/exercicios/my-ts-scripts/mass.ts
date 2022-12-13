const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg' ];

function convertMass(valor: number, unidadeBase: string, unidadeConversao: string): number {
  const indexUnidadeBase = massUnits.indexOf(unidadeBase);
  const indexUnidadeConversao = massUnits.indexOf(unidadeConversao);
  const expoente = indexUnidadeConversao - indexUnidadeBase;

  return valor * Math.pow(10, expoente);
}
