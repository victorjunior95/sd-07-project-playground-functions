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
      high = arrayNumbers[i]
    }
  }
  let repeat = 0;
  for (let index = 0; index <= arrayNumbers.length; index += 1) {
    if(arrayNumbers[index] === high) {
      repeat += 1;
    }
  }
  return repeat;
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
}
