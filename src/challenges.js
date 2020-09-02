// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayStrings = [];
  let separatedString = "";

  for(let characterIndex = 0; characterIndex < sentence.length; characterIndex += 1){
      
      if(sentence[characterIndex] !== " "){
          separatedString += sentence[characterIndex];
      } else{//guarda as strings do meio
          arrayStrings.push(separatedString);
          separatedString = "";
      }

  }
  arrayStrings.push(separatedString);

  return arrayStrings;
}

// Desafio 4
function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length - 1] + ", " + arrayStrings[0];
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
}
