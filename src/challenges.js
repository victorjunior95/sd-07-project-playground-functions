// Desafio 1
function compareTrue(a,b) {
  if (a == b && a == true){return true}
  else return false
}

// Desafio 2
function calcArea(base,height) {
  return base*height/2
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(" ")
}

// Desafio 4
function concatName(array) {
  return `${array[array.length-1]}, ${array[0]}`
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins*3)+ties
}

// Desafio 6
function highestCount(array) {
  let maior = array[0]
  for (let i in array){if (array[i]>maior){
    maior = array[i]}
  }
  quant = 0
  for (let i in array){
    if (array[i] == maior) {
      quant++}
  }
  return quant
}

// Desafio 7 
function catAndMouse(mouse, cat1, cat2) {
  let dcat1 = 0
  let dcat2 = 0
  if (mouse>cat1){
    dcat1 = mouse-cat1
  } else dcat1 = cat1-mouse
  if (mouse>cat2){
    dcat2 = mouse-cat1
  } else dcat2 = cat2-mouse
  if (dcat1<dcat2) {
    return "cat1"
  } else if (dcat1> dcat2) { 
    return "cat2"
  } else return "os gatos trombam e o rato foge"
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzz = []
  for (let i in array){
    if (array[i]%3==0 && array[i]%5==0){
      fizzBuzz.push("fizzBuzz")
    } else if (array[i]%3==0){
      fizzBuzz.push("fizz")
    } else if (array[i]%5==0){
      fizzBuzz.push("buzz")
    } else fizzBuzz.push("bug!")
  }
  return fizzBuzz
}

// Desafio 9
function encode(msg) {
  let msgNew = msg
  let code = {a:"1",e:"2",i:"3",o:"4",u:"5"}
  for (let i in msg) {
    for (let k in code){
      if (msg[i]==k){msgNew = msgNew.replace(k, code[k])
      }
    } 
  }
  return msgNew
}

function decode(msg) {
  let msgNew = msg
  let code = {1:"a",2:"e",3:"i",4:"o",5:"u"}
  for (let i in msg) {
    for (let k in code){
      if (msg[i]==k){msgNew = msgNew.replace(k, code[k])
      }
    } 
  }
  return msgNew
}

// Desafio 10
function techList(array,nome) {
  if (array.length == 0) { return "Vazio!"
 } else 
 newArray = []
 for (let i in array){
   obj = {}
   obj.tech = array[i]
   obj.name = nome
   newArray.push(obj) 
  return newArray
 }
}

// Desafio 11
function generatePhoneNumber(a) {

  for (let i in a) {
    if (a[i]>9 || a[i]<0){return "não é possível gerar um número de telefone com esses valores"}
  }
  if (a.length < 0 || a.length > 9){return "Array com tamanho incorreto."}

  if (a.length != 11){return "Array com tamanho incorreto."}

  //Repete 3x ou Mais
  let repMais = 0
  for (let i in a) {
    let atual = a[i]
    let repAtual = 0
  for (let j in a) {
    if (atual == a[j]) {repAtual++}}
  if (repAtual>repMais) { repMais = repAtual}}
  if (repMais>=3) {return "não é possível gerar um número de telefone com esses valores"}

  return `(${a[0]}${a[1]}) ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}${a[10]}` 
}

console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1]))

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