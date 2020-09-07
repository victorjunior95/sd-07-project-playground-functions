// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
  return(true);
} else {
  return(false)
}
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(string) {
  var separador = ' '
  let stringSeparada = string.split(separador)
  return stringSeparada
}
// Desafio 4
function concatName(array) {
  let i = (array.length - 1)
  let ultimo = (array[i])
  let primeiro = (array[0])
  return ultimo + ', ' + primeiro
}
// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3
  let empate = ties 
  return pontos = vitoria + empate
}
// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let contador = 0;

  for (let i = 0; i < array.length; i += 1){
    if (array[i] >= maiorNumero) {
      maiorNumero = array[i];
      contador += 1;
    }
  }
  return contador;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = mouse - cat2;
  if (distanciaCat1 == distanciaCat2) {
    return "Os gatos trombam e o rato foge"
  } 
  else if (distanciaCat1 > distanciaCat2) {
    return "cat2"
  } else {
    return "cat1" 
  }
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
