// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(vetorString) {
  let str = vetorString;
  let splitStr = str.split(" ");
  return splitStr;
}

// Desafio 4
function concatName(vetorString) {
  let vetorFuncao = vetorString;
  let primeiroNome = vetorFuncao[0];
  let ultimoNome = vetorFuncao[vetorFuncao.length - 1];
  let concatenado = ultimoNome + ", " + primeiroNome;
  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let quantidadeVitorias = wins;
  let quantidadeEmpates = ties;
  let pontosVitoria = quantidadeVitorias * 3;
  let pontosEmpates = quantidadeEmpates * 1;
  let resultado = pontosVitoria + pontosEmpates;
  return resultado;
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
