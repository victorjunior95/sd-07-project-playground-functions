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
    let palavra
    let tamanho =0;
    let indice =0;

    for (let i=0;i<copia.length;i+=1){
        if (i==0){
            partida[indice] = copia[i]
        } else if (copia[i] !== ' '){
            partida[indice] = partida[indice] + copia[i]
        }else{
            indice +=1;
            partida[indice] =  copia[i]
            ;
        
        }
    }
    console.log (partida);
    return (partida);
}
let a = "go Trybe";
console.log (splitSentence(a));
