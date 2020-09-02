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
function footballPoints(wins, ties) {
  return (3 * wins)+ ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let repeatTimes = 0;
  let maxNumber = 0;
  for(index = 0; index < arrayNumbers.length; index += 1){
      
      maxNumber = Math.max(maxNumber, arrayNumbers[index]);
  }
  for(let index = 0; index < arrayNumbers.length; index += 1){
      if(arrayNumbers[index] === maxNumber){
          repeatTimes +=1;
      }
  }
  return repeatTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 - mouse < cat2 - mouse){
    return "cat1";
} else if(cat1 - mouse === cat2 - mouse){
    return "os gatos trombam e o rato foge";
} else{
    return "cat2";
}
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayResult = [];
  for(let i = 0; i < arrayNumbers.length; i += 1){
      if(arrayNumbers[i]%3 === 0 && arrayNumbers[i]%5 === 0){
          arrayResult.push("fizzBuzz");
      }else if(arrayNumbers[i]%3 === 0 && arrayNumbers[i]%5 !== 0){
          arrayResult.push("fizz");
      }else if(arrayNumbers[i]%3 !== 0 && arrayNumbers[i]%5 === 0){
          arrayResult.push("buzz");
      }
       else{
          arrayResult.push("bug!");
      }
  }
 return arrayResult;
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
