function userInfo() {
  let userEmail = 'maria@email.com';
  console.log(userEmail);
  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  
}
userInfo();

if (true) {
  // inicio do escopo do if
  var userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

const printName = () => {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());