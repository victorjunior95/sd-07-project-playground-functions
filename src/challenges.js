
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
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}
function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
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
  let array1 = array.slice();
  array1 = array1.sort();
  let strike = 1;
  for (let i = 0; i < array1.length; i += 1) {
    let number = array1[i];
    if (number === array1[i + 1]) {
      if (array1[i + 1] === array1[i + 2]) {
        strike += 2;
      }
    }
  }
  return strike;
}
function negativeNumber(array) {
  let result = 0;
  for (let i in array) {
    if (array[i] < 0) {
        result += 1;
      }
  }
  return result;
}
function biggerThanNine(array) {
  let check = 0;
  for (let i in array) {
    if (array[i] > 9) {
        check += 1;
      }
  }
  return check;
}
function generatePhoneNumber(array) {
  let string ='';
  if (array.length !== 11 || array.length === 0) {
    return 'Array com tamanho incorreto.';
  }
  if (negativeNumber(array) > 0 || repeatNumber(array) >= 3 || biggerThanNine(array) > 0) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  string = array.join('');
          string = string.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
          return string;
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
