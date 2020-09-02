function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

function calcArea(base, height) {
  return ((base * height) / 2);
}

function splitSentence(sentença) {
  let splitedSentece = [];
  sentença = sentença.split(" ");
  for (const i of sentença) {
    splitedSentece.push(i);
  }
  return splitedSentece;
}

let a = true;
let b = true;
let num1 = 10;
let num2 = 5;
let sentença = "Olá, hoje está um belo dia.";

console.log(compareTrue(a, b));
console.log(calcArea(num1, num2));
console.log(splitSentence(sentença));