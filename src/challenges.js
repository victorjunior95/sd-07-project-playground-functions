// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, true));
console.log(compareTrue(true, false));
console.log(compareTrue(false, true));
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(20, 2));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

console.log(splitSentence('O rato roeu a roupa do rei de roma!'));

// Desafio 4
function concatName(array) {
  return array.slice(-1) + ', ' + array[0];
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

console.log(footballPoints(10, 6));

// Desafio 6
function highestCount(array) {
  maiorNumero = Math.max(...array);
  contador = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

console.log(highestCount([9, 4, 4, 4, 9, 4, 9, 13, 13, 1, 4, 13]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distanciaCat1 = mouse - cat1;
  distanciaCat2 = mouse - cat2;

  if (distanciaCat1 < distanciaCat2) {
    return cat1;
  } else if (distanciaCat2 < distanciaCat1) {
    return cat2;
  } else {
    return "os gatos trombam e o rato foge";
  }
}

console.log(catAndMouse(10, 9, 8));

// Desafio 8
function fizzBuzz(array) {
  arrayRetorno = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      arrayRetorno.push("fizzBuzz");
    } else if (array[i] % 3 === 0) {
      arrayRetorno.push("fizz");
    } else if (array[i] % 5 === 0) {
      arrayRetorno.push("buzz");
    } else {
      arrayRetorno.push("bug!");
    }
  }
  return arrayRetorno;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  // string = string.split("");

  for (let i = 0; i < string.length; i += 1) {
    console.log(string[i])
  }
}

// console.log(encode("hi there!"));
encode("hi there!")

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
};