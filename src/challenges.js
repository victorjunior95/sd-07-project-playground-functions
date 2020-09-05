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
function highestNumber(arrayNumbers) {
  let higherNumber = 0;
  for (let index in arrayNumbers) {
    for (let i = 0; i < arrayNumbers.length; i += 1) {
      if (
        arrayNumbers[index] > arrayNumbers[i] &&
        arrayNumbers[index] > higherNumber
      ) {
        higherNumber = arrayNumbers[index];
      }
    }
  }
  return higherNumber;
}

function highestCount(arrayNumbers) {
  let countNumber = 0;
  let higherNumber = highestNumber(arrayNumbers);
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] === higherNumber) {
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
  let result = '';
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
    result = 'os gatos trombam e o rato foge';
  } else if (distanceGarfield < distanceTom) {
    result = 'cat2';
  } else {
    result = 'cat1';
  }
  return result;
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = [];
  for (let number in arrayNumbers) {
    if (arrayNumbers[number] % 3 === 0 && arrayNumbers[number] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (arrayNumbers[number] % 3 === 0) {
      result.push('fizz');
    } else if (arrayNumbers[number] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encodeOrDecodeSentence(sentence) {
  let codedOrDecodedSentence = '';
  for (let letter in sentence) {
    switch (sentence[letter]) {
      case 'a':
        codedOrDecodedSentence += '1';
        break;
      case '1':
        codedOrDecodedSentence += 'a';
        break;
      case 'e':
        codedOrDecodedSentence += '2';
        break;
      case '2':
        codedOrDecodedSentence += 'e';
        break;
      case 'i':
        codedOrDecodedSentence += '3';
        break;
      case '3':
        codedOrDecodedSentence += 'i';
        break;
      case 'o':
        codedOrDecodedSentence += '4';
        break;
      case '4':
        codedOrDecodedSentence += 'o';
        break;
      case 'u':
        codedOrDecodedSentence += '5';
        break;
      case '5':
        codedOrDecodedSentence += 'u';
        break;
      default:
        codedOrDecodedSentence += sentence[letter];
    }
  }
  return codedOrDecodedSentence;
}
function encode(string) {
  let codedSentence = encodeOrDecodeSentence(string);
  return codedSentence;
}
function decode(string) {
  let decodedSentence = encodeOrDecodeSentence(string);
  return decodedSentence;
}

// Desafio 10
function techList(arrayOfTechs, name) {
  let result = [];
  let techs = [];
  let student = '';
  student = name;
  techs = arrayOfTechs;
  techs.sort();
  if (techs.length === 0) {
    return 'Vazio!'
  } else {
  for (let tech in techs) {
      result.push({
        tech: techs[tech],
        name: student,
      });
    }
  }
  return result;
}

// Desafio 11
function validaNumbers(arrayNumbers) {
  let condition = true;
  if (arrayNumbers.length !== 11) {
    condition = false;
  }
  for (let number in arrayNumbers) {
    let countRepeat = 0;
    if (arrayNumbers[number] < 0 || arrayNumbers[number] > 9) {
      condition = false;
    } else {
      for (let i = 0; i < arrayNumbers.length; i += 1) {
        if (arrayNumbers[i] === arrayNumbers[number]) {
          countRepeat += 1;
        }
      }
    }
    if (countRepeat >= 3) {
      condition = false;
    } else {
      countRepeat = 0;
    }
  }
  return condition;
}
function generatePhoneNumber(n) {
  let r = '';
  let condition = validaNumbers(n);
  if (n.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  if (condition === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let i in n) {
    if (n[i] >= 0 && n[i] < 10) {
      r += n[i];
    }
  }
  return `(${r[0]}${r[1]}) ${r[2]}${r[3]}${r[4]}${r[5]}${r[6]}-${r[7]}${r[8]}${r[9]}${r[10]}`;
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
