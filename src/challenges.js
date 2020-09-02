// Desafio 1
function compareTrue(boolA, boolB) {
  if (boolA && boolB === true) return true;
  else return false;
}

// Desafio 2
function calcArea(height, base) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splittedSentence = string.split(" ");
  return splittedSentence;
}

// Desafio 4
function concatName(arrayStrings) {
  let lastName = arrayStrings[arrayStrings.length - 1];
  let resultadoString = "";
  resultadoString = `${lastName}, ${arrayStrings[0]}`;
  return resultadoString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let championshipPoints = winPoints + ties;
  return championshipPoints;
}

// Desafio 6
function highestCount(array) {
  let higherNumber = 0;
  let countNumber = 0;
  for (let index in array) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[index] > array[i] && array[index] > higherNumber) {
        higherNumber = array[index];
      }
    }
  }
  for (let index in array) {
    if (array[index] === higherNumber) {
      countNumber += 1;
    }
  }
  return countNumber;
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
