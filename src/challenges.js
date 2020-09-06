
// Desafio 1
function compareTrue(a, b) {
  let result = (a === true && b === true);
  return (result)
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return (area);
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return (array);
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  let string = (`${lastItem}, ${firstItem}`);
  return (string);
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins *= 3) + (ties *= 1);
  return (pontos);
}

// Desafio 6

let highestNumber = function (array) {
  let maiorNumero = array[0];
  for (let i in array) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  return maiorNumero;
}
function highestCount(array) {
  let numeroRepeat = 0;
  for (let j in array) {
    if (array[j] === highestNumber(array)) {
      numeroRepeat += 1;
    }
  }
  return numeroRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = '';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    resultado = 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    resultado = 'cat2';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return (resultado)
}

// Desafio 8
function fizzBuzz(array) {
  let string = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
        string.push('fizzBuzz');
      } else if (array[i] % 3 === 0) {
        string.push('fizz');
      } else if (array[i] % 5 === 0) {
        string.push('buzz');
      } else {
        string.push('bug!');
      }
    }
  return string;
}

// Desafio 9
function encode(string) {
  let vogais = ['a', 'e' , 'i', 'o', 'u'];
  let indice = 1;
  for (let i in vogais) {
      let regex = new RegExp(vogais[i], 'g');
      string = string.replace(regex, indice);
      indice += 1;
  }
  return string;
}
function decode(string) {
  let vogais = ['a', 'e' , 'i', 'o', 'u'];
  let indice = 1;
  for (let i in vogais) {
      let regex = new RegExp(indice, 'g');
      string = string.replace(regex, vogais[i]);
      indice += 1;
  }
  return string;
}

// Desafio 10
function techList(array, name) {
  let nArray = [];
  let nItem = '';
  let sArray = [];
  if (array.length === 0) {
    return ('Vazio!')
  }
  sArray = array.sort();
  for (let i in sArray) {
    if (sArray.length !== 0) {
      nItem = {
        tech: sArray[i],
        name: `${name}`,
      }
      nArray.push(nItem);
    }
  }

  return (nArray)
}

// Desafio 11
function repeatNumber(array) {
  let arrayCopy = array.slice();
  let repeats = 1;
  arrayCopy = arrayCopy.sort();
  for (let i = 0; i < arrayCopy.length; i += 1) {
    if (arrayCopy[i] === arrayCopy[i + 1] && arrayCopy[i] === arrayCopy[i + 2]) {
      repeats += 2;
    }
  }
  return repeats;
}
function negativeAndBiggerThanNineNumber(array) {
  let result = 0;
  for (let i in array) {
    if (array[i] < 0 || array[i] > 9) {
      result += 1
    }
  }
  return result;
}
function generatePhoneNumber(array) {
  let string = '';
  if (array.length !== 11 || array.length === 0) {
    return 'Array com tamanho incorreto.';
  }
  if (repeatNumber(array) >= 3 || negativeAndBiggerThanNineNumber(array) >= 1) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  string = array.join('');
  string = string.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  return string;
}

// Desafio 12
function sum(a, b) {
  return a + b;
}
function absolut(a, b) {
  return Math.abs(a - b);
}

function checkSumTriangule(lineA, lineB, lineC) {
  if (sum(lineA, lineB) > lineC) {
      if (sum(lineA, lineC) > lineB) {
          if (sum(lineB, lineC) > lineA) {
              return true;
          }
      }
  } else {
      return false;
  }
}
function checkAbsolutTriangule(lineA, lineB, lineC) {
  if (absolut(lineA, lineB) < lineC) {
      if (absolut(lineA, lineC) < lineB) {
          if (absolut(lineB, lineC) < lineA){
              return true;
          }
      }
  } else {
      return false;
  }
}
function triangleCheck(lineA, lineB, lineC) {
  let result = (checkSumTriangule(lineA, lineB, lineC) === true && checkAbsolutTriangule(lineA, lineB, lineC));
  return result;
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
