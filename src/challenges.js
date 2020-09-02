// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return base*height/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  return array[array.length-1]+", "+array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3*wins+ties;
}
// Desafio 6
function highestCount(array) {
  let aux=array.sort(function(a, b){return a-b}).slice();
  let repete=1;
  for (i=aux.length-2;i>0;i--)
  {
    if (aux[i]==array[array.length-1])
    {
      repete++;
    }
  }
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  d1=Math.abs(cat1-mouse);
  d2=Math.abs(cat2-mouse);
  if (d1==d2)
  {
    return "os gatos trombam e o rato foge";
  }
  if (d1<d2)
  {
    return "cat1";
  }
  if (d2<d1)
  {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(array)
{
  let retorno=[];
  for (i in array)
  {
    if (array[i] % 3 == 0 && array[i] % 5 != 0)
    {
      retorno.push("fizz");
    }
    if (array[i] % 3 != 0 && array[i] % 5 == 0)
    {
      retorno.push("buzz");
    }
    if (array[i] % 3 == 0 && array[i] % 5 == 0)
    {
      retorno.push("fizzBuzz");
    }
    if (array[i] % 3 != 0 && array[i] % 5 != 0)
    {
      retorno.push("bug!");
    }
  }
  return retorno;
}

// Desafio 9
function encode(string) {
  let aux=string.slice();
  let vogaltonumber={
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  for (j=0;j<aux.length;j++)
  {
    for (i in vogaltonumber)
    {
      aux=aux.replace(i,vogaltonumber[i]);
    }
  }
  return aux;
}
function decode(string) {
  let aux=string.slice();
  let vogaltonumber={
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  for (j=0;j<aux.length;j++)
  {
    for (i in vogaltonumber)
    {
      aux=aux.replace(vogaltonumber[i],i);
    }
  }
  return aux;
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




console.log(compareTrue(true, true));
console.log(calcArea(10, 20));
console.log(splitSentence("qwe ert tyu cgh asdf asd sdzf"));
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(footballPoints(100, 4));
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(catAndMouse(-10, 11, 8));
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(encode("hi there!"));
console.log(decode("h3 th2r2!"));
console.log();
console.log();
console.log();