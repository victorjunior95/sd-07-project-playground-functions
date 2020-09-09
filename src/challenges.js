// Desafio 1
function compareTrue(a , b) {
  // seu código aqui
  if(a === true && b === true){
    return true;
  }else{
    return false;
  } 
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calc = (base * height) /2;
  return calc;
}

// Desafio 3
function splitSentence(stringName) {
  // seu código aqui
 return stringName.split(" ");
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let first = arrayString[0];
  let last = arrayString[arrayString.length-1];
  let fullName= last + ", " + first; 
  return fullName;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let sumWins = wins * 3;
  let sumTies = ties * 1;
  let sun = sumWins + sumTies;
return sun;
}

// Desafio 6
function highestCount(arrayNumber) {
  // seu código aqui
  let result = 0;
  let big = 0;
  
  for(let cont in arrayNumber)
  {
    if(arrayNumber[cont] > big){
      big = arrayNumber[cont];
    }
}
  for(let cont in arrayNumber){
    if(big === arrayNumber[cont]){
      result += 1;
      console.log(result);
    }
  }
 return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
let distanciaCat1 = cat1 - mouse;
let distanciaCat2 = cat2 = mouse;
console.log(distanciaCat1);
console.log(distanciaCat2);

if (distanciaCat1 === distanciaCat2){
  //return "os gatos trombam e o rato foge";
  console.log("bla bla");
}
else if (distanciaCat2 < distanciaCat1){
  //return "cat2";
  console.log("cat2");
}
else {
  //return "cat1";
  console.log("cat1");
}
}

catAndMouse(10,30,50);

// Desafio 8
function fizzBuzz(entrada) {
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
