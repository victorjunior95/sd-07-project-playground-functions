// Desafio 1 -
function compareTrue(value1, value2) {
  if (value1 && value2) {
  return true;
  }
  else {
  return false;
  }
}
// console.log(compareTrue(false,false));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}
// console.log(calcArea(10, 4));

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length-1];
  return ultimoNome + ", " + primeiroNome;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints() {
  // seu código aqui
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
