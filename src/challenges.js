// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringTest) {
  return stringTest.split(" ");
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
  let counter = 0;
  // checando qual o maior valor da funcao
  let maxValue = array[0];
  for (let i in array) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  // contando quantas vezes o maior valor aparece
  for (let j  in array) {
    if (array[j] == maxValue) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return "cat1";
  } else if (distanceCat2 < distanceCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (key in array) {
    if (array[key] % 3 == 0 && array[key] % 5 == 0) {
      array[key] = "fizzBuzz";
    } else {
        if (array[key] % 3 == 0) {
        array[key] = "fizz";
      } else if (array[key] % 5 == 0) {
        array[key] = "buzz";
      } else {
        array[key] = "bug!";
      }
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let toEncodeArray = string.split("");
  let vowels = {"a": "1", "e": "2", "i": "3", "o": "4", "u": "5"};
  let finalString = "";
  for (let i in toEncodeArray) {
    for (let j in vowels) {
      if (string[i].toLowerCase() == j) {
        toEncodeArray[i] = vowels[j];
      }
    }
    finalString += toEncodeArray[i];
  }
  return finalString;
}
function decode(encodedString) {
  let toDecodeArray = encodedString.split("");
  let numbers = {"a": "1", "e": "2", "i": "3", "o": "4", "u": "5"};
  let finalString = "";
  for (let i in toDecodeArray) {
    for (let j in numbers) {
      if (toDecodeArray[i] == numbers[j]) {
        toDecodeArray[i] = j;
      }
    }
    finalString += toDecodeArray[i];
  }
  return finalString;
}

// Desafio 10
function techList(technologies, name) {
  if (technologies.length > 0) {
    let listOfObjects = []
    technologies.sort();
    // making the objects and pushing to the list
    for (key in technologies) {
      let tempObject = {};
      tempObject.name = name;
      tempObject.tech = technologies[key];
      listOfObjects.push(tempObject);
    }
    return listOfObjects;
  } else {
    return "Vazio!";
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  // função que verifica se os numeros estao entre 0 e 9 e nao se repetem mais que 3 vezes
  function validatingTheNumbers(array2) {
    let counterRepetition = 0;
    for (let i in array2) {if (array2[i] < 0 || array2[i] > 9) return true;}
    for (let j in array2) {for (let i in array2) {if (array2[j] == array2[i]) {
          counterRepetition += 1;
          if (counterRepetition >= 3) return true;}}
      counterRepetition = 0;}
    return false;}
  // função que gera uma string a partir de uma lista (os parametros pos1 e pos2 dizem onde começar da lista e onde terminar)
  function listForString(array, pos1, pos2) {
    let finalString = "";
    for (let i = pos1; i <= pos2; i += 1){
      finalString += array[i];}
    return finalString;}
  let validation = validatingTheNumbers(array);
  if (array.length != 11) return "Array com tamanho incorreto.";
  else if (validation) return "não é possível gerar um número de telefone com esses valores";
  else {
    let firstNumbers = listForString(array, 0, 1);
    let middleNumbers = listForString(array, 2, 6);
    let lastNumbers = listForString(array, 7, 10);
    return `(${firstNumbers}) ${middleNumbers}-${lastNumbers}`;}}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let condition1 = Math.abs(lineB - lineC) < lineA && lineA < lineB + lineC;
  let condition2 = Math.abs(lineA - lineC) < lineB && lineB < lineA + lineC;
  let condition3 = Math.abs(lineA - lineB) < lineC && lineC < lineB + lineA;
  if (condition1 && condition2 && condition3) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  stringList = string.split("");
  let listOfIntegers = [];
  // verificando se cada caracter da string é um numero 
  //e se for dando push na lista de inteiros
  for (let key in stringList) {
    if (Number(stringList[key])) {
      listOfIntegers.push(Number(stringList[key]));
    }
  }
  // somando todos os inteiros da lista de inteiros
  let sum = 0;
  for (let key in listOfIntegers) {
    sum += listOfIntegers[key];
  }
  if (sum == 1) {
    return "1 copo de água";
  } else {
    return `${sum} copos de água`;
  }
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
