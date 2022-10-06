//Para fixar

//1. Crie uma função que retorne a string 'Acordando!!';

const acordando = () => 'Acordando!!';

// console.log(acordando());

//2. Crie outra função que retorne a string 'Bora tomar café!!';

const tomarCafe = () => 'Bora tomar café!!';

// console.log(tomarCafe());

//3. Crie mais uma função que retorne a string 'Partiu dormir!!';

const dormir = () => 'Partiu dormir!!';

// console.log(dormir());

//4. Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores

const doingThings = (acoes) => acoes();

console.log(doingThings(acordando));
console.log(doingThings(tomarCafe));
console.log(doingThings(dormir));


