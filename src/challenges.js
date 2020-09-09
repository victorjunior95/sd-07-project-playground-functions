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
  let distCat1 = cat1 - mouse;
  let distCat2 = cat2 - mouse;

  if (distCat1 === distCat2) {
    return "os gatos trombam e o rato foge";
  }
  else if (unidadeCat2 < unidadeCat1){
    return "cat2";
  }
  else {
    return "cat1";
  }
}

// Desafio 8
function fizzBuzz(inputArray) {
  // seu código aqui
  let numberArray = [];
  for(cont in inputArray){
    if((inputArray[cont] % 3 == 0) && (inputArray[cont] % 5 == 0)){
      numberArray[cont] = "fizzBuzz";
    }else if(numberArray[cont] % 5 == 0){
      numberArray[cont] = "buzz";
    }else if(numberArray[cont] % 3 == 0){
      numberArray[cont] = "fizz";
    }else{
      numberArray[cont] = "bug!";
    }
  }
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
