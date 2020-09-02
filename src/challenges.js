// Desafio 1
function compareTrue(bolean1, bolean2) {
  // testando se o resultado é verdadeiro ou falso
  return bolean1 && bolean2 ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  // calculando a área de um triângulo
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(textString) {
  // retorna array de string separada pelos espaços
  let palavras = [];
  let palavra = '';
  for (let index = 0; index < textString.length; index += 1) {
    if (textString[index] !== ' ') {
      palavra += textString[index];
      if (index === textString.length - 1) {
        palavras.push(palavra);
      }
    } else {
      palavras.push(palavra);
      palavra = '';
    }
  }
  return palavras;
}

// Desafio 4
function concatName(textString) {
  // retornando posição final + inicial do array
  return `${textString[textString.length - 1]}, ${textString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(numbers) {
  // retorna maior número de array
  const myNuns = numbers;

  let countRepeatCurrentValue = 0;

  for (let value of myNuns) {
    let countRepeatValue = 0;

    for (let values of myNuns) {
      if (value === values) {
        countRepeatValue += 1;
      }
      if (countRepeatValue > countRepeatCurrentValue) {
        countRepeatCurrentValue = countRepeatValue;
      }
    }
  }

  return countRepeatCurrentValue;
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
