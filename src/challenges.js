// Desafio 1
function compareTrue(){
  // seu código aqui
  let ligado=true;
  let quente=true;
  let podeBanhar;
  if((ligado==true)&&(quente==true)){
      podeBanhar=true;
  } else{
      podeBanhar=false;
  }
  return podeBanhar;
}
console.log(compareTrue());

// Desafio 2
function calcArea() {
  // seu código aqui
  let base = 5;
  let height = 5;
  let area = (base*height)/2;
  return area;
}
console.log(calcArea());

// Desafio 3
function splitSentence() {
  // seu código aqui
let frase = "Dia de festa";
let resultado = frase.split(" ");
return resultado;
}
function splitSentence() {
// Desafio 4
function concatName() {
  // seu código aqui
let frase = ["João","José","Paulo","Fernando"];
let resultado = [];
for(let count in frase){
  resultado[0]=frase[frase.length-1];
  resultado[1]=frase[0];
}
return resultado;
}
console.log(concatName());

// Desafio 5
function footballPoints() {
  // seu código aqui
  let wins = 7;
  let ties = 7;
  let totalPoints = (wins*3) + ties;
  return totalPoints
}
console.log(footballPoints());

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
