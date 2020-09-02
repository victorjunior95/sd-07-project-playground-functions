// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
};

// Desafio 2
function calcArea(base, height) {
  area = (base * height) / 2;
  return area;
};

// Desafio 3
function splitSentence(string) {
  let arrayOfStrings = string.split(" ");
  return arrayOfStrings;
};

// Desafio 4
array = ["primeiro", "segundo", "terceiro"]
function concatName(array) {
  let string = array.pop() + ", " + array.shift();
  return string;
};

// Desafio 5
function footballPoints(wins, ties) {
  points = (wins * 3) + ties;
  return points;
};

// Desafio 6
array = [3,4,5,5,5];
function highestCount(array) {
  count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === Math.max.apply(Math, array)) {
      count += 1;
    }
  }
  return count;
};

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
