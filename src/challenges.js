// Desafio 1
function compareTrue(a, b) {
  let co = true;
  if ( a === co && b === co ) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  let tamanho = array.length -1;
  return array[tamanho] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numeros) {
  let maior = 0
  let repeticao = 0
  for (let i = 0; i < numeros.length; i += 1){
    if (maior < numeros[i]){
      maior = numeros[i];
    }
  }
  for (let j = 0; j < numeros.length; j += 1){
    if (maior === numeros[j]){
      repeticao += 1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = cat1 - mouse;
  let distancia2 = cat2 - mouse;
  if (distancia1 < 0){
    distancia1 *= -1;
  }
  if (distancia2 < 0) {
    distancia2 *= -1;
  }
  if (distancia1 === distancia2) {
    return "os gatos trombam e o rato foge";
  }
  else{
    if (distancia1 < distancia2){
      return "cat1"
    }
    else{
      return "cat2"
    }
  }
}

// Desafio 8
function fizzBuzz(bus) {
  let saida = []
  for (let i = 0; i < bus; i += 1) {
    if (bus[i]%3 === 0 && bus[i]%5 === 0) {
      saida[i] = "fizzBuzz";
    }
    else if (bus[i]%3 === 0){
      saida[i] = "fizz";
    }
    else if (bus[i]%5 === 0){
      saida[i] = "Buzz";
    }
    else {
      saida[i] ="bug!"
    }
  }
  return saida;
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