// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentense) {
  let splitted = sentense.split(" ");
  return splitted;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let lastString = "";
  let firstString = "";
  let lastCommaFirst = "";

  firstString = arrayDeStrings[0];
  lastString = arrayDeStrings[arrayDeStrings.length - 1];

  lastCommaFirst = lastString + ", " + firstString;

  return lastCommaFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoint = 3;
  let tiePoins = 1;
  let totalPoints = wins * winPoint + ties * tiePoins;
  return totalPoints;
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
