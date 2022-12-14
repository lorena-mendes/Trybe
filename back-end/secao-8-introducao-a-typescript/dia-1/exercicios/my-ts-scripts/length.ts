import readline from 'readline-sync';

const lengthUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm' ];

function convertLength(value: number, baseUnit: string, conversationUnit: string): number {
  const indexBaseUnit = lengthUnits.indexOf(baseUnit);
  const indexConversationUnit = lengthUnits.indexOf(conversationUnit);
  const exponent = indexConversationUnit - indexBaseUnit;

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const baseUnitIndex = readline.keyInSelect(lengthUnits, 'Indique um número para a unidade base:');

  const conversationUnitIndex = readline.keyInSelect(lengthUnits, 'Indique um número para a conversão');

  const baseUnit = lengthUnits[baseUnitIndex];
  const conversationUnit = lengthUnits[conversationUnitIndex];

  if (!baseUnit || !conversationUnit) {
    console.log('Função cancelada');
    return 0;
  }

  const response = convertLength(value, baseUnit, conversationUnit);

  const message = `${value}${baseUnit} é igual a ${response}${conversationUnit}`;

  console.log(message);  
}

exec();
