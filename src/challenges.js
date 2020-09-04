// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }

  if (a === false && b === true) {
    return false;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, heigth) {
  let formula = (base * heigth) / 2;
  return formula;
}

// Desafio 3
function splitSentence(str) {
  return str.split(" ");
}

// Desafio 4
function concatName(array) {
  let lastItem ;
  let firstItem;
  
  firstItem = array[0];
  lastItem = array[array.length - 1];

  // for (const key in array) {lastItem = array[key];}
  array = [firstItem];
  array.push(lastItem);

  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  let wins = 3;
  let ties = 1;
  let vitorias = wins + ties;
  return vitorias;
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
};
