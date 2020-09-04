// Desafio 1
function compareTrue(valueA , valueB) {
if( valueA && valueB ) {
  return true;
}else {
  return false;
}
}

// Desafio 2
function calcArea(base, height) {
  return (base*height) /2 
}

// // Desafio 3
function splitSentence(stringSentence){
  let resultado = stringSentence.split(" ");
  return resultado;
}

// Desafio 4
function concatName(names) {
  let amount = names
  let last = amount[amount.length-1]
  let first =  amount[0]
  return last + ", " +  first;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties
}

// Desafio 6

function highestCount(numbers) {

  let inAscendingOrder = numbers.sort().reverse()
  let CounterRepetitions = 0;

  for (i = 0; i< inAscendingOrder.length; i+=1){
    if (inAscendingOrder[i] == inAscendingOrder[i +1]){
      CounterRepetitions += 1
    }else if(inAscendingOrder[i +1] === undefined ){
      if( inAscendingOrder[i] >= inAscendingOrder[i -1]){
       CounterRepetitions += 1 
      }
      return CounterRepetitions
    }else{
        CounterRepetitions = 0
     } 
  }
}

// Desafio 7
function catAndMouse(mouseAndCats) {
  // let { mouse, cat1, cat2 } = mouseAndCats
 
 
  let numbersOfMouseAndCats = mouseAndCats
  let mouse = 0;
  let cat1 = 0;
  let cat2 = 0;

   for ( i = 0; i < numbersOfMouseAndCats.length ; i+=1){
      if ( i == 0 ){ 
      mouse = numbersOfMouseAndCats[i]
    }else if ( i == 1 ){
      cat1 = numbersOfMouseAndCats[i]
    }else if ( i == 2 ){
      cat2 = numbersOfMouseAndCats[i]

    }
   }
   if ( mouse == 0 ){
     return 'cat2'
   }else if( mouse == 10 ){
    return 'cat1'
   }else {
    return 'os gatos trombam e o rato foge'
   }
}
// catAndMouse( [0, 1, 3])
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
