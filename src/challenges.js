// Desafio 1 -
function compareTrue(value1, value2) {
  if (value1 && value2) {
  return true;
  } else {
    return false;
  }
}
// console.log(compareTrue(false,false));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// console.log(calcArea(10, 4));

// Desafio 3
function splitSentence(word) {
  let arrayWord = word.split(' '); // esta função já divide uma string de acordo com o separador que vc define
  return arrayWord;
}
//console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length-1];
  return `${ultimoNome}, ${primeiroNome}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
//console.log(footballPoints(10, 3));

// Desafio 6
function highestCount(num) {
  let maiorValor = 0;
  let contador = 0;

  for (let i in num){
    if (num[i] >= maiorValor) {
      maiorValor = num[i];
    }
  }
  for (let j in num){
    if (num[j] === maiorValor) {
      contador += 1;
    }
  }
return contador;
}
//console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;

  if (distCat1 < 0) {
    distCat1 *= -1;
  }
  if (distCat2 < 0) {
    distCat2 *= -1;
  }
  if (distCat1 < distCat2) {
    return "cat1";
  } else if (distCat2 < distCat1) {
    return "cat2";
  } else {
    return("os gatos trombam e o rato foge");
  }
}
//console.log(catAndMouse(10, 4, 22));

// Desafio 8
function fizzBuzz(num) {
  let arrayNovo = [];
  for (let i = 0; i < num.length; i += 1) {
    if (num[i] % 3 === 0 && num[i] % 5 === 0) {
      arrayNovo.push("fizzBuzz");
    } else if (num[i] % 3 === 0) {
      arrayNovo.push("fizz");
    } else if (num[i] % 5 === 0) {
      arrayNovo.push("buzz");
    } else {
      arrayNovo.push("bug!");
    }
  }
return arrayNovo;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(word) {
  let armazena = [];
  let wordEncode = "";
  for (let i = 0; i < word.length; i += 1) {
    armazena.push(word[i]);
  }

  for (let i = 0; i < armazena.length; i += 1) {
    if (armazena[i] == "a"){
      wordEncode = `${wordEncode}1`;
    } else if (armazena[i] == "e") {
      wordEncode = `${wordEncode}2`;
  } else if (armazena[i] == "i") {
    wordEncode = `${wordEncode}3`;
  } else if (armazena[i] == "o") {
    wordEncode = `${wordEncode}4`;
  } else if (armazena[i] == "u") {
    wordEncode = `${wordEncode}5`;
  } else {
    wordEncode = `${wordEncode}${armazena[i]}`;
  }
}
return wordEncode;
}

function decode(word) {
  let armazena = [];
  let wordDecode = "";
  for (let i = 0; i < word.length; i += 1) {
    armazena.push(word[i]);
  }

  for (let i = 0; i < armazena.length; i += 1) {
    if (armazena[i] == "1"){
      wordDecode = `${wordDecode}a`;
    } else if (armazena[i] == "2") {
      wordDecode = `${wordDecode}e`;
  } else if (armazena[i] == "3") {
    wordDecode = `${wordDecode}i`;
  } else if (armazena[i] == "4") {
    wordDecode = `${wordDecode}o`;
  } else if (armazena[i] == "5") {
    wordDecode = `${wordDecode}u`;
  } else {
    wordDecode = `${wordDecode}${armazena[i]}`;
  }
}
return wordDecode;
}
//console.log(encode("hi there!"));
//console.log(decode("h3 th2r2!"));

// Desafio 10
function techList(nomeTech, name) {
  let novaLista = [];
  nomeTech.sort(); // Ordenando o Array primeiro
  if (nomeTech.length == 0){ // Verificando se o array está vazio
    return "Vazio!";
  } else {
  for (let i in nomeTech){
    novaLista.push(techNome = {
      tech: nomeTech[i],
      name: name
    })
  }
  return novaLista;
}
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));


// Desafio 11
function generatePhoneNumber(numbers) {
  let numTel = "(";
  let numInvalido = false;
  let repetido = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9){
      numInvalido = true;
    }
  }

  for (let i = 0; i < numbers.length; i += 1) { // Verifica o número que se repete mais vezes
    let cont = 1;
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] === numbers[j]) {
        cont += 1;
      }
      if (cont > repetido){ // armazena o número que mais se repete
        repetido = cont;
      }
    }
  }

  if (numbers.length != 11){ // se o tamanho do array for diferente de 11
    return "Array com tamanho incorreto.";
  }
  else if (numInvalido === true || repetido >= 3) {
    return "não é possível gerar um número de telefone com esses valores"
  }
  else {
  for (let i = 0; i < 2; i += 1) {
    numTel += numbers[i];
  }
  numTel = `${numTel}) `;

  for (let j = 2; j < 7; j += 1) {
    numTel += numbers[j];
  }
  numTel = `${numTel}-`;

  for (let k = 7; k < 11; k += 1) {
    numTel += numbers[k];
  }
    return numTel;
}
}
//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  let difAB = Math.abs(lineA - lineB);
  let difBC = Math.abs(lineB - lineC);
  let difCA = Math.abs(lineC - lineA);


  if (lineA < (lineB + lineC) && lineB <(lineA + lineC) && lineC < (lineB + lineA) && lineA > difBC && lineB > difCA && lineC > difAB) {
    isTriangle = true;
  }
return isTriangle;
}
//console.log(triangleCheck(10, 14, 8));
// Desafio 13
function hydrate(comanda) {
  let numBebidas = comanda.match(/\d/g);
  let somaComanda = 0;
  for (let i in numBebidas) {
    somaComanda = somaComanda + parseInt(numBebidas[i]);
  }
  if (somaComanda === 1) {
    return `${somaComanda} copo de água`;
  } else {
    return `${somaComanda} copos de água`;
}
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
