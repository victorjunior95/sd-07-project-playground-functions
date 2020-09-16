// Funções Auxiliares
// Soma repetidos
function retornarMaior(arrayGenerico) {
  let maior = 0;
  let posMaior = 0;
  for (let i in arrayGenerico) {
    if (arrayGenerico[i] > maior) {
      maior = arrayGenerico[i]
      posMaior = i;
    }
  }
  return posMaior;
}


function somaRepeat(arrayGenerico, pos) {
  let soma = 0;
  for (let i in arrayGenerico) {
    if (arrayGenerico[pos] === arrayGenerico[i]) {
      soma += 1;
    }
  }
  return soma;
}

function zeroToNine(arrayTelefone){
  for (let i in arrayTelefone) {
    if (arrayTelefone[i] > 9 || arrayTelefone[i] < 0 || somaRepeat(arrayTelefone, i) >= 3) {
      retorno = 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

// Valida array e dá uma resposta em strings
function validaTelefone(arrayTelefone) {
  let retorno = '';
  if (arrayTelefone.length === 11) {
    zeroToNine();
  } else {
    retorno = 'Array com tamanho incorreto.';
  }
  return retorno;
}

// Separa e enfeita Telefone
function enfeitaTelefone(arrayTelefone) {
  let numeroTelefone = '';
  for (let i in arrayTelefone) {
    switch (i) {
      case '0':
        numeroTelefone += '(';
        break;
      case '2':
        numeroTelefone += ')';
        numeroTelefone += ' ';
        break;
      case '7':
        numeroTelefone += '-';
        break;
      default:
        break;
    }
    numeroTelefone += arrayTelefone[i]
  }
  return numeroTelefone;
}

// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
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
  let posMaior = retornarMaior(array);
  let somax = somaRepeat(array, posMaior);
  return somax;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado;
  let diferencaCat1;
  let diferencaCat2;

  diferencaCat1 = Math.abs(cat1 - mouse);
  diferencaCat2 = Math.abs(cat2 - mouse);

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
  for (let i in array) {
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
  for (let i in string) {
    switch (string[i]) {
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
  for (let i in string) {
    switch (string[i]) {
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
  if (array.length !== 0) {
    array.sort(function (a, b) {
      return a.localeCompare(b);
    });
    for (let i in array) {
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
function generatePhoneNumber(arrayTelefone) {
  let resposta = validaTelefone(arrayTelefone)
  if (resposta === '') {
    resposta = enfeitaTelefone(arrayTelefone)
  }
  return resposta;
}

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let resultado = false;
  if (lineA >= 0 || lineB > 0 || lineC >= 0) {
    if (lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA) {
      if (Math.abs(lineA - lineB) < lineC && Math.abs(lineA - lineC) < lineB && Math.abs(lineB - lineC) < lineA) {
        resultado = true;
      }
    }
  }
  return resultado;
}

// Desafio 13
function hydrate(pedido) {
  let coposDagua = 0;
  for (let i in pedido) {
    let numbers = /^[0-9]+$/;
    let number = 0;
    if (pedido[i].match(numbers)) {
      number = parseInt(pedido[i], 10); // w3Schools Parseint
      coposDagua += number;
    }
  }
  if (coposDagua === 1) {
    coposDagua += ' copo de água';
  } else {
    coposDagua += ' copos de água';
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
