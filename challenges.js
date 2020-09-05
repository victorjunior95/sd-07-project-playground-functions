// Desafio 4
// Desafio 9
function decode(phrase) {
  let decodigo = phrase.split('');
  for(let i in decodigo){
    if (decodigo[i] === '1') {
      decodigo.splice(i, 1, 'a');
    } else if (decodigo[i] === '2') {
      decodigo.splice(i, 1, 'e');
    } else if (decodigo[i] === '3') {
      decodigo.splice(i, 1, 'i');
    } else if (decodigo[i] === '4') {
      decodigo.splice(i, 1, 'o');
    } else if (decodigo[i] === '5'){
      decodigo.splice(i, 1, 'u');
    }
  }
return decodigo.join('');
}








  
  // function decode() {
    // seu código aqui
  // }

    


console.log(decode("h1 2h1r2 b3l5 c1f2 t4r4 s1r45 d2m13s"));

  