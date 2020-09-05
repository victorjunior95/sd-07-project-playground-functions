// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) return true
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(palavra) {
  return palavra.split(' ');
}

// Desafio 4
function concatName(palavras) {
  return `${palavras[palavras.length - 1]}, ${palavras[0]}`
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maior = numbers[0];
  let contador = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (maior === numbers[i]) contador += 1;
    if (maior < numbers[i]) {
      maior = numbers[i];
      contador = 0;
      i = 0;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) return 'cat1';
  else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(lista) {
  let fizzOrBuzz = [];
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i] % 15 === 0) fizzOrBuzz[i] = 'fizzBuzz';
    else if (lista[i] % 5 === 0) fizzOrBuzz[i] = 'buzz';
    else if (lista[i] % 3 === 0) fizzOrBuzz[i] = 'fizz';
    else fizzOrBuzz[i] = 'bug!';
  }
  return fizzOrBuzz;
}
function subistitui(palavra, isso, por) {
  for (let i = 0; i < por.length; i += 1) {
    for (let j = 0; j < palavra.length; j += 1) {
      palavra = palavra.replace(isso[i], por[i])
    }
  }
  return palavra;
}
// Desafio 9
function encode(word) {
  let isso = ['a', 'e', 'i', 'o', 'u'];
  let por = ['1', '2', '3', '4', '5']
  return subistitui(word, isso, por)
}

function decode(word) {
  let isso = ['1', '2', '3', '4', '5'];
  let por = ['a', 'e', 'i', 'o', 'u'];
  return subistitui(word, isso, por)
}

// Desafio 10
function techList(tech, name) {
  tech = tech.sort();
  let lista = [];
  if (tech === 0) return 'Vazio!';
  if (tech.length === 0) return 'Vazio!';
  for (let i = 0; i < tech.length; i += 1) {
    lista[i] = { tech: tech[i], name };
  }
  return lista;
}

function contador(numero){
  let contagem = [0,0,0,0,0,0,0,0,0,0,0];
  if (numero.length !== 11) return false;
    for(let i = 0; i < numero.length; i += 1) {
      contagem[numero[i]] += 1;
      if (contagem[numero[i]] > 3) return false;     
    }
    return true
  
}

let  numero = [-5,3,4,5,6,7,8,9,1,2,33]
console.log(contador(numero));
// Desafio 11
function generatePhoneNumber(numero) {
  if ((numero < 0) && (numero > 10)){
  for(let i = 0; i < numero.length; i += 1){
   
  }
}
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
