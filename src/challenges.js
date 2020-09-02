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

function calcArea(base,height) {
  resultado = (base * height) / 2;
  return resultado;
}

function splitSentence(palavra) {
  let dividindoPalavras = palavra.split(' ');
  return dividindoPalavras;
}

function concatName(nomes) {
  let n = nomes.length;
  return `${nomes[n-1]}, ${nomes[0]}`;
}

function footballPoints(wins,ties) {
  let pontos = 0;
  wins = wins * 3;
  pontos = ties + wins;
  return pontos;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
function highestCount(lista) {
  let repeticao = [];
  let maiorNumero = lista[0];

  for(let i in lista){
    if(lista[i] > maiorNumero){
      maiorNumero = lista[i];
    }
  }
  for(let j in lista){
    if(lista[j] == maiorNumero){
      repeticao += 1;
    }
  }
  return repeticao;
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
