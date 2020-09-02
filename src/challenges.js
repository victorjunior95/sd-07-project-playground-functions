// Desafio 1
function compareTrue(bool1, bool2) {
  let boolR = false;
  if (bool1 && bool2) {
    boolR = true;
  }
  return boolR;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let palavra = '';
  let arrayPalavras = [];
  for (let i in frase) {
    if (frase[i] !== ' ') {
      palavra += frase[i];
    } else {
      arrayPalavras.push(palavra);
      palavra = '';
    }
  }
  arrayPalavras.push(palavra);
  return arrayPalavras;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount() {
  let soma = 0;
  for (let i in array) {
    if (array[pos] === array[i]) {
      soma += 1;
    }
  }
  return soma;
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
