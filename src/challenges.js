// Desafio 1
function compareTrue(seiProgramar) {
  if ( seiProgramar === "Trybe" && seiProgramar != ""){
     seiProgramar = true;
  }else {
    seiProgramar = false;
  }
  return seiProgramar;
}
console.log(compareTrue('seiProgramar'));

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}
console.log(calcArea(20, 12));

// Desafio 3
function splitSentence(palavra) {
  return palavra.split(" ");
}
console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(array) {
  for (i = 0; i <= array.length; i += 1){
    return array[array.length -1] + ", " + array[0];
  }
}
let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(array));

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
