// PROJECT PLAYGROUND FUNCTIONS
// Desafio 1
function compareTrue(p1, p2) {
  if  (p1 && p2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base*height)/2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let string = array[(array.length-1)] + ', ' + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) { 
  let pontosCorridos = (wins*3) + ties
  return pontosCorridos;
}

// Desafio 6
function highestCount(numbers) {
  max = numbers[0];
  countMax = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  for (j = 0; j < numbers.length; j++) {
    if (numbers[j] === max) {
      countMax += 1;
    }
  }
  return countMax;
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
