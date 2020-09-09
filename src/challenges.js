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
function highestCount(arry) {
  let maiorN = 0;
  let contador = 0;
  for (key in arry) {
    if (arry[key] > maiorN) {
      maiorN = arry[key];
    }
  }
  for (key in arry) {
    if (arry[key] == maiorN) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let contadorCat1 = cat1 - mouse;
  let contadorCat2 = cat2 - mouse;
  if (contadorCat1 < 0) {
    contadorCat1 = contadorCat1*-1;
  }
  if (contadorCat2 < 0) {
    contadorCat2 = contadorCat2*-1;
  }
  if (contadorCat1 < contadorCat2 && contadorCat1 > 0 && contadorCat2 > 0) {
    return "cat1";
  } else if (
    contadorCat1 > contadorCat2 &&
    contadorCat1 > 0 &&
    contadorCat2 > 0
  ) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arry) {
  let arryDeString = [];
  let element = "";
  for (let index = 0; index < arry.length; index++) {
   
      if (arry[index] % 3 == 0) {
        element = "fizz";
      }
      if (arry[index] % 5 == 0) {
        element = "buzz";
      } 
      if (arry[index] % 5 == 0 && arry[index] % 3 == 0) {
        element = "fizzBuzz";
      } 
      if (arry[index] % 5 !==0 && arry[index] % 3 !== 0) {
      element = "bug!";
      } 
    
    arryDeString.push(element);
    element = "";
  }
  return arryDeString;
}

// Desafio 9
function encode(params) {
  let element = "";
  for (let key in params) {
    switch (params.substr(key,1)) {
      case "a":
        element = element + "1";
        break;
      case "e":
        element = element + "2";
        break;
      case "i":
        element = element + "3";
        break;
      case "o":
        element = element + "4";
        break;
      case "U":
        element = element + "5";
        break;
      default:
        element = element + params.substr(key,1);
        break;
    }
  }

  return element;
}

function decode(element) {
  let elemento = "";
  for (let key in element) {
    switch (element.substr(key,1)) {
      case "1":
        elemento = elemento + "a";
        break;
      case "2":
        elemento = elemento + "e";
        break;
      case "3":
        elemento = elemento + "i";
        break;
      case "4":
        elemento = elemento + "o";
        break;
      case "5":
        elemento = elemento + "u";
        break;
      default:
        elemento = elemento + element.substr(key,1);
        break;
    }
  }
  return elemento;
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
