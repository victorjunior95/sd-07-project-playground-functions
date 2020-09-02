// Desafio 1
function compareTrue(a,b) {
  if( a === true && b === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height){
  return calcArea = (base*height)/2; 
}

// Desafio 3
function splitSentence(a) {
  let splitSentence = a.split(" ");
   return splitSentence
}

// Desafio 4
function concatName(array) {
  let n = array.length -1;
    let a = array[n]; 
    let b = array[0]
    return concatName = (`${a}, ${b}`)
}

// Desafio 5
function footballPoints(wins,ties) {
  return footballPoints = (wins*3+ties)
}

// Desafio 6
function highestCount(arr) {
     
  let newarr = arr.sort();
  let maior = arr[arr.length -1];
  let cont = 0;
  for (var i = 0, j = arr.length; i < j; i++){
      if(arr[i] == maior){
          cont += 1;
      }    
 }
 return cont;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  
  if( (cat1-mouse) == (cat2-mouse) ){
    return "os gatos trombam e o rato foge"
} else if( (cat1-mouse) > (cat2-mouse) ){
   return "cat2"
} else if ( (cat1-mouse) < (cat2-mouse) ){
   return "cat1"
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
