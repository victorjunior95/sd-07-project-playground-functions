// Desafio 1
function compareTrue(comparar1, comparar2) {
  // seu código aqui
  if (comparar1 && comparar2) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;

  return area;
}
// Desafio 3
function splitSentence(separando) {
  // seu código aqui
  return separando.split(" ");
}

// Desafio 4
function concatName(arrayNome) {
  // seu código aqui
  return arrayNome[arrayNome.length - 1] + ", " + arrayNome[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let quantidadeVitorias = wins * 3;
  let quantidadeEmpates = ties * 1;
  let resultadoTabela = quantidadeVitorias + quantidadeEmpates;
  return resultadoTabela;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maiorNumero = numeros[0];
  let contador = 0;
  for (let i of numeros) {
    if (i > maiorNumero) {
      maiorNumero = i;
    }
  }
  for (let j of numeros) {
    if (j === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 < distanciaCat2) {
    return "cat1";
  } else if (distanciaCat1 > distanciaCat2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let novoArray = [];
  for (const numeros of array) {
    if (numeros % 5 === 0 && numeros % 3 === 0) {
      novoArray.push("fizzBuzz");
    } else if (numeros % 5 === 0) {
      novoArray.push("buzz");
    } else if (numeros % 3 === 0) {
      novoArray.push("fizz");
    } else {
      novoArray.push("bug!");
    }
  }
  return novoArray;
}

// Desafio 9
function encode(frase) {
  let novaFrase = frase.replace(/a/g, "1");
  novaFrase = novaFrase.replace(/e/g, "2");
  novaFrase = novaFrase.replace(/i/g, "3");
  novaFrase = novaFrase.replace(/o/g, "4");
  novaFrase = novaFrase.replace(/u/g, "5");
  return novaFrase;
}
function decode(frase) {
  let novaFrase = frase.replace(/1/g, "a");
  novaFrase = novaFrase.replace(/2/g, "e");
  novaFrase = novaFrase.replace(/3/g, "i");
  novaFrase = novaFrase.replace(/4/g, "o");
  novaFrase = novaFrase.replace(/5/g, "u");
  return novaFrase;
}

// Desafio 10
function techList(learn, name) {
  if (learn == 0) {
    return "Vazio!";
  }
  let learnTechnology = [];
  for (let i in learn) {
    let organization = learn.sort();
    let includeTechList = {
      tech: learn[i],
      name: name,
    };
    learnTechnology.push(includeTechList);
  }
  return learnTechnology;
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
