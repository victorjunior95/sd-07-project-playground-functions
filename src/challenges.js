// Desafio 1
function compareTrue(valueA, valueB) {
  return valueA && valueB;
}
// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}
// Desafio 3
function splitSentence(inputSentence) {
  let output = inputSentence.split(' ');
  return output;
}
// Desafio 4
function concatName(nomeCompleto) {
  let output = nomeCompleto[nomeCompleto.length - 1] + ', ' + nomeCompleto[0];
  return output;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pointsWin = 3;
  let pointsTie = 1;
  let totalPoints = (wins * pointsWin) + (ties * pointsTie);
  return  totalPoints;
}
// Desafio 6
function highestCount(numbers) {

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
