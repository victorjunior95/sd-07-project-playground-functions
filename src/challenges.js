// Desafio 1
function compareTrue(a , b) {
  return a === true && b === true ? true : false ;
}

// Desafio 2
function calcArea(base , height) {
  let area = (base * altura) / 2 ;
  return  area ;
}

// Desafio 3
function splitSentence() {

}

// Desafio 4
function concatName(a) {
  let b = a.length , result = a[b-1] + ", " + a[0] ;
  return result ;
}

// Desafio 5
function footballPoints(wins , ties) {
  let points = wins * 3 + ties ;
  return points ;
}

// Desafio 6
function highestCount(a) {
  let hNum = 0 , c = 0 ;
  for( let i in a )
  {
    a[i] > hNum ? hNum = a[i] : "" ;
  } ;
  for( let i in a )
  {
    hNum === a[i] ? c++ : "" ;
  } ;
  return c ;
}

// Desafio 7
function catAndMouse(mouse , cat1 , cat2) {
  if ( cat1 === cat2 )
  {
    return "os gatos trombam e o rato foge";
  }
  else
  {
    return cat1 - mouse > cat2 - mouse ? 'cat2' : 'cat1' ;
  } ;
}

// Desafio 8
function fizzBuzz(a) {
  let result = [] ;
  for( let i in a )
  {
      if ( a[i] % 3 === 0 || a[i] % 5 === 0 )
      {
        a[i] % 3 === 0 && a[i] % 5 === 0 ? result[i] = "fizzBuzz" : result[i] = "fizz" ;
      }
      else
      {
        a[i] % 5 === 0 ? result[i] = "buzz" : result[i] = "bug!" ;
      } ;
  } ;
  return result ;
}

// Desafio 9
function encode(s) {
  let convList = { a : 1 , e : 2 , i : 3 , o : 4 , u : 5 } , result = "" ;
  for( let i in s)
  {
    convList[s[i]] ? result += convList[s[i]] : result += s[i] ;
  } ;
  return result ;
}
function decode(s) {
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
