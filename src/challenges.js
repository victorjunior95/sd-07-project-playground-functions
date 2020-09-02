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

//console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(arg) {
  arg = arg.replace(/a/g, '1');
  arg = arg.replace(/e/g, '2');
  arg = arg.replace(/i/g, '3');
  arg = arg.replace(/o/g, '4');
  arg = arg.replace(/u/g, '5');
  return arg;
}

function decode(arg) {
  arg = arg.replace(/1/g, 'a');
  arg = arg.replace(/2/g, 'e');
  arg = arg.replace(/3/g, 'i');
  arg = arg.replace(/4/g, 'o');
  arg = arg.replace(/5/g, 'u');
  return arg;
}

//console.log(encode("hi there!"));
//console.log(decode("h3 th2r2!"));

// Desafio 10
function techList(techArray, name) {
  if (techArray.length ===0 ) {
    return `Vazio!`;
  };

  let resultArray = [];
  techArray.sort();
  for (let techName of techArray) {
    let resultObject = {
      tech: techName,
      name : `${name}`,
    };
    resultArray.push(resultObject);
  };
  return resultArray;
}
//console.log(techList([],"Lucas"));
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));

// Desafio 11
function generatePhoneNumber(numberArray) {
  //check length
  if (numberArray.length !== 11){
    return `Array com tamanho incorreto.`;
  };
  //check rule < 0 OR > 9
  for(let number of numberArray) {
    if (number < 0 || number > 9) {
      return `não é possível gerar um número de telefone com esses valores`;
    };
  };
  //chek rule repeat 3 times or more
  let numberArraySorted = numberArray.slice(0);
  numberArraySorted.sort(function(a, b){return a - b});
  for (let i = 0; i <= 8; i+= 1) {
    if (numberArraySorted[i] === numberArraySorted[i+2]) {
      return `não é possível gerar um número de telefone com esses valores`; 
    };
  };

  //format number
  return `(${numberArray.slice(0,2).join(``)}) ${numberArray.slice(2,7).join(``)}-${numberArray.slice(7).join(``)}`;

}

//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 1, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  //check lineA
  let checkA = (lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC));
  //check lineB
  let checkB = (lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC));
  //check lineC
  let checkC = (lineC < (lineB + lineA)) && (lineC > Math.abs(lineB - lineA));

  return checkA && checkB && checkC;
}

console.log(triangleCheck(10,14,1));

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
