// Desafio 1
function compareTrue(bol1, bol2) {
  if (bol1 === true && bol2 === true) {
      return true;
  } else {
      return false;
  }
} 

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(strings) {
  let array = [];
  array.push(strings[strings.length - 1]);
  array.push(strings[0]);
  let result = array.join(', ');
  return result;
}


// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;
  let totalPoints = pointsWins + pointsTies;
  return totalPoints;
}

// Desafio 6
function highestCount(array) {

  let arrayResult = [];

  for (i = 0; i < array.length; i += 1) {

      if (i === 0) {
          arrayResult.push(array[0])

      } else if (i != 0 && array[i] == arrayResult[0]) {
          arrayResult.push(array[i]);

      } else if (i != 0 && array[i] > arrayResult[0]) {
          arrayResult = [];
          arrayResult.push(array[i]);

      }

  }

  return arrayResult.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disCat1 = mouse - cat1;
  let disCat2 = mouse -cat2;
  let finalCat1 = Math.abs(disCat1);
  let finalCat2 = Math.abs(disCat2);

  if (finalCat1 > finalCat2) {
      return 'gato 2'

  } else if (finalCat1 < finalCat2) {
      return 'gato 1'

  } else {
      return "os gatos trombam e o rato foge"

  }
  
}

// Desafio 8
function fizzBuzz(array) {

  let arrayResult = [];

  for (let i = 0; i < array.length; i += 1) {

      if ((array[i] % 3 === 0) && (array[i] % 5 === 0)) {
          arrayResult.push('fizzBuzz');

      } else if (array[i] % 3 === 0) {
          arrayResult.push('fizz');

      } else if (array[i] % 5 === 0) {
          arrayResult.push('buzz');

      } else {
          arrayResult.push('bug!');
      }
  }
  return arrayResult;
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
