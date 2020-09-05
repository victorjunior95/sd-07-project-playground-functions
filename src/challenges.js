// Desafio 1
function compareTrue(bol1, bol2) {
  let boolean = bol1 && bol2;
  return boolean;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(palavra) {
  let splits = palavra.split(' ');
  return splits;
}

// Desafio 4
function concatName(nomes) {
  let nomeArray = nomes;
  let result = [];
  for (let i = 0; i < nomeArray.length; i += 1) {
    nomeArray.splice(i + 1, nomes.length - 2);
  }
  for (let j = nomeArray.length - 1; j >= 0; j -= 1) {
    result.push(nomeArray[j]);
  }
  return result.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins;
  let empate = ties;
  if (vitoria > 0) {
    vitoria *= 3;
  }
  let result = vitoria + empate;
  return result;
}

// Desafio 6
function highestCount(repeat) {
  let array = repeat;
  let maior = 0;
  let count = 0;
  maior = Math.max(...array);
  for (let i of array) {
    if (maior === i) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rato = mouse;
  let gato1 = cat1;
  let gato2 = cat2;
  let distancia1 = 0;
  let distancia2 = 0;
  let result = '';
  distancia1 = rato - gato1;
  distancia2 = rato - gato2;
  if (distancia1 < 0) {
    distancia1 *= (-1);
  } else if (distancia2 < 0) {
    distancia2 *= (-1);
  }
  if (distancia1 > distancia2) {
    result = 'cat2';
  } else if (distancia1 < distancia2) {
    result = 'cat1';
  } else if (distancia1 === distancia2) {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(num) {
  let numbers = num;
  let palavra = '';
  let result = [];
  for (let i of numbers) {
    if (i % 3 === 0 && i % 5 !== 0) {
      palavra = 'fizz';
    } else if (i % 5 === 0 && i % 3 !== 0) {
      palavra = 'buzz';
    } else if (i % 3 === 0 && i % 5 === 0) {
      palavra = 'fizzBuzz';
    } else {
      palavra = 'bug!';
    }
    result.push(palavra);
  }
  return result;
}

// Desafio 9
function encode(palavras) {
  let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  let frase = palavras;
  let igual = [];
  for (let j = 0; j < frase.length; j += 1) {
    igual.push(frase[j]);
  }
  for (let j = 0; j < igual.length; j += 1) {
    for (let key in vogais) {
      if (key === igual[j]) {
        igual[j] = vogais[key];
      }
    }
  }
  return igual.join('');
}
function decode(palavras) {
  let vogais = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  let frase = palavras;
  let igual = [];
  for (let j = 0; j < frase.length; j += 1) {
    igual.push(frase[j]);
  }
  for (let j = 0; j < igual.length; j += 1) {
    for (let key in vogais) {
      if (key === igual[j]) {
        igual[j] = vogais[key];
      }
    }
  }
  return igual.join('');
}

// Desafio 10
function techList(tech, name) {
  let stack = tech;
  let nome = name;
  let result = [];
  let vazio = '';
  if (stack.length === 0) {
    vazio = 'Vazio!';
    return vazio;
  }
  stack.sort();
  for (let valor of stack) {
    let objeto = {
      tech: valor,
      name: nome,
    }
    result.push(objeto);
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(phone) {
  let tel = phone;
  let mensagem = '';
  let count = 0;
  let telefone = [];
  if (tel.length !== 11) {
    mensagem = 'Array com tamanho incorreto.';
    return mensagem;
  }
  for (let i = 0; i < tel.length; i += 1) {
    if (tel[i] < 0 || tel[i] > 9) {
      mensagem = 'não é possível gerar um número de telefone com esses valores';
      return mensagem;
    }
    for (let j = 1; j < i; j += 1) {
      if (tel[i] === tel[j]) {
        count += 1;
      }
      if (count > 2) {
        mensagem = 'não é possível gerar um número de telefone com esses valores';
        return mensagem;
      }
    }
  }
  for (let k of tel) {
    let format = k;
    telefone.push(format.toString());
  }
  let parte1 = telefone.slice(0, 2);
  let parte2 = telefone.slice(2, 7);
  let parte3 = telefone.slice(7, 11);
  let numberPhone = `(${parte1.join('')}) ${parte2.join('')}-${parte3.join('')}`;
  return numberPhone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let ladoUm = lineA;
  let ladoDois = lineB;
  let ladoTres = lineC;
  let result = false;
  if ((ladoUm < ladoDois + ladoTres) && (ladoDois < ladoUm + ladoTres) &&
  (ladoTres < ladoDois + ladoUm)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 13
function hydrate(bebidas) {
  let drink = bebidas
  let count = 0;
  let result = '';
  let reg = /\d+/g;
  let num = drink.match(reg);
  if (num === null) {
    num = [0];
  }
  for (let i of num) {
    if (parseInt(i, 10) > 0 && parseInt(i, 10) < 9) {
      count += parseInt(i, 10);
    }
  }
  if (count === 0) {
    result = 'Não bebeu nada!';
  } else if (count > 1) {
    result = `${count} copos de água`;
  } else {
    result = `${count} copo de água`;
  }
  return result;
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
