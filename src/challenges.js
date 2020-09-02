//Desafio 1
function compareTrue(first, second) {
  if (first === false && second === true) {
    return false;
  }
  if (first === true && second === false) {
    return false;
  }
  if (first === false && second === false) {
    return false;
  }
  if (first === true && second === true){
    return true;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
    return result;
}

//Desafio 3
function splitSentence(word) {


}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
   let triple = wins * 3 + ties;
    return triple;
}

// Desafio 6
function highestCount(numbers) {
  // let arrayNumbers = numbers.split();
  let maxNum = numbers[0];
  let count = 0;

  for (let i = 1; i < numbers.length; i += 1) {

    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  for (let j = 0; j < numbers.length; j += 1) {
    if (maxNum === numbers[j]) {
      count += 1;
    }
  }
  return count;
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

compareTrue(first = true, second = true);

calcArea(51, 1);

highestCount([0, 0, 0]);

footballPoints(0, 0);
