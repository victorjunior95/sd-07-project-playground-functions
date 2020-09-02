// Desafio 1
function compareTrue(num1, num2) {
  if ( num1 > num2 && num2 % 2 != 0){
     result = true;
  }else {
    result = false;
  }
  return result;
}
console.log(compareTrue(3, 7));

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}
console.log(calcArea(20, 12));

// Desafio 3
function splitSentence(palavra) {
  return palavra.split(" ");
}
console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(array) {
  for (i = 0; i <= array.length; i += 1){
    return array[array.length -1] + ", " + array[0];
  }
}
let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(array));

// Desafio 5
function footballPoints(wins, ties) {
return ((wins * 3) + (ties * 1));
}
console.log(footballPoints(5, 3))

// Desafio 6
function highestCount(num) {
  let maior = 0;
  let count = 0;
  for (let i = 0; i <= num.length; i += 1){
    if (num[i] >= maior) {
    maior = num[i]; 
    count = count + 1;
    }
  }
  return count;
}
let num = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(num));

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
