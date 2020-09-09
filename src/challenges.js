// Desafio 1

function compareTrue(valorA, valorB) {
  return valorA && valorB;
}

// Desafio 2

function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3

function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  let nomes = '';
  nomes += array[array.length - 1];
  nomes += ', ';
  nomes += array[0];
  return nomes;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = 0;
  total = (wins * 3) + ties;
  return total;
}

// Desafio 6

function verificaMaiorValor(numeros) {
  let maiorValor = 0;
  for (let i in numeros) {
    if (numeros[i] > maiorValor) {
      maiorValor = numeros[i];
    }
  }
  return maiorValor;
}

function highestCount(numeros) {
  // verifica maior valor
  let maiorValor = verificaMaiorValor(numeros);

  // verifica repetição
  let repeticao = 0;
  for (let i in numeros) {
    if (numeros[i] === maiorValor) {
      repeticao += 1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // calcula distâncias
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);

  // verifica qual está mais perto
  let msg = '';
  if (distancia1 > distancia2) {
    msg = 'cat2';
  } else if (distancia1 < distancia2) {
    msg = 'cat1';
  } else {
    msg = 'os gatos trombam e o rato foge';
  }
  return msg;
}

// Desafio 8
function isDividedFor(value) {
  let msg = '';
  if (value % 3 === 0 && value % 5 === 0) {
    msg = 'fizzBuzz';
  } else if (value % 3 === 0) {
    msg = 'fizz';
  } else if (value % 5 === 0) {
    msg = 'buzz';
  } else {
    msg = 'bug!';
  }
  return msg;
}

function fizzBuzz(numeros) {
  let msg = [];
  for (let i in numeros) {
    if (Object.prototype.hasOwnProperty.call(numeros, i)) {
      msg.push(isDividedFor(numeros[i]));
    }
  }
  return msg;
}

// Desafio 9
function encode(frase) {
  let msg = [];
  for (let i in frase) {
    if (Object.prototype.hasOwnProperty.call(frase, i)) {
      switch (frase[i]) {
        case 'a':
          msg.push('1');
          break;
        case 'e':
          msg.push('2');
          break;
        case 'i':
          msg.push('3');
          break;
        case 'o':
          msg.push('4');
          break;
        case 'u':
          msg.push('5');
          break;
        default:
          msg.push(frase[i]);
      }
    }
  }
  return msg.join('');
}

function decode(frase) {
  let msg = [];
  for (let i in frase) {
    if (Object.prototype.hasOwnProperty.call(frase, i)) {
      switch (frase[i]) {
        case '1':
          msg.push('a');
          break;
        case '2':
          msg.push('e');
          break;
        case '3':
          msg.push('i');
          break;
        case '4':
          msg.push('o');
          break;
        case '5':
          msg.push('u');
          break;
        default:
          msg.push(frase[i]);
      }
    }
  }
  return msg.join('');
}

// Desafio 10
function techList(techName, name) {
  if (techName === '' || techName.length === 0) {
    return 'Vazio!';
  }
  let objectList = [];
  for (let i in techName.sort()) {
    if (Object.prototype.hasOwnProperty.call(techName, i)) {
      let obj = {
        tech: '',
        name: '',
      };
      obj.tech = techName[i];
      obj.name = name;
      objectList.push(obj);
    }
  }
  return objectList;
}

// Desafio 11

// verifica se o número possui 11 algarismos
function elevenLength(valueArray) {
  if (valueArray.length === 11) {
    return true;
  }
  console.log('Array com tamanho incorreto.');
  return false;
}

// verifica algarismo menor que zero ou maior que 9
function digitVerify(valueArray) {
  for (let i in valueArray) {
    if (valueArray[i] < 0 || valueArray[i] > 9) {
      console.log('não é possível gerar um número de telefone com esses valores');
      return false;
    }
  }
  return true;
}

// verifica se algum algarismo repete mais de 3 vezes
function repeatVerify (valueArray) {
  for (let i in valueArray) {
    if (Object.prototype.hasOwnProperty.call(valueArray, i)) {
      let algarismo = valueArray[i];
      let repeticao = 0;
      for (let j in valueArray) {
        if (algarismo === valueArray[j]) {
          repeticao += 1;
        }
      }
      if (repeticao >= 3) {
        console.log('não é possível gerar um número de telefone com esses valores');
        return false;
      }
    }
  }
  return true;
}

function generatePhoneNumber(phoneNumber) {
  if (
    elevenLength(phoneNumber) &&
    digitVerify(phoneNumber) &&
    repeatVerify(phoneNumber)
    ) {
      let formatedPhoneNumber = '(';
      for (let i in phoneNumber) {
        if (i === '1') {
          formatedPhoneNumber += `${phoneNumber[i]}) `;
        } else if (i === '6') {
          formatedPhoneNumber += `${phoneNumber[i]}-`;
        } else {
          formatedPhoneNumber += `${phoneNumber[i]}`;
        }
      }
      return formatedPhoneNumber;
  }  
}console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
    lineA <= lineB + lineC &&
    lineB <= lineA + lineC &&
    lineC <= lineB + lineA
  ) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(frase) {
  let newFrase = frase.split(' ');
  let quantidades = 0;
  let mensagem = '';
  for (let i in newFrase) {
    if (Object.prototype.hasOwnProperty.call(newFrase, i)) {    
      let inteiro = parseInt(newFrase[i], 10);
      if (!isNaN(inteiro)) {
        quantidades += inteiro;
      }
    }
  }
  switch (quantidades) {
    case 0:
      mensagem = 'Você não bebeu nada ainda';
      break;
    case 1:
      mensagem = '1 copo de água';
      break;
    default:
      mensagem = `${quantidades} copos de água`
  }
  return mensagem;
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
