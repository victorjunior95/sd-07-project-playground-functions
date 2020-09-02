// Desafio 1
function compareTrue(arg1, arg2) {
  return (arg1 && arg2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(arg) {
  return arg.split(' ');
}

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  // sort array
  array.sort(function (a, b) { return b - a; });
  // count highest number
  let countHighest = 1;
  for (let i = 1; array[i - 1] === array[i]; i += 1) {
    countHighest += 1;
  }
  return countHighest;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let pathCat1 = Math.abs(mouse - cat1);
  let pathCat2 = Math.abs(mouse - cat2);
  let result = '';
  if (pathCat1 < pathCat2) {
    result = 'cat1';
  } else if (pathCat1 > pathCat2) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(numArray) {
  let result = [];
  for (let num of numArray) {
    if (num % 3 === 0 && num % 5 === 0) {
      result.push('fizzBuzz');
    } else if (num % 3 === 0) {
      result.push('fizz');
    } else if (num % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(arg) {
  let code = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 1; i <= code.length; i += 1) {
    arg = arg.replace(RegExp(code[i - 1], 'g'), i);
  }
  return arg;
}

function decode(arg) {
  let code = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 1; i <= code.length; i += 1) {
    arg = arg.replace(RegExp(i.toString(), 'g'), code[i - 1]);
  }
  return arg;
}

// Desafio 10
function techList(techArray, name) {
  if (techArray.length === 0) {
    return 'Vazio!';
  }

  let resultArray = [];
  techArray.sort();
  for (let techName of techArray) {
    let resultObject = {
      tech: techName,
      name: `${name}`,
    };
    resultArray.push(resultObject);
  }
  return resultArray;
}

// Desafio 11
function generatePhoneNumber(numberArray) {
  // check length
  if (numberArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  // check rule < 0 OR > 9
  for (let number of numberArray) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // chek rule repeat 3 times or more
  let numberArraySorted = numberArray.slice(0);
  numberArraySorted.sort(function (a, b) { return a - b });
  for (let i = 0; i <= 8; i += 1) {
    if (numberArraySorted[i] === numberArraySorted[i + 2]) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // format number
  return `(${numberArray.slice(0, 2).join('')}) ${numberArray.slice(2, 7).join('')}-${numberArray.slice(7).join('')}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // check lineA
  let checkA = (lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC));
  // check lineB
  let checkB = (lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC));
  // check lineC
  let checkC = (lineC < (lineB + lineA)) && (lineC > Math.abs(lineB - lineA));

  return checkA && checkB && checkC;
}

// Desafio 13
function hydrate(drink) {
  let amountOfDrinks = drink.match(/\d+/g).map(Number);
  let glassOfWater = amountOfDrinks.reduce((a, b) => a + b, 0);
  let result = '';
  if (glassOfWater === 1) {
    result = `${glassOfWater} copo de água`;
  } else {
    result = `${glassOfWater} copos de água`;
  }
  return result;
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
