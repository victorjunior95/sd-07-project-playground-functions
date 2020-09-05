// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let result;
  if (a === true && b === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let total = (base * height) / 2;
  return total;
}

// Desafio 3
function splitSentence(trybe) {
  // seu código aqui
  let trybeSplit = trybe.split(' ');
  return trybeSplit;
}

// Desafio 4
function concatName(nameArray) {
  // seu código aqui
  let newArray = `${nameArray[nameArray.length - 1]}, ${nameArray[0]}`;
  return newArray.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = 0;
  let pointsForWin = 3;
  if (wins > 0) {
    for (let i = 1; i <= wins; i += 1) {
      totalPoints += pointsForWin;
    }
  }
  totalPoints += ties;
  return totalPoints;
}

// Desafio 6
function highestCount(cont) {
  // seu código aqui
  let contTotal = 0;
  let highNumber = 0;
  for (let key in cont) {
    if (cont[key] > highNumber) {
      highNumber = cont[key];
    }
  }
  for (let compare in cont) {
    if (highNumber === cont[compare]) {
      contTotal += 1;
    }
  }
  return contTotal;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let result;
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 > distCat2) {
    result = 'cat2'
  } else if (distCat2 > distCat1) {
    result = 'cat1'
  } else {
    result = 'os gatos trombam e o rato foge'
  }
  return result;
}
console.log(catAndMouse(10, 13, 8))
// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  // seu código aqui
  let fizzBuzz = []
  for (i = 0; i < arrayFizzBuzz.length; i += 1) {
    if (arrayFizzBuzz[i] % 3 == 0 && arrayFizzBuzz[i] % 5 == 0) {
      fizzBuzz.push('fizzBuzz');
    } else if (arrayFizzBuzz[i] % 3 == 0) {
      fizzBuzz.push('fizz')
    } else if (arrayFizzBuzz[i] % 5 == 0) {
      fizzBuzz.push('buzz')
    } else {
      fizzBuzz.push('bug!')
    }
  }
  return fizzBuzz;
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
