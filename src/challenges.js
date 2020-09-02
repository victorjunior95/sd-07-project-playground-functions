// Desafio 1
function compareTrue(valor1,valor2) {
  let retorno = false;

  if (valor1 === true && valor2 === true) {
    retorno = true;
  } else {
    retorno = false;
  }
  return retorno;
}


// Desafio 2
function calcArea(base,height) {
  let area = (base * height / 2);

  return area;
}
console.log(calcArea(base,height))

// Desafio 3
function splitSentence(umaString) {
    
  umArray = umaString.split(" ")

  return umArray;
}


// Desafio 4
function concatName(arrayDeStrings) {
  
  let stringFinal = (arrayDeStrings[(arrayDeStrings.length-1)] +" , "+ arrayDeStrings[0])
  
  return stringFinal;
}



// Desafio 5
function footballPoints() {
  // seu código aqui
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
