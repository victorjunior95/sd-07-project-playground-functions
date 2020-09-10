// Desafio 1
function compareTrue(a, b) {
  let compare = a && b;
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let trianguloArea = ((base * height) / 2);
  return trianguloArea;
}

// Desafio 3
function splitSentence(frase) {
  let aPalavras = frase.split(' ');
  return aPalavras;
}

// Desafio 4
function concatName(nomes) {
  let tamanho = nomes[nomes.length -1] + `, ` + nomes[0];
  return tamanho;
}

// Desafio 5
function footballPoints(wins, ties ) {
  pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let repete = 0;
  let maiorNum = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maiorNum) {
      maiorNum = numeros[i];
      repete = 1;
    } else if (numeros[i] === maiorNum) {
      repete += 1;
    }
  }
  return repete;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let retorno ='';
  if ((mouse - cat1) < (mouse - cat2)) {
    retorno = "cat1";
  } else if ((mouse - cat1) > (mouse - cat2)) {
    retorno = "cat2";
  } else {
    retorno = "os gatos trombam e o rato foge";
  }
  return retorno;
}
// Desafio 8
function fizzBuzz(numeros) {
  let resultado = [];
  let valor = '';
  for(let i=0; i < numeros.length; i += 1){
    if( (numeros[i] % 3 === 0) && (numeros[i] % 5 === 0)){
      valor = 'fizzBuzz';
    }else if(numeros[i] % 3 === 0){
      valor = 'fizz';
    }else if(numeros[i] % 5 === 0){
      valor = 'buzz';
    }else{
      valor = 'bug!'
    }
    resultado.push(valor);
    valor = '';
  }
  return resultado;
}

// Desafio 9
function encode(frase) {
  let fraseResultante = frase.replace(/a/g, '1');
  fraseResultante = fraseResultante.replace(/e/g, '2');
  fraseResultante = fraseResultante.replace(/i/g, '3');
  fraseResultante = fraseResultante.replace(/o/g, '4');
  fraseResultante = fraseResultante.replace(/u/g, '5');
  return fraseResultante;
}
function decode(frase) {
  let fraseResultante = frase.replace(/1/g, 'a');
  fraseResultante = fraseResultante.replace(/2/g, 'e');
  fraseResultante = fraseResultante.replace(/3/g, 'i');
  fraseResultante = fraseResultante.replace(/4/g, 'o');
  fraseResultante = fraseResultante.replace(/5/g, 'u');
  return fraseResultante;
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(vetor, name) {


  const vetorOrdenado = vetor.sort();
  let resultado = [];

  if(vetor.length === 0){
    return "Vazio!";
  }

  for (const key in vetorOrdenado) {
    let objeto = {
      tech: vetorOrdenado[key],
      name: name
    }

    resultado.push(objeto);
  }

  return resultado;
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
