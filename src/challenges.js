// Desafio 1
function compareTrue(firstValue, secondValue) {
  return firstValue && secondValue;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(setence) {
  return setence.split(' ');
}

// Desafio 4
function concatName(namesArray) {
  return `${namesArray[namesArray.length - 1]}, ${namesArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  for (let i = 0; i < wins; i += 1) {
    points += 3;
  }
  for (let i = 0; i < ties; i += 1) {
    points += 1;
  }
  return points;
}

// Desafio 6
function highestCount(arr) {
  let counts = {};
  let mostDuplicated = {
    value: arr[0],
    times: 1,
  }
  for (let key in arr) {
    if (counts[arr[key]]) {
      counts[arr[key]] += 1;
    } else {
      counts[arr[key]] = 1;
    }
  }
  console.log(counts);
  for (let key in counts) {
      console.log(`${key}, ${mostDuplicated.value}`);
    if (key > mostDuplicated.value) {
      mostDuplicated.value = key;
      mostDuplicated.times = counts[key];
    } else if (Number(key) === mostDuplicated.value) {
        mostDuplicated.times += 1;
    }
  }
  return mostDuplicated.times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstCatDistance = mouse - cat1;
  let secondCatDistance = mouse - cat2;
  if (firstCatDistance > secondCatDistance) {
    return 'cat1';
  } else if (firstCatDistance < secondCatDistance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  let newArray = [];
  for (let key in arr) {
    if (arr[key] % 3 === 0 && arr[key] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (arr[key] % 3 === 0) {
      newArray.push('fizz');
    } else if (arr[key] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
