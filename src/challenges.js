// Desafio 1
function compareTrue(param, param1) {
  // Função opedor de lógico 
  if(param === true && param1 === true) {
    return true;
  }else {
    return false; 
  }
}

// Desafio 2
function calcArea(base, height) {
// Função que calcula a área
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(text) {
  // Função separa frases em palavras
  let result = text.split(' ');

  return result;
}

// Desafio 4
function concatName(strArray) {
  // Função concatena 2 stings
  let concStr = [...strArray].shift();
  let concStr2 = [...strArray].pop();
  return `${concStr2}, ${concStr}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let victory = 0;
  let scoreTies = 0
  for (let i = 0; i < wins; i+=1){
      victory += 3;
  }
  for (let i = 0; i < ties; i +=1){
      scoreTies +=1
  }
  let points = scoreTies + victory;

  return `${points}`;
}

// Desafio 6
//Função descobre qual maior numero do array e conta quantas vezes ele se repete dentro do mesmo.
function highestCount(numbers) {
  let bigNumber = Math.max.apply(null, numbers)//Maior numero 
  let numberRepeat = 0;
  for (let i in numbers) {//verifica ocorrencias
     if (bigNumber === numbers[i]) {
       numberRepeat++;
         }
     }
     return numberRepeat;
}
    
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let distance = mouse - cat1;
  let distance2 = mouse-cat2;
  if(Math.sign(distance) == 1 && Math.sign(distance2) == 1 || Math.sign(distance) == 0 && Math.sign(distance2) == 0 ){
      if (distance < distance2) {
          return "cat1";
      }else if (distance == distance2) {
          console.log("os gatos trombam e o rato foge")
      }else {
          return "cat2";
      }
  }else{
      if (distance > distance2) {
          return "cat1";
      }else if (distance == distance2) {
          console.log("os gatos trombam e o rato foge")
      }else {
          return "cat2";
      }
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
