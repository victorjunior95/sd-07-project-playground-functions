// Desafio 1

let a = Boolean;
let b = Boolean;

function compareTrue(a, b) {
  // seu código aqui

  if (a === true && b === true) {
    return true
  } else {
    return false
  }
}
//console.log(compareTrue(true, true))

// Desafio 2
let base = 0;
let height = 0;

function calcArea(base, height) {
  // seu código aqui
  if (base > 0 && height > 0) {
    let area = base * height / 2;
    return area
  } else {
    return "Digite um valor válido"
  }
}
//console.log(calcArea(4, 5));

// Desafio 3
let str = "go Trybe";
function splitSentence(str) {
  // seu código aqui
  let res = str.split (/[ ,]+/);
  return res
}
//console.log(splitSentence(str));

// Desafio 4
let arrayStr = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(arrayStr) {
  // seu código aqui
  let first = arrayStr[0];
  let last = arrayStr[arrayStr.length-1];
  let newStr = "";
  newStr = last + ", " + first;
  return newStr
}
console.log(concatName(arrayStr));

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
