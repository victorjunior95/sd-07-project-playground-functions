// Desafio 1
function compareTrue(valor1, valor2) {
  let a = valor1;
  let b = valor2;
  let resposta = false;
  if (a == true && b == true){
    resposta = true;
    console.log(resposta);
  }else{
    console.log(resposta);
  }
  return resposta;
}
compareTrue(false, true);

// Desafio 2
function calcArea(base, height) {
  let a = base;
  let b = height;
  let area = 0;
  area = ((a * b) / 2);
 return area;
}

// Desafio 3
function splitSentence(param) {
  let string = param;
  let retorno = string.split('');
return retorno; 
}

// Desafio 4
function concatName(param) {
  let ultMaisprimeiro = param[param.length -1] +', '+ param[0];
  return ultMaisprimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins;
  let empates = ties;
  let pontosVitoria = 3;
  let pontoEmpate = 1;
  let total = 0;
  total = (vitorias * pontosVtoria) + (empates * pontoEmpate);
  return total;
}

// Desafio 6
function highestCount(param) {
  let numeros = param;
  let maior = 0;
  let cont = 0; 
  for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > maior){
      maior = numeros[i];
    }
  }
  for (let j = 0; j < numeros.length; j++){
    if (numeros[j] == maior){
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let rato = mouse;
  let gato1 = cat1;
  let gato2 = cat2;
  let dist_cat1;
  let dist_cat2;
  let retorno;
  dist_cat1 = (Math.abs(gato1 - rato));
  dist_cat2 = (Math.abs(gato2 - rato));

  if (dist_cat1 === dist_cat2) {
    retorno = "os gatos trombam e o rato foge";
  }else if(dist_cat1 < dist_cat2){
      retorno = "cat1";
  }else{
      retorno = "cat2";
  }
    return retorno;
}

// Desafio 8
let numeros = [9,25];
function fizzBuzz(param) {
  let retorno = new Array;
  let matriz = param;
  for (let i = 0; i < matriz.length; i += 1){
    if (matriz[i] % 3 == 0 && matriz[i] % 5 == 0){
      retorno.push("fizzBuzz");
    }else if (matriz[i] % 3 == 0){
        retorno.push("fizz");
    }else if (matriz[i] % 5 == 0){
        retorno.push("buzz")
    }else{
      retorno.push("bug!")
    }
  }
  return retorno;
}
console.log(fizzBuzz(numeros));

// Desafio 9
function encode(nome) {
  new_palavra = [];
  for (let i = 0; i < nome.length; i++){
    new_palavra.push(nome[i]);
  }
  for (let i = 0; i < new_palavra.length; i++){
    if (new_palavra[i] === "a"){
        new_palavra[i] = "1";
    }else if (new_palavra[i] === "e"){
        new_palavra[i] = "2";
    }else if (new_palavra[i] === "i"){
        new_palavra[i] = "3";
    }else if (new_palavra[i] === "o"){
        new_palavra[i] = "4";
    }else if (new_palavra[i] === "u"){
        new_palavra[i] = "5";
    }
  }
  new_palavra = new_palavra.join('').toString();
  return new_palavra;
}
function decode(nome) {
  new_palavra = [];
  for (let i = 0; i < nome.length; i++){
    new_palavra.push(nome[i]);
  }
  for (let i = 0; i < new_palavra.length; i++){
    if (new_palavra[i] === "1"){
        new_palavra[i] = "a";
    }else if (new_palavra[i] === "2"){
        new_palavra[i] = "e";
    }else if (new_palavra[i] === "3"){
        new_palavra[i] = "i";
    }else if (new_palavra[i] === "4"){
        new_palavra[i] = "o";
    }else if (new_palavra[i] === "5"){
        new_palavra[i] = "u";
    }
  }
  new_palavra = new_palavra.join('').toString();
  return new_palavra;
}
// Desafio 10
function techList(tech,name) { 
  let tecnologia = tech; 
  let nome = name;
  let tec_retorno = [];
  let x;
  if (tecnologia.length == 0){
    tec_retorno = "Vazio!";
  }else{
    for (let i = 0; i < tecnologia.length; i++){
      tec_retorno[i] = {tech: tecnologia[i], name: nome}
    }
  }
  for (let i = 0; i < tec_retorno.length -1; i++){
    for (let j = i + 1; j < tec_retorno.length; j++){
      if (tec_retorno[i].tech > tec_retorno[j].tech){
        x = tec_retorno[i];
        tec_retorno[i] = tec_retorno[j];
        tec_retorno[j] = x;
      }
    }
  }
  return tec_retorno;
}
// Desafio 11
function generatePhoneNumber(param) {
  let numeros = param;
  let retornarphone;
  let cont = 0;
  if (numeros.length != 11){
    retornarphone = "Array com tamanho incorreto";
  }else{
    for (let i = 0; i < numeros.length; i++){
      if (numeros[i] < 0 || numeros[i] > 9){
        retornarphone = "não é possível gerar um número de telefone com esses valores";
      }else{
        for (let j = i + 1; j < numeros.length; j++){
          if (numeros[i] == numeros[j]){
            cont++;
          }
        }
      }
    }
    if (cont >= 3){
      retornarphone = "não é possível gerar um número de telefone com esses valores";
    }else{
      retornarphone = numeros.join('').toString();
      console.log('('+retornarphone[0]+retornarphone[1]+')'+' '+retornarphone[2]+retornarphone[3]+retornarphone[4]+retornarphone[5]+retornarphone[6]+'-'+retornarphone[7]+retornarphone[8]+retornarphone[9]+retornarphone[10]);
    }
  }
  return retornarphone;
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
