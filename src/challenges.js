// Desafio 1
function compareTrue(boolOne, boolTwo) {
  if (boolOne === true && boolTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(words) {
  let newArrayWords = words.split(' ');
  return newArrayWords;
}

// Desafio 4
function concatName(array) {
  let newWords = `${array[array.length - 1]}, ${array[0]}`;
  return newWords;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}


//  Função auxiliar Maior valor
function maxValueArray(array) {
  let maior = array[0];
  for (let i of array) {
    if (i > maior) {
      maior = i;
    }
  }
  return maior;
}

// Desafio 6
function highestCount(array) {
  let maior = maxValueArray(array);
  let cont = 0;
  for (let j of array) {
    if (j === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disMouseCat1 = cat1 - mouse;
  if (disMouseCat1 < 0) {
    disMouseCat1 *= -1;
  }
  let disMouseCat2 = cat2 - mouse;
  if (disMouseCat2 < 0) {
    disMouseCat2 *= -1;
  }

  if (disMouseCat1 < disMouseCat2) {
    return 'cat1';
  } else if (disMouseCat2 < disMouseCat1) {
    return 'cat2';
  } else if (disMouseCat1 === disMouseCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 0;
}

//Função auxiliar Desafio 8
function checkDiviser(value) {
  let testeOne = (value % 5 === 0);
  let testeTwo = (value % 3 === 0);
  if (testeOne && testeTwo) return 'fizzBuzz';
  if (testeOne) return 'buzz';
  if (testeTwo) return 'fizz';
  return 'bug!';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  let resultString;
  for (let number of array) {
    resultString = checkDiviser(number);
    newArray.push(resultString);
  }
  return newArray;
}

// Desafio 9
let code = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
}

// Função auxiliar01 do Desafio 9
function changeLetterNumber(char) {
  for (let key in code) {
    if (char === key) {
      return code[key];
    }
  }
  return char;
}

// Função auxiliar02 do Desafio 9
function changeNumberLetter(number) {
  for (let key in code) {
    if (number == code[key]) {
      return key;
    }
  }
  return number;
}

function encode(words) {
  let newWords = '';

  for (let char of words) {
    let value = changeLetterNumber(char);
    newWords += value;
  }
  return newWords;
}

function decode(words) {
  let newWords = '';

  for (let char of words) {
    let value = changeNumberLetter(char);
    newWords += value;
  }
  return newWords;
}

// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!'
  }
  let technologies = {
  };
  let increasingArray = array.sort();
  let newArray = [];
  for (let techName of increasingArray) {
    let obj = {
      tech: techName,
      name,
    }
    newArray.push(obj)
  }
  technologies = newArray;
  return technologies;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let j of array) {
    let count = 0;
    for (let i of array) {
      if (j === i) {
        count += 1;
        if (count === 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }

  let phoneNumber = '(';
  for (let number in array) {
    if (array[number] < 0 || array[number] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    if (number == 1) {
      phoneNumber += array[number];
      phoneNumber += ') ';
    } else if (number == 6) {
      phoneNumber += array[number];
      phoneNumber += '-';
    } else phoneNumber += array[number];
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(sideOne, sideTwo, sideThree) {
  if (sideOne < (sideTwo + sideThree) && sideOne > Math.abs(sideTwo - sideThree)) {
    return true;
  } else if (sideTwo < (sideOne + sideThree) && sideTwo > Math.abs(sideOne - sideThree)) {
    return true;
  } else if (sideThree < (sideOne + sideTwo) && sideThree > Math.abs(sideOne - sideTwo)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(phrase) {
  let cont = 0;
  let expression = /\d+/g;
  let word = phrase.match(expression);
  for (let number of word) {
    number = parseInt(number, 10);
    cont += number;
  }
  if (cont === 1) {
    return `${cont} copo de água`;
  }
  return `${cont} copos de água`;
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
