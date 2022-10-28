const readline = require('readline-sync');

function handleBmi(weight, height) {
    console.log(`Weight: ${weight}, Height: ${height}`);

    const heightInMeters = height / 100;
    const heightSquared = heightInMeters ** 2;

    const bmi = weight / heightSquared;
  
  return bmi;
}

function main() {
    const weightKg = readline.question('Qual seu peso?');
    const heightCm = readline.question('Qual sua altura?');
    const bmi = handleBmi(weightKg, heightCm);
    console.log(`BMI: ${bmi.toFixed(2)}`);
  }
  
  main();