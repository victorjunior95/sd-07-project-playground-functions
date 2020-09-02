// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;  
}

// Desafio 4
function concatName(array) {
  let name = array[array.length-1] + `, ` + array[0];
  return name;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let cont = 0;
  for (let i in array) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  for (i in array) {
    if (array[i] === maior) {
      cont +=1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  let distCat2 = cat2 - mouse;

  if (distCat1 < distCat2) {
    return "cat1";
  } else if (distCat2 < distCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let i in array){
    if (array[i]%3 === 0 && array[i]%5 === 0) {
      newArray[i] = "fizzBuzz";
    } else if (array[i]%3 === 0){
      newArray[i] = "fizz";
    } else if (array[i]%5 === 0){
      newArray[i] = "buzz";
    } else {
      newArray[i] = "bug!";
    }
  }
  return newArray;
}

// Desafio 9
function encode(text) {
  let modified = [];
  for (let i in text){
    if (text[i] === "a"){
      modified[i] = "1";
    } else if (text[i] === "e"){
      modified[i] = "2";
    } else if (text[i] === "i"){
      modified[i] = "3";
    } else if (text[i] === "o"){
      modified[i] = "4";
    } else if (text[i] === "u"){
      modified[i] = "5";
    } else {
      modified[i] = text[i];
    }
  }
  modified = modified.join("");
  return modified;
}

function decode(text) {
  let modified = [];
  for (let i in text){
    if (text[i] === "1"){
      modified[i] = "a";
    } else if (text[i] === "2"){
      modified[i] = "e";
    } else if (text[i] === "3"){
      modified[i] = "i";
    } else if (text[i] === "4"){
      modified[i] = "o";
    } else if (text[i] === "5"){
      modified[i] = "u";
    } else {
      modified[i] = text[i];
    }
  }
  modified = modified.join("");
  return modified;
}

// Desafio 10
function techList(array, name) {
  let objeto = [];
  array = array.sort();
  for(let i in array){
    objeto[i] = {
      tech: array[i],
      name: name
    }
  }
  let resultado = objeto.sort();
  return resultado;
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
