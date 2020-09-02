// Desafio 1 feito
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2 feito
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3 feito
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}

// Desafio 4 feito
function concatName(arrayString) {

  let item1, item2;

  for (let i = 0; i < arrayString.length; i += 1) {

      item1 = arrayString[0];
        if(arrayString[i + 1] === undefined){
          item2 = arrayString[i];
        }

  }
  let string = [item2, item1].join(', ');
  return string;
}

// Desafio 5 feito
function footballPoints(wins, ties) {
  let resultado = (wins * 3) + (ties * 1);
  return resultado;
}

// Desafio 6 feito
function highestCount(numbers) {

  let maior = Math.max.apply(null, numbers );
  let cont = 0;

  for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] === maior) {
          cont = cont + 1;
      }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2,) {

    if (cat1 > cat2) {

        return 'cat1';
    }
    else if (cat2 > cat1) {

        return 'cat2';
    }
    else if(cat1 === cat2){

      return 'os gatos trombam e o rato foge';
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
