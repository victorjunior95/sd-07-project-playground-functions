// Desafio 1
function compareTrue(condicao1, condicao2) {
  // seu código aqui.
  if ((condicao1 == true)&&(condicao2 == true)){
    return(true)
  }
  else{
      return(false)
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let btriangulo = base
  let atriangulo = height
  let areadotriangulo = parseFloat((btriangulo * atriangulo) / 2)
  return (areadotriangulo)
}

// Desafio 3
function splitSentence(stringentrada) {
// seu código aqui
let arraydestring = stringentrada.split(" ")
return(arraydestring)
}

// Desafio 4
function concatName(arraydeentrada) {
  // seu código aqui
  let stringsaida = ""
  stringsaida = stringsaida + arraydeentrada[arraydeentrada.length - 1]
  stringsaida = stringsaida + ", "
  stringsaida = stringsaida + arraydeentrada[0]
    return(stringsaida)
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let pontos = (wins*3)+(ties)
  return(pontos)
}

// Desafio 6
function highestCount(arraydeentrada) {
  // seu código aqui
  let maior = 0
  let repeticoes = 0
  for(let i=0;i < arraydeentrada.length; i+=1){
    if (arraydeentrada[i] > maior)
      maior = arraydeentrada[i]
  }
  for(let i=0;i<arraydeentrada.length;i+=1){
    if (arraydeentrada[i] === maior)
    repeticoes = repeticoes + 1
  }
  return(repeticoes)
}



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciacat1 = mouse - cat1
  let distanciacat2 = mouse - cat2
    if (distanciacat1 === distanciacat2)
      return("os gatos trombam e o rato foge")
    else if (distanciacat1 > distanciacat2)
          return("cat1")
        else
          return("cat2")       
}

// Desafio 8
function fizzBuzz(arraydeentrada) {
  // seu código aqui
  for(let i = 0; i < arraydeentrada.length(); i+=1){
    if ((arraydeentrada[i]%3 === 0 ) && !(arraydeentrada[i] % 5 === 0))
      return("fizz")
    else if (!(arraydeentrada[i]%3 === 0 ) && (arraydeentrada[i] % 5 === 0))
          return("buzz")
         else if((arraydeentrada[i]%3 === 0 ) && (arraydeentrada[i] % 5 === 0))
                return("fizzBuzz")
              else
                  return("bug!")
  }
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