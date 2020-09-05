// Desafio 1
function compareTrue(a, b) {
  let comparacao;
  if(a === true && b === true){
    comparacao = true;
  }else {
    comparacao = false
  }
  return comparacao
}

// Desafio 2

function calcArea(base, heigth) {
  let area = (base * heigth) / 2;   
  
  return area;
}

// Desafio 3
function splitSentence(string) {
  let separador = " ";
  let arrayDeStrings = string.split(separador)

  return arrayDeStrings;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let concat = arrayDeStrings[arrayDeStrings.length - 1 + ", " + arrayDeStrings[0]];

  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = (wins * 3) + (ties * 1);  

  return pontosTotais;
}

// Desafio 6
function highestCount(param) {
  let maiorValor = 0;
  let numRepeticoes = 0;
  for(let i = 0; i < param.length; i += 1){
     if(maiorValor < param[i]){
      maiorValor = param[i];
     }
  } 
  for(let j = 0; j < param.length; j += 1){
      if(maiorValor === param[j]){
      numRepeticoes += 1;
      }
  }
  
  return numRepeticoes
  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    if((cat1 - mouse) < (cat2 - mouse)){
        return "cat1"
    } else if((cat2 - mouse) < (cat1 - mouse)){
        return "cat2"
    }else {
      return "os gatos trombam e o rato foge"
  }
 
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
