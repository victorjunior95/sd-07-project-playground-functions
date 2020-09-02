// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true){
    return true
  }
  else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ")
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties
}

// Desafio 6
function highestCount(array) {
  
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  if (cat1 === cat2){
    return "os gatos trombam e o rato foge"
  }
  else if (mouse-cat1 < mouse-cat2){
    return cat1
  }
  else{
    return cat2
  }
}

// Desafio 8
function fizzBuzz() {
  // 
}

// Desafio 9
function encode() {
  // 
}
function decode() {
  // 
}

// Desafio 10
function techList() {
  // 
}

// Desafio 11
function generatePhoneNumber() {
  // 
}

// Desafio 12
function triangleCheck() {
  // 
}

// Desafio 13
function hydrate() {
  // 
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
