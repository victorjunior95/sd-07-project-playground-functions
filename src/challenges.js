// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, heigth) {
  let formula = (base * heigth) / 2;
  return formula;
}

// Desafio 3
function splitSentence(str) {
  return str.split(" ");
}

// Desafio 4
function concatName(array) {
  let lastItem;
  let firstItem;

  firstItem = array[0];
  lastItem = array[array.length - 1];
  array = lastItem + ", " + firstItem;
  // array.push(lastItem);
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = 3;
  ties = 1;
  let vitorias = wins + ties;
  return vitorias;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  arryDeString = [];
  // percorrer arry{/*  */

  for (let index = 0; index < arry.length; index++) {
    let element = arry[index];

    if (element % 5 == 0 && element % 3 == 0) {
      arryDeString.push("fizzBuzz");
    } else {
      if (element % 3 == 0) {
        arryDeString.push("fizz");
      }

      if (element % 5 == 0) {
        arryDeString.push("buzz");
      } else {
        arryDeString.push("bug!");
      }
    }
  }

  return arryDeString;
}

// Desafio 9
function encode() {
  // seu código aqui
  let A = "1";
  let E = "2";
  let I = "3";
  let O = "4";
  let U = "5";
  let element = [];
  for (let key in params) {
    // verificar e alterar
    switch (params[key]) {
      case "a":
        element = element + A;
        break;
      case "e":
        element = element + E;
        break;
      case "i":
        element = element + I;
        break;
      case "o":
        element = element + O;
        break;
      case "U":
        element = element + U;
        break;
      default:
        element = element + params[key];
        break;
    }
  }

  return element;
}

function decode(params) {
  let A = "a"; //1
  let E = "e"; // 2
  let I = "i"; // 3
  let O = "o"; // 4
  let U = "u"; // 5
  let element = [];

  // console.log(params);
  // percorer arry
  for (let key in params) {
    // verificar e alterar
    switch (params[key]) {
      case "1":
        element = element + A;
        break;
      case "2":
        element = element + E;
        break;
      case "3":
        element = element + I;
        break;
      case "4":
        element = element + O;
        break;
      case "5":
        element = element + U;
        break;
      default:
        element = element + params[key];
        break;
    }
  }
  return element;
}

// Desafio 10
function techList(tech, name) {
  let arrayObjeto = [];
  tech.sort();
  for (key in tech) {
    arrayObjeto.push({ tech: tech[key], name: name });
  }
  if (tech.length == 0) {
    return "Vazio!";
  }
  return arrayObjeto;
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
