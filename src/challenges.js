// Iniciando projeto

// Desafio 1
function compareTrue(yes, no) {
  let boolean = yes && no
  return boolean;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(sentense) {
  let divideSentense = sentense.split(' ');
  return divideSentense;
}

// Desafio 4
function concatName(arr) {
  let concatElements = `${arr[arr.length - 1]}, ${arr[0]}`;
  return concatElements;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultGame = wins * 3 + ties * 1;
  return resultGame;
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
