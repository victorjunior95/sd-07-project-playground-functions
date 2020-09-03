//Desafio 1
function compareTrue(first, second) {
  if (first === false && second === true) {
    return false;
  }
  if (first === true && second === false) {
    return false;
  }
  if (first === false && second === false) {
    return false;
  }
  if (first === true && second === true){
    return true;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
    return result;
}

//Desafio 3
function splitSentence(word) {


}

//Desafio 4
function concatName(array) {
}

// Desafio 5
function footballPoints(wins, ties) {
   let triple = wins * 3 + ties;
    return triple;
}

// Desafio 6
function highestCount(numbers) {
  // let arrayNumbers = numbers.split();
  let maxNum = numbers[0];
  let count = 0;

  for (let i = 1; i < numbers.length; i += 1) {

    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  for (let j = 0; j < numbers.length; j += 1) {
    if (maxNum === numbers[j]) {
      count += 1;
    }
  }
  return count;
}


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  let myArray = [];
  for (let i = 0; i < array.length; i += 1) {

    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      newArray.push('fizzBuzz');
    }
    if (newArray[i] !== "fizzBuzz") {
      if (array[i] % 3 === 0) {
        newArray.push('fizz');
      }
      if (array[i] % 5 === 0) {
        newArray.push("buzz");
      }
      if (array[i] % 3 !== 0 && array[i] % 5 !== 0) {
        newArray.push("bug!");
      }
    }
  }
  return newArray;
}


// Desafio 9
function encode(string) {
  let myArray = string.split('');
  for (let i = 0; i < myArray.length; i += 1) {
    switch (myArray[i]) {
      case 'a':
        myArray[i] = 1;
        break;
      case 'e':
        myArray[i] = 2;
        break;
      case 'i':
        myArray[i] = 3;
        break;
      case 'o':
        myArray[i] = 4;
        break;
      case 'u':
        myArray[i] = 5;
        break;
      default:
    }
  }
  return myArray.join('');
}

// //
function decode(string) {
  let myArray = string.split('');
  for (let i = 0; i < myArray.length; i += 1) {
    switch (myArray[i]) {
      case '1':
        myArray[i] = 'a';
        break;
      case '2':
        myArray[i] = 'e';
        break;
      case '3':
        myArray[i] = 'i';
        break;
      case '4':
        myArray[i] = 'o';
        break;
      case '5':
        myArray[i] = 'u';
        break;
      default:
    }
  }
  return myArray.join('');
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

compareTrue(first = true, second = true);

calcArea(51, 1);

highestCount([0, 0, 0]);

footballPoints(0, 0);

encode("hello there!")

decode("h3 th2r2!");

fizzBuzz([2, 15, 7, 9, 45]);

