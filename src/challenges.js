// Desafio 1
function compareTrue(){
  // seu código aqui
  let ligado=true;
  let quente=true;
  let podeBanhar;
  if((ligado==true)&&(quente==true)){
      podeBanhar=true;
  } else{
      podeBanhar=false;
  }
  return podeBanhar;
}
// Desafio 2
function calcArea() {
  // seu código aqui
  let base = 5;
  let height = 5;
  let area = (base*height)/2;
  return area;
}
// Desafio 3
function splitSentence() {
  // seu código aqui
let frase = "Dia de festa";
let resultado = frase.split(" ");
return resultado;
}
// Desafio 4
function concatName() {
  // seu código aqui
let frase = ["João","José","Paulo","Fernando"];
let resultado = [];
for(let count in frase){
  resultado[0]=frase[frase.length-1];
  resultado[1]=frase[0];
}
return resultado;
}
// Desafio 5
function footballPoints() {
  // seu código aqui
  let wins = 7;
  let ties = 7;
  let totalPoints = (wins*3) + ties;
  return totalPoints
}
// Desafio 6
function highestCount() {
  // seu código aqui
  let highestCount = [9, 1, 2, 3, 9, 5, 7,10];
  let bigger = 0;
  let result = 0;
for(let count in highestCount){
  if(highestCount[count]>bigger){
      bigger=highestCount[count];
}
}
for(let count in highestCount){
  if(bigger===highestCount[count]){
      result+=1;
  }
}
return result;
}
// Desafio 7
function catAndMouse() {
  // seu código aqui
let cat1 = 6;
let cat2 = 6;
let mouse = 10;
let cat1Distance = mouse-cat1;
let cat2Distance = mouse-cat2;
if(cat1Distance<cat2Distance){
  return "cat1";
} else if(cat2Distance<cat1Distance) {
  return "cat2";
}
return "os gatos trombam e o rato foge";
}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,30,75,300];
let fizzBuzzReturn = [];
  for (let count in numbers){
      if((numbers[count]%3==0)&&(numbers[count]%5==0)){
          fizzBuzzReturn[count] = "fizzBuzz";
      } else if (numbers[count]%5==0) {
          fizzBuzzReturn[count] = "buzz";
      } else if (numbers[count]%3==0){
          fizzBuzzReturn[count] = "fizz";
      } else {
          fizzBuzzReturn[count]="bug!";
      }
  }
  return fizzBuzzReturn;
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
