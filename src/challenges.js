// Desafio 1
let a= false;
let b= false;
function compareTrue(a, b) {
  // seu código aqui
  let resultado = a && b;
  // return console.log("resultado do desafio 1", resultado);
  return resultado;
}
// compareTrue(a,b);

// Desafio 2
let base= 1;
let height= 2;
function calcArea(base, height) {
  // seu código aqui
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
  // seu código aqui
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
for (i=0; i<nomeCompleto.length; i +=1){
  if (i=nomeCompleto.length){
    nomeEmIngles = nomeCompleto[i] +", "+ nomeCompleto[0];
  }
}
// console.log("resultado do desafio 3", nomeEmIngles);


function concatName(nomeCompleto) {
  // seu código aqui
  for (i=0; i<nomeCompleto.length; i +=1){
    if (i=nomeCompleto.length){
      nomeEmIngles = nomeCompleto[i] +", "+ nomeCompleto[0];
    }
  }
  return console.log("resultado do desafio 3", nomeEmIngles);
  return nomeEmIngles;
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
