// Desafio 1
function compareTrue(bool1, bool2) {

  if(bool1 === true && bool2===true){
    
    return true;
      
  }else{

    return false;
  }

}

// Desafio 2
function calcArea(base, height) {
  
  return (base * height)/2
}

// Desafio 3
function splitSentence(str) {
  let resp;
  
  resp= str.split(" "); // retira o espaço e retorna o resto em um array
  return resp;
}

// Desafio 4
function concatName(array) {
  let first;
  let last;
  let resp=" ";
  

   first= array[0];
   last = array[array.length-1];

   resp= last + ", " + first;
   console.log(resp);
  

}
let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
concatName(array);

// Desafio 5
function footballPoints(wins, ties) {

let resp = wins *3 + ties;

    return resp;
  
}



// Desafio 6
function highestCount(array) { 
  let resp =0;
  let maior= array[0];

  for(let i=0; i < array.length; i+= 1){
      
      if(maior < array[i+1]){

         maior = array[i+1];
      }
      
  }
  
  for(let i=0; i < array.length; i+= 1){
      
    if(maior === array[i]){

       resp = resp += 1;
    }
    
  }
  return resp;
  
}



// Desafio 7
function catAndMouse() {
  // seu código aqui
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
 
