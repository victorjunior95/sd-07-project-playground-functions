// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 & boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

/* console.log(compareTrue(true, true)); */

/* ________________________________________________________________________________ */

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

/* console.log(calcArea(2, 3)); */

/* ________________________________________________________________________________ */

// Desafio 3
function splitSentence(string) {
  let arrayStrings = string.split(' ');
  return arrayStrings;
}

/* console.log(splitSentence('família é amor')); */

/* ________________________________________________________________________________ */

// Desafio 4
function concatName(arrayStrings) {
  let primeiroEUltimo = arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0];
  return primeiroEUltimo;
}

/* console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));  */

/* ________________________________________________________________________________ */

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = 3;
  let empate = 1;
  let campeonato = 0;
  campeonato = (wins * vitoria) + (ties * empate);
  return campeonato;  
} 

/* console.log(footballPoints(3, 11)); */

/* ________________________________________________________________________________ */

// Desafio 6
// Encontrar o maior número da array
// Contar quantas vezes se repete
function highestCount(arrayNumeros) {
  let maiorNumero = 0;
  let contNumero = 0;
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (maiorNumero < arrayNumeros[i] && maiorNumero != 0) {
      maiorNumero = arrayNumeros[i];
    }
  }
  for (let j = 0; j < arrayNumeros.length; j += 1) {
    if (maiorNumero === arrayNumeros[j]) {
      contNumero = contNumero + 1;              
    } 
  }
  return contNumero;
}

console.log(highestCount([0, 0, 0]));

/* ________________________________________________________________________________ */

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 == distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}

/* console.log(catAndMouse(5, 4, 7)); */

/* ________________________________________________________________________________ */

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let retorno = [];
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (arrayNumeros[i] % 3 === 0 && arrayNumeros[i] % 5 === 0) {
      retorno.push('fizzBuzz');
    } else if (arrayNumeros[i] % 3 === 0) {
      retorno.push('fizz');
    } else if (arrayNumeros[i] % 5 === 0) {
      retorno.push('buzz');
    } else {
      retorno.push('bug!');
    }
  }
  return retorno; 
}

/* console.log(fizzBuzz([5, 3, 15, 13])); */

/* ________________________________________________________________________________ */

// Desafio 9
function encode(stringEncode) {
  // seu código aqui
}

/* ________________________________________________________________________________ */

function decode() {
  // seu código aqui
}

/* ________________________________________________________________________________ */

// Desafio 10
function techList() {
  // seu código aqui
}

/* ________________________________________________________________________________ */

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

/* ________________________________________________________________________________ */

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

/* ________________________________________________________________________________ */

// Desafio 13
function hydrate() {
  // seu código aqui
}

/* ________________________________________________________________________________ */

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
