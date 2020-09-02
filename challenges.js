
 // Desafio 1 - Usando o operador &&
function compareTrue(a, b) {
 if (a == true && b == true) {
    return(true)
 } else {
    return(false)
 }
}

// Desafio 2 - Área do triângulo

function calcArea(base, height) {
  let aux = base*height/ 2
    return(aux)
}

/* 3 - Dividindo a frase
Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.

Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe']. */

function splitSentence(trybe) {
let transArray = trybe;
let resultado = transArray.split(" ");
return(resultado)
}