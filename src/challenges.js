// Desafio 1
function compareTrue(bol1, bol2) {
  if (bol1 == true && bol2 == true){
    return true;
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area
}
console.log(calcArea(3,4));

// Desafio 3
function splitSentence(string1) {
  let string2 = string1.split(" ");
  return string2;
}
console.log(splitSentence("Go Trybe"));

// Desafio 4
function concatName(arrayDeStrings) {
  firstWordlastWord = arrayDeStrings[arrayDeStrings.length - 1] + ", " + arrayDeStrings[0]
  return firstWordlastWord;
  }
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// Desafio 5
function footballPoints(wins, ties) {
  let pontosCampeonato = (wins * 3) + (ties * 1);
  return pontosCampeonato;
}
console.log(footballPoints(10, 5))
// Desafio 6
function highestCount() {
  // seu código aqui
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
