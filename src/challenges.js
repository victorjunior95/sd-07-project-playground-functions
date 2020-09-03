// REQUISITOS
        // 1 - Usando o operador &&
        //     Utilizando o operador &&, crie uma função chamada compareTrue que, ao receber dois booleanos:
        //         Retorne true se ambos os valores são verdadeiros;
        //         Retorne false se um ou ambos os parâmetros forem falsos.
        let booleano1 = true;
        let booleano2 = false;
        let resultado = true;
        function compareTrue(booleano1, booleano2) {
            if (booleano1 == true && booleano2 == true){
                resultado = true;
            } else {
                resultado = false;
            }
            return resultado;
        }
        compareTrue (true, false);
        console.log(resultado);

        // 2 - Área do triângulo
        //     Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo
        //         e retorne o cálculo da sua área.
        //         fórmula: (base * altura) / 2.
        let base = 10;
        let height = 5;
        let area = 0;
        function calcArea(base, height) {
            area = (base * height) / 2;
            return area;
        }
        calcArea(base, height)
        console.log(area);

        // 3 - Dividindo a frase
        //     Escreva uma função com o nome splitSentence, a qual receberá uma string
        //         e retornará um array de strings separadas por cada espaço na string original.
        //         Exemplo: input = "go Trybe", output = ['go', 'Trybe'].
        let frase = "Simbora Trybers!";
        let palavras = [""];
        function splitSentence(frase) {
            palavras = frase.split(" ");
            return palavras;
        }
        splitSentence(frase);
        console.log(palavras);

        // 4 - Concatenação de strings
        //     Escreva uma função com o nome concatName que, ao receber uma array de strings,
        //         retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
        //         Ex.: input = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], output = Paolillo, Lucas.
        let array__de_strings = ["Sol", "Terra", "´Agua", "Ar", "Fogo"];
        let strings_concatenadas = "";
        function concatName(array_de_strings) {
            strings_concatenadas = array__de_strings[0] + ', ' + array__de_strings[array__de_strings.length-1] + ".";
            return strings_concatenadas;
        }
        concatName (array__de_strings)
        console.log(strings_concatenadas);
        // 5 - Pontos no futebol
        //     Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins)
        //         e o número de empates (esse parâmetro deverá se chamar ties)
        //         e retorne a quantidade de pontos que o time marcou em um campeonato.
        //     Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
        let wins = 10;
        let ties = 4;
        let pontuacao = 0;
        function footballPoints(wins, ties) {
            pontuacao = 3 * wins + ties;
            return pontuacao;
        }
        footballPoints(wins, ties);
        console.log(pontuacao);

        // 6 - Repetição do maior número
        //     Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.
        //         Ex.: input = [9, 1, 2, 3, 9, 5, 7], output = 2
        let numeros = [10, 25, 2, 9, 9, 26, 2, 26, 14, 26];
        let repeticao_maior = 0;
        function highestCount(numeros) {
            maior = Math.max.apply(null, numeros);
            for (let i in numeros){
                if (numeros[i] === maior){
                    repeticao_maior += 1;
                }
            }
            return repeticao_maior;
        }
        highestCount(numeros);
        console.log(repeticao_maior);
        
        // 7 - Caça ao rato
        //     Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão atrás de um rato chamado mouse.
        //     Imagine que cada um dos três animais está em uma posição representada por um número.
        //     Crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem,
        //     calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).
        //         Ex. input = cat2 esta a 2 unidades de distância do rato, e cat1 esta a 3 unidades, sua função deverá retornar cat2.
        //     Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".
        let cat1 = 10;
        let cat2 = 10;
        let mouse = 9;
        let vencedor = '';
        function catAndMouse(mouse, cat1, cat2) {
            if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
                vencedor = "cat1";
            } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)){
                vencedor = "cat2";
            } else {
                vencedor = "os gatos trombam e o rato foge";
            }
            return vencedor;
        }
        catAndMouse(mouse, cat1, cat2);
        console.log(vencedor);

        // 8 - FizzBuzz
        //     Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:
        //         Para cada número da Array que seja divisível por 3, apresente uma string "fizz";
        //         Para cada número da Array que seja divisível por 5, apresente uma string "buzz";
        //         Caso o número seja divisível por 3 ou 5, retorne a string "fizzBuzz";
        //         Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
        //             Ex.: input = [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].
        let numbers = [6, 12, 15, 7, 24, 55];
        let retorno = [];
        function fizzBuzz(numbers) {
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
        fizzBuzz(numbers);
        console.log(retorno);

        // 9 - Codifique e Decodifique
        //     Crie duas funções:
        //         Função 1: Deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números,
        //             de acordo com o formato a seguir:
        //             a -> 1
        //             e -> 2
        //             i -> 3
        //             o -> 4
        //             u -> 5
        //                 Ex.: input = "hi there!", output = "h3 th2r2!"
        //         Função 2: Deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas
        //             e retornará uma string com vogais minúsculas no lugar dos números.
        //             Ex.: input = "h3 th2r2!", o retorno deverá ser "hi there!").
        let string_inicial = "abcde fghij klmno pqrst uvwxy z";
        let string_codificada = "";
        let string_final = "";
        function encode(string_inicial) {
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
        encode(string_inicial);
        decode(string_codificada);
        console.log(string_codificada);
        console.log(string_final);

        // 10 - Lista de tecnologias
        //     Crie uma função que recebe um array de nomes de tecnologias que você quer aprender.
        //     Essa função deve receber também um segundo parâmetro chamado name com um nome.
        //         Para cada tecnologia no array, crie um objeto com a seguinte estrutura:
        //             {
        //             tech: "NomeTech",
        //             name: name
        //             }
        //     Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.
        //     A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.
        //         Ex.:
        //             input = 
        //                 ["React", "Jest", "HTML", "CSS", "JavaScript"]
        //                 "Lucas"
        //             output =
        //                 [
        //                 {
        //                     tech: "CSS",
        //                     name: "Lucas"
        //                 },
        //                 {
        //                     tech: "HTML",
        //                     name: "Lucas"
        //                 },
        //                 {
        //                     tech: "JavaScript",
        //                     name: "Lucas"
        //                 },
        //                 {
        //                     tech: "Jest",
        //                     name: "Lucas"
        //                 },
        //                 {
        //                     tech: "React",
        //                     name: "Lucas"
        //                 }
        //                 ]
        //     Caso o array venha vazio sua função deve retornar 'Vazio!'
        let tecnologias = ["HTML", "CSS", "Javascript"];
        let name = "Bella";
        let tech_objetos = [];
        function techList(tecnologias, name) {
            let item = {};
            if (tecnologias == 0 || tecnologias == null){
                console.log('Vazio!');
            } else {
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
        techList(tecnologias, name);
        console.log(tech_objetos);

    // BÔNUS
        // 11 - Número de telefone
        //     Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone,
        //         respeitando parênteses, traços e espaços.
        //         Ex.: input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], output = (12) 34567-8901.
        //     Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".
        //     Caso algum dos números da array seja < 0, > 9 ou se repita >= 3x, retornar a string "não é possível gerar um número de telefone com esses valores".
        let numbers = [8, 1, 9, 9, 1, 3, 7, 8, 8, 7, 0];
        let telephone_number = "";
        function generatePhoneNumber(numbers) {
            telephone_number += "(";
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
        generatePhoneNumber(numbers);
        console.log(telephone_number);

        // 12 - Condição de existência de um triângulo
        //     Um triângulo é composto de três linhas: lineA, lineB e lineC.
        //     Crie uma função chamada triangleCheck que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com esses valores.
        //         Condição para formar um triângulo: a medida de qualquer um dos lados ser menor que a soma das medidas dos outros dois
        //             e maior que o valor absoluto da diferença entre essas medidas.
        //     Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.
        //     O retorno da sua função deverá ser um booleano.
        //         Ex.: input = (10, 14, 8), output = true.
        let lineA = 10;
        let lineB = 10;
        let lineC = 20;
        let se_e_triangulo = "";
        function triangleCheck(lineA, lineB, lineC) {
            if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB && Math.abs(lineB - lineC) < lineA && Math.abs(lineA - lineC) < lineB && Math.abs(lineA - lineB) < lineC){
                se_e_triangulo = true;
            } else {
                se_e_triangulo = false;
            }
            return se_e_triangulo;
        }
        triangleCheck (lineA, lineB, lineC);
        console.log(se_e_triangulo);

        // 13 - Bem vindo ao Bar da Trybe!
        //     Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.
        //     Crie a função hydrate que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber.
        //         Ex.:
        //             String recebida:
        //             "1 cerveja"
        //             String retornada:
        //             "1 copo de água"

        //             String recebida:
        //             "1 cachaça, 5 cervejas e 1 copo de vinho"
        //             String retornada:
        //             "7 copos de água"
        //     Notas
        //         Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida
        //             e que a sua string sempre virá com o formato quantidade (em número) + tipo da bebida.
        //         O número na frente de cada bebida está no intervalo entre 1 e 9.
        //     Dica: pesquise por algo similar a get all integers inside a string js.
        let bebidas = "1 cachaça, 5 cervejas e 1 copo de vinho";
        let copos_de_agua = 0;
        function hydrate(bebidas) {
            let quantidades = bebidas.match(/\d+/g).map(Number);
            for (let i in quantidades){
                copos_de_agua += quantidades[i];
            }
            return copos_de_agua;
        }
        hydrate(bebidas);
        console.log(copos_de_agua);

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