// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}


function splitSentence(palavra) {
  let array = [];
  for (key in palavra) {
    if (palavra[key] === " ") {
      array.push(palavra[key])
    }
  }
  return array
}
console.log(splitSentence("Guilherme Almeida"))
// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3
  return wins + ties

}


// Desafio 6
function highestCount(numeros) {
  let maiorNumero = 0;
  for (let i = 0; i < numeros.length; i += 1) {

    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i]

    }
  }
  let repeti = 0;
  for (let j = 0; j < numeros.length; j += 1) {
    if (numeros[j] === maiorNumero) {
      repeti += 1
    }


  }
  return repeti
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciacat1=0;
  let distanciacat2=0;
  if(cat1 > mouse){
      distanciacat1 = cat1 - mouse
  }
  if(cat2 > mouse){
      distanciacat2 = cat2 - mouse 
  } 
   if(mouse > cat1){
     distanciacat1 =  mouse - cat1
  } 
  if(mouse > cat2){
     distanciacat2 =  mouse - cat2
  }
  
  if (distanciacat1 < distanciacat2) {
    return "cat1"
  } else if(distanciacat2 < distanciacat1){
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
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
