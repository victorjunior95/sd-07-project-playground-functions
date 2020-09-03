// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let splits = string.split(' ');
    return splits;
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length-1]}, ${array[0]}`
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
    return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
    let highestNumber = 0;
    let sum = 0;
    for (let i = 0; i < arrayNumbers.length; i += 1){
      if (arrayNumbers[i] > highestNumber){
        highestNumber = arrayNumbers[i];
      }
    }
    for (let i = 0; i < arrayNumbers.length; i += 1){
      if (arrayNumbers[i] == highestNumber){
        sum += 1
      }
    }
    return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (mouse === distanceCat1 && mouse === distanceCat2) {
    return "os gatos trombam e o rato foge";
  } else if (distanceCat1 > distanceCat2){
    return `cat2`;
  } else {
    return `cat1`;
  }
   
}

// Desafio 8
function fizzBuzz(array) {
  let auxArray = [];

  for (key in array) {
    if (array[key] % 3 != 0 && array[key] % 5 != 0) {
      auxArray.push(`bug!`);
    } else if (array[key] % 3 == 0 && array[key] % 5 == 0) {
      auxArray.push(`fizzBuzz`);
    } else if (array[key] % 3 == 0) {
      auxArray.push(`fizz`);
    }else if (array[key] % 5 == 0) {
      auxArray.push(`buzz`);
    }
  }
  return auxArray;
}

// Desafio 9
function encode(string) {
  let str = "";
  for (let i = 0; i <= string.length - 1; i += 1) {
      if (string[i] === `a`) {
      str += `1`;
    } else if (string[i] === `e`) {
      str += `2`;
    } else if (string[i] === `i`) {
      str += `3`;
    } else if (string[i] === `o`) {
      str += `4`;
    } else if (string[i] === `u`) {
      str += `5`;
    } else {
      str += string[i];
    }
  }
  return str;
}
function decode(string) {
  let str = "";
  for (let i = 0; i <= string.length - 1; i += 1) {
      if (string[i] === `1`) {
      str += `a`;
    } else if (string[i] === `2`) {
      str += `e`;
    } else if (string[i] === `3`) {
      str += `i`;
    } else if (string[i] === `4`) {
      str += `o`;
    } else if (string[i] === `5`) {
      str += `u`;
    } else {
      str += string[i];
    }
  }
  return str
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
