// REQUISITOS
// 1
function compareTrue(booleano1, booleano2) {
    let resultado = true;
    if (booleano1 == true && booleano2 == true){
        resultado = true;
    } else {
        resultado = false;
    }
    return resultado;
}

// 2
function calcArea(base, height) {
    let area = (base * height) / 2;
    return area;
}

// 3
function splitSentence(frase) {
    let palavras = frase.split(" ");
    return palavras;
}

// 4
function concatName(array_de_strings) {
    let strings_concatenadas = array__de_strings[0] + ', ' + array__de_strings[array__de_strings.length-1] + ".";
    return strings_concatenadas;
}

// 5
function footballPoints(wins, ties) {
    let pontuacao = 3 * wins + ties;
    return pontuacao;
}

// 6
function highestCount(numeros) {
    let repeticao_maior = 0;
    let maior = Math.max.apply(null, numeros);
    for (let i in numeros){
        if (numeros[i] === maior){
            repeticao_maior += 1;
        }
    }
    return repeticao_maior;
}

// 7
function catAndMouse(mouse, cat1, cat2) {
    if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
        let vencedor = "cat1";
    } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)){
        let vencedor = "cat2";
    } else {
        let vencedor = "os gatos trombam e o rato foge";
    }
    return vencedor;
}

// 8
function fizzBuzz(numbers) {
    let retorno = [];
    for (let i in numbers){
        resto_3 = numbers[i]%3;
        resto_5 = numbers[i]%5;
        if (resto_3==0 && resto_5==0){
            retorno.push("fizzBuzz");
        } else if (resto_3==0){
            retorno.push("fizz");
        } else if (resto_5==0) {
            retorno.push("buzz");
        } else {
            retorno.push("bug!");
        }
    }
    return retorno;
}

// 9
function encode(string_inicial) {
    let string_codificada = "";
    for (let letra in string_inicial){
        if (string_inicial[letra] == "a" || string_inicial[letra] == "e" || string_inicial[letra] == "i" || string_inicial[letra] == "o" || string_inicial[letra] == "u"){
            if (string_inicial[letra] == "a"){
                string_codificada += "1";
            } else if (string_inicial[letra] == "e"){
                string_codificada += "2"; 
            } else if (string_inicial[letra] == "i"){
                string_codificada += "3"; 
            } else if (string_inicial[letra] == "o"){
                string_codificada += "4"; 
            } else {
                string_codificada += "5"; 
            }
        } else {
            string_codificada += string_inicial[letra];
        }
    }
    return string_codificada;
}
function decode(string_codificada) {
    let string_final = "";
    for (let letra in string_codificada){
        if (string_codificada[letra] == "1" || string_codificada[letra] == "2" || string_codificada[letra] == "3" || string_codificada[letra] == "4" || string_codificada[letra] == "5"){
            if (string_codificada[letra] == "1"){
                string_final += "a";                        
            } else if (string_codificada[letra] == "2"){
                string_final += "e"; 
            } else if (string_codificada[letra] == "3"){
                string_final += "i"; 
            } else if (string_codificada[letra] == "4"){
                string_final += "o"; 
            } else {
                string_final += "u"; 
            }
        } else {
            string_final += string_codificada[letra];
        }
    }
    return string_final;
}

// 10
function techList(tecnologias, name) {
    if (tecnologias == 0 || tecnologias == null){
        console.log('Vazio!');
    } else {
        let item = {};
        let tech_objetos = [];
        lista_tech = tecnologias.sort();
        for (i in lista_tech){
            item = {
                tech: lista_tech[i],
                name: name
            }
            tech_objetos.push(item);
            console.log(tech_objetos[i]);
        };
    };
    return tech_objetos;
}

// BÔNUS
// 11
function generatePhoneNumber(numbers) {
    let telephone_number = "(";
    for (i = 0; i < 2; i +=1){
        telephone_number += numbers[i];
    }
    telephone_number += ") ";
    for (i = 2; i < 3; i +=1){
        telephone_number += numbers[i];
    }
    telephone_number += ".";
    for (i = 3; i < 7; i +=1){
        telephone_number += numbers[i];         
    }
    telephone_number += "-";
    for (i = 7; i < 11; i +=1){
        telephone_number += numbers[i];
    }
}

// 12
function triangleCheck(lineA, lineB, lineC) {
    if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB && Math.abs(lineB - lineC) < lineA && Math.abs(lineA - lineC) < lineB && Math.abs(lineA - lineB) < lineC){
        let se_e_triangulo = true;
    } else {
        let se_e_triangulo = false;
    }
    return se_e_triangulo;
}

// 13
function hydrate(bebidas) {
    let quantidades = bebidas.match(/\d+/g).map(Number);
    for (let i in quantidades){
        copos_de_agua += quantidades[i];
    }
    return copos_de_agua;
}

// GERAL
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