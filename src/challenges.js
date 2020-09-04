// Desafio 1
function compareTrue(condition1, condition2) {
  // seu código aqui
  if (condition1 && condition2) {
    return true
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height ) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let sentenceArray = sentence.split(' ');
  return sentenceArray
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + ties;
  return points
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let higher = 0;
  let higherCount = 0;
  for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] > higher) {
      higher = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] === higher) {
      higherCount += 1;
    }
  }
  return higherCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let result;
  if(mouse > cat1 && mouse > cat2) {
    if (mouse - cat1 < mouse - cat2) {
      result = 'cat1';
    } else if (mouse - cat1 > mouse - cat2) {
      result = 'cat2';
    } else {
      result = 'os gatos trombam e o rato foge'
    }
  } else if (mouse < cat1 && mouse < cat2) {
    if (mouse - cat1 < mouse - cat2) {
      result = 'cat2';
    } else if (mouse - cat1 > mouse - cat2) {
      result = 'cat1';
    } else {
      result = 'os gatos trombam e o rato foge'
    }
  } else if (mouse < cat1 && mouse > cat2) {
    if (cat1 - mouse < mouse - cat2) {
      result = 'cat1'
    } else if (cat1 - mouse > mouse - cat2) {
      result = 'cat2'
    } else {
      result = 'os gatos trombam e o rato foge'
    }
  } else if (mouse > cat1 && mouse < cat2) {
    if (mouse - cat1 < cat2 - mouse) {
      result = 'cat1'
    } else if (mouse - cat1 > cat2 - mouse) {
      result = 'cat2'
    } else {
      result = 'os gatos trombam e o rato foge'
    }
  } else {
    if (mouse == cat1 && mouse !== cat2) {
      result = 'cat1'
    } else if ((mouse !== cat1 && mouse == cat2)) {
      result = 'cat2'
    } else {
      result = 'os gatos trombam e o rato foge'
    }
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let newArray = [];
  for(let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      newArray.push('fizz');
    }
    else if (array[i] % 3 !== 0 && array[i] % 5 === 0) {
      newArray.push('buzz');
    }
    else if (array[i] % 3 === 0 && array[i] % 5 === 0){
      newArray.push('fizzBuzz');
    } 
    else {
      newArray.push("bug!");
    }
  }
  return newArray;
}

// Desafio 9
function encode(stringToEncode) {
  // seu código aqui
  let arrayToEncode = stringToEncode.split('')
  let encoded = '';
  for(let i = 0; i < arrayToEncode.length; i += 1) {
    if (arrayToEncode[i] === 'a') {
      encoded += '1';
    } else if (arrayToEncode[i] === 'e') {
      encoded += '2';
    } else if (arrayToEncode[i] === 'i') {
      encoded += '3';
    } else if (arrayToEncode[i] === 'o') {
      encoded += '4';
    } else if (arrayToEncode[i] === 'u') {
      encoded += '5';
    } else {
      encoded += arrayToEncode[i];
    }
  }
  return encoded
}
function decode(stringToDecode) {
  // seu código aqui
  let arrayToDecode = stringToDecode.split('')
  let decoded = '';
  for (let i = 0; i < arrayToDecode.length; i += 1) {
    if (arrayToDecode[i] === '1') {
      decoded += 'a';
    } else if (arrayToDecode[i] === '2') {
      decoded += 'e'
    } else if (arrayToDecode[i] === '3') {
      decoded += 'i'
    } else if (arrayToDecode[i] === '4') {
      decoded += 'o'
    } else if (arrayToDecode[i] === '5') {
      decoded += 'u'
    } else {
      decoded = arrayToDecode[i];
    }
  }
  return decoded
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
