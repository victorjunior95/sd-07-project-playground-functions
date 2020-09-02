// Desafio 1
function compareTrue(boolean1, boolean2) {
  let equalBollean;
  if (boolean1 === true && boolean2 === true) {
    equalBollean = true;
  } else {
    equalBollean = false;
  }

  return equalBollean;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(stringSentence) {
  let splitArray = stringSentence.split(' ');
  return splitArray;
}

// Desafio 4
function concatName(stringsArray) {
  return `${stringsArray[stringsArray.length - 1]}, ${stringsArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = 3;
  let draw = 1;
  let points = (wins * victory) + (ties * draw);
  return points;
}

// Desafio 6
function highestCount(numbersArray) {
  let counter = 0;
  let highNumber = numbersArray[0];
  for (let i in numbersArray) {
    if (numbersArray[i] > highNumber) {
      highNumber = numbersArray[i];
    }
  }

  for (let j in numbersArray) {
    if (numbersArray[j] === highNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  let successfulCatch;

  if (positionCat1 > positionCat2) {
    successfulCatch = "cat2";
  } else if (positionCat2 > positionCat1) {
    successfulCatch = "cat1";
  } else if (positionCat1 === positionCat2) {
    successfulCatch = "os gatos trombam e o rato foge";
  }

  return successfulCatch;
}

// Desafio 8
function fizzBuzz(evenOddArray) {
  let divisible;
  let divisibleBy3;
  let divisibleBy5;
  let indivisible;
  let array = [];

  for (let i in evenOddArray) {
    if (evenOddArray[i] % 3 === 0 && evenOddArray[i] % 5 === 0) {
      divisible = "fizzBuzz";
      array.push(divisible);
    } else if (evenOddArray[i] % 3 === 0) {
      divisibleBy3 = "fizz";
      array.push(divisibleBy3);
    } else if (evenOddArray[i] % 5 === 0) {
      divisibleBy5 = "buzz";
      array.push(divisibleBy5);
    } else {
      indivisible = "bug!";
      array.push(indivisible);
    }
  }

  return array;
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
