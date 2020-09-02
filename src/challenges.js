// Desafio 1

function compareTrue(arg1, arg2) {
    let test = true;
    if (arg1 && arg2)
        return test;
    else
        test = false;
    return test;
}

// Desafio 2
function calcArea(base, height) {
    let area = (height * base) / 2;
    return area;

}

// Desafio 3
function splitSentence() {
    // seu código aqui
}

// Desafio 4
function concatName(array) {
    let primeiro = array[0];
    let ultimo = array[array.length - 1];

    return `${lastItem}, ${firstItem}`
}

// Desafio 5
function footballPoints(wins, ties) {
    let pontos = (wins * 3) + ties;
    return pontos;
}

// Desafio 6
function highestCount() {
    // seu código aqui
}

// Desafio 7
function catAndMouse() {
    // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
    for (i = 0; i < array.lenght; i++) {
        if (array[i] % 3 == 0 && array[i] % 5 == 0)
            console.log("fizzbuzz");

        else if (array[i] % 5 == 0)
            console.log("buzz");

        else if (array[i] % 3 == 0)
            console.log("fizz");

        else
            console.log("bug!");
    }
}

// Desafio 9
function encode() {
    // seu código aqui
}

function decode() {
    // seu código aqui
}

// Desafio 10
function techList(list) {
    for (i = 0; i < list.lenght; i++) {
        function Tech(list[i], name) {
            this.tech: "NomeTech",

        }



    }

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