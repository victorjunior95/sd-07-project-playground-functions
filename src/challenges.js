// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ')
}

// Desafio 4
function concatName(stringArray) {
  let output = `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`
  return output
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties
  return points
}

// Desafio 6
function highestCount(array) {
  let biggestNum = 0
  let repetition = 0
  for (let i = 0; i <= array.length - 1; i += 1) {
    if (array[i] > biggestNum) {
      biggestNum = array[i]
      repetition = 0
      repetition += 1
    } else if (array[i] === biggestNum)
    repetition += 1
  }
  return repetition
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = mouse - cat1 
  let dist2 = mouse - cat2
  if(dist1 < 0) {
    dist1 *= -1
  }
  if(dist2 < 0) {
    dist2 *= -1
  }
  if ((dist1) > (dist2)) {
    return "cat2"
  } else if ((dist1) < (dist2)) {
    return "cat1"
  } else if (dist1 === dist2) {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(array) {
  let output = []
  for (num in array) {
    if (array[num] % 3 === 0 && array[num] % 5 === 0) {
      output.push("fizzBuzz")
    } else if (array[num] % 3 === 0) {
      output.push("fizz")
    } else if (array[num] % 5 === 0) {
      output.push("buzz")
    } else {
      output.push("bug!")
    }
  }
  return output
}

// Desafio 9
function encode(word) {
  array = word.split('')
  for(let i = 0; i < array.length; i += 1) {
    if (array[i] === 'a') {
      array[i] = 1
    } else if (array[i] === 'e') {
      array[i] = 2
    } else if (array[i] === 'i') {
      array[i] = 3
    } else if (array[i] === 'o') {
      array[i] = 4
    }  else if (array[i] === 'u') {
      array[i] = 5
    }
  }
  return array.join('')
}
function decode(phrase) {
  array = phrase.split('')
  for(let i = 0; i < array.length; i += 1) {
    if (array[i] === '1') {
      array[i] = 'a'
    } else if (array[i] === '2') {
      array[i] = 'e'
    } else if (array[i] === '3') {
      array[i] = 'i'
    } else if (array[i] === '4') {
      array[i] = 'o'
    }  else if (array[i] === '5') {
      array[i] = 'u'
    }
  }
  return array.join('')
}

// Desafio 10
function techList(array, nome) {
  if (array === []) {
    return 'Vazio!'
  } else {
    for (obj in array) {
      array[obj] = new Object(array[obj])
    }
    for (obj in array) {
      array[obj].name = nome 
      return array
    }
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
