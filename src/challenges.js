// Desafio 1
/*JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são verdadeiros, e retorna false se algum dos valores não o for.

Considerando isso, crie uma função chamada compareTrue que, ao receber dois booleanos:

Retorne true se ambos os valores são verdadeiros;
Retorne false se um ou ambos os parâmetros forem falsos.
Faça a função utilizando o operador &&.*/
// let a = true;
// let b = true;

function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// compareTrue(a, b);

// Desafio 2
/*Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.

Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.*/
// let base = 4;
// let height = 5;

function calcArea(base, height) {
  let calculate = (base * height) / 2;
  return calculate;
}

// calcArea(base, height);

// Desafio 3
/* Escreva uma função com o nome splitSentence, um qual receberá uma string e retornará uma matriz de strings separada por cada espaço na string original.

Exemplo: se uma função receber uma string "go Trybe", o retorno deve ser ['go', 'Trybe'].*/
// let string = "go Trybe"

function splitSentence(string) {
  let stringSplit = string.split(" ");
  return stringSplit;
}

// Desafio 4
/* Escreva uma função com o nome concatName que, ao receber uma matriz de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da matriz.

Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deve retornar Paolillo, Lucas. */
function concatName(array) {
  let firstName = array[0];
  let lastName = array[array.length - 1];
  return `${lastName}, ${firstName}`;
}

// Desafio 5
/* Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deve se chamar wins) e o número de empates (esse parâmetro deve se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.

Para tanto, considerar que cada vitória vale 3 pontos e cada empate vale 1 ponto. */
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// // Desafio 6
/* Escreva uma função chamada highestCountque, ao receber uma matriz de números, retorne a quantidade de vezes que o maior deles se repete.

Exemplo: caso o parâmetro de highestCountseja uma matriz com valores [9, 1, 2, 3, 9, 5, 7], uma função deve retornar 2, que é a quantidade de vezes que o número 9(maior número da matriz) se repete. */
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
