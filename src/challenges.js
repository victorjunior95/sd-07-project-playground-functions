// Desafio 1

function compareTrue(valorA, valorB) {
  return valorA && valorB;
}

// Desafio 2

function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3

function splitSentence(frase) {
  return frase.split(" ")
}

// Desafio 4
function concatName(array) {
  let nomes = "";
  nomes += array[array.length - 1];
  nomes += ", " + array[0];
  return nomes;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = 0;
  total = (wins * 3) + ties;
  return total
}

// Desafio 6
function highestCount(numeros) {
  // verifica maior valor
  let maiorValor = 0;
  for (let i in numeros) {
    if (numeros[i] > maiorValor) {
      maiorValor = numeros[i];
    }
  }

  // verifica repetição
  let repeticao = 0;
  for (let i in numeros) {
    if (numeros[i] === maiorValor) {
      repeticao += 1;
    }
  }
  return repeticao
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // calcula distâncias
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);

  // verifica qual está mais perto
  let msg = "";
  if (distancia1 > distancia2) {
    msg = "cat2";
  } else if (distancia1 < distancia2) {
    msg = "cat1";
  } else {
    msg = "os gatos trombam e o rato foge";
  }
  return msg;
}

// Desafio 8
function fizzBuzz(numeros) {
  let msg = [];
  for (let i in numeros) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0){
      msg.push("fizzBuzz");
    } else if (numeros[i] % 3 === 0){
      msg.push("fizz");
    } else if (numeros[i] % 5 === 0){
      msg.push("buzz");
    } else {
      msg.push("bug!");
    }
  }
  return msg;
}

// Desafio 9
function encode(frase) {
  let msg = [];
  for (let i in frase) {
    switch (frase[i]) {
      case "a": msg.push("1"); break;
      case "e": msg.push("2"); break;
      case "i": msg.push("3"); break;
      case "o": msg.push("4"); break;
      case "u": msg.push("5"); break;
      default: msg.push(frase[i]);
    }
  } return msg.join("");
}

function decode(frase) {
  let msg = [];
  for (let i in frase) {
    switch (frase[i]) {
      case "1": msg.push("a"); break;
      case "2": msg.push("e"); break;
      case "3": msg.push("i"); break;
      case "4": msg.push("o"); break;
      case "5": msg.push("u"); break;
      default: msg.push(frase[i]);
    }
  } return msg.join("");
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
