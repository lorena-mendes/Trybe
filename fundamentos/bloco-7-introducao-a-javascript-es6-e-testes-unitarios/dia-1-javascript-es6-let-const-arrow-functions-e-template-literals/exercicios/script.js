
//PARTE I

//1.Altere as variáveis para respeitarem o escopo em que foram declaradas.
//Modifique a estrutura da função para que ela seja uma arrow function;
//Modifique as variáveis para que respeitem o escopo onde estão declaradas;
//Modifique as concatenações para template literals.

function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope =  `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

//2.Crie uma função que retorne um array em ordem crescente.

// Seu código aqui.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a,b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

//PARTE II

//1.Crie uma função que receba um número e retorne seu fatorial.

const fatorial = (x) => {
  if (x == 0) {
    return 1;
  } else {
    return x * fatorial(x-1);
  }
};
console.log(fatorial (5));

const fat = x => (x == 0) ? 1 : x * fat(x-1);
console.log(fat(0))