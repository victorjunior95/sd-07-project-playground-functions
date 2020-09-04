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

  let inAscendingOrder = numbers.sort()
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
function catAndMouse(mouse, cat1, cat2) {

let cat1Number = 0;
let cat2Number = 0;

  if (  cat1 - mouse < 0) {
    cat1Number = (cat1 - mouse) * (-1) 
  }else{
    cat1Number = cat1 - mouse
  }
  if (  cat2 - mouse < 0) {
    cat2Number = (cat2 - mouse) * (-1) 
  }else{
  }cat2Number = cat2 - mouse

 
  if ( cat1Number  < cat2Number ){
     return 'cat1'

    }else if( cat2Number < cat1Number ){
    return 'cat2'

  }else if (cat1Number  == cat2Number) {
    return 'os gatos trombam e o rato foge'

   }
}

// Desafio 8
function fizzBuzz(numbers) {
   for (item in numbers)
    if (numbers[item] % 5 === 0 && numbers[item] % 3 === 0) {
       numbers[item] = 'fizzBuzz' 
      }else if (numbers[item] % 5 === 0) {
          numbers[item] = 'buzz'      
      }else if (numbers[item] % 3 === 0){
        numbers[item] = 'fizz'      
    }else if (numbers[item] % 5 !== 0 && numbers[item] % 3 !== 0) {
      numbers[item] = 'bug!'      
  }
 return numbers

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
