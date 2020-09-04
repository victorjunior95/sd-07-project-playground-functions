// Desafio 1
function compareTrue(x,y) {
  // seu código aqui
  if(x&&y==true){
    return true;
  }else{
    return false;
  }
  
}
//let result = compareTrue(true,true);
//console.log("Resultado desafio 1: "+result);

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let area = (base*height)/2;
  return area;
}
//let result = calcArea(10,20);
//console.log("Resultado desafio 2: "+result);

// Desafio 3
let frase ='go Trybe'
function splitSentence(frase) {
  // seu código aqui
  let array = frase.split(" ");
  return array;
}
//let result = splitSentence(frase);
//console.log("Resultado desafio 3: "+result);

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
}
