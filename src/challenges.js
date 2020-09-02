// Desafio 1
//Considerando isso, crie uma função chamada compareTrue que, ao receber dois booleanos:

//Retorne true se ambos os valores são verdadeiros;
//Retorne false se um ou ambos os parâmetros forem falsos.

let bool1 = true;
let bool2 = false;
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true){
    return true;
  } else {
    return false;
  }
}
let function1 = compareTrue(bool1, bool2);
//console.log(function1);

// Desafio 2
//Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.

let base = 3;
let height = 5;
function calcArea(base, height) {
  return (base*height)/2;  
}
let area = calcArea(base, height);
//console.log(area);

// Desafio 3
//Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.

let frase = "and tonight we can truly say together we're invincible";
let separador = " ";
function splitSentence(frase, separador) {
  return frase.split(separador);
}
let arrayDePalavras = splitSentence(frase, separador);
console.log(arrayDePalavras);

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
