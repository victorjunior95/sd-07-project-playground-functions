// Desafio 1 -
function compareTrue(value1, value2) {
  if (value1 && value2) {
  return true;
  }
  else {
  return false;
  }
}
// console.log(compareTrue(false,false));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}
// console.log(calcArea(10, 4));

// Desafio 3
function splitSentence(word) {
  let arrayWord = [];



}

// Desafio 4
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length-1];
  return ultimoNome + ", " + primeiroNome;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
//console.log(footballPoints(10, 3));

// Desafio 6
function highestCount(num) {
  let maiorValor = 0;
  let contador = 0;

  for (let i in num){
    if (num[i] >= maiorValor){
      maiorValor = num[i];
    }
  }
  for (let j in num){
    if (num[j] === maiorValor){
      contador += 1;
    }
  }
return contador;
}
//console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;

  if (distCat1 < 0){
    distCat1 *= -1;
  }
  if (distCat2 < 0){
    distCat2 *= -1;
  }
  if (distCat1 < distCat2){
    return "cat1";
  } else if (distCat2 < distCat1){
    return "cat2";
  } else {
    return("os gatos trombam e o rato foge");
  }
}
//console.log(catAndMouse(10, 4, 22));

// Desafio 8
function fizzBuzz(num) {
  let arrayNovo = [];
  for (let i = 0; i < num.length; i += 1){
    if (num[i] % 3 === 0 && num[i] % 5 === 0){
      arrayNovo.push("fizzBuzz");
    } else if (num[i] % 3 === 0) {
      arrayNovo.push("fizz");
    } else if (num[i] % 5 === 0){
      arrayNovo.push("buzz");
    } else {
      arrayNovo.push("bug!");
    }
  }
return arrayNovo;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
