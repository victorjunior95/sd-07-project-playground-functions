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
  // check number
  let i = 0;
  let highestNumber = 0;
  for (let j in numbers) {
    if (numbers[i] < numbers[j]) {
      i = j;
    }
    highestNumber = numbers[i];
  // check count
    let countNumber = 0;
    for (let k = 0; k < numbers.length; k += 1) {
      if(numbers[k] === highestNumber) {
      countNumber += 1;
      }
    }
    return countNumber;
  }
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
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  } return 0;
}
console.log(catAndMouse(0, 1, 2)) // cat1
console.log(catAndMouse(0, 2, 1)) // cat2
console.log(catAndMouse(0, 3, 3)) // os gatos trombam e o rato foge


// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[i] % 5 === 0) {
      newArray.push('buzz');
    } else if (array[i] % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))  // ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]


// Desafio 9
function encode(code) {
  let newCode = '';
  for (let i = 0; i < code.length; i += 1) {
    if (code[i] === 'a') {
      newCode += '1';
    } else if (code[i] === 'e') {
      newCode += '2';
    } else if (code[i] === 'i') {
      newCode += '3';
    } else if (code[i] === 'o') {
      newCode += '4';
    } else if (code[i] === 'u') {
      newCode += '5';
    } else {
      newCode += code[i];
    }
  }
  return newCode;
}
function decode(decode) {
  let newDecode = '';
  for (let i = 0; i < decode.length; i += 1) {
    if (decode[i] === '1') {
      newDecode += 'a';
    } else if (decode[i] === '2') {
      newDecode += 'e';
    } else if (decode[i] === '3') {
      newDecode += 'i';
    } else if (decode[i] === '4') {
      newDecode += 'o';
    } else if (decode[i] === '5') {
      newDecode += 'u';
    } else {
      newDecode += decode[i];
    }
  }
  return newDecode;
}
console.log(encode('hi there!'))  // h3 th2r2!
console.log(decode('h3 th2r2!'))  // hi there!


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
