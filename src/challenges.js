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
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
function fizzBuzz(numeros) {
  let msg = [];
  for (let i in numeros) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      msg.push('fizzBuzz');
    } else if (numeros[i] % 3 === 0) {
      msg.push('fizz');
    } else if (numeros[i] % 5 === 0) {
      msg.push('buzz');
    } else {
      msg.push('bug!');
    }
  }
  return msg;
}

// Desafio 9
function encode(frase) {
  let msg = [];
  for (let i in frase) {
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
  return msg.join('');
}

function decode(frase) {
  let msg = [];
  for (let i in frase) {
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
  return msg.join('');
}

// Desafio 10
function techList(techName, name) {
  if (techName === '' || techName.length === 0) {
    return 'Vazio!';
  }
  let objectList = [];
  for (let i in techName.sort()) {
    let obj = {
      tech: '',
      name: '',
    };
    obj.tech = techName[i];
    obj.name = name;
    objectList.push(obj);
  }
  return objectList;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  // verifica se o número possui 11 algarismos
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  // verifica algarismo menor que zero ou maior que 9
  for (let i in phoneNumber) {
    if (phoneNumber[i] < 0 || phoneNumber[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  // verifica se algum algarismo repete mais de 3 vezes
  for (let i in phoneNumber) {
    let algarismo = phoneNumber[i];
    let repeticao = 0;
    for (let j in phoneNumber) {
      if (algarismo === phoneNumber[j]) {
        repeticao += 1;
      }
    }
    if (repeticao >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

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
