// Desafio 1
function compareTrue(bol1, bol2) {
 let boolean = bol1 && bol2;
 return boolean;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height)/ 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(palavra) {
  let splits = palavra.split(' ');
  return splits;
}

// Desafio 4
function concatName(nomes) {
  let nomeArray = nomes;
  let result = [];
  for (let i in nomes){
    nomeArray.splice(i + 1, nomes.length - 2);
  }
  for (let j = nomeArray.length - 1; j >= 0; j -= 1){
    result.push(nomeArray[j]);
  }
  return result.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins;
  let empate = ties;
  if (vitoria > 0) {
    vitoria = vitoria * 3;
  }
  let result = vitoria + empate;
  return result;
}

// Desafio 6
function highestCount(repeat) {
  let array = repeat;
  let maior = 0;
  let count = 0;
  for (let i of array){
    if (i > maior) {
      maior = i;
    }   
  }
  for (let j of array) {
    if (maior === j) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rato = mouse;
  let gato1 = cat1;
  let gato2 = cat2;
  let distancia1 = 0;
  let distancia2 = 0;
  let result = "";
  if (rato > gato1 && rato > gato2) {
    distancia1 = rato - gato1;
    distancia2 = rato - gato2;
  }else if (rato <= gato1 || rato <= gato2) {
    distancia1 = gato1;
    distancia2 = gato2;
  }
  if (distancia1 > distancia2) {
    result = "cat2";
  }else if (distancia1 < distancia2){
    result = "cat1";
  }else if (distancia1 === distancia2) {
    result = "os gatos trombam e o rato foge";
  }
  return result;
}

// Desafio 8
function fizzBuzz(num) {
  let numbers = num;
  let palavra = "";
  let result = [];
  for(let i of numbers) {
    if (i % 3 === 0 && i % 5 !== 0){
      palavra = "fizz";
      result.push(palavra);
    }else if (i % 5 === 0 && i % 3 !== 0){
      palavra = "buzz";
      result.push(palavra);
    }else if (i % 3 === 0 && i % 5 === 0){
      palavra = "fizzBuzz";
      result.push(palavra);
    }else if (i % 3 !== 0 && i % 5 !== 0) {
      palavra = "bug!";
      result.push(palavra);
    }
  }
  return result;
}

// Desafio 9
function encode(palavras) {
  let vogais = {
    a : 1,
    e : 2,
    i : 3,
    o : 4,
    u : 5
  }
  let frase = palavras;
  let igual = [];
  for (let j = 0; j < frase.length; j += 1) {
    igual.push(frase[j]);
  }
  for (let key in vogais) {
    for (let j = 0; j < igual.length; j += 1) {
      if (key === igual[j]) {
        igual[j] = vogais[key];
      }
    }
  }
  return igual.join('');
}

function decode(palavras) {
  let vogais = {
    1 : 'a',
    2 : 'e',
    3 : 'i',
    4 : 'o',
    5 : 'u'
  }
  let frase = palavras;
  let igual = [];
  for (let j = 0; j < frase.length; j += 1) {
    igual.push(frase[j]);
  }
  for (let key in vogais) {
    for (let j = 0; j < igual.length; j += 1) {
      if (key === igual[j]) {
        igual[j] = vogais[key];
      }
    }
  }
  return igual.join('');
}

// Desafio 10
function techList(tech, name) {
  let stack = tech;
  let nome = name;
  let result = [];
  for (let valor of stack){
    let objeto = {
      tech: valor,
      name: nome
    }
    result.push(objeto);
  }
  return result;
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
