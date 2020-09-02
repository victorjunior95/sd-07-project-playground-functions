// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area; 
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ')
  return arrayString;
}

// Desafio 4
function concatName(array) {
  let arrayReverse = array.reverse();
  let arrayLastFirst = [arrayReverse[0], arrayReverse[array.length-1]];
  return arrayLastFirst.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties;
  let totalPoints = winPoints + tiePoints;
  return totalPoints;
}

// Desafio 6
function highestCount(array) {

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse < 0){mouse = mouse + (mouse * 2);}
  if (cat1 < 0) {cat1 = cat1 + (cat1 * 2);}
  if (cat2 < 0) {cat2 = cat2 + (cat2 * 2);}
  distanceCat1 = cat1 - mouse;
  distanceCat2 = cat2 - mouse;
  if (distanceCat1 < distanceCat2){
    return cat1;
  } else if (distanceCat2 < distanceCat1) {
    return cat2;
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
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
