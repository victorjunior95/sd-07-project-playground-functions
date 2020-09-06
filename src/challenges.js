// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
  /*function splitSentence(string) {
  // seu código aqui

  var espaços = ` `
  var x = string.split(espaços);
  return x;
*/
}

// Desafio 4
function concatName(array) {
  // seuls código aqui
  let x = array[(array.length - 1)] + `, ` + array[0];
  return x;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  var points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  var maior = 0;
  var contador = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  for (let j = 0; j < numeros.length; j += 1) {
    if (numeros[j] === maior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  var dist1 = cat1 - mouse;
  var dist2 = cat2 - mouse;
  if (dist1 > dist2) {
    return "cat1"
  }
  if (dist1 < dist2) {
    return "cat2"
  }
  else {
    return "os gatos trombam e o rato foge"
  }
}


// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  var resposta = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      resposta.push("fizz");
    }
    if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      resposta.push("buzz");
    }
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      resposta.push("fizzBuzz");
    }
    if (array[i] % 3 !== 0 && array[i] % 5 !== 0) {
      resposta.push("bug!");
    }
  }
  return resposta;
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