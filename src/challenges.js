// Desafio 1

function compareTrue(valorA, valorB) {
  return valorA && valorB;
}

// Desafio 2

function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3

function splitSentence(frase) {
  return frase.split(" ")
}

// Desafio 4
function concatName(array) {
  let nomes = "";
  nomes += array[array.length - 1];
  nomes += ", " + array[0];
  return nomes;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = 0;
  total = (wins * 3) + ties;
  return total
}

// Desafio 6
function highestCount(numeros) {
  // verifica maior valor
  let maiorValor = "";
  for (let i in numeros) {
    if (numeros[i] > maiorValor) {
      maiorValor = numeros[i];
    }
  }

  // verifica repetição
  let repeticao = 0;
  for (let i in numeros) {
    if (numeros[i] === maiorValor) {
      repeticao += 1;
    }
  }
  return repeticao
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // calcula distâncias
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);

  // verifica qual está mais perto
  let msg = "";
  if (distancia1 > distancia2) {
    msg = "cat2";
  } else if (distancia1 < distancia2) {
    msg = "cat1";
  } else {
    msg = "os gatos trombam e o rato foge";
  }
  return msg;
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
