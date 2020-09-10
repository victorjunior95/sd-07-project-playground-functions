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
function fizzBuzz(a) {
  let resultado = [];
  for (let pos in a){
    if (((a[pos] % 3) == 0) && ((a[pos] % 5) == 0)){
    resultado.push("fizzBuzz");
    } else if (((a[pos] % 3) == 0) && ((a[pos] % 5) != 0)){
      resultado.push("fizz");
    } else if (((a[pos] % 3) != 0) && ((a[pos] % 5) == 0)){
      resultado.push("buzz");
    } else resultado.push("bug!");
  }
  return resultado;
}

// Desafio 9
function encode() {
function encode(str) {
  let word = str.replace(/a/g, '1');
  word = word.replace(/e/g, '2');
  word = word.replace(/i/g, '3');
  word = word.replace(/o/g, '4');
  word = word.replace(/u/g, '5');
  return word;
}
function decode() {
function decode(str) {
  let word = str.replace(/1/g, 'a');
  word = word.replace(/2/g, 'e');
  word = word.replace(/3/g, 'i');
  word = word.replace(/4/g, 'o');
  word = word.replace(/5/g, 'u');
  return word;
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
