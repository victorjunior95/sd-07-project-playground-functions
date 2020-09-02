// Desafio 1
function compareTrue(valorUm, valorDois) {
  if (valorUm && valorDois) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let newString = string.split(" ");
  return newString;
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length -1];
  let fullString = `${lastItem}, ${firstItem} `;
  return fullString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitorias = wins * 3;
  let pontosEmpates = ties;
  let totalDePontos = pontosVitorias + pontosEmpates;
  return totalDePontos;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNumero = 0;
  for (i in numbers) {
    if (numbers[i] > maiorNumero) {
      maiorNumero = numbers[i];
    }
  }
  let contador = 0;
  for (i in numbers) {
    if (numbers[i] == maiorNumero) {
      contador += 1;
    }
  }
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
