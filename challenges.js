
function hydrate(corda) {
  let cordaDividida = corda.match(/\d/g);
  let somaAgua = 0;  
  for(let i = 0; i < cordaDividida.length; i = i+1){
     somaAgua += cordaDividida[i] * 1;
    }
  return somaAgua + " copos de água";  
}




  console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));



 

  
  

    




  