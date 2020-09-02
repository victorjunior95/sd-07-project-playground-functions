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
  for (let i = 0; i < listaNumeros.length; i+= 1) {
    let num = listaNumeros[i];
    let qtdRepeticaoAtual = 0;
    for (let j = 0; j < listaNumeros.length; j+= 1) {
      if (num === listaNumeros[j]) {
        qtdRepeticaoAtual += 1;
      }
    }
    if (qtdRepeticaoAtual > qtdRepeticao) {
      qtdRepeticao = qtdRepeticaoAtual;
    }
  }
  return qtdRepeticao
}

console.log(highestCount(numeros));

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
