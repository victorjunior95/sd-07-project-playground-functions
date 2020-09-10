// Desafio 1
function compareTrue(bool1 , bool2) {
  // seu código aqui
  if (bool1 === true && bool2===true) {
    return true
  }
  else {
    return false
  }

}

// Desafio 2
function calcArea(base , height) {
  // seu código aqui
 
  let area = (base * height)/2;
  return area;

}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(" ");
  return array;


}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = array[array.length -1] + ", " + array[0] ;
  return string;
}

// Desafio 5
function footballPoints(wins , ties ) {
  // seu código aqui
  let points = (wins*3 + ties);
  return points;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let max = array[0]

  for (let i in array){
    if (array[i] > max){
    max = array[i]
  }
}
  let counter = 0
  for(let i in array) {
    if(max = array[i]){
    counter += 1
  }
}
  return counter
}

// Desafio 7
function catAndMouse(mouse , cat1 , cat2) {
  // seu código aqui
  let absoluteDistance1 = cat1 - mouse;
  if(absoluteDistance1 < 0 ) {
    absoluteDistance1 = -1*absoluteDistance1
  }
  let absoluteDistance2 = cat2 - mouse;
  if(absoluteDistance2 < 0 ) {
    absoluteDistance2 = -1*absoluteDistance2
  }

  if(absoluteDistance1 > absoluteDistance2) {
    return "cat2";
  }
  else if(absoluteDistance2 > absoluteDistance1) {
    return "cat1";
  }
  else if (absoluteDistance1 === absoluteDistance2) {
    return "os gatos trombam e o rato foge";
  }

}
// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resultArray = []
  for (let index in array) {
    if(array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultArray.push("fizzbuzz")
    }
    else if (array[index] % 3 ===0 ) {
      resultArray.push("fizz")
    }
    else if (array[index] % 5 ===0 ) {
      resultArray.push("buzz")
    }
    else {
      resultArray.push("Bug!")
    }
}
return resultArray;
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
