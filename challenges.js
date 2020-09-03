// Desafio 4
function highestCount(numeros) {
    let idcMaior = 0;
    for (let indice in numeros) {
      if (numeros[idcMaior] < numeros[indice]) {
        idcMaior = indice;
      }
    }
  let contRepet = 0;
  for(i in numeros){
      if (numeros[i] == numeros[idcMaior]){
          contRepet++;
      }
}
return contRepet;
}    


console.log(highestCount([2, 10, 6, 7, 10, 1]));

  