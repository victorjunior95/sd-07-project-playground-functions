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
  if(mouse == 0){
    if(cat1 > cat2){
        return cat2
    }
    if(cat2 > cat1){
        return cat1
    }
}
if(cat1 === cat2){
   console.log("os gatos trombam e o rato foge")
}
if(cat1 == mouse){
   return cat1
}
if(cat2 == mouse){
   return cat2
}
if(mouse > 0 && mouse < cat2 && cat2 < cat1){
   return cat2
}
if(mouse > 0 && mouse < cat1 && cat1 < cat2){
   return cat1
}
if(mouse > 0 && mouse > cat1 && mouse > cat2 && cat1 > cat2){
    return cat1
}
if(mouse > 0 && mouse > cat1 && mouse > cat2 && cat2 > cat1){
    return cat2
}

}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
