// Desafio 1
function compareTrue(num1,num2) {
  if(num1 && num2){
    return true;
  }
  else {
    return false; 
  }
  
}

// Desafio 2
function calcArea(base,height) {
  return area = (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(lista) {
  let resultado = lista[lista.length-1] + ',' + ' ' + lista[0];
return resultado
}

// Desafio 5
function footballPoints(wins,ties) {
  return resultado = ((wins*3) + (ties*1));
}

// Desafio 6
function highestCount(array) {
  var maior = 0;
  var cont = 0;
for (var i = 0; i < array.length; i++) {
   if ( array[i] > maior ) {
      maior = array[i];
   }
for (var i = 0; i < array.length; i++){
    if (array[i] === maior){
        cont++;
    }
}
} return cont;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(n) {
  let nArray = [];
  let string ="";
  for(let i = 0; i <= n.length; i++){
    if(n[i]%3==){
      string = "fizz";
    } 
    if(n[i]%5==0){
      string = "buzz";
    }
    if(n[i]%5==0 && n[i]%3==0){
      string = "fizzBuzz";
    }
    if(n[i]%5!=0 && n[i]%3!=0){
      string = "bug!";
    }
    nArray.push(string);
  }
  return nArray;
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
