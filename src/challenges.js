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
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let name = array[array.length - 1] + `, ` + array[0];
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
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  distCat1 = Math.abs(distCat1);
  let distCat2 = cat2 - mouse;
  distCat2 = Math.abs(distCat2);

  if (distCat1 < distCat2) {
    return "cat1";
  } else if (distCat2 < distCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      newArray[i] = "fizzBuzz";
    } else if (array[i] % 3 === 0) {
      newArray[i] = "fizz";
    } else if (array[i] % 5 === 0) {
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
  for (let i in text) {
    if (text[i] === "a") {
      modified[i] = "1";
    } else if (text[i] === "e") {
      modified[i] = "2";
    } else if (text[i] === "i") {
      modified[i] = "3";
    } else if (text[i] === "o") {
      modified[i] = "4";
    } else if (text[i] === "u") {
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
  for (let i in text) {
    if (text[i] === "1") {
      modified[i] = "a";
    } else if (text[i] === "2") {
      modified[i] = "e";
    } else if (text[i] === "3") {
      modified[i] = "i";
    } else if (text[i] === "4") {
      modified[i] = "o";
    } else if (text[i] === "5") {
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
  if (array.length === 0) {
    return "Vazio!";
  } else {
    array = array.sort();
    for (let i in array) {
      objeto[i] = {
        tech: array[i],
        name: name,
      };
    }
    return objeto;
  }
}

// Desafio 11
function generatePhoneNumber(number) {
  let invalid = false;
  let ddd = [];
  let begin = [];
  let end = [];

  for (let i in number){
    let cont = 0;
    for (let j in number){
      if (number[i] === number[j]) {
        cont +=1;
      }
      if(cont>=3 || number[j] < 0 || number[j] > 9){
        invalid = true;
      }
    }    
  }
  if(number.length !== 11){
    return "Array com tamanho incorreto.";
  } else if (invalid === true){
    return "Array com tamanho incorreto."
  } else {
      for (let k = 0; k < 2; k += 1){
        ddd[k] = number[k];
      }
      for (let l = 2; l < 7; l += 1){
        begin[l] = number[l];
      }
      for (let m = 7; m < number.length; m += 1){
        end[m] = number[m];
      }
      ddd = ddd.join('');
      begin = begin.join('');
      end = end.join('');
      let result = `(${ddd}) ${begin}-${end}`;
      return console.log(result);
  }
}
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,0 , 1]);
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
};
