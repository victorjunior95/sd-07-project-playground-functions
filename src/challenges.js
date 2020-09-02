//Função Auxiliar
function somaRepeat(array, pos) {
  let soma = 0;
  for (let i in array) {
    if (array[pos] === array[i]) {
      soma += 1;
    }
  }
  return soma;
}

// Desafio 1
function compareTrue(bool1, bool2) {
  let boolR = false;
  if (bool1 && bool2) {
    boolR = true;
  }
  return boolR;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let palavra = '';
  let arrayPalavras = [];
  for (let i in frase) {
    if (frase[i] !== ' ') {
      palavra += frase[i];
    } else {
      arrayPalavras.push(palavra);
      palavra = '';
    }
  }
  arrayPalavras.push(palavra);
  return arrayPalavras;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(array) {
  let posMaisF = 0;
  let somaMaisF = somaRepeat(array, posMaisF);
  let posAtual = posMaisF + 1;
  let somaAtual = 0;
  for (posAtual; posAtual < array.length; posAtual += 1) {
    somaAtual = somaRepeat(array, posAtual);
    if (somaAtual > somaMaisF) {
      posMaisF = posAtual;
      somaMaisF = somaAtual;
    }
  }
  return soma;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado;
  let diferencaCat1;
  let diferencaCat2;

  diferencaCat1 = cat1 - mouse;
  diferencaCat2 = cat2 - mouse;

  if (diferencaCat1 < diferencaCat2) {
    resultado = 'cat1';
  } else if (diferencaCat1 > diferencaCat2) {
    resultado = 'cat2';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayPalavras = [];
  for (let i in array){
    let palavra = '';
    if ((array[i] % 3) === 0 && (array[i] % 5) === 0) {
      palavra = 'fizzBuzz';
    } else if ((array[i] % 3) === 0) {
      palavra = 'fizz';
    } else if ((array[i] % 5) === 0) {
      palavra = 'buzz';
    } else {
      palavra = 'bug!';
    }
    arrayPalavras.push(palavra);
  }
  return arrayPalavras;
}

// Desafio 9
function encode(string) {
  let altString = '';
  for(let i in string){
    switch(string[i]){
      case 'a':
        altString += '1';
        break;
      case 'e':
        altString += '2';
        break;
      case 'i':
        altString += '3';
        break;
      case 'o':
        altString += '4';
        break; 
      case 'u':
        altString += '5';
        break;
      default:
        altString += string[i];
        break;
    }
  }
  return altString;
}
function decode(string) {
  let altString = '';
  for(let i in string){
    switch(string[i]){
      case '1':
        altString += 'a';
        break;
      case '2':
        altString += 'e';
        break;
      case '3':
        altString += 'i';
        break;
      case '4':
        altString += 'o';
        break; 
      case '5':
        altString += 'u';
        break;
      default:
        altString += string[i];
        break;
    }
  }
  return altString;
}

// Desafio 10
function techList(array, name) {
  if (array.length !== 0){
    array.sort(function (a, b) {
      return a.localeCompare(b);
    });
    for (let i in array){
      let object = {}
      object.tech = array[i];
      object.name = name; 
      array[i] = object;
    }
  } else {
    return 'Vazio!';
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(array) {
  let numero = '';
  for(let i in array){
    if (somaRepeat(array, i) >= 3){
      numero = 'não é possível gerar um número de telefone com esses valores';
      break;
    }
  }
  for(let i in array){
    if (array[i] > 9 || array[i] < 0){
      numero = 'não é possível gerar um número de telefone com esses valores';
      break;
    }
  }
  if (array.length === 11){
    for(let i in array){
      switch(i){
        case '0':
          numero += '(';
        break;
        case '2':
          numero += ')';
          numero += ' ';
        break;
        case '7':
          numero += ' ';
        break; 
      }
      numero += array[i]
    }
  } else {
    numero = 'Array com tamanho incorreto.';
  }
  return numero;
}

// Desafio 12
function triangleCheck() {
  let resultado = false;
  if (lineA >= 0 || lineB >0 || lineC >= 0){
    if (lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA) {
      if(Math.abs(lineA - lineB) < lineC && Math.abs(lineA - lineC) < lineB && Math.abs(lineB - lineC) < lineA){
        resultado = true;
      }
    }
  }
  return resultado;
}

// Desafio 13
function hydrate() {
  let coposDagua = 0;
  for(let i in pedido){
    let numbers = /^[0-9]+$/;
    let number = 0;
      if(pedido[i].match(numbers))
        number = parseInt(pedido[i], 10);//w3Schools Parseint
      coposDagua += number;
  }
  return coposDagua;
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
