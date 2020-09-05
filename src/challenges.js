// Começando...
// Desafio 1
compareTrue(true, false);

function compareTrue(firstValue, secondValue) {
  console.log("");
  if (firstValue === true && secondValue === true) {
    console.log("As duas variáveis são verdadeiras!!!");
    return true;
  } else if (firstValue === false || secondValue === false) {
    let compare = false;
    console.log("Pelo menos uma das variáveis não é verdadeira!!!");
    return false;
  } else {
    console.log("Erro!!! Pelo menos uma das variáveis não são booleanas");
  }
}

// Desafio 2
calcArea(2, 3);

function calcArea(base, height) {
  let calc = base * height / 2;
  console.log("A área do triângulo é " + calc);
  return calc;
}

// Desafio 3
splitSentence("Go Trybe")

function splitSentence(inputString) {
  let arrayOfStrings = inputString.split([' ']);

  console.log("A string original é: " + inputString);
  console.log("Array: " + arrayOfStrings);
  return arrayOfStrings;
}

// Desafio 4
concatName(['Lucas','Cassiano','Ferraz','Paolillo']);

function concatName(names) {

  let firstName = names[0];
  let lastName = names[names.length -1];

  console.log("ÚLTIMO ITEM: " + lastName + " | PRIMEIRO ITEM: " + firstName);
  return lastName, firstName;
}

// Desafio 5
footballPoints(10, 1);

function footballPoints(wins, ties) {

  let points = 0;
  for ( i = 0; i < wins; i += 1 ) {
    points += 3;
  }
  for ( j = 0; j < ties; j += 1 ) {
    points += 1;
  }

  console.log(points);
  return points;
}

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
