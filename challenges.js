
function generatePhoneNumber(vetor) {
let countRepeat = vetor.filter((e, i, a) => a.indexOf(e) !== i);
let contagemReal = 0
for(let i = 0; i < countRepeat.length; i += 1){
  if(countRepeat[i] === countRepeat[i+1] || countRepeat[i] === countRepeat[i+2]){
    contagemReal = 3;    
  }
}
// return countRepeat;
let confere = 0;
for (let i in vetor) {
    if (vetor[i] >  9 || vetor[i] < 0){
        confere++;
    }
}
      if (vetor.length !== 11) {
      let result = "Array com tamanho incorreto.";
      return result;
    }
    if(contagemReal >= 3 || confere != 0) {
      let result1 = "não é possível gerar um número de telefone com esses valores";
      return result1;
}     vetor.splice(0, 0, '(');
      vetor.splice(3, 0, ')');
      vetor.splice(4, 0, ' ');
      vetor.splice(10, 0, '-');
      return vetor.join('');

}




  console.log(generatePhoneNumber([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5]));



 

  
  

    




  