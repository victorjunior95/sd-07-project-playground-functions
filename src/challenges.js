// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  resultado = ((base*height)/2);
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  resultado = `${array[array.length-1]}, ${array[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  total = (wins*3) + ties;
  return total;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let cont = 0;
  let maior = 0;
  for (let i = 0; i < array.length; i += 1) {
    let valor = array[i]
    if (valor > maior) {
      maior = valor;
      cont = 0;
      cont += 1;
    }
    else if (valor == maior){
      cont += 1;
    }
  }
  return cont;
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
