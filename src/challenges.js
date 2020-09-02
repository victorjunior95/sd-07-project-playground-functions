// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
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
function catAndMouse(mouse, cat1, cat2) {
  /*Convert everynumber to positive */
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzList = []
  
  for (let number in numbers) {
    if ((numbers[number] % 3) == 0 && (numbers[number] % 5) == 0 ) {
      fizzBuzzList.push('fizzBuzz')
    } else if (numbers[number] % 5 === 0) {
        fizzBuzzList.push('buzz')
    } else if ((numbers[number] % 3) === 0) {
        fizzBuzzList.push('fizz')
    } else {
      fizzBuzzList.push('bug!')
    }
  }
  return fizzBuzzList
}

// Desafio 9
function encode(word) {
  let newString = ""
  let finalString = ""
  let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }

  for (let counter = 0 ; counter <= word.length - 1 ; counter += 1) {
    let counterVogais = 0
    let currentLetter = word[counter]
    for (key in vogais) {
      let currentVogal = key
      if (currentLetter === currentVogal) {
        newString = vogais[key]
        counterVogais += 1
      }
    }
    if (counterVogais > 0 ) {
      finalString += newString
    } else {
      finalString += currentLetter
    }
  }
  return finalString
}

function decode(word) {
  let newString = ""
  let finalString = ""
  let vogais = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }

  for (let counter = 0 ; counter <= word.length - 1 ; counter += 1) {
    let counterVogais = 0
    let currentLetter = word[counter]
    for (key in vogais) {
      let currentVogal = key
      if (currentLetter === currentVogal) {
        newString = vogais[key]
        counterVogais += 1
      }
    }
    if (counterVogais > 0 ) {
      finalString += newString
    } else {
      finalString += currentLetter
    }
  }
  return finalString
}

// Desafio 10
function techList(tech, name) {
  let newTechList = []

  for (let item in tech) {
    let newTechItem = {
      tech: tech[item],
      name: name,
    }
    newTechList.push(newTechItem)
  }
  if (newTechList.length > 0) {
    return newTechList
  } else {
    return 'Vazio!'
  }
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
