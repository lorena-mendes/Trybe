const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({id, name}) => `${id} - ${name}`);
    
  strings.forEach((string) => console.log(string));
}

async function getSimpsonByID(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8') 
  const simpsons = JSON.parse(fileContent);
  const idSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
  if(!idSimpson){
    throw new Error('id não encontrado')
  }
  return idSimpson
}

function main() {
  // readAll();
  getSimpsonByID(1).then((simpson) => console.log(simpson));
}

main();