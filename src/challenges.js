// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  else {
    return false;
  }
}  

compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;

  return areaTriangulo;
}

calcArea (2, 4);

// Desafio 3
function splitSentence(string) {
  let stringArray = string.split(" ");

  return stringArray;
}

splitSentence("go trybe");

// Desafio 4
function concatName(array) {
  let soma = array[array.length-1]+", "+array[0];  

  return soma;
}

concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoint = wins * 3;
  let championshipPoint = winsPoint + ties;

  return championshipPoint;
}

footballPoints(3, 1);

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
