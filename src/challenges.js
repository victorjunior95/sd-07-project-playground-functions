
function compareTrue(boole1,boole2) {
  if (boole1 && boole2 === true)
    return true
  else {
    return false
  }
}

function calcArea(base,height) {
    let areaResult = (base * height) / 2
    return areaResult
  }

function splitSentence(frase) {
 let array = frase.split(' ')
 return array
}

array = ['Trybe','programação','liberdade','dinheiro']

function concatName(array) {
  let trocaString = (array[array.length - 1] + ', ' + array[0])
  return trocaString
}

function footballPoints(wins, ties) {
  let Points = (3 * wins) + ties
  return Points
}

numbers = [5,7,5,8,1,2,4,9]

function highestCount(numbers) {
  let maior = numbers[0]
  for(let i = 1;i < numbers.length;i += 1)
    if (maior < numbers[i]) {
        maior = numbers[i]
        return maior
    }
}

let resultado = highestCount(numbers)
console.log(resultado)

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
