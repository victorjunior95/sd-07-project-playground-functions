// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === b) {
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
  let arrayString = [];
  let palavraSeparada = "";
  for (let i in string) {
    if (string[i] != " ") {
      palavraSeparada += string[i];
    } else {
      arrayString.push(palavraSeparada);
      palavraSeparada = "";
    }
  }
  arrayString.push(palavraSeparada);
  return arrayString;
}

// Desafio 4
function concatName(...param) {
  // seu código aqui
  let arr = [];
  arr.push(param.splice(param.length - 1, 1)[0]);
  arr.push(param.splice(0, 1)[0]);
  return arr.join(", ");
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
