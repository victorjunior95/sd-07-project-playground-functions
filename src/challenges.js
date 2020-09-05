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
  return separator.split(" ");
}

// Desafio 4
function concatName(arrayStrings) {
  let last = arrayStrings[arrayStrings.length - 1];
  let first = arrayStrings[0];
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  ties = ties * 1;
  let points = wins + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNum) {
  let highest = Math.max.apply(null, arrayNum);
  let highestArrayNum = 0;
  for (let i in arrayNum) {
    if (highest == arrayNum[i]) {
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
    return `os gatos trombam e o rato foge`;
  } else if (cat1Distance < cat2Distance) {
    return "cat1";
  }
  return "cat2";
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  let arrayReturn = [];
  for (let i in arrayFizzBuzz) {
    let fizz = arrayFizzBuzz[i] % 3;
    let buzz = arrayFizzBuzz[i] % 5;
    if (fizz === 0 && buzz === 0) {
      arrayReturn.push("fizzBuzz");
    } else if (fizz === 0) {
      arrayReturn.push("fizz");
    } else if (buzz === 0) {
      arrayReturn.push("buzz");
    } else if (fizz != 0 && buzz != 0) {
      arrayReturn.push("bug!");
    }
  }
  return arrayReturn;
}

// Desafio 9
function encode(string) {
  let stringReturn = "";
  for (i in string) {
    let aFind = string.replace(/a/g, "1");
    stringReturn = aFind;
    var eFind = stringReturn.replace(/e/g, "2");
    stringReturn = eFind;
    let iFind = stringReturn.replace(/i/g, "3");
    stringReturn = iFind;
    let oFind = stringReturn.replace(/o/g, "4");
    stringReturn = oFind;
    let uFind = stringReturn.replace(/u/g, "5");
    stringReturn = uFind;
  }
  return stringReturn;
}

function decode(string) {
  let stringReturn = "";
  for (i in string) {
    let aFind = string.replace(/1/g, "a");
    stringReturn = aFind;
    var eFind = stringReturn.replace(/2/g, "e");
    stringReturn = eFind;
    let iFind = stringReturn.replace(/3/g, "i");
    stringReturn = iFind;
    let oFind = stringReturn.replace(/4/g, "o");
    stringReturn = oFind;
    let uFind = stringReturn.replace(/5/g, "u");
    stringReturn = uFind;
  }

  return stringReturn;
}

// Desafio 10
function techList(techName, name) {
  techName.sort();
  let techNameList = [];
  if (techName.length == 0) {
    return "Vazio!";
  } else {
    for (let i in techName) {
      techNameList[i] = {
        tech: `${techName[i]}`,
        name: `${name}`,
      };
    }
    return techNameList;
  }
}

// Desafio 11
function generatePhoneNumber(phoneNum) {
  let repeat3 = 0;
  if (phoneNum.length != 11) {
    return "Array com tamanho incorreto.";
  }
  for (let i in phoneNum) {
    repeat3 = 0;
    if (phoneNum[i] < 0 || phoneNum[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    for (let j in phoneNum) {
      repeat3 = phoneNum[i] == phoneNum[j] ? repeat3 + 1 : repeat3;
    }
    if (repeat3 >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  let phoneFormat =
    `(${phoneNum[0]}` +
    `${phoneNum[1]}) ` +
    `${phoneNum.slice(2, 7).join("")}` +
    `-${phoneNum.slice(7, 12).join("")}`;
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
  let waterWithoutSpaces = water.replace(/ /g, "");
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
