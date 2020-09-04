// Desafio 1
function compareTrue(n1, n2) {
  // seu código aqui
  if (n1 && n2) {
    return true;
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let firstItem = array[0];
  let lastItem = array[array.length - 1];

  return `${lastItem}, ${firstItem}`
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winPoints = wins * 3;
  let tiePoints = ties * 1;
  let points = winPoints + tiePoints;

  return points;
}

// Desafio 6
function highestNumber(numbers) {
  let highNumber = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (highNumber < numbers[i]) {
      highNumber = numbers[i];
    }
  }
  return highNumber;
}
function highestCount(numbers) {
  // seu código aqui
  let number = highestNumber(numbers);
  let counting = 0;
  for (let j = 0; j < numbers.length; j += 1) {
    if (number === numbers[j]) {
      counting += 1;
    }
  }
  return counting;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let catOne = Math.abs(cat1 - mouse);
  let catTwo = Math.abs(cat2 - mouse);
  if (catOne < catTwo) {
    return 'cat1';
  } else if (catOne > catTwo) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let arrayStrings = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 !== 0) {
      arrayStrings.push('fizz');
    } else if (numbers[i] % 3 !== 0 && numbers[i] % 5 === 0) {
      arrayStrings.push('buzz');
    } else if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      arrayStrings.push('fizzBuzz');
    } else {
      arrayStrings.push('bug!');
    }
  }
  return arrayStrings;
}

// Desafio 9
function encode(number) {
  // seu código aqui
  let romeNumber = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  // let naturalNumbers = [];
  let naturalNumber = '';

  for (let indice in number) {
    if (number[indice] == 'a' || number[indice] == 'e' || number[indice] == 'i' || number[indice] == 'o' || number[indice] == 'u') {
    naturalNumber += romeNumber[number[indice]];
    } else {
    naturalNumber += number[indice];
    }
  }
  return naturalNumber;
}

function decode(letter) {
  // seu código aqui
  letter = letter.replace(/1/gi, 'a');
  letter = letter.replace(/2/gi, 'e');
  letter = letter.replace(/3/gi, 'i');
  letter = letter.replace(/4/gi, 'o');
  letter = letter.replace(/5/gi, 'u');
  return letter;
}

// Desafio 10
function techList(tec, names) {
  // seu código aqui
  let tecnos = tec.sort();
  let tecnologies = [];
  if (tec.length > 0) {
    for (let i = 0; i < tecnos.length; i += 1) {
      tecnologies.push({ tech: tec[i], name: names });
    }
  } else {
    return 'Vazio!';
  }
  return tecnologies;
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
