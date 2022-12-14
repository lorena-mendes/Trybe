import readline from 'readline-sync';

const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg' ];

function convertMass(value: number, baseUnit: string, conversationUnit: string): number {
  const indexBaseUnit = massUnits.indexOf(baseUnit);
  const indexConversationUnit = massUnits.indexOf(conversationUnit);
  const exponent = indexConversationUnit - indexBaseUnit;

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const baseUnitIndex = readline.keyInSelect(massUnits, 'Indique um número para a unidade base:');

  const conversationUnitIndex = readline.keyInSelect(massUnits, 'Indique um número para a conversão');

  const baseUnit = massUnits[baseUnitIndex];
  const conversationUnit = massUnits[conversationUnitIndex];

  if (!baseUnit || !conversationUnit) {
    console.log('Função cancelada');
    return 0;
  }

  const response = convertMass(value, baseUnit, conversationUnit);

  const message = `${value}${baseUnit} é igual a ${response}${conversationUnit}`;

  console.log(message);  
}

exec();
