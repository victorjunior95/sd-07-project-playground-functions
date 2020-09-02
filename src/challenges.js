// Desafio 1
function compareTrue(boolean_1, boolean_2) {
  if (boolean_1 && boolean_2) {
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
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  return `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  let numberCount = 0;

  for (let index in arrayNumbers) {
    if (arrayNumbers[index] > highestNumber) {
      highestNumber = arrayNumbers[index];
    }
  }
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] === highestNumber) {
      numberCount += 1;
    }
  }
  return numberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1_distance = mouse - cat1;
  let cat2_distance = mouse - cat2;

  if (cat1_distance < cat2_distance) {
    return "O gato 1 irá alcançar primeiro o rato";
  } else if (cat1_distance > cat2_distance) {
    return "O gato 2 irá alcançar primeiro o rato";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayResult = [];
  for (let i in arrayNumbers) {
    if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0) {
      arrayResult.push('fizzBuzz');
    } else if (arrayNumbers[i] % 3 === 0) {
      arrayResult.push('fizz');
    } else if (arrayNumbers[i] % 5 === 0) {
      arrayResult.push('buzz');
    } else if (arrayNumbers[i] % 3 !== 0 && arrayNumbers[i] % 5 !== 0) {
      arrayResult.push('bug');
    }
  }
  return arrayResult;
}

// Desafio 9
function encode(stringToEncode) {
  let codedString = stringToEncode.split('');

  for (let character in codedString) {
    switch (codedString[character]) {
      case 'a':
        codedString[character] = '1';
        break;
      case 'e':
        codedString[character] = '2';
        break;
      case 'i':
        codedString[character] = '3';
        break;
      case 'o':
        codedString[character] = '4';
        break;
      case 'u':
        codedString[character] = '5';
        break;
    }
  }
  return codedString.join('');
}

function decode(stringToDecode) {
  let codedString = stringToDecode.split('');

  for (let character in codedString) {
    switch (codedString[character]) {
      case '1':
        codedString[character] = 'a';
        break;
      case '2':
        codedString[character] = 'e';
        break;
      case '3':
        codedString[character] = 'i';
        break;
      case '4':
        codedString[character] = 'o';
        break;
      case '5':
        codedString[character] = 'u';
        break;
    }
  }
  return codedString.join('');
}

// Desafio 10
function techList(arrayList, name) {
  if (arrayList.length === 0) {
    return 'Vazio!';
  }

  let arrayTech = [];
  arrayList.sort();

  for (let tech in arrayList) {
    arrayTech.push(
      {
        tech: arrayList[tech],
        name: name
      }
    );
  }
  return arrayTech;
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
