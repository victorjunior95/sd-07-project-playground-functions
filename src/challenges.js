// Desafio 1
function compareTrue(value1, value2) {
  result = value1 && value2;
  return result;
}
// Desafio 2
function calcArea(base, height) {
  result = (base * height) / 2;
  return result;
}
/*
// Desafio 3 << Falta fazer.
function splitSentence(value) {
  valueArray = value.split(" ")
}
splitSentence("Teste", "Oi")
console.log(valueArray)
*/
/*
// Desafio 4
function concatName(array) {
  firstItem = array[0];
  lastItem = array[-1];
  resultItem = firstItem + lastItem;
}
console.log(resultItem)
concatName("Teste", "testei")
*/
// Desafio 5
function footballPoints(wins, ties) {
  points = 0;
  eachWin = 3;
  eachTies = 1;
  for ( i = 0; i < wins; i += 1) {
    points += eachWin;
  }
  for ( i = 0; i < ties; i += 1) {
    points += eachTies;
  }
  return points;
}
/*
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
*/