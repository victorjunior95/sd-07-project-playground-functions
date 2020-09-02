// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}


function splitSentence(palavra) {
  let array = [];
  for (key in palavra) {
    if (palavra[key] === " ") {
      array.push(palavra[key])
    }
  }
  return array
}
console.log(splitSentence("Guilherme Almeida"))
// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3
  return wins + ties

}


// Desafio 6
function highestCount(numeros) {
  let maiorNumero = 0;
  for (let i = 0; i < numeros.length; i += 1) {

    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i]

    }
  }
  let repeti = 0;
  for (let j = 0; j < numeros.length; j += 1) {
    if (numeros[j] === maiorNumero) {
      repeti += 1
    }


  }
  return repeti
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
