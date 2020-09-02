// Desafio 1
function compareTrue(primeiroValor, segundoValor) {
  let resultado = false;
  if (primeiroValor && segundoValor) {
    resultado = true;
  }
  else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
}

// Desafio 4
function concatName(arrayDeStrings) {
  arrayResultado = "";
  arrayResultado += arrayDeStrings[arrayDeStrings.length - 1];
  arrayResultado += ", "
  arrayResultado += arrayDeStrings[0];
  return arrayResultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = wins * 3;
  let pontosEmpate = ties * 1;
  let totalPontos = pontosEmpate + pontosVitoria;
  return totalPontos;
}

// Desafio 6
function highestCount(arrayDeInteiros) {

  //funcoes criadas nos exercícios do dia 4.
  function retornaIndiceMaiorValor(arrayEscolhido) {
    let indiceMaiorValor = 0;
    let numeroVitorias = 0;
    //verifica o maior valor do arrayEscolhido.
    for (j = 0; j < arrayEscolhido.length; j += 1) {
      numeroVitorias = 0;
      for (i = 0; i < arrayEscolhido.length; i += 1) {
        if (arrayEscolhido[j] >= arrayEscolhido[i]) {
          numeroVitorias += 1;
        }
      }

      if (numeroVitorias === arrayEscolhido.length) {
        indiceMaiorValor = j;
      }
    }
    return indiceMaiorValor
  }
  function numeroRepeticoes(array, indice) {
    let numeroRepeticoes = 0;
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[indice] === array[i]) {
        numeroRepeticoes += 1;
      }
    }
    return numeroRepeticoes;
  }

  let indiceDoElementoMaior = retornaIndiceMaiorValor(arrayDeInteiros);

  return numeroRepeticoes(arrayDeInteiros, indiceDoElementoMaior);
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
