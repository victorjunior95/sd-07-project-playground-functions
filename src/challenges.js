// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 == true && value2 == true){
    return true;
  }
  return false;

}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base*height)/2;

}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(" ");

}

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  return `${stringArray[stringArray.length - 1]}, ${stringArray[0]}}`;

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins*3 + ties*1);

}

// Desafio 6
function highestCount(Array) {
  // seu código aqui
  let uniqueKeys = Array.keys()
  let index = {};
  let greaterValue = 0;
  for (let key of uniqueKeys) {
      let cont = 0;
      for(let chaves in Array){
          if(Array[chaves] == key){
              cont += 1;

          }
      }
      if(cont>greaterValue){
          greaterValue =  cont;

      }

      index[key]=cont;

  }
  return console.log(greaterValue);

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if(cat1 > cat2){
    return cat2;

  }
  else if (cat2 > cat1){
    return cat1;
  }
  else {
    return 'os gatos trombam e o rato foge';
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
