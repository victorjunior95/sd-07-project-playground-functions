// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado;
  if (valor1 === true && valor2 === true) {
    resultado = true;
    return resultado;
  } else {
    resultado = false;
    return resultado;
  }
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea;
  triangleArea = (base * height) / 2;
  return triangleArea;  
}

// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(" ");
  return fraseSeparada;
}

// Desafio 4
function concatName(nome) {
  let nomeInvertido = [];
  nomeInvertido = nome[nome.length - 1];
  nomeInvertido += ", " + nome[0];
  return nomeInvertido;
}

// Desafio 5
function footballPoints(wins, ties) {
  let win = 3;
  let tie = 1;
  let result = 0;
  for (let i = 1; i <= wins; i += 1) {
    result += win;
  }
  for (let i = 1; i <= ties; i += 1) {
    result += tie;
  }
  return result;
}

// Desafio 6
function highestCount(numbers) {
  let maior = 0;
  let repete = 0;
  for (let i in numbers) {
    if (numbers[i] > maior) {
      maior = numbers[i];
    }
  }
  for (let i in numbers) {
    if (numbers[i] === maior) {
      repete += 1;
    }
  }
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let getMouse = '';
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance === cat2Distance) {
    console.log("os gatos trombam e o rato foge");
  } else if (cat1Distance < cat2Distance) {
    getMouse = "cat1";
  } else {
    getMouse = "cat2"
  }
  return getMouse;
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
