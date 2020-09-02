// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 == true && valor2 == true){
    return true;
  }
   else {
      return false;     
  }
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
// Desafio 3
function splitSentence(gru) {
  return gru.split(" ")
}
// Desafio 4
function concatName(nome) {
  return `${nome[nome.length - 1]}, ${nome[0]}`
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins *= 3) + (ties *= 1)
}
// Desafio 6

function highestCount(numeros) {
  let maiornumerorep = 0;
  let maiornumb = 0;
  for(u = 0; u < numeros.length; u += 1){
    if(numeros[u] > maiornumb){
      maiornumb = numeros[u];
    }
  }
  for(i = 0; i < numeros.length; i += 1){
     if(maiornumb == numeros[i]){
        maiornumerorep += 1
    }
  }
  return maiornumb
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
