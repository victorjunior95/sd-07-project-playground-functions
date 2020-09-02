
// Desafio 1
function compareTrue(a, b) {
  if(a === true && b === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  calculate = (base*height) / 2;
  return calculate;  
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let output = '';
  for (let i = 0; i < array.length; i +=1) {
    if (i === 0){
      output += `${array[array.length - 1]}, `;
    } else if (i === array.length -1){
      output += array[0];
    }
  }
  return output;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(array) {
  let maiorValor = 0;
  let reapt = 0;
  for (let i = 0; i < array.length; += 1){
    if (array[i] > maiorValor){
      maiorValor = array[i];
    }
    if(maiorValor === array[i]){
      reapt = reapt += 1;
    }
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCatUm = Math.abs(mouse - cat1);
  let distanciaCatDois = Math.abs(mouse - cat2);
  
  if(distanciaCatUm < distanciaCatDois){
    return 'cat1';
  } else if (distanciaCatUm > distanciaCatDois){
    return 'cat2';
  } else {
    return 'Os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (i in array) {
    if (((array[i] % 3) === 0) && ((array[i] % 5) === 0)) {
      resultado.push("fizzBuzz");
    } else if ((array[i] % 3) === 0){
      resultado.push("fizz");
    } else if ((array[i] % 5) === 0){
      resultado.push("buzz");
    } else {
      resultado.push("bug!");
    }
  }
  return resultado;
}

// Desafio 9
function encode(frase) {
  
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
