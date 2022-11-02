const readline = require('readline-sync');

function handleBmi(weight, height) {
    console.log(`Weight: ${weight}, Height: ${height}`);

    const heightInMeters = height / 100;
    const heightSquared = heightInMeters ** 2;

    const bmi = weight / heightSquared;
  
  return bmi;
}

const BMI_MIN_MAX = {
  'Abaixo do peso': {
    bmiMin: 0,
    bmiMax: 18.4,
  },

  'Peso normal': {
    bmiMin: 18.5,
    bmiMax: 24.9
  },

  'Acima do peso': {
    bmiMin: 25.0,
    bmiMax: 29.9,
  },

  'Obesidade grau I': {
    bmiMin: 30.0,
    bmiMax: 34.9,
  },

  'Obesidade grau II': {
    bmiMin: 35.0,
    bmiMax: 39.9,
  },

  'Obesidade grau III e IV': {
    bmiMin: 40.0,
    bmiMax: 80,  //colocar um valor máximo qualquer, que não será alcançado
  },
}

function handleResultBmi(bmi) {
  const resultBmi = Object.keys(BMI_MIN_MAX);

  const result = resultBmi.find((result) => {
    const { bmiMin, bmiMax } = BMI_MIN_MAX[result];
    return bmi >= bmiMin && bmi <= bmiMax;
  });
  return result;
}

function main() {
    const weightKg = readline.questionFloat('Qual seu peso?');
    const heightCm = readline.question('Qual sua altura?');
    const bmi = handleBmi(weightKg, heightCm);
    const bmiResult= handleResultBmi(bmi);
    console.log(`BMI: ${bmi.toFixed(2)}`);
    console.log(`Resultado: ${bmiResult}`);
  }
  
  main();