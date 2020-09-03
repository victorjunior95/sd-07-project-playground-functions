// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let result;
  if (a === true && b === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let total = (base * height) / 2;
  return total;
}

// Desafio 3
function splitSentence(trybe) {
  // seu código aqui
  let trybeSplit = trybe.split(' ');
  return trybeSplit;
}

// Desafio 4
function concatName(nameArray) {
  // seu código aqui
  let newArray = `${nameArray[nameArray.length - 1]}, ${nameArray[0]}`;
  return newArray.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = 0;
  let pointsForWin = 3;
  if (wins > 0) {
    for (let i = 1; i <= wins; i += 1) {
      totalPoints += pointsForWin;
    }
  }
  totalPoints += ties
  return totalPoints;
}

// Desafio 6
function highestCount(arrayCount) {
  // seu código aqui
  let countRepeatTotal = 0;
  let countRepeat = 0;
  for (let key in arrayCount) {
    for (let comparator in arrayCount) {
      if (arrayCount[comparator] === arrayCount[key]) {
        countRepeat += 1;
        if (countRepeat > countRepeatTotal) {
          countRepeatTotal += 1;
        }
      }
    }
    countRepeat = 0;
  }
  return countRepeatTotal;
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
