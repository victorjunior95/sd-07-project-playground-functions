// Desafio 1.
function compareTrue(camisaAzul, calcaAzul) {
  let avaliacao = true;

  if (camisaAzul == true && calcaAzul == true) {
    avaliacao = true;
  }

  else {
    avaliacao = false;
  }

  return avaliacao;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let calculoArea = (base * height) / 2;
  return calculoArea;
  // seu código aqui
}

// Desafio 3
function splitSentence(stringExemplo) {
  resultado = stringExemplo.split(" ");
  return resultado;
  // seu código aqui
}

// Desafio 4
function concatName(listaDeNomes) {
  let resultado = (listaDeNomes[listaDeNomes.length -1] + ',' + ' ' + listaDeNomes[0])
      return resultado;
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = wins * 3;
  let pontosEmpate = ties * 1;
  let quantidadeDePontos = pontosVitoria + pontosEmpate;

  return quantidadeDePontos
     
  // seu código aqui
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = 0;
  let contagem = 0;

  for( i = 0; i < arrayDeNumeros.length; i += 1){
    if( arrayDeNumeros[i] >= maiorNumero) {
      maiorNumero = arrayDeNumeros[i];
      contagem += 1;
      }
    }
  return contagem;
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
