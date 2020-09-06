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
function encode(phrase) {
  let codigo = phrase.split('');
  for(let i in codigo){
    if (codigo[i] === 'a') {
      codigo.splice(i, 1, '1');
    } else if (codigo[i] === 'e') {
      codigo.splice(i, 1, '2');
    } else if (codigo[i] === 'i') {
      codigo.splice(i, 1, '3');
    } else if (codigo[i] === 'o') {
      codigo.splice(i, 1, '4');
    } else if (codigo[i] === 'u'){
      codigo.splice(i, 1, '5');
    }
  }
return codigo.join('');
}

function decode(phrase) {
  let decodigo = phrase.split('');
  for(let i in decodigo){
    if (decodigo[i] === '1') {
      decodigo.splice(i, 1, 'a');
    } else if (decodigo[i] === '2') {
      decodigo.splice(i, 1, 'e');
    } else if (decodigo[i] === '3') {
      decodigo.splice(i, 1, 'i');
    } else if (decodigo[i] === '4') {
      decodigo.splice(i, 1, 'o');
    } else if (decodigo[i] === '5'){
      decodigo.splice(i, 1, 'u');
    }
  }
return decodigo.join('');
}

// Desafio 10
function techList(vetor, name) {
  let result;
  let colecao = [];
    if(vetor.length < 1 || vetor == null || vetor == undefined) {
      result = 'Vazio!';
      return result;
    } else if(vetor !== null || vetor !== undefined){
      for(let i in vetor){
      let lista = {
        tech:vetor[i],
        name:name
      }
      colecao.push(lista);
    }
  }
  return colecao.sort(function(a,b){
    if(a.tech < b.tech) return -1;
    if(a.tech > b.tech) return 1;
    return 0;
  })
  }

// Desafio 11
function generatePhoneNumber(vetor) {
  let countRepeat = vetor.filter((e, i, a) => a.indexOf(e) !== i);
  let contagemReal = 0
  for(let i = 0; i < countRepeat.length; i += 1){
    if(countRepeat[i] === countRepeat[i+1] || countRepeat[i] === countRepeat[i+2]){
      contagemReal = 3;    
    }
  }
  let confere = 0;
  for (let i in vetor) {
      if (vetor[i] >  9 || vetor[i] < 0){
          confere++;
      }
  }
        if (vetor.length !== 11) {
        let result = "Array com tamanho incorreto.";
        return result;
      }
      if(contagemReal >= 3 || confere != 0) {
        let result1 = "não é possível gerar um número de telefone com esses valores";
        return result1;
  }     vetor.splice(0, 0, '(');
        vetor.splice(3, 0, ')');
        vetor.splice(4, 0, ' ');
        vetor.splice(10, 0, '-');
        return vetor.join('');
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
