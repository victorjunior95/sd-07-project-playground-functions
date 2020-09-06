// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayStrings = [];
  let separatedString = '';
  for (let characterIndex = 0; characterIndex < sentence.length; characterIndex += 1) {
    if (sentence[characterIndex] !== ' ') {
      separatedString += sentence[characterIndex];
    } else {
      arrayStrings.push(separatedString);
      separatedString = '';
    }
  }
  arrayStrings.push(separatedString);

  return arrayStrings;
}

// Desafio 4
function concatName(arrayStrings) {
  return `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let repeatTimes = 0;
  let maxNumber = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    maxNumber = Math.max(maxNumber, arrayNumbers[index]);
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === maxNumber) {
      repeatTimes += 1;
    }
  }
  return repeatTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// função auxiliar para desafio 8
function divisorCheck(number) {
  let result = '';
  if (number % 3 === 0 && number % 5 === 0) {
    result = 'fizzBuzz';
  } else if (number % 3 === 0) {
    result = 'fizz';
  } else if (number % 5 === 0) {
    result = 'buzz';
  } else result = 'bug!';
  return result;
}
// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayResult = [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    arrayResult.push(divisorCheck(arrayNumbers[i]));
  }
  return arrayResult;
}
// Desafio 9
function encode(string) {
  let encString = '';
  encString = string.replace(/a/g, '1');
  encString = encString.replace(/e/g, '2');
  encString = encString.replace(/i/g, '3');
  encString = encString.replace(/o/g, '4');
  encString = encString.replace(/u/g, '5');
  return encString;
}

function decode(string) {
  let decString = '';
  decString = string.replace(/1/g, 'a');
  decString = decString.replace(/2/g, 'e');
  decString = decString.replace(/3/g, 'i');
  decString = decString.replace(/4/g, 'o');
  decString = decString.replace(/5/g, 'u');

  return decString;
}

// Desafio 10
function techList(techs, name) {
  let list = [];
  techs.sort();
  if (techs.length < 1) {
    return 'Vazio!';
  } 
  for (let i = 0; i < techs.length; i += 1) {
    let techToLearn = {
      tech: techs[i],
      name: `${name}`,
    };
    list.push(techToLearn);
  }
  return list;
}

// função auxiliar Desafio 11: verifica quantidade de números repetidos
function repeatNum(num, arrayNumbers) {
  let numRep = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (num === arrayNumbers[i]) {
      numRep += 1;
    }
  }
  if (numRep >= 3) {
    return false; // 'não é possível gerar um número de telefone com esses valores';
  }
  return true;
}
// função aux. Desafio 11: Verifica se tem números negativos ou acima de 9
function validNum(arrayNumbers) {
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] < 0 || arrayNumbers[i] > 9) {
      return false; // 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return true;
}
// função auxiliar Desafio 11: Verifica tamanho do array de números
function lengthNumber(arrayNumbers) {
  if (arrayNumbers.length > 11 || arrayNumbers.length < 11) {
    return false; // 'Array com tamanho incorreto.';
  }
  return true;
}
// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let phoneNumber = '';
  if (!lengthNumber(arrayNumbers)) {
    return 'Array com tamanho incorreto.';
  }
  if (!validNum(arrayNumbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (!repeatNum(arrayNumbers[i], arrayNumbers)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    phoneNumber += arrayNumbers[i];
  }
  return `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7)}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let cond1 = (lineA < lineB + lineC) && (lineB < lineC + lineA) && (lineC < lineB + lineA);
  let cond2 = (lineB > Math.abs(lineC - lineA)) && (lineC > Math.abs(lineB - lineA)) && (lineA > Math.abs(lineB - lineC));

  return cond1 && cond2;
}

// Desafio 13
function hydrate(string) {
  let arrayNumbers = [];

  for (let i = 0; i < string.length; i += 1) {
  switch (string[i]) {
    case '1':
      arrayNumbers.push(1);
      break;
    case '2':
      arrayNumbers.push(2);
      break;
    case '3':
      arrayNumbers.push(3);
      break;
    case '4':
      arrayNumbers.push(4);
      break;
    case '5':
      arrayNumbers.push(5);
      break;
    case '6':
      arrayNumbers.push(6);
      break;
    case '7':
      arrayNumbers.push(7);
      break;
    case '8':
      arrayNumbers.push(8);
      break;
    case '9':
      arrayNumbers.push(9);
      break;           
  }
  }
  let sumNumbers = 0;

  if (arrayNumbers.length == 1 && arrayNumbers[0] == 1) {
    return '1 copo de água';
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    sumNumbers += arrayNumbers[i];
  }
  return `${sumNumbers} copos de água`;
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
