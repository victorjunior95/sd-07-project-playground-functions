// Desafio 1
function compareTrue(boolA, boolB) {
  let result = false;
  if (boolA && boolB === true) {
    result = true;
  }
  return result;
}
// Desafio 2
function calcArea(height, base) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splittedSentence = string.split(' ');
  return splittedSentence;
}

// Desafio 4
function concatName(posicoesStrings) {
  let lastName = posicoesStrings[posicoesStrings.length - 1];
  let resultadoString = '';
  resultadoString = `${lastName}, ${posicoesStrings[0]}`;
  return resultadoString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let championshipPoints = winPoints + ties;
  return championshipPoints;
}

// Desafio 6
function highestCount(posicoes) {
  let higherNumber = 0;
  let countNumber = 0;
  for (let index in posicoes) {
    for (let i = 0; i < posicoes.length; i += 1) {
      if (posicoes[index] > posicoes[i] && posicoes[index] > higherNumber) {
        higherNumber = posicoes[index];
      }
    }
  }
  for (let index in posicoes) {
    if (posicoes[index] === higherNumber) {
      countNumber += 1;
    }
  }
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let jerry = 1;
  let tom = 1;
  let garfield = 1;
  jerry = mouse;
  tom = cat1;
  garfield = cat2;
  let distanceTom = jerry - tom;
  let distanceGarfield = jerry - garfield;
  if (distanceTom < 0) {
    distanceTom *= -1;
  }
  if (distanceGarfield < 0) {
    distanceGarfield *= -1;
  }

  if (distanceGarfield === distanceTom) {
    return 'os gatos trombam e o rato foge';
  } else if (distanceGarfield < distanceTom) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let fizzBuzz = [];
  for (let number in arrayNumbers) {
    if (arrayNumbers[number] % 3 === 0 && arrayNumbers[number] % 5 === 0) {
      fizzBuzz.push('fizzBuzz');
    } else if (arrayNumbers[number] % 3 === 0) {
      fizzBuzz.push('fizz');
    } else if (arrayNumbers[number] % 5 === 0) {
      fizzBuzz.push('buzz');
    } else {
      fizzBuzz.push('bug!');
    }
  }
  return fizzBuzz;
}

// Desafio 9
function encode(string) {
  let word = '';
  word = string;
  let codedWord = '';
  for (let letter in word) {
    switch (word[letter]) {
      case 'a':
        codedWord += '1';
        break;
      case 'e':
        codedWord += '2';
        break;
      case 'i':
        codedWord += '3';
        break;
      case 'o':
        codedWord += '4';
        break;
      case 'u':
        codedWord += '5';
      default:
        codedWord += word[letter];
    }
  }
  return codedWord;
}

function decode(string) {
  let word = '';
  word = string;
  let decodedWord = '';
  for (let letter in word) {
    switch (word[letter]) {
      case '1':
        decodedWord += 'a';
        break;
      case '2':
        decodedWord += 'e';
        break;
      case '3':
        decodedWord += 'i';
        break;
      case '4':
        decodedWord += 'o';
        break;
      case '5':
        decodedWord += 'u';
      default:
        decodedWord += word[letter];
    }
  }
  return decodedWord;
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
};
