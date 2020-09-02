// Desafio 1
function compareTrue(valor1, valor2) {
  let retorno = false;
  if (valor1 === true && valor2 === true) {
    retorno = true;
  } else {
    retorno = false;
  }
  return retorno;
}


// Desafio 2
function calcArea(base, height) {
  let area = (base * height / 2);
  return area;
}


// Desafio 3
function splitSentence(umaString) {
  umArray = umaString.split(" ")
  return umArray;
}


// Desafio 4
function concatName(arrayDeStrings) {
  let stringFinal = (arrayDeStrings[(arrayDeStrings.length-1)] +", "+ arrayDeStrings[0])
  return stringFinal;
}



// Desafio 5
function footballPoints(wins, ties) {
  let points = ((3*wins) + ties);
  return points;
}

// Desafio 6
function highestCount(numeros) {
  let numerosEmOrdem = numeros.sort();
  let maiorNumero = numerosEmOrdem[numerosEmOrdem.length-1];
  let rep = 0;
  for (let i in numerosEmOrdem) {
      if (numerosEmOrdem[i] === maiorNumero) {
          rep += 1;
      }
  }
  return rep;
}

// Desafio 7
function catAndMouse(posicao1, posicao2, posicao3) {
  let scat1 = posicao2 - posicao1;
  let scat2 = posicao3 - posicao1;
  let retorno = 0;
  if (scat1 < scat2) {
      retorno = "cat1"
  } else if (scat2 < scat1) {
      retorno = "cat2"
  } else {
      retorno = "os gatos trombam e o rato foge"
  }
  return retorno;
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
