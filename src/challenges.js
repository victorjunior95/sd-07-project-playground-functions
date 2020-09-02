// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui

  if (bool1 && bool2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separator = ' ';
  let array = string.split(separator);
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let output = '';
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      output += `${array[array.length - 1]}, `;
    } else if (i === array.length - 1) {
      output += array[0];
    }
  }
  return output;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
// seu código aqui
  let count = 0;
  let maiorNumero = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNumero) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;
  if (dist1 < 0) {
    dist1 *= -1;
  } else if (dist2 < 0) {
    dist2 *= -1;
  }
  if (dist1 < dist2) {
    return `cat1`;
  } else if (dist2 < dist1) {
    return `cat2`;
  } else {
    return `os gatos trombam e o rato foge`;
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
}
