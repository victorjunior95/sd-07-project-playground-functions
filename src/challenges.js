// Desafio 1
function compareTrue(param1, param2) {
  if(param1 == true && param2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let arrayResultado = string.split(" ");
  return arrayResultado;
}

// Desafio 4
function concatName(array) {
  let resultado = `${array[array.length -1]}, ${array[0]}`
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties);
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNumero = 0;
  let maiorRepetido = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNumero) {
      maiorNumero = numbers[i];
    }
  }

  for (let j = 0; j < numbers.length; j += 1) {
    if (numbers[j] == maiorNumero) {
      maiorRepetido += 1;
    }
  } return maiorRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {  
  let mouseCat1 = Math.abs(mouse - cat1);
  let mouseCat2 = Math.abs(mouse - cat2);
  
  if (mouseCat1 < mouseCat2) {
    return "cat1";
  } else if (mouseCat1 > mouseCat2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
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
