import readline from 'readline-sync';

const areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²' ];

function convertArea(value: number, baseUnit: string, conversationUnit: string): number {
  const indexBaseUnit = areaUnits.indexOf(baseUnit);
  const indexConversationUnit = areaUnits.indexOf(conversationUnit);
  const exponent = indexConversationUnit - indexBaseUnit;

  return value * Math.pow(100, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const baseUnitIndex = readline.keyInSelect(areaUnits, 'Indique um número para a unidade base:');

  const conversationUnitIndex = readline.keyInSelect(areaUnits, 'Indique um número para a conversão');

  const baseUnit = areaUnits[baseUnitIndex];
  const conversationUnit = areaUnits[conversationUnitIndex];

  if (!baseUnit || !conversationUnit) {
    console.log('Função cancelada');
    return 0;
  }

  const response = convertArea(value, baseUnit, conversationUnit);

  const message = `${value}${baseUnit} é igual a ${response}${conversationUnit}`;

  console.log(message);  
}

exec();
