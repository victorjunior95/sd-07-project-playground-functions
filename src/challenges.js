// Desafio 1
function compareTrue(proposition1, proposition2) {
  return proposition1 && proposition2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let newWord = false;
  let initialPosition = 0;
  let finalPosition = 0;

  for (let index = 0; index < string.length; index++) {
    if (string[index] != " " && !newWord) {
      initialPosition = index;
      newWord = true;
    } else if (string[index] != " " && index == string.length - 1) {
      finalPosition = index;
      addString(initialPosition, finalPosition);
    } else if (string[index] != " ") {
      finalPosition = index;
    } else if (string[index] == " " && newWord) {
      addString(initialPosition, finalPosition);
      newWord = false;
    }
  }

  return array;

  function addString(initialPosition, finalPosition) {
    let newString = "";
    for (let index = 0; index <= finalPosition - initialPosition; index++) {
      newString = `${newString}${string[initialPosition + index]}`;
    }
    array.push(newString);
  }
}
console.log(splitSentence("go trybe"))

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let counter = 0;
  for (let index in array) {
    if (maior < array[index]) {
      maior = array[index];
    }
  }

  for (let index in array) {
    if (maior == array[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance_cat1 = Math.abs(cat1 - mouse);
  let distance_cat2 = Math.abs(cat2 - mouse);

  if (distance_cat1 < distance_cat2) {
    return "cat1";
  } else if (distance_cat1 == distance_cat2) {
    return "os gatos trombam e o rato foge";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let stringArray = [];
  for (let index in array) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      stringArray.push("fizzBuzz");
    } else if (array[index] % 3 == 0) {
      stringArray.push("fizz");
    } else if (array[index] % 5 == 0) {
      stringArray.push("buzz");
    } else {
      stringArray.push("bug!");
    }
  }
  return stringArray;
}

// Desafio 9
function encode(string) {
  let array = [];
  let newString = "";
  for (let index = 0; index < string.length; index++) {
    switch (string[index]) {
      case "a":
        array.push("1");
        break;
      case "e":
        array.push("2");
        break;
      case "i":
        array.push("3");
        break;
      case "o":
        array.push("4");
        break;
      case "u":
        array.push("5");
        break;

      default:
        array.push(string[index]);
        break;
    }
  }
  for (let index = 0; index < array.length; index++) {
    newString = `${newString}${array[index]}`;
  }
  return newString;
}
function decode(string) {
  let array = [];
  let newString = "";
  for (let index = 0; index < string.length; index++) {
    switch (string[index]) {
      case "1":
        array.push("a");
        break;
      case "2":
        array.push("e");
        break;
      case "3":
        array.push("i");
        break;
      case "4":
        array.push("o");
        break;
      case "5":
        array.push("u");
        break;

      default:
        array.push(string[index]);
        break;
    }
  }
  for (let index = 0; index < array.length; index++) {
    newString = `${newString}${array[index]}`;
  }
  return newString;
}

// Desafio 10
function techList(array,name) {
  if (array.length == 0) {
    return "Vazio!";
  }
  let returnArray = [];
  let newArray = array;

  for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (newArray[i] < newArray[j]) {
      let position = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = position;
    }
  }
}
  
  for (let index = 0; index < newArray.length; index++) {
    let object = {};
    object.tech = newArray[index];
    object.name = name;
    returnArray.push(object);
  }
  return returnArray;
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
};
