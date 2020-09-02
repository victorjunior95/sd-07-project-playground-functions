// Desafio 1
function compareTrue(a, b) {
  let compare = a && b;
  return compare;
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let trianguloArea = ((base * height)/2);
  return trianguloArea;
}

console.log(calcArea(8, 4));

// Desafio 3
function splitSentence(frase) {
  let aPalavras = frase.split(' ');
  return aPalavras;
}

console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(nomes) {
  let tamanho = nomes[nomes.length -1] + `, ` + nomes[0];

  return tamanho;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties ) {
  pontos = (wins * 3) + ties;
  return pontos;
}

console.log(footballPoints(7, 5));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
