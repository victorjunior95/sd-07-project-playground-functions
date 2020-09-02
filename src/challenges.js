// Desafio 1
function compareTrue(a,b) {
  if(a==b) return true;
  else return false;
}

// Desafio 2
function calcArea(base,height) {
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(frase) {
  let separador=" ";
  let palavra=frase.split(separador);
  return palavra;
}

// Desafio 4
function concatName(array) {
  return array[array.length-1]+", "+array[0];
}

// Desafio 5
function footballPoints(wins,ties) {
  return (3*wins+ties);
}

// Desafio 6
function highestCount(array) {
  let maior=0;
  let contador=0;
  for(let i=0;i<array.length;i+=1){
    if(maior<array[i]){
      maior=array[i];
    }
  }
  for(let i=0;i<array.length;i+=1){
    if(maior==array[i]){
      contador+=1;
    }
  }
  return contador;
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
