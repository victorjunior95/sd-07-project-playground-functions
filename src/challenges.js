// Desafio 1
function compareTrue(param1, param2) {
  param1 = true;
  param2 = true;
  if(param1 == true && param2 == true) {
    return true;
  } else if (param1 == false && param2 == false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let arrayResultado = string.split(" ");
  return arrayResultado;
}

// Desafio 4
function concatName(array) {
  array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
  let resultado = (`${array[array.length - 1]}, ${array[0]}`)
  return resultado;
} console.log(concatName)

// Desafio 5
function footballPoints(wins, ties) {
  wins = 3, ties = 1;
  let pontos = (wins * 3) + (ties);
  return pontos;
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
