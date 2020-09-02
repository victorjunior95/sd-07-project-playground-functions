// Desafio 4
function concatName(vetor) {
    let armazem = {};
    let ultimoItem = vetor.length - 1;
    armazem.ultimoItem1 = vetor[ultimoItem];
    armazem.primeiroItem = vetor[0];
    return armazem.ultimoItem1 + ', ' + armazem.primeiroItem; 
    
} 

console.log(concatName(['Go', 'Trybe', 'Vai', 'Atras']));

