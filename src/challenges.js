// Desafio 1
function compareTrue(and1, and2) {
  if (and1 === true && and2 === true) {
    return true;
  } 
  return false;
  
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = [];
  let word = '';

  for (let i in string) {

     if ( string[i] === ' ') {
       arrayString.push(word);
       word = '';
     } else {
      word += string[i];
     }
     
  }
  arrayString.push(word);
  return arrayString;
}
console.log(splitSentence('vamo que vamo'));
// Desafio 4
function concatName(array) {

  let result = array[array.length -1] + ", " + array[0];
  return result;

}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(numbers) {

  let highest = 0;
  let highestCount = 0;

  for (let i in numbers) {

    if (numbers[i] > highest) {
      highest = numbers[i];
    }
  }
  for (let i in numbers) {
    if (numbers[i] === highest) {
      highestCount += 1;
    }
  }
  return highestCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let result ;
  if (distCat1 === distCat2) {
    result = "os gatos trombam e o rato foge";
  } else {
    if (distCat1 < distCat2) {
      result = "cat1";
    } else {
      result = "cat2";
    }
  }
  return result
}

// Desafio 8
function fizzBuzz(numbers) {
  result = [];

  for (let i in numbers) {
    if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0) {
      result.push("fizzBuzz");
    } else {
      if (numbers[i] % 3 == 0 ) {
        result.push("fizz");
      } else {
        if (numbers[i] % 5 == 0 ) {
          result.push("buzz");
        } else {
        result.push("bug!");
        }
      }
    }
  }
  return result;
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
