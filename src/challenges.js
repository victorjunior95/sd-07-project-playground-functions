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
function footballPoints(wins, ties) {
  let valorTotalVitoria = wins;
  let valorTotalEmpates = ties;
  let valorDePontosVitoria = valorTotalVitoria * 3;
  let valorDePontosEmpate = valorTotalEmpates * 1;
  let valorTotalPontos = valorDePontosVitoria + valorDePontosEmpate;
  return valorTotalPontos;
  
}

// Desafio 6
function highestCount(numeros) {
  let idcMaior = 0;
  for (let indice in numeros) {
    if (numeros[idcMaior] < numeros[indice]) {
      idcMaior = indice;
    }
  }
let contRepet = 0;
for(i in numeros){
    if (numeros[i] == numeros[idcMaior]){
        contRepet++;
    }
}
return contRepet;
}    

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positions = [];
  positions[0] = mouse;
  positions[1] = cat1;
  positions[2] = cat2;
  let result;
  let distanceAbs1;
  let distanceAbs2;
  distanceAbs1 = Math.abs(positions[0] - positions[1]);
  distanceAbs2 = Math.abs(positions[0] - positions[2]);
      if (distanceAbs1 == distanceAbs2) {
      return result = "os gatos trombam e o rato foge";
    }
    if (distanceAbs1 < distanceAbs2){
      result = "cat1";
      return result;
    }
    if (distanceAbs2 < distanceAbs1){
      result = 'cat2';
      return result;
    }

  }

// Desafio 8
function fizzBuzz(vetor) {
  let numeros = vetor
  let result = [];
  for (let i in numeros) {
  if(numeros[i] % 3 === 0 && numeros[i] % 5 === 0){
    result.push('fizzBuzz');
} else if(numeros[i] % 15 === 0){
    result.push('fizzBuzz');
} else if(numeros[i] % 5 === 0){
    result.push('buzz');
} else if(numeros[i] % 3 === 0){
    result.push('fizz');
} else if (numeros[i] % 3 !== 0 || numeros[i] % 5 !== 0){
    result.push('bug!');
} else {
  result.push('bug!');
}
}
return result;
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
