// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) return true
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(palavra) {
  return palavra.split(' ');
}

// Desafio 4
function concatName(palavras) {
  return palavras[palavras.length - 1] + palavras[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maior = numbers[0];
  let contador = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (maior === numbers[i]) contador += 1;
    if (maior < numbers[i]) {
      maior = numbers[i];
      contador = 0;
      i = 0;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) return 'cat1';
  else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(lista) {
  let fizzOrBuzz = [];
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i] % 15 === 0) fizzOrBuzz[i] = 'fizzBuzz';
    else if (lista[i] % 5 === 0) fizzOrBuzz[i] = 'buzz';
    else if (lista[i] % 3 === 0) fizzOrBuzz[i] = 'fizz';
    else fizzOrBuzz[i] = 'bug!';
  }
  return fizzOrBuzz;
}

// Desafio 9
function encode(word) {
  let code = '';
  for (let j = 0; j < word.length; j += 1) {
    switch (word[j]) {
      case 'a':
        code += '1';
        break;
      case 'e':
        code += '2';
        break;
      case 'i':
        code += '3';
        break;
      case 'o':
        code += '4';
        break;
      case 'u':
        code += '5';
        break;
      default:
        code += word[j];
        break;
    }
  }
  return code
}

function decode(code) {
  let word = '';
  for (let i = 0; i < code.length; i += 1) {
    switch (code[i]) {
      case '5':
        word += 'u';
        break;
      case '4':
        word += 'o';
        break;
      case '3':
        word += 'i';
        break;
      case '2':
        word += 'e';
        break;
      case '1':
        word += 'a';
        break;
      default:
        word += code[i];
        break;
    }
  }
  return word;
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
