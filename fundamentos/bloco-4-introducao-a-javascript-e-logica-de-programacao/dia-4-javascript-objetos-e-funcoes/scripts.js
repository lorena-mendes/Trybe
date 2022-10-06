//Para fixar - Objetos:
//1.Crie um objeto player contendo as variáveis listadas abaixo.

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3},
}

//2.Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

//3.Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player ['bestInTheWorld']= [2006, 2007, 2008, 2009, 2010, 2018];

//4.Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

//5.Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

//Para fixar - for/in e for/of
//1.Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for ( let index in names) {
      console.log('Olá ' + names[index]);
  };

  //2.Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let index in car) {
      console.log(index, car[index]);
  };

  //Refazendo os exercícios de 1 a 5 do dia 4.1

  //1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)

function soma(a,b) {
    return a + b;
};
function sub(a,b) {
    return a - b;
};
function multi(a,b) {
    return a * b;
};
function divi(a,b) {
    return a / b;
};
function mod(a,b) {
    return a % b;
};

//2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

function bigNumber(number1, number2) {
    if (number1 > number2) {
        return number1
    } else {
        return number2
    };
};


//3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

function maiorNumero(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 >num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    };
};
//4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function resultado(numero) {
    if (numero > 0) {
        return 'Positivo';
    } else if (numero < 0) {
        return 'Negativo';
    } else {
        return 'Zero';
    };
};

//5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function triangulo(ang1, ang2, ang3) {
    let soma = ang1 + ang2 + ang3;
    let angulosPositivos = ang1 > 0 && ang2 > 0 && ang3 > 0;

    if (angulosPositivos) {
        if (soma === 180) {
            return true;
        } else {
           return false;
        };
    } else {
        return 'Erro! Ângulo inválido';
    };
};

// Exercícios Parte I - Objetos e For/In

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

console.log('Bem vinda, ' + info.personagem);

//2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info.recorrente = 'Sim';
console.log(info);

//3.Faça um for/in que mostre todas as chaves do objeto.

for ( let key in info) {
    console.log(key);
};

// //4.Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

for ( let key in info) {
    console.log(info[key]);
};

//5.Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  for (let key in info) {
    if ( key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
        console.log('Ambos concorrentes')
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    };
  };
  

  //Usando o objeto abaixo, faça os exercícios a seguir:
  
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  //6.Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

  //7.Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

  leitor.livrosFavoritos.push (
     {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco', 
  },
  );
  console.log(leitor);

//8. Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');

// Exercícios parte II - Funções

//1.Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome (palavra) {
    let reverse = palavra.split('').reverse().join('');
    if (reverse === palavra) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));


//2.Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.

// function maiorValor (numeros) {
//     let maior = 0;
//     for (let index in numeros) {
//         if (numeros[maior] < numeros[index]) {
//             maior = index;
//         }
//     }
//     return maior;
// }
// console.log(maiorValor([2, 3, 6, 7, 10, 1]));

//3.Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor (numeros) {
    let menor = 0;
    for (let index in numeros) {
        if (numeros[menor] > numeros[index]) {
            menor = index;
        }
    }
    return menor;
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

//4.Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorPalavra (palavras) {
    let maiorPalavra = palavras[0];
    for (let palavra of palavras) {
        if (maiorPalavra.length < palavra.length) {
            maiorPalavra = palavra;
        }
    }
    return maiorPalavra;
}
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5.Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maiorValor (numeros) {
    let maior = 0;
    for (let index in numeros) {
        if (numeros[maior] < numeros[index]) {
            maior = index;
        }
    }
    return maior;
}

function calculaInteiroRepete(number){
    let arrayIndexCont = [];
    for (let index = 0; index < number.length; index += 1){
        let cont = 0;
        for (let index2 = 0; index2 < number.length; index2 += 1) {
          if (number[index] === number[index2]) {
            cont +=1;
          };
        };
        arrayIndexCont.push(cont)
      };
      return arrayIndexCont
}

let arrayValido = [2, 3, 2, 5, 8, 2, 3]
let resultadoCalculaInteiro = calculaInteiroRepete(arrayValido);
let indexMaior = maiorValor(resultadoCalculaInteiro)
console.log(arrayValido[indexMaior]);

//6. Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somatorioTodosNumeros(numero) {
    let somatorio = 0;
    for (let index = 0; index <= numero; index += 1) {
        somatorio = somatorio + index
    }
    return somatorio;
}
console.log(somatorioTodosNumeros(5));

//7.Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verificaPalavra (word, ending) {
    word = word.split('');
    ending = ending.split('');
    console.log(word, ending)
    for (let index = 0; index < ending.length; index +=1){
        if (word[word.length - ending.length + index] != ending[index]) {
            return false;
        } else {
            return true;
        }
    }
    return verificaPalavra;
}

console.log(verificaPalavra('trybe', 'be'));
console.log(verificaPalavra('joaoFernando', 'fernan'));

//Bônus

const romanos = {
    i:1,
    v:5,
    x:10,
    l:50,
    c:100,
    d:500,
    m:1000,
}
for (let numero in romanos) {
}
console.log(romanos);
