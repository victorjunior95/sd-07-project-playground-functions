// Desafio 1

function compareTrue(a, b) {
    if (a && b)
        return true;
    else
        return false;
}

// Desafio 2
function calcArea(base, height) {
    let area = (height * base) / 2;
    return area;

}

// Desafio 3
function splitSentence(frase) {
    return frase.split(' ');
}


// Desafio 4
function concatName(array) {
    let primeiro = array[0];
    let ultimo = array[array.length - 1];

    return `${ultimo}, ${primeiro}`
}

// Desafio 5
function footballPoints(wins, ties) {
    let pontos = (wins * 3) + ties;
    return pontos;
}

// Desafio 6
function highestCount() {
    let maior = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === maior) {
            contador += 1;
        }
    }
    return contador;

}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {}

// Desafio 8
function fizzBuzz(array) {
    let saida = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0 && array[i] % 5 == 0)
            saida.push('fizzBuzz');
        else if (array[i] % 3 == 0)
            saida.push('fizz');
        else if (array[i] % 5 == 0)
            saida.push('buzz');

        else
            saida.push('bug!');

    }
    return saida;
}



// Desafio 9
function encode(string) {

    let saida = string.replace(/a/g, "1");
    let said = saida.replace(/e/g, "2");
    let sai = said.replace(/i/g, "3");
    let sa = sai.replace(/o/g, "4");
    let s = sa.replace(/u/g, "5");
    return (s);

}


function decode(string) {
    let saida = string.replace(/1/g, "a");
    let said = saida.replace(/2/g, "e");
    let sai = said.replace(/3/g, "i");
    let sa = sai.replace(/4/g, "o");
    let s = sa.replace(/5/g, "u");
    return (s);
}

// Desafio 10
function techList(list) {

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