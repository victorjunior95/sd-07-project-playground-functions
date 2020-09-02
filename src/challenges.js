// PLAYGROUND | FUNCTIONS

// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}
//console.log (compareTrue (true,false));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
//console.log(calcArea(20,10))

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}
//console.log (splitSentence("go trybe"));

// Desafio 4
function concatName(string) {
  let primeiroUltimo = `${string[string.length - 1]}, ${string[0]}`;
  return primeiroUltimo;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}
//console.log(footballPoints(10,20));

// Desafio 6
function highestCount(arrayNumbers) {
  let countRepetitions = 0;
  let highestNumber = arrayNumbers[0];

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (highestNumber <= arrayNumbers[i]) {
      highestNumber = arrayNumbers[i];
    }
  }

  for (let j = 0; j < arrayNumbers.length; j += 1) {
    if (highestNumber == arrayNumbers[j]) {
      countRepetitions += 1;
    }
  }
  return countRepetitions;
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 10, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mathMouse = Math.abs(mouse);
  let mathCat1 = Math.abs(cat1);
  let mathCat2 = Math.abs(cat2);

  let distance = mathMouse - mathCat1;
  let distance2 = mathMouse - mathCat2;

  if (
    mathCat1 == mathMouse + 1 ||
    (mathCat1 == mathMouse - 1 && mathCat2 == mathMouse + 1) ||
    mathCat2 == mathMouse - 1
  ) {
    console.log("os gatos trombam e o rato foge");
  } else if (mathMouse == mathCat1 && mathMouse == mathCat2) {
    console.log("os gatos trombam e o rato foge");
  } else if (distance < distance2) {
    console.log("cat2");
  } else if (distance > distance2) {
    console.log("cat1");
  }
  return catAndMouse;
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz() {}

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
};
