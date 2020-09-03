// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } return false;
}
console.log(compareTrue(0 < 1, 1 < 2)); // true
console.log(compareTrue(0 !== 1, 1 > 2)); // false


// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(2, 4)); // 4


// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}
console.log(splitSentence('go Trybe')); // ['go', 'Trybe']


// Desafio 4
function concatName(arrayString) {
  let firstItem = arrayString[0];
  let lastItem = arrayString[arrayString.length - 1];
  let string = lastItem.concat(', ', firstItem);
  return string;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])); // Paolillo, Lucas


// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let totalPoints = winsPoints + tiesPoints;
  return totalPoints;
}
console.log(footballPoints(2, 1)); // 7


// Desafio 6
function highestCount(numbers) {
  /* check number */
  let i = 0;
  for (let j in numbers) {
    if (numbers[i] < numbers[j]) {
      i = j;
    }
  }
  /* check count */
  let countNumber = 0;
  for (let k = 0; k < numbers.length; k += 1) {
    if (numbers[k] === numbers[i]) {
      countNumber += 1;
    }
  }
  return countNumber;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7])) // 2


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(0, 1, 2)) // cat1
console.log(catAndMouse(0, 2, 1)) // cat2
console.log(catAndMouse(0, 3, 3)) // os gatos trombam e o rato foge


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
