// Desafio 1 Usando o operador &&
function compareTrue(a, b) {
 let comparar = a && b;
 return comparar;
}

// Desafio 2 Área do triângulo
function calcArea(base, height) {
  let calculo = 0;
  calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3 Dividindo a frase
function splitSentence(frase) {
  let sentenca = "";
  sentenca = frase.split(" ");
  return sentenca;
}

// Desafio 4 Concatenação de strings
function concatName(nomes) {
  let lista = ""
  for (let index = 0; index < nomes.length; index++) {
    lista = nomes[index -1];
  }
  return lista;
}

// Desafio 5 Pontos no futebol

function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount() {
  let count = 0;
  let numMaior = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > numMaior) {
      numMaior = array[i];
      if (array[i] === numMaior) {
        count += 1;
      }
    }
  }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catD1 = cat1 - mouse;
  let catD2 = cat2 - mouse;
  if (catD1 < 0) {
    catD1 *= -1;
  }else if (catD2 < 0) {
    catD2 *= -1;
  }
  if ((cat1 - mouse) == (cat2 - mouse)) {
    return "os gatos trombam e o rato foge";
  }if (catD1 < catD2) {
    return "cat1";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let lista = [];
  for (let i in array) {
    if (array[i] % 3 === 0) {
      lista.push('fizz');
    }else if (array[i] % 5 === 0) {
      lista.push("buzz");
    }else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      lista.push("fizzBuzz");
    }else {
      lista.push("bug")
    }
  }
  return lista;
}

// Desafio 9
function encode(string) {
  let charge = string.split('');
  for (let i = 0; i < array.length; i++) {
    switch (charge[i]) {
      case "a":
        charge[i] = 1;
        break;
      case "e":
        charge[i] = 2;
        break;
      case "i":
        charge[i] = 3;
        break;
      case "o":
        charge[i] = 4;
        break;
      case "u":
        charge[i] = 5;
        break;
      default:
        charge[i] = charge[i];
        break;
    }
  }
}
function decode(string) {
  let str = string.split('');
  for (let i = 0; i < string.length; i++) {
    switch (str[i]) {
      case "1":
        str[i] = "a";
        break;
      case "2":
        str[i] = "e";
        break;
      case "3":
        str[i] = "i";
        break;
      case "4":
        str[i] = "o";
        break;
      case "5":
        str[i] = "u";
        break;
      default:
        str[i] = str[i];
        break;
    }
  }
  return str.join('');
}
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
