// Desafio 1
let a = true;
let b = false;

function compareTrue(valorA, valorB) {
  let iguais = valorA && valorB;
  return iguais;
}

console.log(compareTrue(a, b));

// Desafio 2
let baseTriangulo = 10;
let alturaTriangulo = 8;

function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

console.log(calcArea(baseTriangulo, alturaTriangulo));

// Desafio 3
let sentence = 'go trybe';

function splitSentence(frase) {
  let arrayPalavras = frase.split(' ');
  return arrayPalavras;
}

console.log(splitSentence(sentence));

// Desafio 4
let listaPalavras = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(arrayPalavras) {
  let frase = `${arrayPalavras[arrayPalavras.length - 1]}, ${arrayPalavras[0]}`;
  return frase;
}

console.log(concatName(listaPalavras));

// Desafio 5
let vitorias = 5;
let empates = 10;

function footballPoints(wins, ties) {
  let totalPontos = (wins * 3) + ties;
  return totalPontos;
}

console.log(footballPoints(vitorias, empates));

// Desafio 6
let numeros = [9, 1, 2, 3, 9, 5, 7];

function highestCount(listaNumeros) {
  let qtdRepeticao = 0;
  let maiorNum = 0;
  for (let i = 0; i < listaNumeros.length; i += 1) {
    if (listaNumeros[i] > maiorNum) {
      maiorNum = listaNumeros[i];
      qtdRepeticao = 1;
    } else if (listaNumeros[i] === maiorNum) {
      qtdRepeticao += 1;
    }
  }
  return qtdRepeticao
}

console.log(highestCount(numeros));

// Desafio 7
let gato1 = 4;
let gato2 = 22;
let rato = 10;

function catAndMouse(mouse, cat1, cat2) {
  let retorno = '';
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if ((distCat1) < (distCat2)) {
    retorno = 'cat1';
  } else if ((distCat1) > (distCat2)) {
    retorno = 'cat2';
  } else if ((distCat1) === (distCat2)) {
    retorno = 'os gatos trombam e o rato foge';
  }
  return retorno;
}

console.log(catAndMouse(rato, gato1, gato2));

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
