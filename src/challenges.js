// Desafio 1
function compareTrue(isTrue1, isTrue2) {
  if ( isTrue1 === true && isTrue2 === true ){
    return true;
  } 
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  let arrayWords = sentence.split(' ');
  return arrayWords;
}

// Desafio 4
function concatName(array) {
  return `${array[(array.length - 1)]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsQt = 0, tiesQt = 0;
  
  for ( let i = 0; i < wins; i += 1 ){
    winsQt += 3;
  }
  for ( let i = 0; i < ties; i += 1 ){
    winsQt += 1;
  }
  return winsQt + tiesQt;
}


// Desafio 6
function highestCount() {
  // seu código aqui
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
