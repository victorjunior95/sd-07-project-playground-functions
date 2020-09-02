// Desafio 1
function compareTrue(valor1, valor2) {
  return (valor1 && valor2);
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  return String(string).split(' ');
}

// Desafio 4
function concatName(string) {

  let contaString = 0;

  for (const key in string) {
    contaString = key;
  }

  let newString = `${string[contaString]}, ${string[0]}`;
  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(vetor) {
  let maiorRepeticao = 0;
    let objMaior = {};

    /**Monta um objeto com os valores do array inicial sendo a chave 
     * do objeto. Dentro do segundo for passo a contar quantas vezes cada 
     * chave se repete e sigo guardando esse resultado dentro do atributo 
     * da chave
     */
    for (const i in vetor) {
        objMaior[vetor[i]] = 0;

        for (const j in vetor) {
            if (vetor[i] === vetor[j]) {
                objMaior[vetor[i]] += 1;
            }
        }
    }

    maiorRepeticao = objMaior[2];
    for (const key in objMaior) {
        if (maiorRepeticao < objMaior[key]) {
            maiorRepeticao = objMaior[key];
        }
    }


    return maiorRepeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = 0;
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);

  if(cat1 === cat2){
      resultado = "os gatos trombam e o rato foge";
  }else{
      resultado = (cat1 > cat2) ? "cat2" : "cat1";
  }
  
  return resultado;
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
