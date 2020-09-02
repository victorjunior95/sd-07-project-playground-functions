// Desafio 1
function compareTrue(a,b) {
  if(a==b) return true;
  else return false;
}

// Desafio 2
function calcArea(base,height) {
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(frase) {
  let separador=" ";
  let palavra=frase.split(separador);
  return palavra;
}

// Desafio 4
function concatName(array) {
  return array[array.length-1]+", "+array[0];
}

// Desafio 5
function footballPoints(wins,ties) {
  return (3*wins+ties);
}

// Desafio 6
function highestCount(array) {
  let maior=0;
  let contador=0;
  for(let i=0;i<array.length;i+=1){
    if(maior<array[i]){
      maior=array[i];
    }
  }
  for(let i=0;i<array.length;i+=1){
    if(maior==array[i]){
      contador+=1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let dist1=0;
  let dist2=0;
  dist1 = Math.abs(mouse-cat1);
  dist2 = Math.abs(mouse-cat2);
  if(dist1==dist2){
    return "os gatos trombam e o rato foge";
  }else if(dist1<dist2){
    return "cat1";
  }else{return "cat2";}
}

// Desafio 8
function fizzBuzz(array) {
  let armazena = [];
  for(let i=0;i<array.length;i+=1){
    if((array[i]%3)==0 && (array[i]%5)==0){
      armazena[i]="fizzBuzz";
    }else if((array[i]%3)==0){
      armazena[i]="fizz";
    }else if((array[i]%5)==0){
      armazena[i]="buzz";
    }else{
      armazena[i]="bug!";
    }
  }
  return armazena;
}

// Desafio 9
function encode(palavra) {
  palavra = palavra.replace(/a/g,1);
  palavra = palavra.replace(/e/g,2);
  palavra = palavra.replace(/i/g,3);
  palavra = palavra.replace(/o/g,4);
  palavra = palavra.replace(/u/g,5);
  return palavra;
}
let b =encode(a);

function decode(palavra) {
  palavra = palavra.replace(/1/g,"a");
  palavra = palavra.replace(/2/g,"e");
  palavra = palavra.replace(/3/g,"i");
  palavra = palavra.replace(/4/g,"o");
  palavra = palavra.replace(/5/g,"u");
  return palavra;
}

// Desafio 10
function techList(tecnologias,name) {
  // let info = [];
  // for(let i=0;i<tecnologias.length;i+=1){
  // }
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Bruno"));
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
