// Desafio 1
function compareTrue(valorUm, valorDois) {
  if (valorUm && valorDois) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let newString = string.split(" ");
  return newString;
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length -1];
  let fullString = `${lastItem}, ${firstItem}`;
  return fullString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitorias = wins * 3;
  let pontosEmpates = ties;
  let totalDePontos = pontosVitorias + pontosEmpates;
  return totalDePontos;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNumero = 0;
  for (i in numbers) {
    if (numbers[i] > maiorNumero) {
      maiorNumero = numbers[i];
    }
  }
  let contador = 0;
  for (i in numbers) {
    if (numbers[i] == maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCatUm = cat1 - mouse;
  let distanciaCatDois = cat2 - mouse;
  if (distanciaCatUm < distanciaCatDois) {
    return 'cat1';
  } else if (distanciaCatUm > distanciaCatDois) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

console.log(catAndMouse(10, 4, 22));

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (i in array) {
    if (((array[i] % 3) == 0) && ((array[i] % 5) == 0)) {
      resultado.push("fizzBuzz");
    } else if ((array[i] % 3) == 0) {
      resultado.push("fizz");
    } else if ((array[i] % 5) == 0) {
      resultado.push("buzz");
    } else {
      resultado.push("bug!");
    }
  }
  return resultado;
}

let string = "Renan Oliveira";
console.log(string.charAt(0));

// Desafio 9
function encode(string) {
  let arrayChar = [];
  for (i in string) {
    if (string[i] === "a") {
      arrayChar.push("1");
    } else if (string[i] === "e") {
      arrayChar.push("2");
    } else if (string[i] === "i") {
      arrayChar.push("3");
    } else if (string[i] === "o") {
      arrayChar.push("4");
    } else if (string[i] === "u") {
      arrayChar.push("5");
    } else {
      arrayChar.push(string[i]);
    }
  }

  let encoded = "";

  for (i in arrayChar) {
    encoded.concat(arrayChar[i])
  }
  return encoded;
}

console.log(encode("Renan OLiveira"))


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
