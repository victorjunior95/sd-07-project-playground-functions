
function compareTrue(boole1,boole2) {
  if (boole1 && boole2 === true)
    return true
  else {
    return false
  }
}

function calcArea(base,height) {
    let areaResult = (base * height) / 2
    return areaResult
  }

function splitSentence(frase) {
 let array = frase.split(' ')
 return array
}

array = ['Trybe','programação','liberdade','dinheiro']

function concatName(array) {
  let trocaString = (array[array.length - 1] + ', ' + array[0])
  return trocaString
}

function footballPoints(wins, ties) {
  let Points = (3 * wins) + ties
  return Points
}


// Desafio 6

numbers = [9,5,7,5,9,8,9,1,2,4]

function highestCount(numbers) {
  let maior = numbers[0]
  repeticoes = {}
  for(let i = 0;i < numbers.length;i += 1){
    const elemento = numbers[i]
    if(repeticoes[elemento]) {
      repeticoes[elemento] += 1
    } else {
      repeticoes[elemento] = 1
    }
    if (maior < elemento) {
      maior = elemento
    } 
  }  
  return repeticoes[maior]
}
  

let resultado = highestCount(numbers)
console.log(resultado)



// Desafio 7



function catAndMouse(mouse, cat1, cat2) {
  const dist1 = mouse - cat1
  const dist2 = mouse - cat2
  if ( dist1 < dist2 ) {
    return 'cat1'
  } else if ( dist1 > dist2 ) {
    return 'cat2'
  }else {
    return 'os gatos trombam e o rato foge'
    
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
