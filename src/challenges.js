// Desafio 1
function compareTrue(boleano1 , boleano2) {
  let boleano = true;
  if(boleano1 === true && boleano2 === true || boleano2 === true && boleano1 === true){
    boleano = true;
    return boleano;
  }else if(boleano1 === false && boleano2 === true || boleano2 === false && boleano1 === true){
    boleano = false;
    return boleano;
  } else if (boleano1 === false && boleano2 === false){
    boleano = false;
    return boleano;
  } 
}

// Desafio 2
function calcArea(base,height) {
  resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence() {

}
// Desafio 4
function concatName(nomes) {
  let n = nomes.length;
  return `${nomes[n-1]}, ${nomes[0]}`;
}

function footballPoints(wins,ties) {
  wins = wins * 3;
  ties = ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
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
