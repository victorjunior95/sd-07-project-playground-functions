// Desafio 1
function compareTrue(primeiroBooleano, segundoBooleano) {
  // seu código aqui
  if (primeiroBooleano && segundoBooleano) {
    return true
  }
  else
    return false
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  area = (base * height) /2

  return area
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  converteArray = frase.split(' ');
  return converteArray
}

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  let objeto = {
    ultimo: nomes[nomes.length-1],
    primeiro: nomes[0]
}

return console.log(objeto.ultimo + ', ' + objeto.primeiro)
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  pontos = ((wins * 3) + ties)
  return pontos
}

// Desafio 6
function highestCount(lista) {
  // seu código aqui
  lista.sort();

  maior = lista[lista.length - 1]

  repeticao = 0

  for (let x in lista) {
    if (maior === lista[x]) {
        repeticao = repeticao +1
    }
}
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (cat1 === cat2) {
    console.log("os gatos trombam e o rato foge")
  }
  if (mouse > cat1) {
    distanciaCat1 = (cat1 - mouse)
  }
  if (mouse < cat1) {
    distanciaCat1 = (mouse - cat1)
  }
  if (mouse > cat2) {
    distanciaCat2 = (cat2 - mouse)
  }
  if (mouse < cat2) {
    distanciaCat2 = (mouse - cat2)
  }
  if (distanciaCat1 > distanciaCat2) {
    console.log("cat1")
  }
  if (distanciaCat2 > distanciaCat1) {
    console.log("cat2")
}
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let FizzBuzz = []

  for (i=0; i < numeros.length; i = i+1) {
      if (((numeros[i] % 3) === 0) && ((numeros[i] % 5) === 0)) {
          FizzBuzz.push("fizzBuzz")
      }
      else if ((numeros[i] % 3) === 0) {
          FizzBuzz.push("fizz")
      }
      else if ((numeros[i] % 5) === 0) {
          FizzBuzz.push("buzz")
      }
      else FizzBuzz.push("bug!")
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
