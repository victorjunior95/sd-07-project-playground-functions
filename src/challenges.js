// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(15,5));


// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}
console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(2,3));

// Desafio 6
function highestCount(numeros) {
  let higherNumber = 0;
  let numberOfTimes = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (higherNumber <= numeros[i]) {
      higherNumber = numeros[i];
    }    
  }

  for (let j = 0; j < numeros.length; j += 1) {
    if (higherNumber === numeros[j]) {
      numberOfTimes += 1;
    }
  }
  return numberOfTimes;
}
console.log(highestCount([9, 4, 4, 4, 9, 2, 1]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return "cat1";
  } else if ( distanceCat1 > distanceCat2) {
    return "cat2";
  } else {
    return ("os gatos trombam e o rato foge")
  }
}
console.log(catAndMouse(22, 10, 7));

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (array[i] % 3 === 0) {
      result.push("fizz");
    } else if (array[i] % 5 === 0) {
      result.push("buzz");
    } else {
      result.push("bug!");
    }
  }
  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(string) {
}

function decode(string) {
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
