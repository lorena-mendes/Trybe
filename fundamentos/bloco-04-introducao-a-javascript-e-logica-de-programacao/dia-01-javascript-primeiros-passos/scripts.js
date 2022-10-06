//8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
const x = 3;
const y = 5;
const z = 1;

if ((x % 2 === 0 || y % 2 === 0 || z % 2 === 0)) {
    console.log("true")
} else {
    console.log("false")
};

//9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

const a = 8;
const b = 10;
const c = 12;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
    console.log("true")
} else {
    console.log("false")
};

//10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. 
//Atente que, sobre o custo do produto, incide um imposto de 20%.
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
//O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//valorCustoTotal = valorCusto + impostoSobreOCusto
//lucro = valorVenda - valorCustoTotal (lucro de um produto)

const custoProduto = 20;
const valorVenda = 50;

if (custoProduto >= 0 && valorVenda >= 0) {
    const custoTotal = custoProduto * 1.2;
    const lucro = (valorVenda - custoTotal)
    console.log(lucro)
} else {
    console.log("Erro!! Valor inválido");
}

//11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
//A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//INSS (Instituto Nacional do Seguro Social)
    //Salário bruto até R$ 1.556,94: alíquota de 8%
    //Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
    //Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
    //Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//IR (Imposto de Renda)
    //Até R$ 1.903,98: isento de imposto de renda
    //De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
    //De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
    //De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
    //Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
//Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
    //O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
    //Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
    //Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
    //R$ 2.670,00: salário com INSS já deduzido;
    //7.5%: alíquota de imposto de renda;
    //R$ 142,80 parcela a se deduzir do imposto.
    //Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
    //O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
    //Resultado: R$ 2.612,55.

let aliquotaInss;
let aliquotaIr;

const salarioBruto = 3000;

if (salarioBruto <= 1566.94) {
    aliquotaInss = salarioBruto * 0.08;
} else if (salarioBruto >= 1566.95 && salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaInss = (salarioBruto * 0.11)
} else {
    aliquotaInss = 570.88;
}
const salarioBase = salarioBruto - aliquotaInss

if (salarioBase <= 1903.98) {
    aliquotaIr = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliquotaIr = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquotaIr = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 3571.06 && salarioBase <= 4664.68) {
    aliquotaIr = (salarioBase * 0.225) - 636.13;
} else {
    salarioBase = (salarioBase * 0.275) - 869.36;
};
console.log("Salário: " + (salarioBase - aliquotaIr));