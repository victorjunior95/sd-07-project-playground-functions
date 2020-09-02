// Desafio 1
function compareTrue(bolean1, bolean2) {
  // seu código aqui
  return (bolean1 && bolean2);
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height / 2);
}

// Desafio 3
function splitSentence(texto) {
  // seu código aqui
  return (texto.split(" "));
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  return (`${arrayString[arrayString.length-1]}, ${arrayString[0]}`);
} 

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins*3 + ties);
}

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let count = 0;
  let higherCount = 0;
  let highestCountNumber = 0;

  for (i = 0; i < arrayNumeros.length; i += 1) {
    count = 0;
    for (j = 0; j < arrayNumeros.length; j += 1) {
      if (arrayNumeros[j] == arrayNumeros[i]) {
        count += 1;
      }
    }

    if (count > higherCount) {
      higherCount = count;
      highestCountNumber = arrayNumeros[i];
    }
  }

  return highestCountNumber;

}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
