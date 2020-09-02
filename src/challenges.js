// Desafio 1
function compareTrue(arg1, arg2) {
  return (arg1 && arg2);
}

//console.log(compareTrue(false,false));

// Desafio 2
function calcArea(base, height) {
  return (base*height) / 2 ;
}

//console.log(calcArea(10,5));

// Desafio 3
function splitSentence(arg) {
  return arg.split(` `);
}

//console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(names) {
  return `${names[names.length-1]}, ${names[0]}`;
}

//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

//console.log(footballPoints(10 ,5));

// Desafio 6
function highestCount(array) {
  //sort array
  array.sort(function(a, b){return b - a});
  //count highest number
  let countHighest = 1;
  for (i= 1; array[i-1] === array[i]; i +=1 ) {
    countHighest +=1;
  };
  return countHighest;
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 9]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let pathCat1 = Math.abs(mouse-cat1);
  let pathCat2 = Math.abs(mouse-cat2);
  if (pathCat1 < pathCat2) {
    return `cat1`;
  } else if (pathCat1 > pathCat2) {
    return `cat2`;
  } else {
    return `os gatos trombam e o rato foge`;
  };
}

//console.log(catAndMouse(5, -2, 10));

// Desafio 8
function fizzBuzz(numArray) {
  let result = [];
  for(let num of numArray) {
    if (num%3===0 && num%5===0) {
      result.push(`fizzBuzz`);
    } else if (num%3===0) {
      result.push(`fizz`);
    } else if (num%5===0) {
      result.push(`buzz`);
    } else {
      result.push(`bug!`);
    };
  };
  return result;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
