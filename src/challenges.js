// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true) {
      return true;
  } else {
      return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  // Define maior número:
  let maiorNumero = 0;
  let numeroDeVezes = 0;
  for (let contador = 0; contador < array.length; contador += 1) {
    if (array[contador] >= maiorNumero) {
      maiorNumero = array[contador];
    };
  // Conta quantas vezes ele aparece:
  for (let contador = 0; contador < array.length; contador += 1) {
    if (array[contador] == maiorNumero) {
      numeroDeVezes += 1;
    }
  }
  return numeroDeVezes;
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1ToMouseDistance;
  let cat2ToMouseDistance;
  // Calcula distância do cat1
  if (cat1 >= mouse) {
    cat1ToMouseDistance = cat1 - mouse;
  } else {
    cat1ToMouseDistance = mouse - cat1;
  }
  // Calcula distância do cat2
  if (cat2 >= mouse) {
    cat2ToMouseDistance = cat2 - mouse;
  } else {
    cat2ToMouseDistance = mouse - cat2;
  }
  // Calcula menor distância
  if (cat1ToMouseDistance < cat2ToMouseDistance) {
    return "cat1";
  } else if (cat2ToMouseDistance < cat1ToMouseDistance) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let arrayFizzBuzz = [];
  for (let contador = 0; contador < arrayDeNumeros.length; contador += 1) {
    if ((arrayDeNumeros[contador] % 3 == 0) && (arrayDeNumeros[contador] % 5 != 0)) {
      arrayFizzBuzz.push("fizz");
    } else if ((arrayDeNumeros[contador] % 3 != 0) && (arrayDeNumeros[contador] % 5 == 0)) { 
      arrayFizzBuzz.push("buzz");
    } else if ((arrayDeNumeros[contador] % 3 == 0) && (arrayDeNumeros[contador] % 5 == 0)) {
      arrayFizzBuzz.push("fizzBuzz");
    } else {
      arrayFizzBuzz.push("bug!");
    }
  }
return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, "1");
  string = string.replace(/e/g, "2");
  string = string.replace(/i/g, "3");
  string = string.replace(/o/g, "4");
  string = string.replace(/u/g, "5");
  return string;
}
function decode(string) {
  string = string.replace(/1/g, "a");
  string = string.replace(/2/g, "e");
  string = string.replace(/3/g, "i");
  string = string.replace(/4/g, "o");
  string = string.replace(/5/g, "u");
  return string;
}

// Desafio 10
function techList(arrayTech, name) {
  let arrayTechSorted = arrayTech.sort();
  let novoArray = [];
  if (arrayTech.length == 0) {
    return "Vazio!"
  } else {
    for (let i in arrayTechSorted) {
      novoArray.push({
        tech: arrayTechSorted[i],
        name: name
      })
    }
    return novoArray;
  }
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
