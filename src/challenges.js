// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 == "true" && boolean2 == "true") {
    return "true";
  } else {
    return "false";
  }
}

// --------------------TESTE DESAFIO 1--------------------------------
// let teste = "true";
// let teste2= "true";
// console.log(compareTrue(teste,teste2));
// -------------------------------------------------------------------

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// --------------------TESTE DESAFIO 2--------------------------------
// let teste = 30;
// let teste2= 10;
// console.log(calcArea(teste,teste2));
// -------------------------------------------------------------------

// Desafio 3
function splitSentence(string) {
  resultado = string.split(" ");
  return resultado;
}

// --------------------TESTE DESAFIO 3--------------------------------
// let teste = "be trybe";
// console.log(splitSentence(teste));
// -------------------------------------------------------------------

// Desafio 4
function concatName() {
  // seu código aqui
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
};
