// Desafio 1
let a= false;
let b= false;
function compareTrue(a, b) {
  // seu código aqui
  let resultado = a && b;
  // return console.log(resultado);
  return resultado;
}
compareTrue(a,b);

// Desafio 2
let base= 1;
let height= 2;
function calcArea(base, height) {
  // seu código aqui
  let area = base*height/2
  // return console.log(area);
  return area;
}
calcArea(base, height);

// Desafio 3
let string = "go Trybe"
let array = [];
// console.log(string[6])
// console.log(string.length)
// array= ["aba", "cat", "e"];
// console.log(array);
// for (i=0; i<string.length; i += 1){
//   if (string[i] == " "){//completamente diferente de string[i] = " "!!!
//     array = [string.slice(0,i),string.slice(i,string.length)];
//       }
// console.log(i);
// console.log(string[i])
// console.log(array);
// console.log("---")

function splitSentence(string) {
  // seu código aqui
  for (i=0; i<string.length; i += 1) {
    if (string[i] == " "){//completamente diferente de string[i] = " "!!!
      array = [string.slice(0,i),string.slice(i,string.length)];
    }
  }
  return console.log(array);
  return array;
} 


splitSentence(string);


// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
