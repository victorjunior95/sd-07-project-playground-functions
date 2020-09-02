// Desafio 1
function compareTrue(valor1,valor2) {
  // seu código aqui
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let arrayPalavras = str.split(" ");
  return arrayPalavras;
}

// Desafio 4
function concatName(concatenacao) {
  // seu código aqui
  let concat = concatenacao[concatenacao.length -1] + ', ' + concatenacao[0];
  //let concat=[]; //2ª opção
  //concat.push(concatenacao[concatenacao.length -1], concatenacao[0]);
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  // vitórias = 3 pts, empates = 1 pt.
  let point = (wins * 3) + ties;
  return point;
}

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
