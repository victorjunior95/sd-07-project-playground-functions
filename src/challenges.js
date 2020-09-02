//User github - mustang-roy
//Nome: Luiz Filipe Sampaio Mariz

// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(originalString) {
  return originalString.split(' ');
}

// Desafio 4
function concatName(originalArray) {
  return originalArray[originalArray.length - 1] + ", " + originalArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + ties;
}

// Desafio 6
function highestCount(array) {
  array.sort()
  count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[array.length-1] === array[index]) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  dist1 = mouse - cat1;
  dist2 = mouse - cat2;

  dist1 = Math.abs(dist1);
  dist2 = Math.abs(dist2);

  if (dist1 < dist2) {
    return "cat1";
  } else if(dist2 < dist1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (item in array){
    if (array[item]%15 === 0) {
      array[item] = "fizzBuzz"
    } else if (array[item]%5 === 0) {
      array[item] = "buzz"
    } else if (array[item]%3 === 0){
      array[item] = "fizz"
    } else {
      array [item] = "bug!"
    }
  }

  return array;
}

// Desafio 9
function encode(name) {
  encrypt = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }

  let encodeName = "";

  for (letter in name){
    encodeName += encrypt[name[letter]] ?? name[letter];
  }

  return encodeName;
}

function decode(name) {
  encrypt = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u"
  }

  let decodeName = "";

  for (letter in name){
    decodeName += encrypt[name[letter]] ?? name[letter];
  }

  return decodeName;
}

// Desafio 10
function techList() {
  // seu código aqui
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
