// REQUISITOS
        // 1 - Usando o operador &&
        //     Utilizando o operador &&, crie uma função chamada compareTrue que, ao receber dois booleanos:
        //         Retorne true se ambos os valores são verdadeiros;
        //         Retorne false se um ou ambos os parâmetros forem falsos.
        function compareTrue() {
        // seu código aqui
        }
        
        // 2 - Área do triângulo
        //     Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo
        //         e retorne o cálculo da sua área.
        //         fórmula: (base * altura) / 2.
        function calcArea() {
        // seu código aqui
        }

        // 3 - Dividindo a frase
        //     Escreva uma função com o nome splitSentence, a qual receberá uma string
        //         e retornará uma array de strings separadas por cada espaço na string original.
        //         Exemplo: input = "go Trybe", output = ['go', 'Trybe'].
        function splitSentence() {
          // seu código aqui
        }

        // 4 - Concatenação de strings
        //     Escreva uma função com o nome concatName que, ao receber uma array de strings,
        //         retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
        //         Ex.: input = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], output = Paolillo, Lucas.
        function concatName() {
          // seu código aqui
        }

        // 5 - Pontos no futebol
        //     Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins)
        //         e o número de empates (esse parâmetro deverá se chamar ties)
        //         e retorne a quantidade de pontos que o time marcou em um campeonato.
        //     Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
        function footballPoints() {
          // seu código aqui
        }

        // 6 - Repetição do maior número
        //     Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.
        //         Ex.: input = [9, 1, 2, 3, 9, 5, 7], output = 2
        function highestCount() {
          // seu código aqui
        }

        // 7 - Caça ao rato
        //     Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão atrás de um rato chamado mouse.
        //     Imagine que cada um dos três animais está em uma posição representada por um número.
        //     Crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem,
        //     calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).
        //         Ex. input = cat2 esta a 2 unidades de distância do rato, e cat1 esta a 3 unidades, sua função deverá retornar cat2.
        //     Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".
        function catAndMouse() {
          // seu código aqui
        }

        // 8 - FizzBuzz
        //     Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:
        //         Para cada número da Array que seja divisível por 3, apresente uma string "fizz";
        //         Para cada número da Array que seja divisível por 5, apresente uma string "buzz";
        //         Caso o número seja divisível por 3 ou 5, retorne a string "fizzBuzz";
        //         Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
        //             Ex.: input = [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].
        function fizzBuzz() {
          // seu código aqui
        }

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
        function encode() {
          // seu código aqui
        }
        function decode() {
          // seu código aqui
        }

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
        function techList() {
          // seu código aqui
        }

    
    // BÔNUS
        // 11 - Número de telefone
        //     Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone,
        //         respeitando parênteses, traços e espaços.
        //         Ex.: input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], output = (12) 34567-8901.
        //     Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".
        //     Caso algum dos números da array seja < 0, > 9 ou se repita >= 3x, retornar a string "não é possível gerar um número de telefone com esses valores".
        function generatePhoneNumber() {
          // seu código aqui
        }

        // 12 - Condição de existência de um triângulo
        //     Um triângulo é composto de três linhas: lineA, lineB e lineC.
        //     Crie uma função chamada triangleCheck que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com esses valores.
        //         Condição para formar um triângulo: a medida de qualquer um dos lados ser menor que a soma das medidas dos outros dois
        //             e maior que o valor absoluto da diferença entre essas medidas.
        //     Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.
        //     O retorno da sua função deverá ser um booleano.
        //         Ex.: input = (10, 14, 8), output = true.
        function triangleCheck() {
          // seu código aqui
        }

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
        // function hydrate() {
          // seu código aqui
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