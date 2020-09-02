// Desafio 1
function compareTrue(param, param1) {
  // Função opedor de lógico 
  if(param == true && param1 == true){
    return true;
  }else{
    return false;
  }
}
compareTrue(false,true)
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
function footballPoints(wins, ties) {
  // seu código aqui
  let victory = 0;
  let scoreTies = 0
  for (let i = 0; i < wins; i+=1){
      victory += 3;
  }
  for (let i = 0; i < ties; i+=1){
      scoreTies +=1
  }
  let points = scoreTies + victory;

  return `O total de pontos é ${points}`;
}

// Desafio 6
let numbers = [9, 1, 2, 3, 9, 5, 7];
let bignumber = 0;
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
