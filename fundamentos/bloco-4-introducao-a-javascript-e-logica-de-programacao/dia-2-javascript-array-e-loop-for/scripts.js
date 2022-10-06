let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let index = 0; index < numbers.length; index += 1)
console.log(numbers[index]);

//2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
}
console.log(soma);

//3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

for (let index = 0; index <numbers.length; index += 1) {
    soma += numbers[index]
}
 let mediaArit = soma / numbers.length
 console.log(mediaArit);

//4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mediaArit > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor que 20");
}

//5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index]
    }
}
console.log(maiorNumero);

//6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !==0) {
       resultado += 1; 
    } 
}

if (resultado === 0) {
    console.log("Nenhum valor encontrado");
} else {
    console.log(resultado);
}

//7.Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index]
    }
}
console.log(menorNumero);

//8.Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let numeros = [];

for (let index = 1; index <= 25; index += 1) {
    numeros.push(index);
}
console.log(numeros);

//9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < numeros.length; index += 1) {
    console.log(numeros[index] / 2);
}

//Exercícios Bônus
//1. Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers2.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
        if (numbers2[index] < numbers2[index2]) {
            let position = numbers2[index];
            numbers2[index] = numbers2[index2];
            numbers2[index2] = position;
        }
    }
} 
console.log(numbers2);

//2. Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers2.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
        if (numbers2[index] > numbers2[index2]) {
            let position = numbers2[index];
            numbers2[index] = numbers2[index2];
            numbers2[index2] = position;
        }
    }
} 
console.log(numbers2);

//3. Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
for (let index = 0; index < numbers2.length; index += 1) {
    if (index + 1 < numbers2.length) {
        newNumbers.push(numbers2[index] * numbers2[index + 1]);
    } else {
        newNumbers.push(numbers2[index] *2);
    }
} 
console.log(newNumbers);


