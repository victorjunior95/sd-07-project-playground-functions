//**1 - Usando o operador &&**
console.log ('**1 - Usando o operador &&**')

function compareTrue(val1,val2){
    if(val1 && val2){
        return (true);
    }else{
        return (false);
    }
}

//**2 - Área do triângulo** 
console.log ('**2 - Área do triângulo** ')

function calcArea(base,height){
    return(base *height/2)
}

//**3 - Dividindo a frase** 
console.log ('**3 - Dividindo a frase**')
//Exemplo: se a função receber a string `"go Trybe"`, o retorno deverá ser `['go', 'Trybe']`.

function splitSentence (frase){
    let copia = frase;
    let partida =[];
    let indice =0;

    for (let i=0;i<copia.length;i+=1){

        if (i==0){
            partida[indice] = copia[i]

        }   else if (copia[i] !== ' '){
            partida[indice] = partida[indice] + copia[i]

        }   else{
            indice +=1;
            i+=1;
            partida[indice] =  copia[i]
            
            ;
        
        }
    }
    console.log (partida);
    return (partida);
}
let a = "go Trybe vamo que vamo";
console.log (splitSentence(a));

//**4 - Concatenação de strings**
console.log ('**4 - Concatenação de strings**');

function concatName(array){
    let saida =[];
    saida.push (array[array.length-1]);
    saida.push (array[0]);
    return (saida)
}
let b = ['nando', 'paulo', 'jose', 'treco', 'trem'];
console.log (concatName(b));

//**5 - Pontos no futebol**
console.log ('**5 - Pontos no futebol**');

function footballPoints (wins,ties){
    return (wins*3 + ties);
}
let c = 3, d=4;
console.log(footballPoints(c,d));

//**6 - Repetição do maior número**
console.log ('**6 - Repetição do maior número**');

function highestCount (array){
    let maior =array[0];
    let contador =0;
    for (let i=0;i<array.length;i+=1){
        if (array[i]>maior){
            maior = array[i]
        }
    }
    for (let j=0;j<array.length;j+=1){
        if (array[j] == maior){
            contador +=1;
        }

    }
    return (contador);
}

let e= [9, 1, 9, 3, 9, 5, 7];
console.log ("O maior número se repete " +highestCount(e)+ " vezes.");

//**7 - Caça ao rato**
console.log ('**7 - Caça ao rato**');
