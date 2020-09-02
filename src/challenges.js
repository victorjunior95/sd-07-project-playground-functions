// Desafio 1
function compareTrue(valor1,valor2) {
  // seu código aqui
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let arrayPalavras = str.split(" ");
  return arrayPalavras;
}

// Desafio 4
function concatName(concatenacao) {
  // seu código aqui
  let concat = concatenacao[concatenacao.length -1] + ', ' + concatenacao[0];
  //let concat=[]; //2ª opção
  //concat.push(concatenacao[concatenacao.length -1], concatenacao[0]);
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  // vitórias = 3 pts, empates = 1 pt.
  let point = (wins * 3) + ties;
  return point;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  contador = 0;
  numeroComparado = 0;
  maiorNumero = 0;

  for(index in numeros){
    if(index > maiorNumero){
      maiorNumero = numeros[index];
    }
  }
  for(comparando in numeros){
    if(maiorNumero == numeros[comparando]){
      contador++;
    }
  }
return contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resultCat1 = Math.abs(cat1 - mouse);
  let resultCat2 = Math.abs(cat2 - mouse);
  let resultadoFinal;
  if(resultCat1 < resultCat2){
    resultadoFinal = 'cat1';
  }
  else if(resultCat1 > resultCat2){
    resultadoFinal = 'cat2'
  }
  else{
    resultadoFinal = 'os gatos trombam e o rato foge';
  }
  return resultadoFinal;
}

// Desafio 8
function fizzBuzz(arrayNum) {
  // seu código aqui
  //'fizz' //3
  //'buzz' //5
  //'fizzBuzz' //3 e 5
  //'bug' //nenhum
  for(i = 0; i < arrayNum.length; i += 1){
    if(arrayNum[i] % 3 == 0 && arrayNum[i] % 5 == 0){
      arrayNum.splice(i, 1, 'fizzBuzz');
    }
    else if(arrayNum[i] % 3 == 0){
      arrayNum.splice(i, 1, 'fizz');
    }
    else if(arrayNum[i] % 5 == 0){
      arrayNum.splice(i, 1, 'buzz');
    }
    else{
      arrayNum.splice(i, 1, 'bug!');
    }
  }
return arrayNum;
}

// Desafio 9
function encode(arrayEncode) {
  // seu código aqui
  let cestaDeLetras = arrayEncode.split('');

  for(i = 0; i < cestaDeLetras.length; i += 1){
    if(cestaDeLetras[i] == 'a'){
      cestaDeLetras.splice(i, 1, '1');
    }
    else if(cestaDeLetras[i] == 'e'){
      cestaDeLetras.splice(i, 1, '2');
    }
    else if(cestaDeLetras[i] == 'i'){
      cestaDeLetras.splice(i, 1, '3');
    }
    else if(cestaDeLetras[i] == 'o'){
      cestaDeLetras.splice(i, 1, '4');
    }
    else if(cestaDeLetras[i] == 'u'){
      cestaDeLetras.splice(i, 1, '5');
    }
  }
  let novaCesta = cestaDeLetras.toString();
  let novaCesta2 = novaCesta.replace(/,/g,'');
  return novaCesta2;
}

function decode(strings) {
  // seu código aqui
  let cestaDoA = strings.replace(/1/g, 'a');
  let cestaDoB = cestaDoA.replace(/2/g, 'e');
  let cestaDoC = cestaDoB.replace(/3/g, 'i');
  let cestaDoD = cestaDoC.replace(/4/g, 'o');
  let cestaDoE = cestaDoD.replace(/5/g, 'u');
  return cestaDoE;
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
