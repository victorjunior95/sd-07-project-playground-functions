// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(vetorString) {
  let str = vetorString;
  let splitStr = str.split(" ");
  return splitStr;
}

// Desafio 4
function concatName(vetorString) {
  let vetorFuncao = vetorString;
  let primeiroNome = vetorFuncao[0];
  let ultimoNome = vetorFuncao[vetorFuncao.length - 1];
  let concatenado = ultimoNome + ", " + primeiroNome;
  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let quantidadeVitorias = wins;
  let quantidadeEmpates = ties;
  let pontosVitoria = quantidadeVitorias * 3;
  let pontosEmpates = quantidadeEmpates * 1;
  let resultado = pontosVitoria + pontosEmpates;
  return resultado;
}

// Desafio 6
function highestCount(numeros) {
  let len = vetor.length;
  let swapped;
  let j = 0;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (vetor[i] > vetor[i + 1]) {
        let tmp = vetor[i];
        vetor[i] = vetor[i + 1];
        vetor[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);

  for (i = 0; i < vetor.length; i++) {
    if (vetor[vetor.length - 1] == vetor[i]) {
      j++;
    }
  }
  return j;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rato = mouse;
  let gato1 = cat1;
  let gato2 = cat2;
  let distanciaGato1 = Math.abs(rato - gato1);
  let distanciaGato2 = Math.abs(rato - gato2);

  if (distanciaGato1 < distanciaGato2) {
    return "cat1";
  } else if (distanciaGato1 > distanciaGato2) return "cat2";

  return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(vetor) {
  let array = vetor;
  let vetorSaida = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] % 5 == 0 && array[i] % 3 == 0) {
      vetorSaida.push("fizBuzz");
      return "fizBuzz";
    } else if (array[i] % 5 !== 0 && array[i] % 3 !== 0) {
      vetorSaida.push("bug!");
      return "bug";
    } else if (array[i] % 5 == 0) {
      vetorSaida.push("buzz");
      return "buzz";
    } else if (array[i] % 3 == 0) {
      vetorSaida.push("fizz");
      return "fizz";
    }
  }

  return vetorSaida;
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
};
