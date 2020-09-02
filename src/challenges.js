// Desafio 1
function compareTrue(arg1, arg2) {
  let valor = true;
  if(arg1 && arg2) {
      return valor;
  } else {
      valor = false;
      return valor;
  }
}


// Desafio 2
function calcArea(base, height) {
  let solido = base;
    let altura = height;
    let ponder = "Valores indefinidos";
    let area = 0;
    if (solido == false || altura == false){
        return ponder;
    } else {
        return area = (solido*altura)/2;

    }
}

// Desafio 3
function splitSentence(frase) {
    let vetor = frase.split(' ');
    for (i in vetor);
        vetor.unshift();
        return vetor;
}  


// Desafio 4
function concatName(vetor) {
  let armazem = {};
  let ultimoItem = vetor.length - 1;
  armazem.ultimoItem1 = vetor[ultimoItem];
  armazem.primeiroItem = vetor[0];
  return armazem.ultimoItem1 + ', ' + armazem.primeiroItem; 
  
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
