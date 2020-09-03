// Desafio 1
function compareTrue(valor1, valor2) {
  let retorno = false;
  if (valor1 === true && valor2 === true) {
    retorno = true;
  }
  return retorno;
}

compareTrue();

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

calcArea();

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount(array) {
  //posicao 0 = contador, 1 contadorAnterior, 2 maisRepetido, 3 numeroAtual]
  let varAuxiliar = [0, 0, 0, 0]; 
  for(let i = 0; i < array.length; i += 1){
    varAuxiliar[3] = array[i];
    for(let j = 0; j < array.length; j += 1){
        if(array[j] === varAuxiliar[3]){
            varAuxiliar[0] += 1;
        }
    }
    if(varAuxiliar[1] === 0){
      varAuxiliar[1] = varAuxiliar[0];
      varAuxiliar[2] = varAuxiliar[3];
    }
    if(varAuxiliar[0] > varAuxiliar[1]){
      varAuxiliar[2] = varAuxiliar[3];
    }
    varAuxiliar[0] = 0;
  }
  return varAuxiliar[2];
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
