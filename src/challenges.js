// Desafio 1
function compareTrue(var1, var2) {
  if(var1 && var2){
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length-1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3+ties;
}

// Desafio 6
function highestCount(arrayn) {
  let maior = 0;
  let counter = 0;
  for(let i=0; i<arrayn.length; i+=1){
    if(arrayn[i] > maior){
      maior = arrayn[i];
    }    
  }
  for(let u=0; u<arrayn.length; u+=1){
    if(arrayn[u] === maior){
      counter += 1;
    }    
  }
  return counter;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(mouse - cat1)>Math.abs(mouse - cat2)){
    return 'cat2';
  }
  if(Math.abs(mouse - cat1)<Math.abs(mouse - cat2)){
    return 'cat1';
  }
  return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(array) {
  let fbarray = [];
  for(let i=0; i<array.length; i+=1){
    if(array[i]%3===0 && array[i]%5===0){
      fbarray.push("fizzBuzz");
    }else{
      if(array[i]%3===0){
        fbarray.push("fizz");
      }else{
        if(array[i]%5===0){
          fbarray.push("buzz");
        }else{
          fbarray.push("bug!");
        }
      }
    }
  }
  return fbarray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(frase) {
  const list = {a:1, e:2, i:3, o:4, u:5};
  let arrayfrase = frase.split('');
  for (const key in arrayfrase) {
    for (const keylist in list) {
      if(arrayfrase[key] == keylist){
        arrayfrase[key] = list[keylist];
      }
    }
  }
  return arrayfrase.join('');
}

function decode(frase) {
  let arrayfrase = frase.split('');
  for (const key in arrayfrase) {
    switch (arrayfrase[key]) {
      case '1':
        arrayfrase[key] = 'a';
        break;
      case '2':
        arrayfrase[key] = 'e';
        break;
      case '3':
        arrayfrase[key] = 'i';
        break;
      case '4':
        arrayfrase[key] = 'o';
        break;
      case '5':
        arrayfrase[key] = 'u';
        break;
    
      default:
        break;
    }
  }
  return arrayfrase.join('');
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
