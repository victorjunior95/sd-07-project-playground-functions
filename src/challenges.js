// Desafio 1
function compareTrue(valor1,valor2) {
  if (valor1 && valor2){
    return true;
  } 
    return false;
  }

// Desafio 2
function calcArea(base,height) {
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(names) {
  return `${ names [ names.length - 1]}, ${ names[0] }`;
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numeros) {
  let maiornumero = 0;
  let contador = 0;
  for (let n in numeros){
    if (maiornumero < numeros[n]) {
      maiornumero = numeros[n];
    }
  }
  for (let n in numeros){
    if (maiornumero === numeros[n]) {
      contador++;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs((cat1 -= mouse));
  cat2 = Math.abs((cat2 -= mouse));
  if (cat1 < cat2){
  return 'cat1';
  } else if (cat1 > cat2) {
    return 'cat2';
  }
   else return "os gatos trombam e o rato foge";
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
