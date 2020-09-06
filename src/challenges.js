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
  let result = '';
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if (distanceCat1 < 0) {
    distanceCat1 = Math.abs(distanceCat1);
  }
  if (distanceCat2 < 0) {
    distanceCat2 = Math.abs(distanceCat2);
  }
  if (distanceCat2 === distanceCat1) {
    result = 'os gatos trombam e o rato foge';
  } else if (distanceCat2 < distanceCat1) {
    result = 'cat2';
  } else {
    result = 'cat1';
  }
  return result;
}
// Desafio 8
function changeNumbersForWords(number) {
  let fizzB = number % 3 === 0 && number % 5 === 0;
  let buzz = number % 5 === 0;
  let fizz = number % 3 === 0;
  switch (true) {
    case fizzB:
      return 'fizzBuzz';
      break;
    case buzz:
      return 'buzz';
      break;
    case fizz:
      return 'fizz';
      break;
    default:
      return 'bug!';
  }
}
function fizzBuzz(arrayNumbers) {
  let result = [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    result.push(changeNumbersForWords(arrayNumbers[i]));
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
    return 'Vazio!';
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
    }
    countRepeat = 0;
  }
  return condition;
}
function generatePhoneNumber(n) {
  let r = '';
  let condition = validaNumbers(n);
  if (n.length !== 11) {
    return 'Array com tamanho incorreto.';
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
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  let caseTest = 0;
  let lines = [];
  lines.push(lineA, lineB, lineC);
  let lineX = 0;
  let lineY = 0;
  let lineZ = 0;
  let x = 0;
  let y = 1;
  let z = 2;
  for (let i = 0; i < 3; i += 1) {
    lineX = lines[x];
    lineY = lines[y];
    lineZ = lines[z];
    if (lineX < lineY + lineZ && lineX > Math.abs(lineY - lineZ)) {
      caseTest += 1;
    }
    console.log(x, y, z);
    x += 1;
    if (x === 1) y = 2; z = 0;
    if (x === 2) y = 0; z = 1;
  }
  if (caseTest === 3) {
    result = true;
  }
  return result;
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
