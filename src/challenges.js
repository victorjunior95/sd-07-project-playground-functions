// Desafio 1
function compareTrue(a, b) {
  let resultado;

  if (a === b && a === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayStrings = string.split(' ');
  return arrayStrings;
}

// Desafio 4
function concatName(array) {
  let newArray = [];
  newArray.push(array[array.length - 1]);
  newArray.push(` ${array[0]}`);
  let stringLastFirst = newArray.toString();
  return stringLastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = 0;
  let repetions = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (highestNumber <= numbers[i]) {
      highestNumber = numbers[i];
    }
  }
  for (let j = 0; j < numbers.length; j += 1) {
    if (highestNumber === numbers[j]) {
      repetions += 1;
    }
  }
  return repetions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let felino;
  if (distCat1 > distCat2) {
    felino = "cat2";
  } else if (distCat1 < distCat2) {
    felino = "cat1";
  } else {
    felino = "os gatos trombam e o rato foge"
  }
  return felino;
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
