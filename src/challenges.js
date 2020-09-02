// Desafio 1
function compareTrue(val1, val2) {
  if (val1 && val2) {
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
function splitSentence(frase) {
  let copia = frase;
  let partida = [];
  let indice = 0;

  for (let i = 0; i < copia.length; i += 1) {
    if (i == 0) {
      partida[indice] = copia[i];
    } else if (copia[i] !== " ") {
      partida[indice] = partida[indice] + copia[i];
    } else {
      indice += 1;
      i += 1;
      partida[indice] = copia[i];
    }
  }
  return partida;
}

// Desafio 4
function concatName(array) {
  let saida;
  saida = array[array.length - 1] + ", " + array[0];
  return saida;
}
//console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let contador = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  for (let i in array) {
    if (array[i] == maior) {
      contador += 1;
    }
  }
  return contador;
}
//console.log(highestCount([9, 1, 2, 3, 9, 9, 7]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 < dist2) {
    return "cat1";
  } else if (dist2 < dist1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
  // seu código aqui
}
console.log(catAndMouse(3, 0, 9));

// Desafio 8
function fizzBuzz(array) {
  let resposta = [];
  for (let i in array) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      resposta.push("fizzBuzz");
    } else if (array[i] % 3 == 0) {
      resposta.push("fizz");
    } else if (array[i] % 5 == 0) {
      resposta.push("buzz");
    } else {
      resposta.push("bug!");
    }
  }
  return resposta;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(entrada) {
  let array = [];
  for (let i = 0; i < entrada.length; i += 1) {
    array.push(entrada[i]);
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] == "a") {
      array[i] = "1";
    } else if (array[i] == "e") {
      array[i] = 2;
    } else if (array[i] == "i") {
      array[i] = "3";
    } else if (array[i] == "o") {
      array[i] = "4";
    } else if (array[i] == "u") {
      array[i] = "5";
    }
  }
  let frase = array[0];
  for (let i = 1; i < array.length; i += 1) {
    frase += array[i];
  }
  return frase;
}
console.log(encode("Hi There"));

function decode(entrada) {
  let array = [];
  for (let i = 0; i < entrada.length; i += 1) {
    array.push(entrada[i]);
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] == "1") {
      array[i] = "a";
    } else if (array[i] == "2") {
      array[i] = "e";
    } else if (array[i] == "3") {
      array[i] = "i";
    } else if (array[i] == "4") {
      array[i] = "o";
    } else if (array[i] == "5") {
      array[i] = "u";
    }
  }
  let frase = array[0];
  for (let i = 1; i < array.length; i += 1) {
    frase += array[i];
  }
  return frase;

 
}
console.log("encode funcionando?" + encode('Hi there a e i o u'))
console.log("decode funcionando?" + decode('H3 Th2r2 11 22 33 44 55'))

// Desafio 10
function techList(array, name) {
  if (array.length == 0) {
    return "Vazio!";
  }
  let saida = {};
  let emOrdem = array.sort(); //ordena o array da entrada
  let lista = [];
  let objeto = {};

  for (let i in emOrdem) {
    saida.tech = emOrdem[i];
    saida.name = name;
    lista[i] = { ...saida };
    //console.log(lista);
  }

  return lista;
  // seu código aqui
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Fernando"));

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
