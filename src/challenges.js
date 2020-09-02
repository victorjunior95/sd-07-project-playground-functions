// Desafio 1

function compareTrue(approval, conclusion) {



    if (approval == true && conclusion == true) {

        let happiness = true;
        return happiness;

    } else {

        let happiness = false;
        return happiness;

    }

}

// Desafio 2

function calcArea(base, height) {

    let triangleArea = (base * height) / 2;
    return triangleArea

}

// Desafio 3
function splitSentence(setenca) {

    wordsArray = setenca.split(" ");
    return wordsArray;

}

// Desafio 4
function concatName(names) {

    let arrayInitialFinalName = [names[names.length - 1], " " + names[0]];
    let finalInitialName = arrayInitialFinalName.toString();

    return finalInitialName;
}
// Desafio 5
function footballPoints(wins, ties) {

    let points = (wins * 3) + ties;
    return points;
}

// Desafio 6
function highestCount(numbers) {

    let highest = 0;
    let repetition = 1;
    let numbers2 = numbers;

    for (let i = 0; i < numbers.length; i += 1) {

        if (numbers[i] > highest) {
            highest = numbers[i];
        } else if (highest === numbers[i]) {
            repetition += 1;
        }
    }
    console.log("O Numero " + highest + " se repete" + repetition + " vezes");
    return repetition;

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