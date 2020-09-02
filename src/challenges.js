// Desafio 1
function compareTrue(a, b) {
  let compare = a && b;
  return compare;
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let trianguloArea = ((base * height)/2);
  return trianguloArea;
}

console.log(calcArea(8, 4));

// Desafio 3
function splitSentence(frase) {
  let aPalavras = frase.split(' ');
  return aPalavras;
}

console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(nomes) {
  let tamanho = nomes[nomes.length -1] + `, ` + nomes[0];

  return tamanho;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties ) {
  pontos = (wins * 3) + ties;
  return pontos;
}

console.log(footballPoints(7, 5));

// Desafio 6
function highestCount(numeros) {
  let repete = 0;
  let maiorNum = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maiorNum) {
      maiorNum = numeros[i];
      repete = 1;
    } else if (numeros[i] === maiorNum) {
      repete += 1;
    }
  }
  return repete;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let retorno ='';
  if ((mouse - cat1) < (mouse - cat2)) {
    retorno = "cat1";
  } else if ((mouse - cat1) > (mouse - cat2)) {
    retorno = "cat2";
  } else {
    retorno = "os gatos trombam e o rato foge";
  }
  return retorno;
}

console.log(catAndMouse(5, 2, 3));

// Desafio 8
function fizzBuzz(arrayNumerosFB) {
  let arrayFB = [];
  for (let i = 0; i < arrayNumerosFB.length; i+= 1) {
    let resto3 = arrayNumerosFB[i] % 3;
    let resto5 = arrayNumerosFB[i] % 5
    if ((resto3 === 0) || (resto5 === 0)) {
      if ((resto3 === 0) && (resto5 === 0)) {
        arrayFB[i] = 'fizzBuzz';
      } else if (resto3 === 0) {
        arrayFB[i] = 'fizz';
      } else {
        arrayFB[i] = 'buzz';
      }
    } else {
      arrayFB[i] = 'bug!';
    }
  }
  return arrayFB;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(frase) {
  let fraseResultante = frase.replace(/a/g, '1');
  fraseResultante = fraseResultante.replace(/e/g, '2');
  fraseResultante = fraseResultante.replace(/i/g, '3');
  fraseResultante = fraseResultante.replace(/o/g, '4');
  fraseResultante = fraseResultante.replace(/u/g, '5');
  return fraseResultante;
}
function decode(frase) {
  let fraseResultante = frase.replace(/1/g, 'a');
  fraseResultante = fraseResultante.replace(/2/g, 'e');
  fraseResultante = fraseResultante.replace(/3/g, 'i');
  fraseResultante = fraseResultante.replace(/4/g, 'o');
  fraseResultante = fraseResultante.replace(/5/g, 'u');
  return fraseResultante;
}

console.log (encode('hi there!'));
console.log(decode("h3, th2r2!"));

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
