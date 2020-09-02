// Desafio 1
let a= false;
let b= false;
function compareTrue(a, b) {
  let resultado = a && b;
  // return console.log("resultado do desafio 1", resultado);
  return resultado;
}
// compareTrue(a,b);

// Desafio 2
let base= 1;
let height= 2;
function calcArea(base, height) {
  let area = base*height/2
  // return console.log("resultado do desafio 2", area, "m2");
  return area;
}
// calcArea(base, height);

// Desafio 3
let string = "vamo que vam"
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
//função split pode usar, você remove oq precisa e ele retorna separado e sem ele.
// for (i=0; i<string.length; i += 1) {
//   if (string[i] == " "){//completamente diferente de string[i] = " "!!!
//   array = [string.slice(j,i),string.slice(i,string.length)];
//   j=
// }
// }

function splitSentence(string) {
  let array = string.split(" ");
  // return console.log("resultado do desafio 3", array);
  return array;
} 
// splitSentence(string);


// Desafio 4
let nomeCompleto = ['Vanessa', 'Pimentel', 'Lages', 'Martins', 'Ferreira'];
let nomeEmIngles = "";
// let ultimo = nomeCompleto.length;
// console.log("resultado do desafio 3", ultimo);
// nomeEmIngles = nomeCompleto[ultimo]+", "+ nomeCompleto[0];
// nomeEmIngles = nomeCompleto[nomeCompleto.length] + nomeCompleto[0];
// Esse em cima estava dando erro porque o nomecompleto[nomecompleto.length] é realmente undefined, 
// tem que colocar o -1 pq length de string começa em 0.
// for (i=0; i<nomeCompleto.length; i +=1){
//   if (i=nomeCompleto.length){
//     nomeEmIngles = nomeCompleto[i] +", "+ nomeCompleto[0];
//   }
// }
// console.log("resultado do desafio 3", nomeEmIngles);


function concatName(nomeCompleto) {
  let nomeEmIngles = "";
  let primeiro =[];
  let último=[];
  for (i=0; i<nomeCompleto.length; i +=1){
    if (i=nomeCompleto.length){
      nomeEmIngles = nomeCompleto[i-1] +", "+ nomeCompleto[0]; 
    }
  }
  // return console.log("resultado do desafio 4 é", nomeEmIngles);
  return nomeEmIngles;
}
// concatName(nomeCompleto);

// Desafio 5
let wins = 3;
let ties = 2;
// let total = 3*wins+ties;
// console.log("resultado do desafio 5 é", total);

function footballPoints(wins, ties) {
  let total = 3*wins+ties;
  return total;
  // return console.log("resultado do desafio 5 é", total);
}
// footballPoints(wins, ties);

// Desafio 6
let numbers = [1,3,5,6,7,8,8,7,8,3,4,5,7];
function highestCount(numbers) {
  let maior =0;
  for (let i=0; i<numbers.length; i += 1){
    if (numbers [i] > maior){
        maior = numbers [i];
    }
  }
  let countBigger = 0;
  for (let j=0; j<numbers.length; j += 1){
    if (numbers [j] == maior){
      countBigger = countBigger +1
    }
  }
  return total;
  // return console.log("resultado do desafio 6 é", countBigger);
}
// highestCount(numbers);

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
