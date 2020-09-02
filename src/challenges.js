// Desafio 1

function compareTrue(a,b) {
  // seu código aqui
  if (a && b)
  {
    return (true);
  }
  else
  {
    return (false);
  }
}

// Desafio 2
function calcArea(base,height) {
  return (base*height/2);
}

// Desafio 3

function splitSentence(string) {
  // seu código aqui
  let array = [];
  array=string.split(" ");
  return(array);
}

// Desafio 4

function concatName(array) {
  // seu código aqui
  let c = array.length-1;
  let string = array[c] +", "+ array[0];
  return (string);
}

// Desafio 5

function footballPoints(wins,ties) {
  // seu código aqui
  let pontos=((wins*3)+ties);
  return(pontos)
}

// Desafio 6

function highestCount(array) {
  let maior=0,c=0;
  for (let key in array)
  {
      for (let key2 in array)
          if (array[key]>array[key2]){
              if (array[key]>maior){
                  maior=array[key];
              }
              else{
                  maior=maior;
              }
          }
          else
          {   
              if (array[key2>maior]){
                  maior=array[key2];
                 
              }
              else{
                  maior=maior;
              }
          }
  }
  for (let i=0; i<array.length; i++)
  {
    if (maior == array[i])
    {
      c++;
    }
  }
  return(c);
}

// Desafio 7

function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let gato1 = cat1 - mouse;
  let gato2 = cat2 - mouse;
  if (gato1<0)
  {
    gato1=gato1*(-1);
  }
  if (gato2<0)
  {
    gato2=gato2*(-1);
  }
  let c="os gatos trombam e o rato foge"
  if (gato1>gato2)
  {
    return("cat2");
  }
  else
  {
    if (gato1==gato2)
    {
      return(c);
    }
    else
    {
      return("cat1");
    }
  }
}

// Desafio 8

function fizzBuzz(array) {
  // seu código aqui
  let array_r=[];
  for (let key in array)
  {
    if (array[key]%3 == 0 && array[key]%5 == 0)
    {
      array_r[key]="fizzBuzz";
    }
    else
    {
      if (array[key]%5==0)
      {
        array_r[key]="buzz"
      }
      else
      {
        if (array[key]%3==0)
        {
          array_r[key]="fizz"
        }
        else
        {
          array_r[key]="bug!"
        }
      }
    }
  }
  return(array_r);
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
