// Desafio 1
function compareTrue(valor1, valor2) {
  return (valor1 && valor2);
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  return String(string).split(' ');
}

// Desafio 4
function concatName(string) {
  let contaString = 0;

  for (const key in string) {
    if (Object.prototype.hasOwnProperty.call(string, key)) {
      contaString = key;
    }
  }

  let newString = `${string[contaString]}, ${string[0]}`;
  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function maiorValor(valores) {
  let maior = 0;
  for (let valor of valores) {
    if (valor > maior) {
      maior = valor;
    }
  }

  return maior;
}

function highestCount(vetor) {
  let maior = maiorValor(vetor);
  let contaMaior = 0;

  for (const key in vetor) {
    if (Object.prototype.hasOwnProperty.call(vetor, key)) {
      if (maior === vetor[key]) {
        contaMaior += 1;
      }
    }
  }
  return contaMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = 0;
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);

  if (cat1 === cat2) {
    resultado = 'os gatos trombam e o rato foge';
  } else {
    resultado = (cat1 > cat2) ? 'cat2' : 'cat1';
  }

  return resultado;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayRetorno = [];
  for (const key in array) {
    if (Object.prototype.hasOwnProperty.call(array, key)) {
      if (array[key] % 5 === 0 && array[key] % 3 === 0) {
        arrayRetorno.push('fizzBuzz');
      } else if (array[key] % 3 === 0) {
        arrayRetorno.push('fizz');
      } else if (array[key] % 5 === 0) {
        arrayRetorno.push('buzz');
      } else if (!(array[key] % 5 === 0 && array[key] % 3 === 0)) {
        arrayRetorno.push('bug!');
      }
    }
  }
  return arrayRetorno;
}

// Desafio 9
function encode(string) {
  let saida = String(string).split('');
  const codigo = ['a', 'e', 'i', 'o', 'u'];

  for (let key = 0; key < codigo.length; key += 1) {
    for (let i = 0; i < string.length; i += 1) {
      if (saida[i] === codigo[key]) {
        saida[i] = key + 1;
      }
    }
  }

  return saida.join('');
}

function decode(string) {
  let saida = String(string).split('');
  const codigo = ['a', 'e', 'i', 'o', 'u'];

  for (let key = 0; key < 5; key += 1) {
    for (let i = 0; i < string.length; i += 1) {
      if (parseInt(saida[i], 10) === key + 1) {
        saida[i] = codigo[key];
      }
    }
  }

  return saida.join('');
}

// Desafio 10
function techList(tecnologias, nome) {
  let saida = [];
  tecnologias = tecnologias.sort();

  if (tecnologias.length === 0) {
    saida = 'Vazio!';
  } else {
    for (const key in tecnologias) {
      if (Object.prototype.hasOwnProperty.call(tecnologias, key)) {
        saida.push({
          tech: tecnologias[key],
          name: nome,
        })
      }
    }
  }
  return saida;
}

// Desafio 11
function procuraRepetidos(array) {
  let qtdRepetidos = 0;

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        qtdRepetidos += 1;
      }
    }

    if (qtdRepetidos >= 3) {
      return false;
    }
    qtdRepetidos = 0;
  }

  return true;
}

function verificaIntervalo(array, inferior, superior) {
  for (const key in array) {
    if (array[key] <= inferior || array[key] >= superior) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(array) {
  let saida = [];

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (!(procuraRepetidos(array) && verificaIntervalo(array, -1, 10))) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let key = 0;

  for (let i = 0; i < 15; i += 1) {
    if (i === 0) {
      saida[i] = '(';
    } else if (i === 3) {
      saida[i] = ')';
    } else if (i === 4) {
      saida[i] = ' '
    } else if (i === 10) {
      saida[i] = '-'
    } else {
      saida[i] = array[key];
      key += 1;
    }
  }

  return saida.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lados = (lineA + lineB) > lineC;
  lados = lados && (lineA + lineC) > lineB;
  lados = lados && (lineC + lineB) > lineA;

  let modulo = Math.abs(lineA - lineB) < lineC;
  modulo = modulo && Math.abs(lineA - lineC) < lineB;
  modulo = modulo && Math.abs(lineC - lineB) < lineA;

  return lados && modulo;
}

// Desafio 13
/**Fonte de pesquisa: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
 * 
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
*/

function hydrate(phrase) {
  let reg = /\d+/g;
  let numbers = phrase.match(reg);//cria um array com os números encontrados na string phrase.
  let sum = 0;

  for (const key in numbers) {
    if (Object.prototype.hasOwnProperty.call(numbers, key)) {
      sum += parseInt(numbers[key], 10);
    }
  }

  return sum > 1 ? `${sum} copos de água` : `${sum} copo de água`;
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
