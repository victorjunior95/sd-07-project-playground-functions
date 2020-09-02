// Desafio 1
function compareTrue(n1, n2) {
  // seu código aqui
  if(n1 && n2){
    return true;
  } else {
    return false;
  }
  
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height)/2;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let firstItem = array[0];
  let lastItem = array[array.length - 1];

  return `${lastItem}, ${firstItem}`
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winPoints = wins * 3;
  let tiePoints = ties * 1;
  let points = winPoints + tiePoints;

  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let catOne = Math.abs(cat1 - mouse);
  let catTwo = Math.abs(cat2 - mouse);
  if(catOne < catTwo){
    return 'cat1';
  } else if(catOne > catTwo){
    return 'cat2';
  } else {
    return `os gatos trombam e o rato foge`;
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let arrayStrings = [];
  for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] % 3 == 0 && numbers[i] % 5 != 0){
      arrayStrings.push('fizz') ;
    } else if (numbers[i] % 3 != 0 && numbers[i] % 5 == 0){
      arrayStrings.push('buzz');    
    } else if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0){
      arrayStrings.push('fizzBuzz');
    } else {
      arrayStrings.push('bug!');
    }
  }
  return arrayStrings;
}

// Desafio 9
function encode() {
  // seu código aqui  
}
function decode() {
  // seu código aqui
}

// Desafio 10

function techList(tec, name) {
  // seu código aqui
  let tecnos = tec.sort();
  let tecnologies = []; 
  if(tec.length > 0){
    for(i = 0; i < tecnos.length; i += 1){
      tecnologies.push({tech: tec[i], name: name})
    }
  } else {
    return 'Vazio!'
  }
  return tecnologies;
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
