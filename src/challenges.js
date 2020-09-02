// Desafio 1
function compareTrue(bolean1, bolean2) {
  // testando se o resultado é verdadeiro ou falso
  return bolean1 && bolean2 ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  // calculando a área de um triângulo
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(textString) {
  // retorna array de string separada pelos espaços
  let palavra = textString.split(' ');
  return palavra;
}

// Desafio 4
function concatName(textString) {
  // retornando posição final + inicial do array
  return `${textString[textString.length - 1]}, ${textString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(numbers) {
  // retorna repetição do maior número de array
  const myArrayValues = numbers;
  let greaterValue = 0;
  let greaterValueCounts = 0;

  for(let index in myArrayValues){
    if( myArrayValues[index] > greaterValue) {
      greaterValue = myArrayValues[index];
    } 
  }

  for(let i of myArrayValues){
    if(greaterValue === i) greaterValueCounts += 1;
  }

  return greaterValueCounts;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if(Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)){
    return "os gatos trombam e o rato foge";
  }else if(Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    return "cat2";
  }else if(Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return "cat1";
  }
}

// Desafio 8
function fizzBuzz(numbersArray) {
  // seu código aqui
  const numbers = numbersArray;
  let fizzBussReturned = [];

  for(let num of numbers){
    if(num % 3 === 0 && num % 5 !== 0){
      fizzBussReturned.push("fizz");
    }else if(num % 3 !== 0 && num % 5 === 0){
      fizzBussReturned.push("buzz");
    }else if(num % 3 === 0 && num % 5 === 0){
      fizzBussReturned.push("fizzBuzz");
    }else{
      fizzBussReturned.push("bug!");
    }
  }
  return fizzBussReturned;
}

// Desafio 9
function encode(textEncode) {
  // a -> 1 
  // e -> 2 
  // i -> 3 
  // o -> 4 
  // u -> 5
  let encoding = '';
  for(let i in textEncode){
    switch (textEncode[i]) {
      case 'a':
        encoding += 1;
        break;
      case 'e':
        encoding += 2;
        break; 
      case 'i':
        encoding += 3;
        break;
      case 'o':
        encoding += 4;
        break;
      case 'u':
        encoding += 5;
        break;
      default:
        encoding += textEncode[i];
        break;
    }
  }
  return encoding;

}
function decode(textDecode) {
  // 1 -> a
  // 2 -> e 
  // 3 -> i 
  // 4 -> o 
  // 5 -> u
  let decoding = '';
  for(let i in textDecode){
    switch (textDecode[i]) {
      case '1':
        decoding += 'a';
        break;
      case '2':
        decoding += 'e';
        break; 
      case '3':
        decoding += 'i';
        break;
      case '4':
        decoding += 'o';
        break;
      case '5':
        decoding += 'u';
        break;
      default:
        decoding += textDecode[i];
        break;
    }
  }
  return decoding;
}

// Desafio 10
function techList(techNames, name) {
  // seu código aqui
  
  const lists = techNames.sort();

  if(lists.length === 0 ) return "Vazio!";

  const listReturned = [];
  for(let list of lists){
    listReturned.push({
      tech: list,
      name: name
    })
  }
  return listReturned;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  // return phone number formated

  if(phoneNumber.length !== 11) return "Array com tamanho incorreto.";
  for(let i of phoneNumber){
    for(let j = 0; j < 10; j += 1){
      if(i !== j)return "não é possível gerar um número de telefone com esses valores";
    }
  }
  let phoneFormated = '(';
  for(let pos in phoneNumber){
    if(pos >= 0 && pos <= 1){
      phoneFormated += phoneNumber[pos];
      if(pos == 1) phoneFormated += ') ';
    }else if(pos >= 2 && pos <= 6){
      phoneFormated += phoneNumber[pos];
      if(pos == 6) phoneFormated += '-';
    }else if(pos >= 7 && pos <= 10){
      phoneFormated += phoneNumber[pos];
    }
  }

  const myArrayValues = phoneNumber;
  let countRepeatValue = 0;

  for(let i of myArrayValues){
    for(let j of myArrayValues){
      if(i === j) countRepeatValue += 1;
      if(countRepeatValue >= 3) return "não é possível gerar um número de telefone com esses valores";
    }
    countRepeatValue = 0;
  }


  return phoneFormated;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // checa se é um trinagulo
  let isTriangle = true;
  if(!(lineA <= lineB + lineC && lineA > Math.abs(lineB - lineC))) isTriangle = false;
  if(!(lineB <= lineA + lineC && lineB > Math.abs(lineA - lineC))) isTriangle = false;
  if(!(lineC <= lineA + lineB && lineC > Math.abs(lineA - lineB))) isTriangle = false;
  return isTriangle;
}

// Desafio 13
function hydrate(textString) {
  // seu código aqui
  let glassWater = 0;
  for(let num in textString){
    if(textString[num] == Number(textString[num])) glassWater += Number(textString[num])
  }

  return `${glassWater} copo${glassWater === 1 ? '' : 's'} de água`;
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
