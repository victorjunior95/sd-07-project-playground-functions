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
function highestCount(arrayDeNumeros) {
  let maiorNumero = 0;
for (let index in arrayDeNumeros) {
  if (arrayDeNumeros[index] > maiorNumero) {
    maiorNumero = arrayDeNumeros[index]
  }
}
let escolhaNumero = 0;
for (let j in arrayDeNumeros) {
  if (arrayDeNumeros[j] == maiorNumero) {
    escolhaNumero += 1
  }
}
return escolhaNumero;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrayDeNumeros1) {
  let arrayDeNumeros2 = [];
  for (let i = 0; i < arrayDeNumeros1.length; i += 1) {
    if (arrayDeNumeros1[i] % 3 == 0 && arrayDeNumeros1[i] % 5 !== 0 ) {
      arrayDeNumeros2.push("fizz");
    } else if (arrayDeNumeros1[i] % 5 == 0 && arrayDeNumeros1[i] % 3 !== 0) {
      arrayDeNumeros2.push("buzz")
    } else if (arrayDeNumeros1[i] % 5 == 0 && arrayDeNumeros1[i] % 3 == 0) {
      arrayDeNumeros2.push("fizzBuzz")
    } else {
      arrayDeNumeros2.push("bug!")
    }
  }
  return arrayDeNumeros2
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
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
