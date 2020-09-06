// Desafio 1
function compareTrue(valor1, valor2) {
  let a = valor1;
  let b = valor2;
  let resposta = false;
  if (a === true && b === true) {
    resposta = true;
    console.log(resposta);
  } else {
    console.log(resposta);
  }
  return resposta;
}
compareTrue(false, true);

// Desafio 2
function calcArea(base, height) {
  let a = base;
  let b = height;
  let area = 0;
  area = ((a * b) / 2);
  return area;
}

// Desafio 3
function splitSentence(param) {
  let string = param;
  let retorno = string.split('');
  return retorno;
}

// Desafio 4
function concatName(param) {
  let ultMaisprimeiro = param[param.length -1] + ', ' + param[0];
  return ultMaisprimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins;
  let empates = ties;
  let pontosVitoria = 3;
  let pontoEmpate = 1;
  let total = 0;
  total = ((vitorias * pontosVitoria) + (empates * pontoEmpate));
  return total;
}

// Desafio 6
function highestCount(param) {
  let numeros = param;
  let maior = 0;
  let cont = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
    if (numeros[i] === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rato = mouse;
  let gato1 = cat1;
  let gato2 = cat2;
  let distCat1;
  let distCat2;
  let retorno;
  distCat1 = (Math.abs(gato1 - rato));
  distCat2 = (Math.abs(gato2 - rato));

  if (distCat1 === distCat2) {
    retorno = 'os gatos trombam e o rato foge';
  } else if (distCat1 < distCat2) {
    retorno = 'cat1';
  } else {
    retorno = 'cat2';
  }
  return retorno;
}

// Desafio 8
function fizzBuzz(param) {
  let retorno = [];
  let matriz = param;
  for (let i = 0; i < matriz.length; i += 1) {
    if (matriz[i] % 3 === 0 && matriz[i] % 5 === 0) {
      retorno.push('fizzBuzz');
    } else if (matriz[i] % 3 === 0) {
        retorno.push('fizz');
    } else if (matriz[i] % 5 === 0) {
      retorno.push('buzz')
    } else {
      retorno.push('bug!')
    }
  }
    return retorno;
}

// Desafio 9
function encode(nome) {
  let newPalavra = [];
  for (let i = 0; i < nome.length; i += 1){
    newPalavra.push(nome[i]);
  }
  for (let i = 0; i < newPalavra.length; i += 1) {
    if (newPalavra[i] === 'a') {
      newPalavra[i] = '1';
    } else if (newPalavra[i] === 'e') {
      new_palavra[i] = '2';
    } else if (newPalavra[i] === 'i') {
      newPalavra[i] = '3';
    } else if (newPalavra[i] === 'o') {
      newPalavra[i] = '4';
    } else if (newPalavra[i] === 'u') {
      newPalavra[i] = '5';
    }
  }
  newPalavra = newPalavra.join('').toString();
  return newPalavra;
}
function decode(nome) {
  let newPalavra1 = [];
  for (let i = 0; i < nome.length; i += 1) {
    newPalavra1.push(nome[i]);
  }
  for (let i = 0; i < newPalavra1.length; i += 1) {
    if (newPalavra1[i] === '1') {
      newPalavra1[i] = 'a';
    } else if (newPalavra1[i] === '2') {
      newPalavra1[i] = 'e';
    } else if (newPalavra1[i] === '3') {
      newPalavra1[i] = 'i';
    } else if (newPalavra1[i] === '4') {
      newPalavra1[i] = 'o';
    } else if (newPalavra1[i] === '5') {
      newPalavra1[i] = 'u';
    }
  }
  newPalavra1 = newPalavra1.join('').toString();
  return newPalavra1;
}

// Desafio 10
function techList(tech, name) {
  let tecnologia = tech;
  let nome = name;
  let tecRetorno = [];
  let x;
  if (tecnologia.length == 0) {
    tecRetorno = 'Vazio!';
  } else {
    for (let i = 0; i < tecnologia.length; i += 1) {
      tecRetorno[i] = { tech: tecnologia[i], name: nome }
    }
  }
  for (let i = 0; i < tecRetorno.length -1; i += 1) {
    for (let j = i + 1; j < tecRetorno.length; j += 1) {
      if (tecRetorno[i].tech > tecRetorno[j].tech) {
        x = tecRetorno[i];
        tecRetorno[i] = tecRetorno[j];
        tecRetorno[j] = x;
      }
    }
  }
  return tec_retorno;
}

// Desafio 11
function generatePhoneNumber(param) {
  let phone = param;
  let retornarphone;
  let cont = 0;
  if (phone.length !== 11) {
    retornarphone = 'Array com tamanho incorreto';
  } else {
    for (let i = 0; i < phone.length; i += 1) {
      if (phone[i] < 0 || phone[i] > 9) {
        retornarphone = 'não é possível gerar um número de telefone com esses valores';
      } else {
        for (let j = i + 1; j < phone.length; j += 1) {
          if (phone[i] === phone[j]) {
            cont += 1;
          }
        }
      }
    }
    if (cont >= 3) {
      retornarphone = 'não é possível gerar um número de telefone com esses valores';
    } else {
      retornarphone = phone.join('').toString();
      console.log('(' + retornarphone[0] + retornarphone[1] + ')' + ' ' + retornarphone[2] + retornarphone[3] + retornarphone[4] + retornarphone[5] + retornarphone[6] + '-' + retornarphone[7] + retornarphone[8] + retornarphone[9] + retornarphone[10]);
    }
  }
  return retornarphone;
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
