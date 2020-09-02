// Desafio 1
function compareTrue(a,b) {
  if(a == true && b == true){
    return true
  }else
  return false
}

// Desafio 2
function calcArea(base , height) {
  let area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(string) {
  string = string.split(" ")//separa por espaços vazios
  return string
}

// Desafio 4
function concatName(ArrayStrings) {
  //let fimComeco = ArrayStrings[ArrayStrings.length - 1] + ' , ' + ArrayStrings[0]
  //return fimComeco
  let fim = ""
  let comeco = ""
  let junto = ""
  for(i = 0; i <= ArrayStrings.length - 1 ; i+= 1){
      if(ArrayStrings[0] ){
          comeco = ArrayStrings[0] 
      }if(ArrayStrings[ArrayStrings.length - 1]){
        fim = ArrayStrings[ArrayStrings.length - 1]
      }
          
  }
  junto = fim + ", " + comeco
  
  return junto
  
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontos = 0
  let vitorias = wins*3
  let empates = ties*1
  if(vitorias > 0 ){
    pontos += vitorias
  if(empates > 0){
    pontos += empates
  }
  
  }
  return pontos
}

// Desafio 6
function highestCount(numeros) {
  let maior = 0
  let maiorNumero = 0
  let contador = 0
  for(let i = 0 ; i <= numeros.length ; i += 1){
    if(numeros[i] > numeros[maior]){
      maior = i  
    } 
  }
  maiorNumero = numeros[maior]
  for(valor in numeros){
      if(numeros[valor] == maiorNumero){
          contador += 1
      }
  }

  return contador
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if(mouse === 0){
    if(cat1 > cat2){
        return "cat2"
    }
    if(cat2 > cat1){
        return "cat1"
    }
}
if(cat1 === cat2){
   return ("os gatos trombam e o rato foge")
}
if(cat1 === mouse){
   return "cat1"
}
if(cat2 === mouse){
   return "cat2"
}
if(mouse > 0 && mouse < cat2 && cat2 < cat1){
   return "cat2"
}
if(mouse > 0 && mouse < cat1 && cat1 < cat2){
   return "cat1"
}
if(mouse > 0 && mouse > cat1 && mouse > cat2 && cat1 > cat2){
    return "cat1"
}
if(mouse > 0 && mouse > cat1 && mouse > cat2 && cat2 > cat1){
    return "cat2"
}

}
// Desafio 8
function fizzBuzz(lista) {
  let novaLista = []
  for(let i = 0; i < lista.length; i += 1) {
    if (lista[i] % 3 == 0 && lista[i] % 5 != 0) {
        novaLista.push("fizz");
    }
    else if (lista[i] % 5 == 0 && lista[i] % 3 != 0) {
        novaLista.push("buzz");
    }
    else if (lista[i] % 3 == 0 && lista[i] % 5 == 0){
        novaLista.push("fizzBuzz");
    }
    else {
        novaLista.push("bug!");
    }
  }
  return novaLista;
}

// Desafio 9
function encode(string) {
  string = string.toLowerCase()
    for(i=0 ; i <= string.length ; i+= 1){
       string = string.replace('a','1').replace('e','2').replace('i','3').replace('o','4').replace('u','5')
    }

    return string
}
function decode(string) {
  string = string
  for(i=0 ; i <= string.length ; i+= 1){
      string = string.toString().replace('1','a').replace('2','e').replace('3','i').replace('4','o').replace('5','u')
  }

  return string
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


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
