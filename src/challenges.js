// Desafio 1
function compareTrue(isTrue1, isTrue2) {
  if (isTrue1 === true && isTrue2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  let arrayWords = sentence.split(' ');
  return arrayWords;
}

// Desafio 4
function concatName(array) {
  return `${array[(array.length - 1)]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsQt = 0;
  let tiesQt = 0;
  for (let i = 0; i < wins; i += 1) {
    winsQt += 3;
  }
  for (let i = 0; i < ties; i += 1) {
    winsQt += 1;
  }
  return winsQt + tiesQt;
}


// Desafio 6
function highestCount(array) {
  let referenceCount = 0;
  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    for (let j = 0; j < array.length; j += 1) {
        if (array[i] == array[j]){
          count += 1;
        }
    }
    if (count > referenceCount){
        referenceCount = count;
    }
  }
  return referenceCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseDistanceBetweenCat1 = mouse > cat1 ? (mouse - cat1) : (cat1 - mouse);
  let mouseDistanceBetweenCat2 = mouse > cat2 ? (mouse - cat2) : (cat2 - mouse);
  if (mouseDistanceBetweenCat1 > mouseDistanceBetweenCat2) {
    return 'cat 2 got the mouse';
  } else if (mouseDistanceBetweenCat1 < mouseDistanceBetweenCat2) {
    return 'cat 1 got the mouse';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
let arrayOfNumbs = [2, 15, 7, 9, 45];
function fizzBuzz(array) {
  let wordsCollections = [];
  for (let number in array) {
    if (array[number] % 3 === 0 && array[number] % 5 === 0) {
      wordsCollections.push('fizzBuzz');
    } else if (array[number] % 3 === 0) {
      wordsCollections.push('fizz');
    } else if (array[number] % 5 === 0) {
      wordsCollections.push('buzz');
    } else {
      wordsCollections.push('bug!');
    }
  }
  return wordsCollections;
}

// Desafio 9
function encode(sentence) {
  let newSentence = "";
  for (let letter in sentence) {
    if (sentence[letter] === sentence[letter].toLowerCase()) {
      sentence[letter] === 'a' ? newSentence += '1' : 
      sentence[letter] === 'e' ? newSentence += '2' : 
      sentence[letter] === 'i' ? newSentence += '3' :
      sentence[letter] === 'o' ? newSentence += '4' : 
      sentence[letter] === 'u' ? newSentence += '5' : newSentence += sentence[letter];
    } else {
      newSentence += sentence[letter]
    }
  }
  return newSentence;
}

function decode(sentence) {
  let newSentence = "";
  for (let letter in sentence) {
    sentence[letter] === '1' ? newSentence += 'a' : 
    sentence[letter] === '2' ? newSentence += 'e' : 
    sentence[letter] === '3' ? newSentence += 'i' :
    sentence[letter] === '4' ? newSentence += 'o' : 
    sentence[letter] === '5' ? newSentence += 'u' : newSentence += sentence[letter];
  }
  return newSentence;
}

// Desafio 10
function techList(array, theName) {
  let structuredArray = [];
  let structureObjects = {};
  if (array === '') {
    return 'Vazio!';
  } else {
    for (let tech in array) {
      structureObjects = { tech: `${array[tech]}`, name: `${theName}`};
      structuredArray.push(structureObjects);
    }
  }
  return structuredArray;
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
