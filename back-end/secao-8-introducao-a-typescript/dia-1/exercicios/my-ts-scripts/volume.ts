import readline from 'readline-sync';

const volumeUnits = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³' ];

function convertVolume(value: number, baseUnit: string, conversationUnit: string): number {
  const indexBaseUnit = volumeUnits.indexOf(baseUnit);
  const indexConversationUnit = volumeUnits.indexOf(conversationUnit);
  const exponent = indexConversationUnit - indexBaseUnit;

  return value * Math.pow(1000, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const baseUnitIndex = readline.keyInSelect(volumeUnits, 'Indique um número para a unidade base:');

  const conversationUnitIndex = readline.keyInSelect(volumeUnits, 'Indique um número para a conversão');

  const baseUnit = volumeUnits[baseUnitIndex];
  const conversationUnit = volumeUnits[conversationUnitIndex];

  if (!baseUnit || !conversationUnit) {
    console.log('Função cancelada');
    return 0;
  }

  const response = convertVolume(value, baseUnit, conversationUnit);

  const message = `${value}${baseUnit} é igual a ${response}${conversationUnit}`;

  console.log(message);  
}

exec();