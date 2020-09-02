// Desafio 1
function compareTrue(ligado,quente){
  // seu código aqui
  let podeBanhar;
  if((ligado==true)&&(quente==true)){
      podeBanhar=true;
  } else{
      podeBanhar=false;
  }
  return podeBanhar;
}
// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let area = (base*height)/2;
  return area;
}
// Desafio 3
function splitSentence(frase) {
  // seu código aqui
let resultado = frase.split(" ");
return resultado;
}
// Desafio 4
function concatName(frase) {
  // seu código aqui
let resultado = [];
let retornoToString;
for(let count in frase){
  resultado[0]=frase[frase.length-1];
  resultado[1]=" " + frase[0];
  resultado=resultado.toString();
}
retornoToString = resultado.toString();
return retornoToString;
}
// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let totalPoints = (wins*3) + ties;
  return totalPoints
}
// Desafio 6
function highestCount(highestCount) {
  // seu código aqui
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
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
let cat1Distance = Math.abs(mouse-cat1);
let cat2Distance = Math.abs(mouse-cat2);
if(cat1Distance<cat2Distance){
  return "cat1";
} else if(cat2Distance<cat1Distance) {
  return "cat2";
}
return "os gatos trombam e o rato foge";
}
// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
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
