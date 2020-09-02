// Desafio 1
function compareTrue(value1, value2) {
  let result = value1 && value2;
  return result;
}
// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3 << Falta fazer.
function splitSentence(value) {
  
}

// Desafio 4
function concatName(array) {
 
}


// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  let eachWin = 3;
  let eachTies = 1;
  for (let i = 0; i < wins; i += 1) {
    points += eachWin;
  }
  for (let i = 0; i < ties; i += 1) {
    points += eachTies;
  }
  return points;
}

// Desafio 6
function highestCount(array) {
  let highNumer = 0;
  let repeatHighNumer = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] >= highNumer) {
      highNumer = array[i];
      repeatHighNumer += 1;
    }
  }
  return repeatHighNumer;
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
