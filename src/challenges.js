// Desafio 1 -
function compareTrue(value1, value2) {
  if (value1 && value2) {
  return true;
  }
  else {
  return false;
  }
}
// console.log(compareTrue(false,false));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}
// console.log(calcArea(10, 4));

// Desafio 3
function splitSentence(word) {
  let arrayWord = [];



}

// Desafio 4
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length-1];
  return ultimoNome + ", " + primeiroNome;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
//console.log(footballPoints(10, 3));

// Desafio 6
function highestCount() {
  


}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(num) {
  let arrayNovo = [];
  for (let i = 0; i < num.length; i += 1){
    if (num[i] % 3 === 0 && num[i] % 5 === 0){
      arrayNovo.push("fizzBuzz");
    } else if (num[i] % 3 === 0) {
      arrayNovo.push("fizz");
    } else if (num[i] % 5 === 0){
      arrayNovo.push("buzz");
    } else {
      arrayNovo.push("bug!");
    }
  }
return arrayNovo;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
