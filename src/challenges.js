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

  let arr = string.split(" ");

  return arr;

  //OU PODEMOS USAR O QUE PENSEI ABAIXO O/ :)
  /*  let arrayString = [];
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
  return arrayString; */
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let palavra;
  let arr2 = [];
  arr = arr.split(" ");

  console.log(arr);
  arr2.push(arr.splice(arr.length - 1, 1)[0]);
  arr2.push(arr.splice(0, 1)[0]);
  palavra = arr2.join(", ");
  console.log(palavra);

  return palavra;

  /* let palavra;
  let arr = [];
  arr.push(param.splice(param.length - 1, 1)[0]);
  arr.push(param.splice(0, 1)[0]);
  palavra = arr.join(", ");
  return palavra; */
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui

  let pontosWins = wins * 3;
  let pontosEmpate = ties * 1;
  let total = pontosWins - pontosEmpate;

  return total;
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
