// Desafio 1
function compareTrue(bol1, bol2) {
 let boolean = bol1 && bol2;
 return boolean;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height)/ 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(palavra) {
  let splits = palavra.split(' ');
  return splits;
}

// Desafio 4
function concatName(nomes) {
  let nomeArray = nomes;
  let result = [];
  for (let i in nomes){
    nomeArray.splice(i + 1, nomes.length - 2);
  }
  for (let j = nomeArray.length - 1; j >= 0; j -= 1){
    result.push(nomeArray[j]);
  }
  return result.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
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
