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

// Desafio 7 feito
function catAndMouse(mouse, cat1, cat2,) {

  let distancia1 = cat1 - mouse;
  let distancia2 = cat2 - mouse;
  let unidades1 = Math.abs(distancia1);
  let unidades2 = Math.abs(distancia2);

if (unidades1 > unidades2) {

      return 'cat2';
  }
  else if (unidades2 > unidades1) {

      return 'cat1';
  }
  else if (unidades1 === unidades2){

      return 'os gatos trombam e o rato foge';
  }

}

// Desafio 8
function fizzBuzz(arrNumbers) {

   for (let indice in arrNumbers){

      if((arrNumbers[indice]%3==0)&&(arrNumbers[indice]%5==0)){
          arrNumbers[indice] = "fizzBuzz";

      } else if (arrNumbers[indice]%5==0) {
          arrNumbers[indice] = "buzz";

      } else if (arrNumbers[indice]%3==0){
          arrNumbers[indice] = "fizz";

      } else {
          arrNumbers[indice]="bug!";
      }
  }
  return arrNumbers;
}

// Desafio 9
function encode(arrString) {
  let encodeString = [];


  for (let i = 0; i < arrString.length; i += 1) {

        if(arrString[i] === 'a'){
            encodeString[i] = 1;
        }
        else if(arrString[i] === 'e') {
            encodeString[i] = 2;
        }
        else if(arrString[i] === 'i'){
            encodeString[i] = 3;
        }
        else if (arrString[i] === '0') {
            encodeString[i] = 4;
        }
        else if (arrString[i] === 'u') {
            encodeString[i] = 5;
        }
        else {
            encodeString[i] = arrString[i];
        }
  }

   return encodeString.join('');
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
