// Desafio 1
function compareTrue(proposition1, proposition2) {
  return proposition1 && proposition2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let newWord = false;
  let initialPosition = 0;
  let finalPosition = 0;

  for (let index = 0; index < string.length; index++) {
    if (string[index] != " " && !newWord) {
      initialPosition = index;
      newWord = true;
    } else if (string[index] != " " && index == string.length - 1) {
      finalPosition = index;
      addString(initialPosition, finalPosition);
    } else if (string[index] != " ") {
      finalPosition = index;
    } else if (string[index] == " " && newWord) {
      addString(initialPosition, finalPosition);
      newWord = false;
    }
  }

  return array;

  function addString(initialPosition, finalPosition) {
    let newString = "";
    for (let index = 0; index <= finalPosition - initialPosition; index++) {
      newString[index] = string[initialPosition + index];
      // console.log(string[index + initialPosition]);
    }
    array.push(newString);
  }
}
// console.log(splitSentence("go trybe"))

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let counter=0;
  for (let index in array) {
    if ( maior < array[index]) {
      maior = array[index];
    }
  }

  for ( index in array) {
    if ( maior == array[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance_cat1 = Math.abs(cat1 - mouse);
  let distance_cat2 = Math.abs(cat2 - mouse);

  if (distance_cat1 < distance_cat2) {
    return "cat1";
  } else if (distance_cat1 == distance_cat2) {
    return "os gatos trombam e o rato foge";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
};
