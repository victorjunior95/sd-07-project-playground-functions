// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area;
}

// Desafio 3
function splitSentence(exemplo) {
  return exemplo.split(' '); //take a look inside the apostrophe, there's a space inside
}

// Desafio 4
function concatName(nombres) {
  return `${nombres[nombres.length - 1]}, ${nombres[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(vetor) {
  let repeticao = 0;
  for(i in vetor) {
    if(vetor[i] == Math.max.apply(Math, vetor)) {
      repeticao += 1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let arrayString = [ ];
  for(i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      arrayString.push('fizz');
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      arrayString.push('buzz');
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      arrayString.push('fizzBuzz');
    } else {
      arrayString.push('bug!')
    }
  }
  return arrayString;
}
let array = [2, 15, 7, 9, 45];
console.log(fizzBuzz(array));



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
