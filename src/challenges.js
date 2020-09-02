// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === 1 && number2 === 2) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(text) {
  let initialArray = text.split(' ')
  let finalArray = []

  for (let counter = 0 ; counter <= initialArray.length - 1 ; counter += 1) {
    if (initialArray[counter] !== '') {
      finalArray.push(initialArray[counter])
    }
  }
  return finalArray
}

// Desafio 4
function concatName(names) {
  let firstItem = names[0]
  let lastItem = names[names.length - 1]
  let resultString = lastItem + ', ' + firstItem

  return resultString
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoint = 3
  let tiePoint = 1
  let totalPoints = wins * winPoint + ties * tiePoint

  return totalPoints
}

// Desafio 6
function highestCount(numbers) {
  let greatestNumber = 0
  let numberOfTimes = 0
  /*Check greatest Number */
  for (let counter = 0 ; counter <= numbers.length - 1 ; counter += 1) {
    if (counter == 0 ) {
      greatestNumber = numbers[counter]
    } else {
      if (numbers[counter] > greatestNumber) {
        greatestNumber = numbers[counter]
      }
    }
  }
  /*Count greatest Number */
  for (let i in numbers) {
    if (numbers[i] === greatestNumber) {
      numberOfTimes += 1
    }
  }
  return numberOfTimes
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
