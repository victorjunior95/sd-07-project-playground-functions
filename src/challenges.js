// Desafio 1
function compareTrue(bool_1, bool_2) {
  if (bool_1 === true && bool_2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, false))

// Desafio 2
function calcArea(base, height) {
  let area = 0
  return area = ((base * height) / 2);
}
console.log(calcArea(2, 3))

// Desafio 3
function splitSentence(frase) {
  let separator = ' '
  let arrayOfStrings = frase.split(separator);
  return frase = arrayOfStrings

}
console.log(splitSentence("go trybe"))

// Desafio 4
function concatName(arrayDeStrings) {
  return stringFinal = arrayDeStrings[arrayDeStrings.length - 1] + ', ' + arrayDeStrings[0]
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  vitoria = 3;
  empate = 1;
  return pontuacao = wins * vitoria + ties * empate;
}

console.log(footballPoints(3, 1))

// Desafio 6
function highestCount(arrayOfNumbers) {
  let largestNumber = Math.max.apply(null, arrayOfNumbers);
  let count = 0
  for (j = 0; j < arrayOfNumbers.length; j += 1) {
    if (arrayOfNumbers[j] == largestNumber) {
      count++;
    }
  } return count
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstCat = mouse - cat1;
  let secondCat =  mouse - cat2;
  if (firstCat < secondCat) {
    return 'cat1';
  } else if(firstCat > secondCat){
    return 'cat2'
  } else {
    return "Os gatos trombam e o rato foge";
  }
}

console.log(catAndMouse(5,4,4))
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
