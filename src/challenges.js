// Desafio 1
function compareTrue(x, y) {
  if ( x && y == true) {
     result = true;
  }else {
    result = false;
  }
  return result;
}
console.log(compareTrue());

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}
console.log(calcArea(20, 12));

// Desafio 3
function splitSentence(palavra) {
  return palavra.split(" ");
}
console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(array) {
  for (i = 0; i <= array.length; i += 1){
    return array[array.length -1] + ", " + array[0];
  }
}
let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(array));

// Desafio 5
function footballPoints(wins, ties) {
return ((wins * 3) + (ties * 1));
}
console.log(footballPoints(5, 3))

// Desafio 6
function highestCount(num) {
  let maior = 0;
  let count = 0;
  for (let i = 0; i < num.length; i += 1){
    if (maior < num[i]) {
    maior = num[i]; 
    }
  }
  for (let i = 0; i < num.length; i += 1){
    if (maior === num[i]){
      count ++;
    }
  }
  return count;
}
let num = [0, 4, 4, 4, 9, 2, 1];
console.log(highestCount(num));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let maisProximo;
  for (let i = 1; i <= bicho.length; i += 1){
    if ((mouse - cat1) < (mouse - cat2)){
      maisProximo = 'cat1';
    } else if ((mouse - cat1) > (mouse - cat2)){
      maisProximo = 'cat2';
    }else {
      maisProximo = 'os gatos trombam e o rato foge';
    }
  }
  return maisProximo;
}
let bicho = ['mouse', 'cat1', 'cat2'];
console.log(catAndMouse(bicho));

// Desafio 8
function fizzBuzz(div) {
  let result = [];
  for (let i = 0; i < div.length; i += 1){
    if (div[i] % 3 == 0 && div[i] % 5 !== 0){
      result.push('fizz');
    }else if (div[i] % 3 !== 0 && div[i] % 5 == 0){
      result.push('buzz');
    }else if (div[i] % 3 == 0 && div[i] % 5 == 0){
      result.push("fizzBuzz");
    } else {
      result.push("bug!");
    }    
  }
  return result;
}
let div = [2, 15, 7, 9, 45];
console.log(fizzBuzz(div));

// Desafio 9
function encode(frase) {
  saida = frase.replace(/a/g, '1');
  let said = saida.replace(/e/g, '2');
  let sai = said.replace(/i/g, '3');
  let sa = sai.replace(/o/g, '4');
  let s = sa.replace(/u/g, '5');
  return (s)
}
let vogal = 'Hi There!'
console.log(encode(vogal));

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
