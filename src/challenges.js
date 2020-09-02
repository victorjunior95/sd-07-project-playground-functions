// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(recebeString) {
  // seu código aqui
  let stringA;

  return recebeString.split("");
}

// Desafio 4
function concatName(arrayDeString) {
  // seu código aqui
  return arrayDeString[arrayDeString.length - 1] + ", " + arrayDeString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + 1 * ties;
  // seu código aqui
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  // seu código aqui
  let maiorNumero = arrayDeNumeros[0];
  let contadorDeMaiorNumero = 0;
  //econtrando o maior valor
  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    if (arrayDeNumeros[i] > maiorNumero) {
      maiorNumero = arrayDeNumeros[i];
    }
  }

  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    if (arrayDeNumeros[i] === maiorNumero) {
      contadorDeMaiorNumero += 1;
    }
  }
  return contadorDeMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse) && Math.abs(cat1 - mouse) !== Math.abs(cat2 - mouse)) {
    return "cat2";
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse) && Math.abs(cat1 - mouse) !== Math.abs(cat2 - mouse)) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  // seu código aqui
  let mensagemDeRetorno = [];
  for (let i = 0; i < arrayFizzBuzz.length; i += 1) {
    let mensagem = "";
    if (arrayFizzBuzz[i] % 3 === 0 && arrayFizzBuzz[i] % 5 === 0) {
      mensagem = "fizzBuzz";
    } else if (arrayFizzBuzz[i] % 3 === 0) {
      mensagem = "fizz";
    } else if (arrayFizzBuzz[i] % 5 === 0) {
      mensagem = "buzz";
    } else if (arrayFizzBuzz[i] % 3 !== 0 && arrayFizzBuzz[i] % 5 !== 0) {
      mensagem = "bug!";
    }
    mensagemDeRetorno.push(mensagem);
  }
  return mensagemDeRetorno;
}

// Desafio 9
function encode(arrayDecodifique) {
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
