//Desafio Raphael Caputo

// Desafio 1
function compareTrue(comparar1, comparar2) {
  // seu código aqui
  if (comparar1 && comparar2) {
    return true;
  } else {
    return false;
  }

}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;

  return area;
}
// Desafio 3
function splitSentence(separando) {
  // seu código aqui
  return separando.split(' '); 
}


// Desafio 4
function concatName(arrayNome) {
  // seu código aqui
  return (arrayNome[arrayNome.length -1] + ',' + arrayNome[0])
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
