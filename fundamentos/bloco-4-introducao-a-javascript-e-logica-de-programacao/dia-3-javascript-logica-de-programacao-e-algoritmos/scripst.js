//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}
console.log(fatorial);

//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let contrario = '';

for (let index = 0; index < word.length; index += 1) {
    contrario += word[word.length - 1 - index];
}
console.log(contrario);