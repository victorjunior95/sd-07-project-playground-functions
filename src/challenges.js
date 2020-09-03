//Desafio Raphael Caputo

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
  return separando.split(' ');
}


// Desafio 4
function concatName(arrayNome) {
  // seu código aqui
  return (arrayNome[arrayNome.length - 1] + ', ' + arrayNome[0])
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
    return 'cat1';
  } else if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else {
    return "os gatos se trombam e o rato foge"
  }
}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
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