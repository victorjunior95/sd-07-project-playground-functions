// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let stringPhrase = phrase;
  return stringPhrase.split(" ");
}

// Desafio 4
function concatName(array) {
  let parArray = array;
  let arrayFirst = parArray[0];
  let arrayLast = parArray[parArray.length - 1];
  return (concatName = `${arrayLast}, ${arrayFirst}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3 + ties;
  return (footballPoints = winsPoints);
}

// Desafio 6
function highestCount(array) {
  let numberHigth = array[0];
  let somNumber = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > numberHigth) {
      numberHigth = array[i];
    }
  }
  for (let j = 0; j < array.length; j += 1) {
    if (numberHigth == array[j]) {
      somNumber += 1;
    }
  }
  return somNumber;
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
