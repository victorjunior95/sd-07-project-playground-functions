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
//console.log(concatName(arrayStr));

// Desafio 5
let wins = 0;
let ties = 0;

function footballPoints(wins, ties) {
  // seu código aqui
  if (wins >= 0 && ties >= 0) {
    let winsTotal = wins * 3;
    let pontos = winsTotal + ties;
    return "Pontos totais: " + pontos
  } else {
    return "Favor verifique os dados inseridos"
  }
}
//console.log(footballPoints(7, 1));

// Desafio 6
let numbers = [9, 1, 2, 3, 9, 5, 7];

function highestCount(numbers) {
  // seu código aqui
  if (numbers.length > 0) {
    let biggest = 0;
    let counts = 0;
    
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] >= biggest) {
        biggest = numbers[i];
        counts += 1;
      }
    }
    return "Biggest number: " + biggest + "\nCounts: " + counts;
  } else {
    return "Favor verifique os dados inseridos"
  }
}
console.log(highestCount(numbers));

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
