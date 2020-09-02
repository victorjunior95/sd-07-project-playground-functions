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
  let distanciaCatUm = Math.abs(mouse - cat1);
  let distanciaCatDois = Math.abs(mouse - cat2);
  if (distanciaCatUm < distanciaCatDois) {
    return 'cat1';
  } else if (distanciaCatUm > distanciaCatDois) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

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
    encoded += arrayChar[i];
  }

  return encoded;
}

function decode(string) {
  let arrayChar = [];
  for (i in string) {
    if (string[i] === "1") {
      arrayChar.push("a");
    } else if (string[i] === "2") {
      arrayChar.push("e");
    } else if (string[i] === "3") {
      arrayChar.push("i");
    } else if (string[i] === "4") {
      arrayChar.push("o");
    } else if (string[i] === "5") {
      arrayChar.push("u");
    } else {
      arrayChar.push(string[i]);
    }
  }

  let decoded = "";

  for (i in arrayChar) {
    decoded += arrayChar[i];
  }

  return decoded;
}

// Desafio 10
function techList(tech, name) {
  let objetos = [];
  let nome = name;
  if (tech.length == 0) {
    return 'Vazio!'
  } else {
    let tecnologias = tech.sort();
    for (i in tecnologias) {
      let objeto = {
        tech: tecnologias[i],
        name: nome
      }
      objetos.push(objeto);
    }
    return objetos;
  }
}


let tech = [];
let nome = "Lucas";
console.log(techList(tech, nome));


// Desafio 11
function generatePhoneNumber(array) {
  //Verificação 11 números
  if (array.length != 11) {
    return "Array com tamanho incorreto";
  }
  //Verificação números menores que 0 ou maiores que 9;
  for (i in array) {
    if (array[i] < 0 || array [i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  for (i in array) {
    for (j in array) {
      if (array[i] === array[j]) {
        
      }
    }
  }
  
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
