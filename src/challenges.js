// Desafio 1
function compareTrue(boolA, boolB) {
  if (boolA && boolB === true) return true;
  else return false;
}

// Desafio 2
function calcArea(height, base) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splittedSentence = string.split(" ");
  return splittedSentence;
}

// Desafio 4
function concatName(posicoesStrings) {
  let lastName = posicoesStrings[posicoesStrings.length - 1];
  let resultadoString = "";
  resultadoString = `${lastName}, ${posicoesStrings[0]}`;
  return resultadoString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let championshipPoints = winPoints + ties;
  return championshipPoints;
}

// Desafio 6
function highestCount(posicoes) {
  let higherNumber = 0;
  let countNumber = 0;
  for (let index in posicoes) {
    for (let i = 0; i < posicoes.length; i += 1) {
      if (posicoes[index] > posicoes[i] && posicoes[index] > higherNumber) {
        higherNumber = posicoes[index];
      }
    }
  }
  for (let index in posicoes) {
    if (posicoes[index] === higherNumber) {
      countNumber += 1;
    }
  }
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let jerry = 1;
  let tom = 1;
  let garfield = 1;
  jerry = mouse;
  tom = cat1;
  garfield = cat2;
  if (jerry === 1 && tom === 0) {
    tom = 2;
  }
  if (jerry === 1 && garfield === 0) {
    garfield = 2;
  }
  if (garfield - jerry === tom - jerry) {
    return "os gatos trombam e o rato foge";
  } else if (garfield - jerry < tom - jerry) {
    console.log("Garfield jantou o Jerry :'(");
    return `cat2`;
  } else {
    console.log("Tom jantou o Jerry :'(");
    return `cat1`;
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let fizzBuzz = [];
  for (let number in arrayNumbers) {
    if (arrayNumbers[number] % 3 === 0 && arrayNumbers[number] % 5 === 0) {
      fizzBuzz.push("fizzBuzz");
    } else if (arrayNumbers[number] % 3 === 0) {
      fizzBuzz.push("fizz");
    } else if (arrayNumbers[number] % 5 === 0) {
      fizzBuzz.push("buzz");
    } else {
      fizzBuzz.push("bug!");
    }
  }
  return fizzBuzz;
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
};
