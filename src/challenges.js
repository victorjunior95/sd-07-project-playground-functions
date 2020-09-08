// Desafio 1
function compareTrue(a, b) {
  let resultado;

  if (a === b && a === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayStrings = string.split(' ');
  return arrayStrings;
}

// Desafio 4
function concatName(array) {
  let newArray = [];
  newArray.push(array[array.length - 1]);
  newArray.push(` ${array[0]}`);
  let stringLastFirst = newArray.toString();
  return stringLastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = 0;
  let repetions = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (highestNumber <= numbers[i]) {
      highestNumber = numbers[i];
    }
  }
  for (let j = 0; j < numbers.length; j += 1) {
    if (highestNumber === numbers[j]) {
      repetions += 1;
    }
  }
  return repetions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let felino;
  if (distCat1 > distCat2) {
    felino = 'cat2';
  } else if (distCat1 < distCat2) {
    felino = 'cat1';
  } else {
    felino = 'os gatos trombam e o rato foge';
  }
  return felino;
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayFizz = [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0) {
      arrayFizz.push('fizzBuzz');
    } else if (arrayNumbers[i] % 3 === 0) {
      arrayFizz.push('fizz');
    } else if (arrayNumbers[i] % 5 === 0) {
      arrayFizz.push('buzz');
    } else {
      arrayFizz.push('bug!');
    }
  }
  return arrayFizz;
}

// Desafio 9
function encode(phrase) {
  let newPhrase = '';
  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase[i] === 'a') {
      newPhrase += '1';
    } else if (phrase[i] === 'e') {
      newPhrase += '2';
    } else if (phrase[i] === 'i') {
    newPhrase += '3';
    } else if (phrase[i] === 'o') {
      newPhrase += '4';
    } else if (phrase[i] === 'u') {
      newPhrase += '5';
    } else {
      newPhrase += phrase[i];
    }
  }
  return newPhrase;
}

function decode(phrase2) {
  let newPhrase2 = '';
  for (let i = 0; i < phrase2.length; i += 1) {
    if (phrase2[i] === '1') {
      newPhrase2 += 'a';
    } else if (phrase2[i] === '2') {
      newPhrase2 += 'e';
    } else if (phrase2[i] === '3') {
      newPhrase2 += 'i';
    } else if (phrase2[i] === '4') {
      newPhrase2 += 'o';
    } else if (phrase2[i] === '5') {
      newPhrase2 += 'u';
    } else {
      newPhrase2 += phrase2[i];
    }
  }
  return newPhrase2;
}

// Desafio 10
function techList(tecNews, name) {
  let objectList = [];
  let listTec = tecNews.sort();

  if (listTec.length !== 0) {
    for (let i = 0; i < listTec.length; i += 1) {
      let object = {
        tech: listTec[i],
        name
      }
      objectList.push(object);
    } 
  } else {
    objectList = 'Vazio!';
  }
  return objectList;
}
console.log(techList([], "Lucas"));

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
