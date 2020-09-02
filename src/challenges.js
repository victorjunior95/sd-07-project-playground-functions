// Desafio 1
//Considerando isso, crie uma função chamada compareTrue que, ao receber dois booleanos:

//Retorne true se ambos os valores são verdadeiros;
//Retorne false se um ou ambos os parâmetros forem falsos.

let bool1 = true;
let bool2 = false;
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true){
    return true;
  } else {
    return false;
  }
}
let function1 = compareTrue(bool1, bool2);
console.log(function1);

// Desafio 2
//Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.

let base = 3;
let height = 5;
function calcArea(base, height) {
  return (base*height)/2;  
}
let area = calcArea(base, height);
console.log(area);

// Desafio 3
//Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.

let frase = 'vamo que vamo';
function splitSentence(frase) {
  return frase.split(' ');
}
let arrayDePalavras = splitSentence(frase);
console.log(arrayDePalavras);

// Desafio 4
//Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.

function concatName(arrayDeStrings) {
  let stringFinal = arrayDeStrings[arrayDeStrings.length - 1] + ", " + arrayDeStrings[0];
  return stringFinal
}
let stringUltimoPrimeiro = concatName(['Brenda', 'Richard', 'Kiara', 'Saphira']);
console.log(stringUltimoPrimeiro);

// Desafio 5
//Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.

//Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

let resultadoCampeonato = footballPoints(3, 5);
console.log(resultadoCampeonato);

// Desafio 6
//Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.

function highestCount(numeros) {
  let maiorNumero = Math.max.apply(null, numeros);
  let contador = 0;
  for (i = 0; i < numeros.length; i += 1) {
    if (numeros[i] == maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

let quantidadeMaiorNumero = highestCount([1, 3, 15, 4, 15, 8, 15, 6]);
console.log(quantidadeMaiorNumero);

// Desafio 7
//Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão atrás de um rato chamado mouse. Imagine que cada um dos três animais está em uma posição representada por um número.

//Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).
//Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1";
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return "cat2";
  } else if (Math.abs(cat1 - mouse) == Math.abs(cat2 - mouse)){
    return "os gatos trombam e o rato foge";
  }
  }
  let resultadoCaptura = catAndMouse(1, 4, 4);
  console.log(resultadoCaptura);

// Desafio 8
//Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

//Para cada número da Array que seja divisível apenas por 3, apresente uma string "fizz";
//Para cada número da Array que seja divisível apenas por 5, apresente uma string "buzz";
//Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
//Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";

function fizzBuzz(numerosFB) {
  let arrayFizzBuzz = [];
  for (i = 0; i < numerosFB.length; i += 1) {
    if (numerosFB[i] % 3 == 0 && numerosFB[i] % 5 == 0) {
      arrayFizzBuzz.push("fizzBuzz");
    } else if (numerosFB[i] % 3 == 0) {
      arrayFizzBuzz.push("fizz");
    } else if (numerosFB[i] % 5 == 0) {
      arrayFizzBuzz.push("buzz");
    } else {
      arrayFizzBuzz.push("bug!");
    }
  }
  return arrayFizzBuzz;
}
let testeFizzBuzz = fizzBuzz([3, 8, 6, 5, 25, 7, 15, 24]);
console.log(testeFizzBuzz);


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
