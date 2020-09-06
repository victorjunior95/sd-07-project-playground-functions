// Desafio 1
function compareTrue(boolean1, boolean2) {
  let equalBollean;
  if (boolean1 === true && boolean2 === true) {
    equalBollean = true;
  } else {
    equalBollean = false;
  }

  return equalBollean;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(stringSentence) {
  let splitArray = stringSentence.split(' ');
  return splitArray;
}

// Desafio 4
function concatName(stringsArray) {
  return `${stringsArray[stringsArray.length - 1]}, ${stringsArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = 3;
  let draw = 1;
  let points = (wins * victory) + (ties * draw);
  return points;
}

// Desafio 6
function highestCount(numbersArray) {
  let counter = 0;
  let highNumber = numbersArray[0];
  
  for (let i in numbersArray) {
    for (let j in numbersArray) {
      if (numbersArray[j] > highNumber) {
        highNumber = numbersArray[j];
      }
    }

    if (numbersArray[i] === highNumber) {
      counter += 1;
    }
  }
  
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  let successfulCatch;

  if (positionCat1 > positionCat2) {
    successfulCatch = 'cat2';
  } else if (positionCat2 > positionCat1) {
    successfulCatch = 'cat1';
  } else if (positionCat1 === positionCat2) {
    successfulCatch = 'os gatos trombam e o rato foge';
  }

  return successfulCatch;
}

// Desafio 8
function fizzBuzz(evenOddArray) {
  let array = [];

  for (let i in evenOddArray) {
    if (evenOddArray[i] % 3 === 0 && evenOddArray[i] % 5 === 0) {
      evenOddArray[i] = 'fizzBuzz';
    } else if (evenOddArray[i] % 3 === 0) {
      evenOddArray[i]= 'fizz';
    } else if (evenOddArray[i] % 5 === 0) {
      evenOddArray[i] = 'buzz';
    } else {
      evenOddArray[i] = 'bug!';
    }
    array.push(evenOddArray[i]);
  }

  return array;
}

// Desafio 9
function encode(string1) {
  // Objetc destructing: inicializando um objeto
  let letters = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  // Método .replace() com 'regular expression', pra encontrar qlqr das alternativas(|), de maneira global(g), que será substituído por meio de uma arrow function chamando o objeto
  let encodeString = string1.replace(/a|e|i|o|u/g, match => letters[match]);
  
  return encodeString;
}

function decode(string2) {
  let numbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  };
  let decodeString = string2.replace(/1|2|3|4|5/g, function subs(matched) {
    return numbers[matched];
  });

  return decodeString;
}

// Desafio 10
function techList(techArray, name) {
  let newTechArray = techArray.sort();
  let techObject;
  let array = [];

  if (newTechArray.length === 0) {
    techObject = 'Vazio';
  } else {

    for (let i in newTechArray){
      let techObject = {
        tech: newTechArray[i],
        name: name
      };
      
      array.push(techObject);
      // array.push(Object.assign({}, techObject));
    }
    
    techObject = array;
  }
  
  return techObject;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
}
