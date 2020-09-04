
// Desafio 1
function compareTrue(a, b) {
  let result = (a === true && b === true) ? true : false;
  return (result)
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return (area);
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return (array);
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  let string = (`${lastItem}, ${firstItem}`);
  return (string);
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins *= 3) + (ties *= 1);
  return (pontos);
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let numeroRepeat = 0;
  for (let i in array) {
    maiorNumero = (maiorNumero < array[i]) ? maiorNumero = array[i] : maiorNumero;
  }
  for (let i in array) {
    numeroRepeat = (maiorNumero === array[i]) ? numeroRepeat += 1 : numeroRepeat += 0;
  }
  return numeroRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = '';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    resultado = 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    resultado = 'cat2';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return (resultado)
}


// Desafio 8
function fizzBuzz(array) {
  let string = [];
  for (let i in array) {
   if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      string.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      string.push('fizz');
    } else if (array[i] % 5 === 0) {
      string.push('buzz');
    } else {
      string.push('bug!');
    }
  }
  return string;
}

// Desafio 9
function encode(string) {
  let newString = '';
  newString = string.replace(/a/g, '1');
  let newString1 = newString.replace(/e/g, '2');
  let newString2 = newString1.replace(/i/g, '3');
  let newString3 = newString2.replace(/o/g, '4');
  let newString4 = newString3.replace(/u/g, '5');
  return (newString4)
}
function decode(string) {
  let newString = '';
  newString = string.replace(/1/g, 'a');
  let newString1 = newString.replace(/2/g, 'e');
  let newString2 = newString1.replace(/3/g, 'i');
  let newString3 = newString2.replace(/4/g, 'o');
  let newString4 = newString3.replace(/5/g, 'u');
  return (newString4)
}

// Desafio 10
function techList(array, name) {
  let nArray = [];
  let nItem = '';
  let sArray = [];
  if (array.length === 0) {
    return ('Vazio!')
  }
  sArray = array.sort();
  for (let i in sArray) {
    nItem = {
      tech: sArray[i],
      name: name,
    }
    nArray.push(nItem);
  }
  return (nArray)
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
