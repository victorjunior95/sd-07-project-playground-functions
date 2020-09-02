// Desafio 1
function compareTrue(first, second) {
  if (first === true && second === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height
  return area / 2
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ")
  return array
}

// Desafio 4
function concatName(array) {
  let string = []
  let string1 = [array[array.length-1]]
  let string2 = [array[0]]
  string = string1.concat(string2)
  return string
}

// Desafio 5
function footballPoints(wins, ties) {
  wins * 3
  let pontos = (wins*3) + ties
  return pontos
}

// Desafio 6
function highestCount(numbers) {
  let highest = 0
  let contador = 0
  for (let i = 0; i < numbers.length; i++) {
    if (highest <= numbers[i]) {
      highest = numbers[i]
      contador += 1
    }
  }
  return contador
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}
console.log(catAndMouse([9, 1, 2, 3, 9, 5, 7]))
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
