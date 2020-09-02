// Desafio 1
function compareTrue() {
    if ( a === true && b === true ) {
      return true;
    } else {
      return false ;
    };
}

// Desafio 2
function calcArea() {
  let base = 8;
  let height = 10;
  let areaTriangle = (base * height) / 2 ;
  return areaTriangle;
}

// Desafio 3
function splitSentence(separator) {
  separator = "" ;
  separator = separator.split(" ");
  return separator;
}

// Desafio 4
function concatName(arrayStrings) {
  arrayStrings = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
  let last = arrayStrings[arrayStrings.length - 1];
  let first = arrayStrings[0] ;
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3 ;
  ties = ties * 1 ;
  let points = wins + ties ;
  return points ;
}

// Desafio 6
function highestCount(arrayNum) {
  arrayNum = [9, 1, 2, 3, 9, 5, 7];
  let highest = 0;
  let highestArrayNum = 0;
  for ( i in arrayNum ){
    if ( arrayNum[i] >= highest ){
      highest = arrayNum[i];
      highestArrayNum = highestArrayNum + 1;
    };
  };
  return highestArrayNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ( cat1 - mouse === cat2 - mouse ) {
    return "os gatos trombam e o rato foge";
  } else {
    if ( cat1 - mouse < cat2 - mouse ) {
      return "cat1 wins."
    } else {
      return "cat2 wins."
    };
  };
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  arrayFizzBuzz = [2, 15, 7, 9, 45];
  let arrayReturn = [];
  for ( let i in arrayFizzBuzz ) {
    if( arrayFizzBuzz[i] % 3 === 0 && arrayFizzBuzz[i] % 5 === 0 ) {
      arrayReturn.push("fizzBuzz");
    } else if (arrayFizzBuzz[i] % 3 === 0)  {
        arrayReturn.push("fizz");
      } else if( arrayFizzBuzz[i] % 5 === 0 ) {
        arrayReturn.push("buzz");
      } else if (arrayFizzBuzz[i] % 3 != 0 && arrayFizzBuzz[i] % 5 != 0) {
        arrayReturn.push("bug!");
      }
  };
  return arrayReturn;
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
