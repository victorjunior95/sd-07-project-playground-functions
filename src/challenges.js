// Desafio 1
function compareTrue(and1, and2) {
  if (and1 === true && and2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = [];
  let word = '';

  for (let i = 0; i < string.length; i+= 1) {
    if (string[i] === ' ') {
      arrayString.push(word);
      word = '';
    } else {
      word += string[i];
    }
  }
  arrayString.push(word);
  return arrayString;
}

// Desafio 4
function concatName(array) {
  let result = `${array[array.length -1]}, ${array[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highest = 0;
  let highestReps = 0;

  for (let i in numbers) {
    if (numbers[i] > highest) {
      highest = numbers[i];
      highestReps = 0;
    }
    if (numbers[i] === highest) {
      highestReps += 1;
    }
  }
  return highestReps;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let result;
  if (distCat1 === distCat2) {
    result = 'os gatos trombam e o rato foge';
  } else if (distCat1 < distCat2) {
    result = 'cat1';
  } else {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];

  for (let i in numbers) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0) {
      result.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let result = '';

  for (let i in string) {
    switch (string[i]) {
      case 'a':
        result += '1';
        break;
      case 'e':
        result += '2';
        break;
      case 'i':
        result += '3';
        break;
      case 'o':
        result += '4';
        break;
      case 'u':
        result += '5';
        break;
      default:
        result += string[i]
        break;
    }
  }
  return result;
}

function decode(string) {
  let result = '';
  for (let i in string) {
    switch (string[i]) {
      case '1':
        result += 'a';
        break;
      case '2':
        result += 'e';
        break;
      case '3':
        result += 'i';
        break;
      case '4':
        result += 'o';
        break;
      case '5':
        result += 'u';
        break;
      default:
        result += string[i]
        break;
    }
  }
  return result;
}

// Desafio 10
function techList(techs, name) {
  let result = [];
  let techsArray = techs;

  if (techs.length === 0) {
    result = 'Vazio!';
    return result;
  }

  techsArray.sort(); // techs em ordem alfabética

  for (let i in techsArray) {
    result[i] = {
      tech: techsArray[i],
      name: name
    }
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let result;
  if(numbers.length !== 11) {
    result = 'Array com tamanho incorreto.';
    return result;
  }
  for (let i in numbers) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      result = 'não é possível gerar um número de telefone com esses valores';
      return result;
    }
    let repetitions = 0;
    for (let j in numbers) {
      if (numbers[i] === numbers[j]) {
        repetitions += 1;

        if (repetitions >= 3) {
          result = 'não é possível gerar um número de telefone com esses valores';
          return result;
        }
      }
    }
  }
  result = '(';
  for (let i = 0; i < numbers.length; i += 1) {
    if (i === 2) {
      result = `${result}) ${numbers[i]}`;
    } else if (i === 7) {
      result = `${result}-${numbers[i]}`;
    } else {
      result += numbers[i];
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result;

  let bigger = Math.max(lineA, lineB, lineC);

  if (bigger * 2 < lineA + lineB + lineC) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 13
function hydrate(drinks) {
  let result;
  let NumberOfDrinks = drinks.match(/\d+/g).map(Number);  //  linha de código retirada da internet https://stackoverflow.com/questions/53897373/js-how-to-got-the-sum-of-numbers-from-a-string
  let sum = 0;

  for (let i in NumberOfDrinks) {
    sum += NumberOfDrinks[i];
  }

  if (sum === 1) {
    result = `${sum} copo de água`;
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
