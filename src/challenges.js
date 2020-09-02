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
    successfulCatch = 'cat2';
  } else if (positionCat2 > positionCat1) {
    successfulCatch = 'cat1';
  } else if (positionCat1 === positionCat2) {
    successfulCatch = 'os gatos trombam e o rato foge';
  }

  return successfulCatch;
}

// Desafio 8
function fizzBuzz(evenOddArray) {
  let divisible;
  let array = [];

  for (let i in evenOddArray) {
    if (evenOddArray[i] % 3 === 0 && evenOddArray[i] % 5 === 0) {
      divisible = 'fizzBuzz';
      array.push(divisible);
    } else if (evenOddArray[i] % 3 === 0) {
      divisible = 'fizz';
      array.push(divisible);
    } else if (evenOddArray[i] % 5 === 0) {
      divisible = 'buzz';
      array.push(divisible);
    } else {
      divisible = 'bug!';
      array.push(divisible);
    }
  }

  return array;
}

// Desafio 9
function encode(string) {
  let encodeString = '';
  let letter;
  for (let i in string) {
    if (string[i] === 'a') {
      letter = '1';
      encodeString += letter;
    } else if (string[i] === 'e') {
      letter = '2';
      encodeString += letter;
    } else if (string[i] === 'i') {
      letter = '3';
      encodeString += letter;
    } else if (string[i] === 'o') {
      letter = '4';
      encodeString += letter;
    } else if (string[i] === 'u') {
      letter = '5';
      encodeString += letter;
    } else {
      letter = string[i];
      encodeString += letter;
    }
  }
  return encodeString;
}

function decode(string) {
  let decodeString = '';
  let letter;
  for (let i in string) {
    if (string[i] === '1') {
      letter = 'a';
      decodeString += letter;
    } else if (string[i] === '2') {
      letter = 'e';
      decodeString += letter;
    } else if (string[i] === '3') {
      letter = 'i';
      decodeString += letter;
    } else if (string[i] === '4') {
      letter = 'o';
      decodeString += letter;
    } else if (string[i] === '5') {
      letter = 'u';
      decodeString += letter;
    } else {
      letter = string[i];
      decodeString += letter;
    }
  }
  return decodeString;
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
