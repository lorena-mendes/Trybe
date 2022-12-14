import readline from 'readline-sync';

const capacityUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml' ];

function convertCapacity(value: number, baseUnit: string, conversationUnit: string): number {
  const indexBaseUnit = capacityUnits.indexOf(baseUnit);
  const indexConversationUnit = capacityUnits.indexOf(conversationUnit);
  const exponent = indexConversationUnit - indexBaseUnit;

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const baseUnitIndex = readline.keyInSelect(capacityUnits, 'Indique um número para a unidade base:');

  const conversationUnitIndex = readline.keyInSelect(capacityUnits, 'Indique um número para a conversão');

  const baseUnit = capacityUnits[baseUnitIndex];
  const conversationUnit = capacityUnits[conversationUnitIndex];

  if (!baseUnit || !conversationUnit) {
    console.log('Função cancelada');
    return 0;
  }

  const response = convertCapacity(value, baseUnit, conversationUnit);

  const message = `${value}${baseUnit} é igual a ${response}${conversationUnit}`;

  console.log(message);  
}

exec();