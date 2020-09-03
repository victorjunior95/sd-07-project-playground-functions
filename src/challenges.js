// Desafio 1
function compareTrue(a,b) {
  if( a == true && b == true){
    return  true;
  }
  else if (a == false && b == false){
    return false;
  }
  else if( a == true && b == false){
    return false;
  }
    else if( a == false && b == true){
    return false;
  }}


// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");}

// Desafio 4
function concatName(nomes) {
    cName = nomes;
    cName.splice(1, nomes.length-2 );
    return cName.reverse();}

// Desafio 5
function footballPoints(wins, ties) {
  wins = (wins * 3 );
  ties = (ties * 1 );
  return (wins + ties);}

// Desafio 6
function highestCount(maior) {
  let top   = maior[0];
  let count = 0;
    for(let i in maior){
      if (top < maior[i]){
          top = maior[i];
      }
    }
    for(let cnt in maior){
      if(top == maior[cnt]){
        count += 1
      }
    }
  return count;}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 && cat2 < mouse && cat1 != cat2){
    if((mouse - cat1) < (mouse - cat2)){
      return "cat1"
    }else if((mouse - cat2) < (mouse - cat1)){
      return "cat2";
    }
  }if(cat1 && cat2 > mouse && cat1 != cat2){
      if((mouse + cat1) < (mouse + cat2)){
        return "cat1"
      }else if((mouse + cat2) < (mouse + cat1)){
        return "cat2"
      }
  }if(cat1 == cat2){
    return "os gatos trombam e o rato foge"
  }}  

// Desafio 8
function fizzBuzz(numeros) {
  let multiplos = [];
  for(let n in numeros){
    if (numeros[n] % 3 ==0 && numeros[n] % 5 == 0){
      multiplos.push("fizzBuzz");
    }
    else if(numeros[n] % 5 == 0){
      multiplos.push("buzz");
    }
    else if(numeros[n] % 3 == 0 ){
      multiplos.push("fizz");
    }
    else{
      multiplos.push("bug!");
    }
  }
  return multiplos}

// Desafio 9
function encode(texto) {
  let vogais = {"a":1,"e":2,"i":3,"o":4,"u":5};
  let encod = texto;
  for(let letra in encod){
    for(let vog in vogais){
      if(encod[letra] != " "){
        if (encod[letra] == vog){
          encod = encod.replace(texto[letra],vogais[vog]);
        }
      }
    }
  }
  return encod;}

function decode(texto) {
  // seu código aqui
  let vogais = {1:"a",2:"e",3:"i",4:"o",5:"u"};
  let encod = texto;
  for(let letra in encod){
    for(let vog in vogais){
      if(encod[letra] != " "){
        if (encod[letra] == vog){
          encod = encod.replace(texto[letra],vogais[vog]);
        }
      }
    }
  }
  return encod;}

// Desafio 10
function techList(tecnologias, name) {
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
