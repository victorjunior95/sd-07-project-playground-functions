// Desafio 1
function compareTrue(par, par1) {
  // Função opedor de lógico 
  if(par == true && par1 == TRUE){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // Função que calcula a área
  let area = (base*height) / 2;
  return area;
}

// Desafio 3
function splitSentence(text) {
  // Função separa frases em palavras
  let result = text.split(" ");

  return result;
}

// Desafio 4
function concatName(strArray) {
  // Função concatena 2 stings
  let concStr = [...strArray].shift();
  let concStr2 = [...strArray].pop();

  return `${concStr2}, ${concStr}`;
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
