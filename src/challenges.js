// Desafio 1
function compareTrue(boolOne, boolTwo) {
  if (boolOne === true && boolTwo === true) {
    return true;
  }
  else return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(words) {
  let newArrayWords = words.split(' ');
  return newArrayWords;
}

// Desafio 4
function concatName(array) {
  let newWords = `${array[array.length - 1]}, ${array[0]}`;
  return newWords;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}


//  Função auxiliar Maior valor
function maxValueArray(array) {
  let maior = array[0];
  for (let i of array) {
    if (i > maior) {
      maior = i;
    }
  }
  return maior;
}

// Desafio 6
function highestCount(array) {
  let maior = maxValueArray(array);
  let cont = 0;
  for (let j of array) {
    if (j === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disMouseCat1 = cat1 - mouse;
  let disMouseCat2 = cat2 - mouse;

  if (disMouseCat1 < disMouseCat2) {
    return 'cat1';
  }
  else if (disMouseCat2 < disMouseCat1) {
    return 'cat2';
  }
  else if (disMouseCat1 === disMouseCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return;
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let number of array) {
    if ((number % 5 === 0) && number % 3 === 0) {
      newArray.push('fizzBuzz');
    } else if (number % 5 === 0) {
      newArray.push('buzz');
    } else if (number % 3 === 0) {
      newArray.push('fizz');
    } else newArray.push('bug!');
  }
  return newArray;
}


// Desafio 9
let code = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
}

// Função auxiliar01 do Desafio 9
function changeLetterNumber(char) {
  for (let key in code) {
    if (char === key) {
      return code[key];
    }
  }
  return char;
}

// Função auxiliar02 do Desafio 9
function changeNumberLetter(number) {
  for (let key in code){
    if (number == code[key]) {
      return key;
    }
  }
  return number;
}

function encode(words) {
  let newWords = '';

  for (let char of words) {
    let value = changeLetterNumber(char);
    newWords += value;
  }
  return newWords;
}

function decode(words) {
  let newWords = '';

  for (let char of words) {
    let value = changeNumberLetter(char);
    newWords += value;
  }
  return newWords;
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
