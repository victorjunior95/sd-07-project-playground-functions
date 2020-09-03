// https://github.com/tryber/sd-07-project-playground-functions

// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne && valueTwo === true) {
    return true;
  } else {
    return false;
  }
}

compareTrue(true, false);

// Desafio 2
function calcArea(base, height) {
  let cal = (base * height) / 2;
  return cal;
}

calcArea(2, 3);

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}
splitSentence('go Trybe');

// Desafio 4
function concatName(strings) {
  let lastString = strings[strings.length - 1];
  let strFinal = `${lastString}, ${strings[0]}`;
  console.log(strFinal);
  return strFinal;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + (1 * ties);
  return points;
}
footballPoints(2, 1);

// Desafio 6
function highestCount(numbers) {
  let maiorNumero = 0;
  let repeticao = 0;
  for (let index in numbers) {
    if (numbers[index] > maiorNumero) {
      maiorNumero = numbers[index];
    }
  }
  for (let indice in numbers) {
    if (numbers[indice] === maiorNumero) {
      repeticao += 1;
    }
  }
  return repeticao;
}

highestCount([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 > distCat2) {
    console.log('cat2');
    return 'cat2';
  } if (distCat2 > distCat1) {
    console.log('cat1');
    return 'cat1';
  } else {
    console.log('os gatos trombam e o rato foge');
    return 'os gatos trombam e o rato foge';
  }
}

catAndMouse(0, 3, 2);

// Desafio 8
function fizzBuzz(numbers) {
  let newArray = [];
  for (let index in numbers) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
function encode(string) {
  let finalString = string.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
  return finalString;
}

encode('hi there!');

function decode(string) {
  let finalString = string.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return finalString;
}

decode('h3 th2r2!');

// Desafio 10
function techList(arrayTechs, name) {
  this.arrayTechs = arrayTechs;
  this.name = name;
  let techs = [];
  arrayTechs.sort();
  if (arrayTechs.length === 0) {
    console.log('Vazio!');
    return 'Vazio!';
  }
  for (let i = 0; i < arrayTechs.length; i += 1) {
    techs[i] = {
      tech: arrayTechs[i],
      name: name,
    }
  }
  return techs;
}

techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');

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
