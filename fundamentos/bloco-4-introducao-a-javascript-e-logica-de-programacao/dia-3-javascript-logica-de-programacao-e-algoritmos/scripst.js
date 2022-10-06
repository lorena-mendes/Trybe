//1.O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}
console.log(fatorial);

//2.Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let contrario = '';

for (let index = 0; index < word.length; index += 1) {
    contrario += word[word.length - 1 - index];
}
console.log(contrario);

//3.Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}

for (let index = 0; index <array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
}
console.log(maiorPalavra);
console.log(menorPalavra);

//4.Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorPrimo = [];
for (let index = 0; index <= 50; index += 1) {
    let primo = true;
    for (let divisor = 2; divisor < index; divisor += 1) {
        if (index % divisor === 0) {
            primo = false;
        }
    }
    if (primo) {
        maiorPrimo = index;
    }
}
console.log(maiorPrimo);

//Exercícios Bônus

//1.  Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let valor = 5;
let simbolo = '*'
let linhas = '';

for (let index = 0; index < valor; index += 1) {
    linhas = linhas + simbolo;
};
for (let index = 0; index < valor; index += 1) {
    console.log(linhas);
};

// //2.Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

for (let index = 0; index <= valor; index += 1) {
    console.log(linhas)
    linhas = linhas + simbolo;
};

//3.Agora inverta o lado do triângulo

let inputPosition = valor;
for (let index = 0; index <= valor; index += 1) {
    for (let index2 = 0; index2 <= valor; index2 +=1) {
        if (index2 < inputPosition) {
            linhas = linhas + ' ';
        } else {
            linhas = linhas + simbolo;
        }
    }
    console.log(linhas);
    linhas = '';
    inputPosition -= 1;
};

//4.Depois, faça uma pirâmide com n asteriscos de base:

let meio = (valor +1) / 2;
let controlLeft = meio;
let controlRight = meio;
// let inputPosition = valor;
for (let index = 0; index <= meio; index += 1) {
    for (let index2 = 0; index2 <= valor; index2 +=1) {
        if (index2 > controlLeft && index2 < controlRight) {
            linhas = linhas + simbolo;
        } else {
            linhas = linhas + ' ';
        }
    }
    console.log(linhas);
    linhas = '';
    controlRight += 1;
    controlLeft -=1;
};

//5.Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

