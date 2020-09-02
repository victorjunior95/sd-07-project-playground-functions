// Desafio 1
function compareTrue(bolean1, bolean2) {
  if (bolean1 && bolean2) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highest = Math.max(...numbers);
  let count = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === highest) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs((cat1 - mouse));
  let distance2 = Math.abs((cat2 - mouse));
  if (distance1 > distance2) return 'cat2';
  else if (distance2 > distance1) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let answer = []
  for (let i in numbers) {
    if ((numbers[i] % 3 === 0) && (numbers[i] % 5 === 0)) answer.push('fizzBuzz');
    else if (numbers[i] % 3 === 0) answer.push('fizz');
    else if (numbers[i] % 5 === 0) answer.push('buzz');
    else answer.push('bug!');
  }
  return answer;
}

// Desafio 9
function encode(encodingString) {
  let res = encodingString.replace(/a/g , '1');
  res = res.replace(/e/g , '2');
  res = res.replace(/i/g , '3');
  res = res.replace(/o/g , '4');
  res = res.replace(/u/g , '5');
  return res;
}
function decode(decodingString) {
  let res = decodingString.replace(/1/g , 'a');
  res = res.replace(/2/g , 'e');
  res = res.replace(/3/g , 'i');
  res = res.replace(/4/g , 'o');
  res = res.replace(/5/g , 'u');
  return res;
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
