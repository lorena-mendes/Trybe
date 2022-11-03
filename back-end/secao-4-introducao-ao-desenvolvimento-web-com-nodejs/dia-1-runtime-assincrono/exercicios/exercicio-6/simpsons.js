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

async function deletetSimpsonByID() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8') 
  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson) => Number(simpson.id) !== 10 && Number(simpson.id) !== 6);
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function createSimpsonsFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8') 
  const simpsons = JSON.parse(fileContent);
  const family = [1,2,3,4];
  const simpsonsFamily = simpsons
    .filter((simpson) => family.includes(Number(simpson.id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

function main() {
  // readAll();
  // getSimpsonByID(1).then((simpson) => console.log(simpson));
  // deletetSimpsonByID();
  createSimpsonsFamily();
}

main();