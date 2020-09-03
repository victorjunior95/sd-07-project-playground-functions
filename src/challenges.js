// Desafio 1
let first = false;
let second = false;
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  return false;
}
compareTrue(first, second)

// Desafio 2
let baseOut = 10;
let heightOut = 5
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}
calcArea(baseOut, heightOut)


// Desafio 3
let sentence = 'Go Trybe';
function splitSentence(a) {
  // seu código aqui
  return a.split(' ');
}
splitSentence(sentence)

// Desafio 4
let names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
function concatName(a) {
  // seu código aqui
  let newString = '';
  for (let i = 0; i < a.length; i += 1){
    if (i === a.length - 1){
      newString += a[i]
    }
  }
  let stringReturn = newString + ', ' + a[0];
  return stringReturn
}
concatName(names)


// Desafio 5
let victory = 5;
let draw = 3;
function footballPoints(wins, ties) {
  // seu código aqui
  wins = wins * 3;
  return wins + ties;
}
footballPoints(victory, draw)

// Desafio 6
let highNumberList = [9, 1, 2, 3, 9, 5, 7]
function highestCount(a) {
  // seu código aqui
  let highNumbers = [0];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > highNumbers[0]) {
      highNumbers.shift()
      highNumbers.push(a[i])
    }
  }

  let highNumbersFinal = 0;
  for (let j = 0; j < a.length; j += 1) {
    if (highNumbers[0] === a[j]) {
      highNumbersFinal = highNumbersFinal + 1;
    }
  }
  return highNumbersFinal;
}
highestCount(highNumberList)

// Desafio 7
let mouseOut = 3;
let cat1Out = 30;
let cat2Out = 30;
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;

  if (distanceCat1 < 0) {
    distanceCat1 = distanceCat1 * -1;
  }
  if (distanceCat2 < 0) {
    distanceCat2 = distanceCat2 * -1;
  }

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(mouseOut, cat1Out, cat2Out))

// Desafio 8
let dataFizzBuzz = [2, 15, 7, 9, 45]
function fizzBuzz(a) {
  // seu código aqui
  let message = [];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] % 3 === 0 && a[i] % 5 === 0) {
      message.push('fizzBuzz');
    } else if (a[i] % 3 === 0) {
      message.push('fizz');
    } else if (a[i] % 5 === 0) { 
      message.push('buzz');
    } else {
      message.push('bug!');
    }
  }
  return message;
}
fizzBuzz(dataFizzBuzz)

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
let techsNames = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let myName = 'Josiel';
function techList(a, b) {
  // seu código aqui
  let techsObjects = []
  for (let i = 0; i < a.length; i += 1){
    techsObjects.push({tech: a[i], name: b})
  }
  return techsObjects

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
