// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if(a === true && b === true) {
     return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
return (base * altura / 2)
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
return frase.split(" ");
}

// Desafio 4
function concatName(lista) {
  // seu código aqui

  return lista[lista.length - 1] + ", " + lista[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maiorNumero = 0;
  let cont = 0;
  
  for (i in numeros) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }
  for (i in numeros) {
    if (maiorNumero === numeros[i]) {
      cont += 1;
    }
  }
  console.log (maiorNumero);
  return cont;   
}
  
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

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
