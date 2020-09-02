// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringTest) {
  return stringTest.split(" ");
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
  let counter = 0;
  // checando qual o maior valor da funcao
  let maxValue = array[0];
  for (let i in array) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  // contando quantas vezes o maior valor aparece
  for (let j  in array) {
    if (array[j] == maxValue) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return "cat1";
  } else if (distanceCat2 < distanceCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (key in array) {
    if (array[key] % 3 == 0 && array[key] % 5 == 0) {
      array[key] = "fizzBuzz";
    } else {
        if (array[key] % 3 == 0) {
        array[key] = "fizz";
      } else if (array[key] % 5 == 0) {
        array[key] = "buzz";
      } else {
        array[key] = "bug!";
      }
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let toEncodeArray = string.split("");
  let vowels = {"a": "1", "e": "2", "i": "3", "o": "4", "u": "5"};
  let finalString = "";
  for (let i in toEncodeArray) {
    for (let j in vowels) {
      if (string[i].toLowerCase() == j) {
        toEncodeArray[i] = vowels[j];
      }
    }
    finalString += toEncodeArray[i];
  }
  return finalString;
}
function decode(encodedString) {
  let toDecodeArray = encodedString.split("");
  let numbers = {"a": "1", "e": "2", "i": "3", "o": "4", "u": "5"};
  let finalString = "";
  for (let i in toDecodeArray) {
    for (let j in numbers) {
      if (toDecodeArray[i] == numbers[j]) {
        toDecodeArray[i] = j;
      }
    }
    finalString += toDecodeArray[i];
  }
  return finalString;
}

// Desafio 10
function techList(technologies, name) {
  let listOfObjects = []
  technologies.sort();
  // making the objects and pushing to the list
  for (key in technologies) {
    let tempObject = {};
    tempObject.name = name;
    tempObject.tech = technologies[key];
    listOfObjects.push(tempObject);
  }
  return listOfObjects;
}

// Desafio 11
function generatePhoneNumber() {
  
}

// Desafio 12
function triangleCheck() {
  
}

// Desafio 13
function hydrate() {
  
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
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));