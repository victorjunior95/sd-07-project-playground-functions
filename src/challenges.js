// here go!
// Desafio 1
function compareTrue(a,b) {
  if (a === true && b === true) {
    return true;    
  } 
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
return (base * height)/2;
}

// Desafio 3
function splitSentence(aFrase) {
let aFraseArray = aFrase.split(' ');
return aFraseArray
}

// Desafio 4
function concatName(arraystrings) {
  let arrayFinal = ['',''];
  let countlen = arraystrings.length-1;
  arrayFinal[0] = arraystrings[countlen];
  arrayFinal[1] = arraystrings[0];
  return arrayFinal
}

// Desafio 5
function footballPoints(wins,ties) {
  return wins*3+ties
  }

// Desafio 6
function highestCount(arraynum) {
  let repmax = null
  let maiornum = null
  for (key in arraynum) {
    if (arraynum[key] > maiornum){
      maiornum = arraynum[key];
      repmax = 1;
    } else{
    if (maiornum == arraynum[key]){
      repmax += 1;
    }
    }

    }
  return repmax  
  }

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  ptscat1 = Math.abs(mouse - cat1);
  ptscat2 = Math.abs(mouse - cat2);
  if(ptscat1>ptscat2){
    return cat1
  } else {
    if (ptscat1 == ptscat2) {
    return  "os gatos trombam e o rato foge"
    } else {
      return cat2
    }
  }
}
// console.log(catAndMouse(15,10,20))

// Desafio 8
function fizzBuzz(arrayfizzbuzz) {
  let arrayfizzbuzzfinal = [];
  for ( key in arrayfizzbuzz) {
  if (arrayfizzbuzz[key] % 3 == 0 && arrayfizzbuzz[key] % 5 == 0) {
    arrayfizzbuzzfinal.push("fizzBuzz");
  } else{
    if (arrayfizzbuzz[key] % 3 == 0) {
      arrayfizzbuzzfinal.push("fizz");
    } else {
      if (arrayfizzbuzz[key] % 5 == 0) {
        arrayfizzbuzzfinal.push("buzz");
      } else {
        arrayfizzbuzzfinal.push("bug!");
      }
    }
  }
}
return arrayfizzbuzzfinal
}

console.log(fizzBuzz([3,5,15,30,2,4,60,80]))

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
