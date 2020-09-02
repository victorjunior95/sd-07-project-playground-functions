// Desafio 1
function compareTrue(valor, valor2) {
  if(valor == valor2 && valor2 == valor){
    return true;
} else {
    return false;
}
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base*height)/2
return area;
}

// Desafio 3
function splitSentence(string) {
  let guarda = [];
  guarda = string.split(" ")
return guarda;
}

// Desafio 4
function concatName(array) {
  let ultimo = [];
let primeiro = [];
 ultimo=(array[array.length -1]);
             primeiro=(array[0])
             return ultimo + " , " + primeiro
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
