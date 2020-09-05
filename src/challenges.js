// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } return false;
}
console.log(compareTrue(0 < 1, 1 < 2)); // true
console.log(compareTrue(0 !== 1, 1 > 2)); // false


// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(2, 4)); // 4


// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}
console.log(splitSentence('go Trybe')); // ['go', 'Trybe']


// Desafio 4
function concatName(arrayString) {
  let firstItem = arrayString[0];
  let lastItem = arrayString[arrayString.length - 1];
  let string = lastItem.concat(', ', firstItem);
  return string;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])); // Paolillo, Lucas


// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let totalPoints = winsPoints + tiesPoints;
  return totalPoints;
}
console.log(footballPoints(2, 1)); // 7


// Desafio 6
function highestCount(numbers) {
  let highestNumber = 0;
  let countNumber = 0;
  for (let i in numbers) {
    if (highestNumber < numbers[i]) {
      highestNumber = numbers[i];
      countNumber = 1;
    } else if (highestNumber === numbers[i]) {
      countNumber += 1;
    }
  }
  return countNumber;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7])) // 2


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(0, 1, 2)) // cat1
console.log(catAndMouse(0, 2, 1)) // cat2
console.log(catAndMouse(0, 3, 3)) // os gatos trombam e o rato foge


// Função para auxiliar no refatoramento do desafio 8
function fizzBuzzAux(array) {
  if (array % 3 === 0) {
    return 'fizz';
  } else if (array % 5 === 0) {
    return 'buzz';
  } else {
    return 'bug!';
  }
}
// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else {
      newArray.push(fizzBuzzAux(array[i]))
    }
  }
  return newArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))  // ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]


// Desafio 9
function encode(phrase) {
  let newCod = '';
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  let number = [1, 2, 3, 4, 5];
  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase[i] === vowel[i]) {
      newCod += number[i];
    } else {
      newCod += phrase[i];
    }
  }
  return newCod;
}
function decode(phrase) {
  let newDec = '';
  let number = [1, 2, 3, 4, 5];
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let j in phrase) {
    if (phrase[j] !== number[j]) {
      newDec += phrase[j];
    } else {
      newDec += vowel[j];
    }  
  }
  return newDec;
}
console.log(encode('hi there!'))  // h3 th2r2!
console.log(decode('h3 th2r2!'))  // hi there!


// Desafio 10
function techList(array, name) {
  if (array.length !== 0) {
    let createObject = [];
    array.sort();
    for (let item in array) {
      createObject.push({
        tech: array[item],
        name: name,
      });
    } return createObject;
  } return 'Vazio!';
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Ana'))
/* Saída:

[
  {
    tech: "CSS",
    name: "Ana"
  },
  {
    tech: "HTML",
    name: "Ana"
  },
  {
    tech: "JavaScript",
    name: "Ana"
  },
  {
    tech: "Jest",
    name: "Ana"
  },
  {
    tech: "React",
    name: "Ana"
  }
]

*/


// Desafio 11
function generatePhoneNumber(phone) {
// Verifica se o array tem tamanho diferente de 11:
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
// Verifica se algum dos números do array é menor que 0 ou maior que 9:
  for (let i = 0; i < phone.length; i += 1) {
    if (phone[i] < 0 || phone[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
// Verifica se algum dos números do array repete 3 vezes ou mais:
  let countRepeat = 0;
  for (let j = 0; j < phone.length; j += 1) {
    countRepeat = 0;
    for (let k = 0; k < phone.length; k += 1) {
      if (phone[j] === phone[k]) {
        countRepeat += 1;
      }
    }
    if (countRepeat >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // Retorna número de telefone, respeitando parênteses, traços e espaços:
  phone.splice(0, 0, '(');
  phone.splice(3, 0, ')');
  phone.splice(4, 0, ' ');
  phone.splice(10, 0, '-');
  return phone.join('');
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let condA = (lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC));
  let condB = (lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC));
  let condC = (lineC < lineA + lineB) && (lineC > Math.abs(lineA - lineC));
  if (condA && condB && condC) {
    return true;
  } return false;
}
console.log(triangleCheck(10, 14, 8))


// Desafio 13
function hydrate(string) {
  let sum = 0;
  let numbers = string.match(/\d+/g).map(Number);
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  } return `${sum} copos de água`;
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'))


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
