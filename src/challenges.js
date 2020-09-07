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
  let pontV = wins * 3;
  let pontE = ties;
  let vitorias = pontV + pontE;
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
  let arryDeString = [];

  for (let index = 0; index < arry.length; index++) {
    let element;
    console.log(arry);

    if (arry[index] % 5 == 0 && arry[index] % 3 == 0) {
      element = "fizzBuzz";
    } else {
      if (arry[index] % 3 == 0) {
        element = "fizz";
      }

      if (arry[index] % 5 == 0) {
        element = "buzz";
      } else {
        element = "bug!";
      }
    }
    arryDeString.push(element);
    element = "";
  }

  return arryDeString;
}

// Desafio 9
function encode(params) {
  // seu código aqui
  let A = "1";
  let E = "2";
  let I = "3";
  let O = "4";
  let U = "5";
  let element = "";
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

function decode(element) {
  let A = "a"; //1
  let E = "e"; // 2
  let I = "i"; // 3
  let O = "o"; // 4
  let U = "u"; // 5
  let params = "";

  // console.log(params);
  // percorer arry
  for (let key in element) {
    // verificar e alterar
    switch (element[key]) {
      case "1":
        params = params + A;
        break;
      case "2":
        params = params + E;
        break;
      case "3":
        params = params + I;
        break;
      case "4":
        params = params + O;
        break;
      case "5":
        params = params + U;
        break;
      default:
        params = params + element[key];
        break;
    }
  }
  return params;
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
function triangleCheck(ladoA, ladoB, ladoC) {
  // seu código aqui
  if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    return true;
  }

  return false;
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
