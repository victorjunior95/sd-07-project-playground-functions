// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(a) {
  let arrayS = a.split(' ')
  return arrayS
}

// Desafio 4
function concatName(a) {
  let primeiroA = a[0]
  let ultimoA = a[a.length - 1]
  return `${ultimoA}, ${primeiroA}`
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties
  return pontos
}

// Desafio 6
function highestCount(listN) {
  listN.sort()
  let highest = listN[listN.length - 1]
  let count = 0
  for (let i in listN) {
    if (listN[i] === highest) {
      count += 1
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse)
  let dist2 = Math.abs(cat2 - mouse)
  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
  if (dist1 < dist2) {
    return 'cat1';
  } 
  if (dist2 < dist1) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrayNum) {
  for (let i in arrayNum) {
    if (arrayNum[i] % 3 === 0 && arrayNum[i] % 5 === 0) {
      return 'FizzBuzz'
    } 
    if (arrayNum[i] % 3 === 0 && arrayNum[i] % 5 !== 0) {
      return 'Fizz'
    }
    if (arrayNum[i] % 5 === 0 && arrayNum[i] % 3 !== 0) {
      return 'Buzz'
    } else {
      return 'bug!'
    }
  }
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
