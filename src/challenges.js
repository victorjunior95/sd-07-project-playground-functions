// Desafio 1
function compareTrue(val1,val2) {
  if(val1 && val2){
      return (true);
  }else{
      return (false);
  }
}

// Desafio 2
function calcArea(base,height) {
  return(base *height/2)
}

// Desafio 3
function splitSentence (frase) {
  let copia = frase;
  let partida =[];
  let indice =0;

  for (let i=0;i<copia.length;i+=1){

      if (i==0){
          partida[indice] = copia[i]

      }   else if (copia[i] !== ' '){
          partida[indice] = partida[indice] + copia[i]

      }   else{
          indice +=1;
          i+=1;
          partida[indice] =  copia[i]
          
          ;
      
      }
  }
  console.log (partida);
  return (partida);
}

// Desafio 4
function concatName(array) {
  let saida =[];
  saida.push (array[array.length-1]);
  saida.push (array[0]);
  return (saida)
}

// Desafio 5
function footballPoints (wins,ties){
  return (wins*3 + ties);
}

// Desafio 6
function highestCount (array) {
  let maior =array[0];
  let contador =0;
  for (let i=0;i<array.length;i+=1){
      if (array[i]>maior){
          maior = array[i]
      }
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
