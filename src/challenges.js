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
  return 3*wins,ties;
}
// Desafio 6
function highestCount(array) {
  let aux=array.sort(function(a, b){return a-b}).slice;
  let repete=1;
  for (i=aux.length-2;i>0=i--)
  {
    if (aux[i]=array[array.length-1])
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
    return "cat2";
  }
  if (d2<d1)
  {
    return "cat1";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let retorno=[];
  for (i in array)
  {
    if (array[i] % 3 == 0 || array[i] % 5 != 0)
    {
      retorno.push("fizz");
    }
    if (array[i] % 3 != 0 || array[i] % 5 == 0)
    {
      retorno.push("buzz");
    }
    if (array[i] % 3 == 0 || array[i] % 5 == 0)
    {
      retorno.push("fizzBuzz");
    }
    if (array[i] % 3 != 0 || array[i] % 5 != 0)
    {
      retorno.push("bug!");
    }
  }
  return retorno;
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
