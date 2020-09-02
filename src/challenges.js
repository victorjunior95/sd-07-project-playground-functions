// Desafio 1
function compareTrue(a,b) {
  if (a === true && b === true){
    return true;
  }
  else {
    return false;
  }
}
//console.log(compareTrue(false,true));

// Desafio 2
function calcArea(base,height) {
  let areaTriangulo=0;
  areaTriangulo=(base*height)/2;
  return areaTriangulo;
}
//console.log(calcArea(15,3));

// Desafio 3
function splitSentence(string) {
  let array = [];
  let palavra = "";
    for (i=0; i<=string.length; i+=1){
      
      if (string.substr(i,1)==" " || i == string.length){
        array.push(palavra);
        palavra = "";
      }
      else {
        palavra = palavra + string.substr(i,1);
      }

    }
    return array;
}
//console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) {
  let ultimaPosicaoDaArray = array.length-1
  let string = "";

  string = array[ultimaPosicaoDaArray] + ", " + array[0];
  return string;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins,ties) {
  let pontosVitorias = wins*3;
  let pontosEmpates = ties;
  let pontosCampeonato = pontosVitorias + pontosEmpates;

  return pontosCampeonato;
}
//console.log(footballPoints(5,2));

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let contaNumero = 0;
    for (key in array){
      if (array[key]>maiorNumero){
        maiorNumero=array[key];
      }
    }
  
    for (key in array){
      if (array[key]==maiorNumero){
        contaNumero+=1;
      }
    }
  return contaNumero
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
