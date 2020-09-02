// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(word) {
  let arrayWord = [""];
  let x = 0;
  for(let i = 0; i < word.length; i++){
    if (word[i] != " "){
      arrayWord[x] += word[i];
    }else {
      x += 1;
      arrayWord[x] = "";
    }
  }
  return arrayWord;
}


// Desafio 4
function concatName(array) {
  return `${array[array.length-1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins*3) + (ties*1));
}

// Desafio 6
function highestCount(array) {
  let highest = Math.max(...array);
  let repetition = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] === highest){
      repetition += 1;
    }
  }
  return repetition;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
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
}
