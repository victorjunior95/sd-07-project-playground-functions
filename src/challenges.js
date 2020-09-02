// Desafio 1
function compareTrue(booleanA, booleanB) {
  let resultado;
  if (booleanA && booleanB) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let word = '';
  let fraseArray = [];
  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i] !== ' ') {
      word += frase[i];
    } else {
      fraseArray.push(word);
      word = '';
    }
  }
  fraseArray.push(word);
  return fraseArray;
}

// Desafio 4
function concatName(arrayNames) {
  let lastItem = arrayNames.length - 1;
  let lastFirst = `${arrayNames[lastItem]}, ${arrayNames[0]}`;
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = wins * 3;
  let sum = victory + ties;
  return sum;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let high = arrayNumbers[0];
  for (let i = 0; i <= arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > high) {
      high = arrayNumbers[i];
    }
  }
  let repeat = 0;
  for (let index = 0; index <= arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === high) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result;
  if (cat1 - mouse < cat2 - mouse) {
    result = 'cat1';
  } 
  if (cat2 - mouse < cat1 - mouse) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
console.log(catAndMouse(0, 3, 2));

// Desafio 8
function fizzBuzz(arrayNum) {
  let arrayFizzBuzz = [];
  for (let i = 0; i < arrayNum.length; i += 1) {
    if (arrayNum[i] % 3 === 0 && arrayNum[i] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (arrayNum[i] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (arrayNum[i] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(paramString) {
  let newString = '';
  for (let i = 0; i <= paramString.length-1; i += 1) {
    if (paramString[i] === 'a') {
      newString += '1';
    } else if (paramString[i] === 'e') {
      newString += '2';
    } else if (paramString[i] === 'i') {
      newString += '3';
    } else if (paramString[i] === 'o') {
      newString += '4';
    } else if (paramString[i] === 'u') {
      newString += '5';
    } else {
      newString += paramString[i];
    }
  }
  return newString;
}
function decode(paramString2) {
  let newString2 = '';
  for (let index = 0; index <= paramString2.length-1; index += 1) {
    if (paramString2[index] === '1') {
      newString2 += 'a';
    } else if (paramString2[index] === '2') {
      newString2 += 'e';
    } else if (paramString2[index] === '3') {
      newString2 += 'i';
    } else if (paramString2[index] === '4') {
      newString2 += 'o';
    } else if (paramString2[index] === '5') {
      newString2 += 'u';
    } else {
      newString2 += paramString2[index];
    }
  }
  return newString2;
}
console.log(decode("h3 th2r2"));

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
