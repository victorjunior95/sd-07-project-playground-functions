// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(separator) {
  return separator.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  let last = arrayStrings[arrayStrings.length - 1];
  let first = arrayStrings[0];
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return `${wins * 3}` + `${ties * 1}`;
}

// Desafio 6
function highestCount(arrayNum) {
  let highest = Math.max.apply(null, arrayNum);
  let highestArrayNum = 0;
  for (let i in arrayNum) {
    if (highest === arrayNum[i]) {
      highestArrayNum += 1;
    }
  }
  return highestArrayNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1Distance < cat2Distance) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  let arrayReturn = [];
  for (let i in arrayFizzBuzz) {
    let fizz = arrayFizzBuzz[i] % 3 === 0;
    let buzz = arrayFizzBuzz[i] % 5 === 0;
    if (fizz === 0 && buzz === 0) {
      arrayReturn.push('fizzBuzz');
    } else if (fizz === 0) {
      arrayReturn.push('fizz');
    } else if (buzz === 0) {
      arrayReturn.push('buzz');
    } else if (fizz !== 0 && buzz !== 0) {
      arrayReturn.push('bug!');
    }
  }
  return arrayReturn;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/gi, '3');
  string = string.replace(/e/gi, '2');
  string = string.replace(/i/gi, '3');
  string = string.replace(/o/gi, '4');
  string = string.replace(/u/gi, '5');
  return string;
}
console.log(encode('hi there!'));

function decode(string) {
  string.replace(/[1-5]/gi, 'a');
  return string;
}

// Desafio 10
function techList(techName, name) {
  techName.sort();
  let techNameList = [];
  if (techName.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < techName.length; i += 1) {
    techNameList[i] = {
      tech: `${techName[i]}`,
      name: `${name}`,
    };
  }
  return techNameList;
}

// Desafio 11
function generatePhoneNumber(phoneNum) {
  let repeat3 = 0;
  if (phoneNum.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i in phoneNum) {
    repeat3 = 0;
    if (phoneNum[i] < 0 || phoneNum[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let j in phoneNum) {
      if (phoneNum[i] === phoneNum[j]) {
        repeat3 += 1;
      }
    }
    if (repeat3 >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let phoneFormat =
    `(${phoneNum[0]}` +
    `${phoneNum[1]}) ` +
    `${phoneNum.slice(2, 7).join('')}` +
    `-${phoneNum.slice(7, 12).join('')}`;
  return phoneFormat;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineACondition = Math.abs(lineB - lineC) > lineA || lineA > lineB + lineC;

  let lineBCondition = Math.abs(lineA - lineC) > lineB || lineB > lineA + lineC;

  let lineCCondition = Math.abs(lineA - lineB) > lineC || lineC > lineA + lineB;

  if (lineACondition || lineBCondition || lineCCondition) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(water) {
  let waterRegExp = /[0-9]/g;
  let waterWithoutSpaces = water.replace(/\s/g, '');
  let waterNum = waterWithoutSpaces.match(waterRegExp);
  let waterCount = 0;
  for (let i in waterNum) {
    waterCount += parseInt(waterNum[i], 10);
  }
  if (waterCount > 1) {
    return `${waterCount} copos de água`;
  }
  return `${waterCount} copo de água`;
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
