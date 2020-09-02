// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  else {
    return false;
  }
}  

compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;

  return areaTriangulo;
}

calcArea (2, 4);

// Desafio 3
function splitSentence(string) {
  let stringArray = string.split(" ");

  return stringArray;
}

splitSentence("go trybe");

// Desafio 4
function concatName(array) {
  let soma = array[array.length-1]+", "+array[0];  

  return soma;
}

concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoint = wins * 3;
  let championshipPoint = winsPoint + ties;

  return championshipPoint;
}

footballPoints(3, 1);

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];  

  for (let i = 1; i < arrayNumeros.length; i += 1){
    if (arrayNumeros[i] > maiorNumero){
      maiorNumero = arrayNumeros[i];
    }
  }

  let repeticao = 0;

  for(let j = 0; j < arrayNumeros.length; j += 1){
    if (arrayNumeros[j] === maiorNumero) {
      repeticao += 1;
    }
  }

  return repeticao;
}

highestCount([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;
  
  let unidadeCat1 = Math.abs(distanceCat1);
  let unidadeCat2 = Math.abs(distanceCat2)

  if (unidadeCat1 === unidadeCat2) {
    return "os gatos trombam e o rato foge";
  }
  else if (unidadeCat2 < unidadeCat1){
    return "cat2";
  }
  else {
    return "cat1";
  }
}

catAndMouse(10,4,22);

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
