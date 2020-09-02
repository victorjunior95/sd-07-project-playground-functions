// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2)
  {
    return true;
  }
  else
  {
    return false;
  }
}

console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log(calcArea(5, 6));

// Desafio 3
function splitSentence(string) {
  let array = string.split("");
  return array;
}

console.log(splitSentence("conferindo"));

// Desafio 4
function concatName(array2) {
  let array3 = [];
  array3.push(array2[(array2.length - 1)]);
  array3.push(array2[0]);
  return array3;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (3 * wins) + ties;
  return totalPoints;
}

console.log(footballPoints(3, 2));

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = 0;
  let count = 0;
  for (let i = 0; i < numberArray.length; i += 1)
  {
    if (numberArray[i] > highestNumber)
    {
      highestNumber = numberArray[i];
    }
  }
  for (let i = 0; i < numberArray.length; i += 1)
  {
    if (numberArray[i] === highestNumber)
    {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
