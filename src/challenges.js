// Desafio 1
function compareTrue(valor1, valor2) {
  return (valor1 && valor2);
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  return String(string).split(' ');
}

// Desafio 4
function concatName(string) {

  let contaString = 0;

  for (const key in string) {
    contaString = key;
  }

  let newString = `${string[contaString]}, ${string[0]}`;
  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function maiorValor(valores) {
  let maior = 0;
  for (valor of valores) {
    if (valor > maior) {
      maior = valor;
    }
  }

  return maior;
}

function highestCount(vetor) {
  let maior = maiorValor(vetor);
  let contaMaior = 0;

  for (const key in vetor) {
    if (maior === vetor[key]) {
      contaMaior += 1;
    }
  }

  return contaMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = 0;
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);

  if (cat1 === cat2) {
    resultado = "os gatos trombam e o rato foge";
  } else {
    resultado = (cat1 > cat2) ? "cat2" : "cat1";
  }

  return resultado;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayRetorno = [];
  for (const key in array) {
    if (array[key] % 5 == 0 && array[key] % 3 == 0) {
      arrayRetorno.push("fizzBuzz");
    } else if (array[key] % 3 == 0) {
      arrayRetorno.push("fizz");
    } else if (array[key] % 5 == 0) {
      arrayRetorno.push("buzz");
    } else if (!(array[key] % 5 == 0 && array[key] % 3 == 0)) {
      arrayRetorno.push("bug!");
    }
  }

  return arrayRetorno;
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
