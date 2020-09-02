/* 1 - Usando o operador &&
JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna
true se ambos os valores são verdadeiros, e retorna false se algum dos valores não o for.

Considerando isso, crie uma função chamada compareTrue que, ao receber dois booleanos:

Retorne true se ambos os valores são verdadeiros;
Retorne false se um ou ambos os parâmetros forem falsos.
Faça a função utilizando o operador &&. */

function compareTrue(valor1, valor2) {
  let retorno = false;
  if (valor1 === true && valor2 === true) {
    retorno = true;
  }
  return retorno;
}

compareTrue();

/* 2 - Área do triângulo
Escreva uma função com o nome calcArea que receba um valor de base (chamado base)
e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.
Lembre-se que a área de um triângulo é calculada através da seguinte fórmula:
(base * altura) / 2. */

function calcArea(base, height) {
  return (base * height) / 2;
}

calcArea();
