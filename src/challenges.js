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
/* Escreva uma função chamada highestCount que, ao receber uma matriz de números, retorne a quantidade de vezes que o maior deles se repete.

Exemplo: caso o parâmetro de highestCount seja uma matriz com valores [9, 1, 2, 3, 9, 5, 7], uma função deve retornar 2, que é a quantidade de vezes que o número 9(maior número da matriz) se repete. */
function highestCount(array) {
  // organizar em ordem
  let order = array.sort();
  // descobrir o maior
  let highNumber = order[order.length - 1];
  // quantas vezes se repete
  let counter = 0;
  for (i = 0; i < order.length; i +=1) {
    if (order[i] == highNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
/* Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão atrás de um rato chamado mouse. Imagine que cada um dos três animais está em uma posição representada por um número.

Sabendo disso, crie uma função chamada catAndMouseque, ao receber a posição de mouse, cat1 e cat2, nessa ordem , calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).

Exemplo: caso o gato cat2 está a 2 unidades de distância do rato, e cat1 está a 3 unidades, sua função deve retornar cat2.

Caso os gatos estejam na mesma distância do rato, a função deve retornar uma string "os gatos trombam e o rato foge". */
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = math.abs(cat1 - mouse);
  let distanceCat2 = math.abs(cat2 - mouse);
  if (distanceCat1 < distanceCat2) {
    return "cat1";
  } else if (distanceCat1 > distanceCat2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
/* Crie uma função chamada fizzBuzzque receba uma matriz de números e retorne uma matriz da seguinte forma:

Para cada número da Array que seja divisível apenas por 3, apresente uma string "fizz";
Para cada número da Array que seja divisível apenas por 5, apresente uma string "buzz";
Caso o número seja divisível por 3 e 5, retorne uma string "fizzBuzz";
Caso o número não possa ser dividido por 3 nem por 5, retorne uma string "bug!";
Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deve retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]. */
function fizzBuzz(array) {
  let aux = [];

  for (i = 0; i < array.length; i += 1) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      aux.push("fizzBuzz");
    } else if (array[i] % 3 == 0) {
      aux.push("fizz");
    } else if (array[i] % 5 == 0) {
      aux.push("buzz");
    } else {
      aux.push("bug!");
    }
  }

  return aux;
}

// Desafio 9
/* Crie duas funções: a primeira deve se chamar encode e, ao receber uma string como parâmetro, deve trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

Ou seja, caso o parâmetro de encodeseja "hi there!", o retorno deve ser "h3 th2r2!".

A segunda função deve se chamar decode e fazer o contrário de encode- ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deve ser "hi there!") . */
function encode(string) {
  let newString = string.replace(/a/gi, "1");
    newString = string.replace(/e/gi, "2");
    newString = string.replace(/i/gi, "3");
    newString = string.replace(/o/gi, "4");
    newString = string.replace(/u/gi, "5");
  return newString;
}
function decode(newString) {
  let originalString = newString.replace(/1/g, "a");
    originalString = newString.replace(/2/g, "b");
    originalString = newString.replace(/3/g, "c");
    originalString = newString.replace(/4/g, "d");
    originalString = newString.replace(/5/g, "e");
  return originalString;
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
