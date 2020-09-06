// Desafio 1

let a = Boolean;
let b = Boolean;

function compareTrue(a, b) {
  // seu código aqui

  if (a === true && b === true) {
    return true
  } else {
    return false
  }
}
//console.log(compareTrue(true, true))

// Desafio 2
let base = 0;
let height = 0;

function calcArea(base, height) {
  // seu código aqui
  if (base > 0 && height > 0) {
    let area = base * height / 2;
    return area
  } else {
    return "Digite um valor válido"
  }
}
//console.log(calcArea(4, 5));

// Desafio 3
let str = "go Trybe";
function splitSentence(str) {
  // seu código aqui
  let res = str.split (/[ ,]+/);
  return res
}
//console.log(splitSentence(str));

// Desafio 4
let arrayStr = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(arrayStr) {
  // seu código aqui
  let first = arrayStr[0];
  let last = arrayStr[arrayStr.length-1];
  let newStr = "";
  newStr = last + ", " + first;
  return newStr
}
//console.log(concatName(arrayStr));

// Desafio 5
let wins = 0;
let ties = 0;

function footballPoints(wins, ties) {
  // seu código aqui
  if (wins >= 0 && ties >= 0) {
    let winsTotal = wins * 3;
    let pontos = winsTotal + ties;
    return pontos
  } else {
    return "Favor verifique os dados inseridos"
  }
}
//console.log(footballPoints(7, 1));

// Desafio 6
let numbers = [9, 1, 2, 3, 9, 5, 7];

function highestCount(numbers) {
  // seu código aqui
  numbers.sort((a,b)=>b-a);

  if (numbers.length > 0) {
    let biggest = 0;
    let counts = 0;
    
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] >= biggest) {
        biggest = numbers[i];
        counts += 1;
      }
    }
    return counts;
  } else {
    return "Favor verifique os dados inseridos"
  }
}
//console.log(highestCount(numbers));

// Desafio 7
let cat1 = 9;
let cat2 = 8;
let mouse = 15;

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dist1 = 0;
  let dist2 = 0;
  if (cat1 >= 0 && cat2 >= 0 && mouse >=0) {
    //1) Distância mouse e cat1:
    if (mouse > cat1) {
      dist1 = mouse - cat1;
    } else if (cat1 >= mouse) {
      dist1 = cat1 - mouse; 
    }
    //2) Distância mouse e cat2:
    if (mouse > cat2) {
      dist2 = mouse - cat2;
    } else if (cat2 >= mouse) {
      dist2 = cat2 - mouse;
    }
    //3) Distância entre mouse, cat1 e cat2:
    if (dist1 === dist2) {
      return "os gatos trombam e o rato foge"
    //4) Menor distância:
    } else if (dist1 < dist2) {
      return "cat1"
    } else if (dist2 < dist1) {
      return "cat2"
    }
    } else {
    return "Favor, insira dados válidos"
  }

}
//console.log(catAndMouse(mouse, cat1, cat2));

// Desafio 8
let numbersArr =  [2, 15, 7, 9, 45];

function fizzBuzz(numbersArr) {
  // seu código aqui
  let nStr = "";
  let nArr = [];
  if (numbersArr.length > 0) {
    for (let i = 0; i < numbersArr.length; i += 1) {
      if (numbersArr[i] % 5 === 0 && numbersArr[i] % 3 === 0) {
        nStr = "fizzBuzz";
      } else if (numbersArr[i] % 5 === 0) {
        nStr = "buzz";
      } else if (numbersArr[i] % 3 === 0) {
        nStr = "fizz";
      } else {
        nStr = "bug!";
      }
      nArr.push(nStr);
    }
    return nArr
  } else {
    return "Favor verifique os dados inseridos"
  }
}
//console.log(fizzBuzz(numbersArr));

// Desafio 9
let myStr = "hi there!";

function encode(myStr) {
  // seu código aqui
  let vowels = myStr.replace(/a/gi, "1");
  let vowel = vowels.replace(/e/gi, "2");
  let vowe = vowel.replace(/i/gi, "3");
  let vow = vowe.replace(/o/gi, "4");
  let vo = vow.replace(/u/gi, "5");
  return  vo
}
//console.log(encode(myStr));
let myOtherStr = "h3 th2r2!";

function decode(myOtherStr) {
  // seu código aqui
  let myNumbers = myOtherStr.replace(/1/g, "a");
  let myNumber = myNumbers.replace(/2/g, "e");
  let myNumbe = myNumber.replace(/3/g, "i");
  let myNumb = myNumbe.replace(/4/g, "o");
  let myNum = myNumb.replace(/5/g, "u");
  return myNum
}
//console.log(decode(myOtherStr));

// Desafio 10

let tech = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = "Lucas";

function techList(tech, name) {
  // seu código aqui
  let techArray = [];
  tech.sort();

  if (tech.length === 0) {
    return "Vazio!"
  } else {
    for (let t in tech) {
      techArray.push ({
        tech: tech[t],
        name: name,
      })
    }
  }
  return techArray
}
//console.log(techList(tech, name));

// Desafio 11
let phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

function generatePhoneNumber(phoneNumber) {
  // seu código aqui
  //Verificar se o tamanho do array é 11:
  if (phoneNumber.length !== 11) {
    return "Array com tamanho incorreto"
  } else {
    //Estabelecer contagem de números repetidos:
    let count = 0;
    for (let p in phoneNumber) {
      for (let k in phoneNumber) {
        if (phoneNumber[p] === phoneNumber[k]) {
          count += 1;
        }
      }
      //Verificar se os números vão de 1 a 9 e se os números não se repetem mais de 3 vezes:
      if (phoneNumber[p] < 0 || phoneNumber[p] > 9 || count >= 3) {
        return "não é possível gerar um número de telefone com esses valores"
      }
      //Retornar o número válido:
      else {
        return "(" + phoneNumber[0] + phoneNumber[1] + ") " + phoneNumber[2] + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] + "-" + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10]
      }
    }  
  }
}
console.log(generatePhoneNumber(phoneNumber));

// Desafio 12
let lineA = 4;
let lineB = 7;
let lineC = 8;

function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  var res = Boolean;
  var abs = function (num1, num2) {
    return Math.abs(num1 - num2)
  }

  if (lineA > 0 && lineB > 0 && lineC > 0) {
    if ((lineA < lineB + lineC) && (lineA > abs(lineB, lineC)) && (lineB < lineA + lineC) && (lineB > abs(lineA, lineC)) && (lineC < lineA + lineB) && (lineC > abs(lineA, lineB))) {
      res = true;
    } else {
      res = false;
    }
  } else {
    res = false;
  }
  return res;
}
//console.log(triangleCheck(lineA, lineB, lineC));

// Desafio 13
let drink = "1 cachaça";

function hydrate(drink) {
  // seu código aqui
  let total = 0;

  if (drink.length > 0) {
    var water = drink.match(/\d+/g).map(Number); //water é array
    for (let w = 0; w < water.length; w += 1) {
      if (water.length === 1 && water[w] === 1) {
        total = water + " copo de água"
      } else {
        total = water.reduce((total, currentElement) => total + currentElement) + " copos de água"
      }
    }
  } else {
    total = 0 + " copos de água";
  }
  return total 
}
//console.log (hydrate(drink));

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
