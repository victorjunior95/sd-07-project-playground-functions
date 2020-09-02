// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

let valorBool1 = true;
let valorBool2 = false;

console.log(compareTrue(valorBool1, valorBool2));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

let base = 4;
let height = 4;

console.log(calcArea(base, height));

// Desafio 3
function splitSentence(stringValue) {
  let arrayString = [];
  return arrayString = stringValue.split(" ");
}

let sentence = "go Trybe";
console.log(splitSentence(sentence));

// Desafio 4
function concatName(arrayStrings) {

  let array = [] = arrayStrings;

  let firstName = array[0];
  let lastName = array[array.length - 1]
  return lastName + ', ' + firstName;

}

let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(array));

// Desafio 5
function footballPoints(wins, ties) {

  let tie = ties * 1;
  let win = wins * 3;
  let total = tie + win;

  return total;
}

console.log(footballPoints(3, 3));

// Desafio 6
function highestCount(arrayNumbers) {

  let higher = arrayNumbers[0];
  let counter = 0;

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > higher)
      higher = arrayNumbers[i];
  }

  for (let j = 0; j < arrayNumbers.length; j += 1) {
    if (higher == arrayNumbers[j]) {
      counter += 1;
    }
  }

  return counter;
}

let array = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(array));

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
