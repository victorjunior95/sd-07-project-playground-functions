// Desafio 1

const valueOneCompareTrue = false;
const valueTwoCompareTrue = true;

function compareTrue(testOne, testTwo) {
  return testOne && testTwo;
}

console.log(compareTrue(valueOneCompareTrue, valueTwoCompareTrue));

// Desafio 2

const base = 20;
const height = 30;

function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(base, height));

// Desafio 3

const splitPhrase = "go Trybe"

function splitSentence(split) {
  let aux = '';

  let stringForArray = [];
  for (i in split + 1) {   // + 1 para não cortar a última letra na condicional (último push)
    (split[i] == " ") || (split.length == i) ? (stringForArray.push(aux)) && (aux = '') : aux += split[i];
  }
  return stringForArray;
}

console.log(splitSentence(splitPhrase));

// Desafio 4

const arrayOfString = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(phrase) {
  return `${phrase[phrase.length - 1]}, ${phrase[0]}`;
}

console.log(concatName(arrayOfString));

// Desafio 5

const wins = 3;
const ties = 4;

function footballPoints(wins, ties) {
  let result = 0;
  for (let i = 1; i <= wins + ties; i += 1) { // i vai começar a contar a partir do primeiro ponto até a soma de todos(vitórias ou empates)
    wins >= i ? (result += 3) : result += 1; // enquanto o número de vitórias forem maior ou igual o contador ira somar 3 caso contrario 1(valor de empate)
  }
  return result
}

console.log(footballPoints(wins, ties));

// Desafio 6

const numbers = [9, 1, 2, 3, 9, 5, 7]

function highestCount(arraysOfNumbers) {
  let cont = 0;
  let aux = 0;
  
  for (i in arraysOfNumbers) {
    cont = 0;
    for (j in arraysOfNumbers) {
      if (arraysOfNumbers[i] == arraysOfNumbers[j]) {
        cont += 1;
      }
    }
    if (cont > aux) {
      aux = cont;
    }
  }
  return aux;
}

  console.log(highestCount(numbers));

// Desafio 7

const mousePosition = 6;
const catOnePosition = 3;
const catTwoPostion = 7;

function catAndMouse(mouse, cat1, cat2) {
  cat1 -= mouse;
  cat2 -= mouse;
  if (cat1 < 0) {
    cat1 = cat1 * - 1;
  }
  if (cat2 < 0) {
    cat2 = cat2 * - 1;
  }
  if (cat1 == cat2) {
    return "os gatos trombam e o rato foge";
  } else if (cat1 < cat2) {
    return cat1;
  } else {
    return cat2;
  }
}

console.log(catAndMouse(mousePosition, catOnePosition, catTwoPostion));

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
