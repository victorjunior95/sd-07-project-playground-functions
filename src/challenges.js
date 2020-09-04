// Desafio 1
function compareTrue(booleanA, booleanB) {
  let resultado;
  if (booleanA && booleanB) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let word = '';
  let fraseArray = [];
  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i] !== ' ') {
      word += frase[i];
    } else {
      fraseArray.push(word);
      word = '';
    }
  }
  fraseArray.push(word);
  return fraseArray;
}

// Desafio 4
function concatName(arrayNames) {
  let lastItem = arrayNames.length - 1;
  let lastFirst = `${arrayNames[lastItem]}, ${arrayNames[0]}`;
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = wins * 3;
  let sum = victory + ties;
  return sum;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let high = arrayNumbers[0];
  for (let i = 0; i <= arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > high) {
      high = arrayNumbers[i];
    }
  }
  let repeat = 0;
  for (let index = 0; index <= arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === high) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1M = Math.abs(cat1 - mouse);
  let cat2M = Math.abs(cat2 - mouse);
  let result;
  if (cat1M === cat2M) {
    result = 'os gatos trombam e o rato foge';
  } else if (cat1M < cat2M) {
    result = 'cat1';
  } else if (cat2M < cat1M) {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let arrayFizzBuzz = [];
  for (let i = 0; i < arrayNum.length; i += 1) {
    if (arrayNum[i] % 3 === 0 && arrayNum[i] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (arrayNum[i] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (arrayNum[i] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(paramString) {
  let newString = '';
  for (let i = 0; i <= paramString.length - 1; i += 1) {
    if (paramString[i] === 'a') {
      newString += '1';
    } else if (paramString[i] === 'e') {
      newString += '2';
    } else if (paramString[i] === 'i') {
      newString += '3';
    } else if (paramString[i] === 'o') {
      newString += '4';
    } else if (paramString[i] === 'u') {
      newString += '5';
    } else {
      newString += paramString[i];
    }
  }
  return newString;
}
function decode(paramString2) {
  let newString2 = '';
  for (let index = 0; index <= paramString2.length - 1; index += 1) {
    if (paramString2[index] === '1') {
      newString2 += 'a';
    } else if (paramString2[index] === '2') {
      newString2 += 'e';
    } else if (paramString2[index] === '3') {
      newString2 += 'i';
    } else if (paramString2[index] === '4') {
      newString2 += 'o';
    } else if (paramString2[index] === '5') {
      newString2 += 'u';
    } else {
      newString2 += paramString2[index];
    }
  }
  return newString2;
}

// Desafio 10
function techList(tech, firstName) {
  let endList = [];
  tech.sort();
  if (tech.length <= 0) {
    endList = 'Vazio!';
  } else {
    for (let i = 0; i < tech.length; i += 1) {
      endList.push({ tech: tech[i], name: firstName });
    }
  }
  return endList;
}

// Função suporte para Desafio 11
function suport(phone2) {
  let firstPart = `(${phone2[0]}${phone2[1]}) `;
  for (let i = 2; i <= 6; i += 1) {
    firstPart += `${phone2[i]}`;
  }
  firstPart += '-';
  let completePhone = firstPart;
  for (let i = 7; i < phone2.length; i += 1) {
    completePhone += `${phone2[i]}`;
  }
  return completePhone;
}

// Desafio 11
function generatePhoneNumber(phone) {
  let answer = '';
  let lastReturn;
  let repeat = 0;
  for (let k = 0; k < phone.length; k += 1) {
    for (let l = k + 1; l < phone.length; l += 1) {
      if (phone[k] === phone[l]) {
        repeat += 1;
      }
    }
  }
  repeat -= 1;
  for (let j = 0; j < phone.length; j += 1) {
    if (phone[j] < 0 || phone[j] > 9) {
      answer = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (phone.length !== 11) {
    answer = 'Array com tamanho incorreto.';
  } else if (repeat >= 3) {
    answer = 'não é possível gerar um número de telefone com esses valores';
  } else if (answer !== 'Array com tamanho incorreto.' && answer !== 'não é possível gerar um número de telefone com esses valores') {
    answer = suport(phone);
  }
  lastReturn = answer;
  return lastReturn;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineA2 = lineB + lineC;
  let lineB2 = lineA + lineC;
  let lineC2 = lineA + lineB;
  let different = Math.abs(lineA - lineB - lineC);
  let result;

  if (lineA < lineA2 && lineB < lineB2 && lineC < lineC2) {
    result = true;
  } else if (lineA > different && lineB > different && lineC > different) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 13
function hydrate(drinks) {
  let takeNumbers = drinks.match(/\d+/g); // encontra só os números da frase e os coloca em um array, mas eles ainda são como strings
  let justNumber = 0;
  let sum = 0;
  for (let i = 0; i < takeNumbers.length; i += 1) {
    justNumber = parseInt(takeNumbers[i]); // para transformar de string para número
    sum += justNumber; // para somar os números
  }
  let result;
  if (sum === 1) {
    result = '1 copo de água';
  } else {
    result = `${sum} copos de água`;
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
