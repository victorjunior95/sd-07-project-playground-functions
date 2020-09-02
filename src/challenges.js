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
  let dividir = string.split()//separa por espaços vazios
    return dividir
}

// Desafio 4
function concatName(ArrayStrings) {
  let fimComeco = ArrayStrings[ArrayStrings.length - 1] + ' , ' + ArrayStrings[0]
  return fimComeco
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
  let posicaoCat1 = mouse - cat1
  let posicaoCat2 = mouse - cat2//maior posição mais longe estara
  if (posicaoCat1 > posicaoCat2){
      return "cat2"
  }
  if(posicaoCat2 > posicaoCat1){
      return "cat1"
  }
  else{
      console.log("os gatos trombam e o rato foge")
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
