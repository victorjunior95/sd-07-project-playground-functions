// Desafio 1
function compareTrue(a,b) {
  if (a == b && a == true){return true}
  else return false
}

// Desafio 2
function calcArea(base,height) {
  return base*height/2
  
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(" ")
}

// Desafio 4
function concatName(array) {
  let newArray = []
  newArray.push(array[array.length-1])
  newArray.push(array[0])
  return newArray
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins*3)+ties
}

// Desafio 6
function highestCount(array) {
  let maior = array[0]
  for (let i in array){if (array[i]>maior){
    maior = array[i]}
  }
  quant = 0
  for (let i in array){
    if (array[i] == maior) {
      quant++}
  }
  return quant
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dcat1 = mouse-cat1
  let dcat2 = mouse-cat2
  if (dcat1<dcat2) {
    return "cat1"
  } else if (dcat1> dcat2) { 
    return "cat2"
  } else return "os gatos trombam e o rato foge"
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzz = []
  for (let i in array){
    if (array[i]%3==0 && array[i]%5==0){
      fizzBuzz.push("fizzBuzz")
    } else if (array[i]%3==0){
      fizzBuzz.push("fizz")
    } else if (array[i]%5==0){
      fizzBuzz.push("buzz")
    } else fizzBuzz.push("bug!")
  }
  return fizzBuzz
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
