// Desafio 1
function compareTrue(a,b) {
  if(a === true && b === true){
    return true
  } 
  else {
    return false
  }
};
// Desafio 2
function calcArea(base,height) {
  let area = (base*height)/2
return area
};

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
};

// Desafio 4
function concatName(arrayOfString) {
  let lastAndFirstName = arrayOfString[arrayOfString.length-1]+", "+arrayOfString[0]
  // seu código aqui
  return lastAndFirstName
};

// Desafio 5
function footballPoints(wins,ties) {
  let winsPoints = (wins*3);
  let tiesPoints = ties;
  let totalPoints = (winsPoints + tiesPoints);
  return totalPoints
  // seu código aqui
}

// Desafio 6
function highestCount(arrayNumbers) {
  let numbers = arrayNumbers.sort();
  let timesHits = 0;
  for(i=0; i < numbers.length; i+=1) {
    if (numbers[numbers.length-1] === numbers[i]) {
      timesHits +=1;
    }; 
  };
  return timesHits
};

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