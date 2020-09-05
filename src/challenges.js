// Desafio 1
function compareTrue(a, b) {
  if(a === true && b === true){
    console.log(true)
  }else {
    console.log(false)
  }
}

// Desafio 2

function calcArea(base, heigth) {
  let area = (base * heigth) / 2;   
  
  return area;
}

// Desafio 3
function splitSentence(string) {
  let separador = " ";
  let arrayDeStrings = string.split(separador)

  return arrayDeStrings;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let concat = arrayDeStrings[arrayDeStrings.lenght - 1 + ", " + arrayDeStrings[0]];

  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = (wins * 3) + (ties * 1);  

  return pontosTotais;
}

// Desafio 6
function highestCount() {
  
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
