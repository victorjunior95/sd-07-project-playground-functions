
function techList(vetor, name) {
let result;
let colecao = [];
  if(vetor.length < 1 || vetor == null || vetor == undefined) {
    result = 'Vazio!';
    return result;
  } else if(vetor !== null || vetor !== undefined){
    for(let i in vetor){
    let lista = {
      tech:vetor[i],
      name:name
    }
    colecao.push(lista);
  }
}
return colecao.sort(function(a,b){
  if(a.tech < b.tech) return -1;
  if(a.tech > b.tech) return 1;
  return 0;
})
}




  console.log(techList(["React", "Jest", "HTML", "CSS", "Rust", "JavaScript"],
  "Lucas"));





  
  

    




  