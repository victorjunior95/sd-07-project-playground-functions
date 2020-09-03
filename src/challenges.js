// Desafio 1
function compareTrue(number1, number2) {
  let message = ''
  let isTrue = (number1 === true && number2 === true)
  if (isTrue) {
    message = isTrue
  } else {
    message = false
  }
  return message
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

  for (let counter = 0; counter <= initialArray.length - 1; counter += 1) {
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
  let resultString = `${lastItem}, ${firstItem}`

  return resultString
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoint = 3
  let tiePoint = 1
  let totalPoints = (wins * winPoint) + (ties * tiePoint)

  return totalPoints
}

// Função apoio highest Count
function greatestNumber(numbers) {
  let greatestNumber = 0
  /* Check greatest Number */
  for (let counter = 0; counter <= numbers.length - 1; counter += 1) {
    if (counter === 0) {
      greatestNumber = numbers[counter]
    } else if (numbers[counter] > greatestNumber) {
      greatestNumber = numbers[counter]
    }
  }
  return greatestNumber
}

// Desafio 6
function highestCount(numbers) {
  let numberOfTimes = 0
  /* Count greatest Number with a greates number function*/
  for (let i in numbers) {
    if (numbers[i] === greatestNumber(numbers)) {
      numberOfTimes += 1
    }
  }
  return numberOfTimes
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1)
  let cat2Distance = Math.abs(mouse - cat2)
  let message = ''

  /* Compare Distance */
  if (cat1Distance === cat2Distance) {
    message = 'os gatos trombam e o rato foge'
  } else if (cat1Distance < cat2Distance) {
    message = 'cat1'
  } else {
    message = 'cat2'
  }
  return message
}

// Apoio para o Desafio 8
function fizzBuzzHelp(number) {
  let message = ''
  let buzzText = number % 3 === 0
  let fizzText = number % 5 === 0
  let bugText = 'bug'
  
  if (buzzText) {
    message = 'buzz'
  } else if (fizzText) {
    message = 'fizz'
  } else {
    message = bugText
  }
  return message
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzList = []

  for (let number in numbers) {
    if ((numbers[number] % 3) === 0 && (numbers[number] % 5) === 0) {
      fizzBuzzList.push('fizzBuzz')
    } else {
      fizzBuzzList.push(fizzBuzzHelp(numbers[number]))
    }
  }  
  return fizzBuzzList
}

// Desafio 9
function encode(word) {
  let newString = ''
  let finalString = ''
  let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  for (let counter = 0; counter <= word.length - 1; counter += 1) {
    let counterVogais = 0
    let currentLetter = word[counter]
    for (let key in vogais) {
      let currentVogal = key
      if (currentLetter === currentVogal) {
        newString = vogais[key]
        counterVogais += 1
      }
    }
    if (counterVogais > 0) {
      finalString += newString
    } else {
      finalString += currentLetter
    }
  }
  return finalString
}

function decode(word) {
  let newString = ''
  let finalString = ''
  let vogais = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  for (let counter = 0; counter <= word.length - 1; counter += 1) {
    let counterItem = 0
    let currentItem = word[counter]
    for (let key in vogais) {
      let currentVogal = key
      if (currentItem === currentVogal) {
        newString = vogais[key]
        counterItem += 1
      }
    }
    if (counterItem > 0) {
      finalString += newString
    } else {
      finalString += currentItem
    }
  }
  return finalString
}

// Desafio 10
function techList(tech, name) {
  let newTechList = []
  let sortedTechList = tech.sort()
  let message = ''

  for (let item in sortedTechList) {
    let newTechItem = {
      tech: sortedTechList[item],
      name: `${name}`,
    };
    newTechList.push(newTechItem)
  }
  if (newTechList.length > 0) {
    message = newTechList
  } else {
    message = 'Vazio!'
  }
  return message
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let checkList = ['(', 'X', 'X', ')', ' ', 'X', 'X', 'X', 'X', 'X', '-', 'X', 'X', 'X', 'X']
  let phoneNumber = ''
  let currentNumber = 0

  /* Checking if the arrays.lenght is greater than 11 */
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  /* Checking if there is any number less than 0 or greater than nine */
  for (let number in numbers) {
    if (numbers[number] > 9 || numbers[number] < 0) {
      return 'não é possível gerar um número de telefone com esses valores'
      break
    }
  }
  /* Checking if any number repeats greater or equal 3*/
  for (let i in numbers) {
    let currentNumber = numbers[i]
    let numberOfTimesRepeat = 0
    for (let j in numbers) {
      if (currentNumber === numbers[j]) {
        numberOfTimesRepeat += 1
      }
    }
    if (numberOfTimesRepeat >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
      break
    }
  }
  /* Generating phone-number in the right format*/
  for (let number in numbers) {
    currentNumber = numbers[number]
    for (let item = 0; item <= checkList.length - 1; item += 1) {
      if (checkList[item] === 'X') {
        checkList[item] = currentNumber
        break
      }
    }
  }
  for (let i = 0; i <= checkList.length - 1; i += 1) {
    phoneNumber += checkList[i]
  }
  return phoneNumber
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineACheck = (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC))
  let lineBCheck = (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC))
  let lineCCheck = (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA))
  let isTriangle = (lineACheck && lineBCheck && lineCCheck === true)

  return isTriangle
}

// Desafio 13
function hydrate(text) {
  let drinkList = text.replace(/\D/g, '')
  let total = 0
  let message = ''

  for (let counter = 0; counter <= drinkList.length - 1; counter +=1) {
    total += parseInt(drinkList[counter], 10)
  }

  if (total > 1) {
    message = `${total} copos de água`
  } else {
    message = `${total} copo de água`
  }
  return message
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
