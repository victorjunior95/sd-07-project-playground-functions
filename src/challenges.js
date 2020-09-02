// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ')
}

// Desafio 4
function concatName(a) {
  return `${a[a.length - 1]}, ${a[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties
}

// Desafio 6
function highestCount(arr) {
  let h = 0;
  for(let i in arr){
    if(arr[i] > h){
      h = arr[i];
    }
  }
  let out = 0;
  for(let j in arr){
    if(arr[j]==h){
      out += 1;
    }
  }
  return out;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(cat1 -= mouse);
  cat2 = Math.abs(cat2 -= mouse);
  if(cat2 < cat1){
    return cat2;
  }
  else if(cat1 < cat2){
    return cat1;
  }
  return 'os gatos trombam e o rato foge';
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

// Desafio bonus 1
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio bonus 2
function triangleCheck() {
  // seu código aqui
}

// Desafio bonus 3
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
