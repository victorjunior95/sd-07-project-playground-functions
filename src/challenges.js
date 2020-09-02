// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2)
  {
    return true;
  }
  else
  {
    return false;
  }
}

console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log(calcArea(5, 6));

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array2) {
  let concatString = array2[(array2.length - 1)] + ", " + array2[0];
  return concatString;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (3 * wins) + ties;
  return totalPoints;
}

console.log(footballPoints(3, 2));

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = 0;
  let count = 0;
  for (let i = 0; i < numberArray.length; i += 1)
  {
    if (numberArray[i] > highestNumber)
    {
      highestNumber = numberArray[i];
    }
  }
  for (let i = 0; i < numberArray.length; i += 1)
  {
    if (numberArray[i] === highestNumber)
    {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse))
  {
    return "cat1";
  }
  else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse))
  {
    return "cat2";
  }
  else
  {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array3) {
  let array4 = [];
  for (let i in array3)
  {
    if ((array3[i] % 3 == 0) && (array3[i] % 5 != 0))
    {
      array4.push("fizz");
    }
    else if ((array3[i] % 5 == 0) && (array3[i] % 3 != 0))
    {
      array4.push("buzz");
    }
    else if ((array3[i] % 5 == 0) && (array3[i] % 3 == 0))
    {
      array4.push("fizzBuzz");
    }
    else
    {
      array4.push("bug!");
    }
  }
  return array4;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string2) {
  string2 = string2.replace(/a/g, "1");
  string2 = string2.replace(/e/g, "2");
  string2 = string2.replace(/i/g, "3");
  string2 = string2.replace(/o/g, "4");
  string2 = string2.replace(/u/g, "5");
  return string2;
}
function decode(string3) {
  string3 = string3.replace(/1/g, "a");
  string3 = string3.replace(/2/g, "e");
  string3 = string3.replace(/3/g, "i");
  string3 = string3.replace(/4/g, "o");
  string3 = string3.replace(/5/g, "u");
  return string3;
}

console.log(encode("hi there!"));
console.log(decode("h3 th2r2!"));

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
