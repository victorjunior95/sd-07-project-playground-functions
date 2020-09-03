// Desafio 1
function compareTrue(valorA,valorB) {
    // seu código aqui
    /* 1 - Usando o operador &&
  JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna 
  true 
  se ambos os valores são verdadeiros, e retorna 
  false se algum dos valores não o for.

  Considerando isso, crie uma função chamada compareTrue que, ao receber dois 
  booleanos:

  Retorne true se ambos os valores são verdadeiros;
  Retorne false se um ou ambos os parâmetros forem falsos.
  Faça a função utilizando o operador &&.*/

  if (valorA === true && valorB === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigh) {
  // seu código aqui
  /* 2 - Área do triângulo
Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e 
outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.

Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: 
(base * altura) / 2. */

  let area = (base * heigh) / 2;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  /* 3 - Dividindo a frase
Escreva uma função com o nome splitSentence, a qual receberá uma string e 
retornará uma array de strings separadas por cada espaço na string original.

Exemplo: se a função receber a string "go Trybe", 
o retorno deverá ser ['go', 'Trybe']. */

  let split = [];
  let text = [];
  for (i = 0; i <= sentence.length; i +=1) {
    if (sentence[i] === ' ' || i == sentence.length) {
      split.push(text);
      text = [];      
    } else {
      text += sentence[i];
    }
  }

  return split;
}

// Desafio 4
function concatName(name) {
  // seu código aqui
  /* 4 - Concatenação de strings
Escreva uma função com o nome concatName que, ao receber uma array de strings, 
retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do 
tamanho da array.

Isso quer dizer que, caso o parâmetro passado para concatName seja a 
Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar 
Paolillo, Lucas. */

  let invert = [name[name.length-1], name[0]];
  let concatenate = invert[0] + ', ' + invert[1];
  return concatenate;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  /* 5 - Pontos no futebol
Escreva uma função com o nome footballPoints que receba o número de 
vitórias (esse parâmetro deverá se chamar wins) e o número de empates 
(esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos 
que o time marcou em um campeonato.

Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.*/
  let points = wins * 3 + ties;
  return points
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  /* 6 - Repetição do maior número
Escreva uma função chamada highestCount que, ao receber uma array de números, 
retorne a quantidade de vezes que o maior deles se repete.

Exemplo: caso o parâmetro de highestCount seja uma array com valores 
[9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade 
de vezes que o número 9 (maior número do array) se repete. */

  let bigger = numbers[0];
  let repeat = 0;
  let repeated = [];
  for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > bigger) {
      bigger = numbers[i];
    }
  }

  for (j = 0; j < numbers.length; j += 1) {
    if (bigger == numbers[j]) {
        repeat += 1;        
    }
  }

  return repeat;
}

//Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  /* 7 - Caça ao rato
Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão 
atrás de um rato chamado mouse. Imagine que cada um dos três animais está em uma posição 
representada por um número.

Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, 
cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e os gatos e retorne qual 
dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).

Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 
unidades, sua função deverá retornar cat2.

Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string 
"os gatos trombam e o rato foge". */
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 < dist2 ){
    text = "cat1";
  } else if (dist1 > dist2) {
    text = "cat2";
  } else {
    text = "os gatos trombam e o rato foge";
  }
  return text;
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  /* 8 - FizzBuzz
Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

Para cada número da Array que seja divisível apenas por 3, apresente uma string "fizz";
Para cada número da Array que seja divisível apenas por 5, apresente uma string "buzz";
Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], 
sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]. */
answer = [];
for (i in numeros){
  if (numeros[i]%3 == 0 && numeros[i]%5 == 0) {
    answer[i] = "fizzBuzz";
  } else if (numeros[i]%3 == 0) {
    answer[i] = "fizz";
  } else if (numeros[i]%5 == 0) {
    answer[i] = "buzz";
  } else {
    answer[i] = "bug!";
  }
}
return answer;
}

// Desafio 9
function encode(text) {
  // seu código aqui
  /* 9 - Codifique e Decodifique
Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, 
deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma 
string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas 
no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", 
o retorno deverá ser "hi there!").*/
let encoded = [];
for (i = 0; i < text.length; i += 1) {
  if (text[i] == "a") {
    encoded += '1';
  } else if (text[i] == "e") {
    encoded += '2';
  } else if (text[i] == "i") {
    encoded += '3';
  } else if (text[i] == "o") {
    encoded += '4';
  } else if (text[i] == "u") {
    encoded += '5';
  } else {
      encoded += text[i];
  }
}
return encoded;
}

function decode(text) {
  // seu código aqui
  let decoded = [];
  for (i = 0; i < text.length; i += 1) {
    if (text[i] == "1") {
      decoded += 'a';
    } else if (text[i] == "2") {
      decoded += 'e';
    } else if (text[i] == "3") {
      decoded += 'i';
    } else if (text[i] == "4") {
      decoded += 'o';
    } else if (text[i] == "5") {
      decoded += 'u';
    } else {
        decoded += text[i];
    }
  }
  return decoded;

}


// Desafio 10
function techList(namesTech, who) {
  // seu código aqui
  /* Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve 
  receber também um segundo parâmetro chamado name com um nome.

Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

{
  tech: "NomeTech",
  name: name
}
Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.

A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.

Exemplo:

Entradas da função:

["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"

// Saída:

[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
Caso o array venha vazio sua função deve retornar 'Vazio!' */
if (namesTech.length != 0) {
  whoWillLearn = [];
  for (i in namesTech) {
    whoWillLearn[i] = {tech: namesTech[i], name: who}
  }
} else {
  whoWillLearn = "Vazio!"
}
return whoWillLearn;
}

// Desafio 11
function generatePhoneNumber(telNumber) {
  // seu código aqui
  /* Crie uma função chamada generatePhoneNumber que receba uma array com 11 
  números e retorne um número de telefone, respeitando parênteses, traços e espaços.

Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], 
generatePhoneNumber deverá retornar (12) 34567-8901.

Se a função receber um array com tamanho diferente de 11, a mesma deve retornar 
"Array com tamanho incorreto.".

Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes 
ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número 
de telefone com esses valores". */
let erro = [];
let tamanho = telNumber.length;
let repeat = 0;
let telefone = [];

if (tamanho != 11) {
  erro = "Array com tamanho incorreto.";
}

for (i = 0; i < telNumber.length; i += 1) {
  if (telNumber[i] > 9 || telNumber[i] < 0) {
    erro = "não é possível gerar um número de telefone com esses valores";
  }
}

for (j = 0; j < telNumber.length; j += 1) {
  for (k = 0; k < telNumber.length; k += 1) {
    if (telNumber[i] == telNumber[j]) {
      repeat += 1;
    }
  }
  if (repeat > 2) {
    erro = "não é possível gerar um número de telefone com esses valores";
  }
}

for (n = 0; n <telNumber.length; n += 1) {
    telefone += telNumber[n];
}
let tel = "(" + telefone.slice(0,2) + ") " + telefone.slice(2,7) + "-" + telefone.slice(7);

if (erro.length == 0) {
  return tel;
} else {
  return erro;
}

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  /* 12 - Condição de existência de um triângulo
Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função 
chamada triangleCheck que deverá receber as três linhas como parâmetro e 
retornar se é possível formar um triângulo com os valores apresentados de 
cada linha

Para tanto, tenha em mente algumas considerações:

Para que seja possível formar um triângulo, é necessário que a medida 
de qualquer um dos lados seja menor que a soma das medidas dos outros 
dois e maior que o valor absoluto da diferença entre essas medidas.

Para obter o valor absoluto de um número em JavaScript, pesquise pela 
função Math.abs.

O retorno da sua função deverá ser um booleano.

Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true. */
function compare(A, B, C){
  let check = false;
  if (A + B > C && C > Math.abs(A-B)) {
    check = true;
  }
return check;
}

compa = compare(lineA, lineB, lineC);
compb = compare(lineB, lineC, lineA);
compc = compare(lineC, lineA, lineB);
let finalCheck = false;
if (compa == true && compb == true && compc) {
  finalCheck = true;
}
return finalCheck;
}

// Desafio 13
function hydrate(order) {
  // seu código aqui
/* 13 - Bem vindo ao Bar da Trybe!
Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.

Crie a função hydrate que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos:

String recebida:
  "1 cerveja"
String retornada:
  "1 copo de água"
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
Notas

Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida e que a sua string sempre virá com o formato quantidade (em número) + tipo da bebida.

O número na frente de cada bebida está no intervalo entre 1 e 9.

Dica: pesquise por algo similar a get all integers inside a string js. */
let matches = [];
let glassOfWater = 0;
matches = order.match(/\d+/g);
for (i in matches) {
  glassOfWater += parseInt(matches[i],8);
}
if (glassOfWater > 1) {
  return glassOfWater + " copos de água";
} else if (glassOfWater == 1) {
  return glassOfWater + " copo de água";
}
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
