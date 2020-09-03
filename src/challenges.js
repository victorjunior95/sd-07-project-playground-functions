function compareTrue(boleano1, boleano2) {
  let boleano = true;
  if (
    (boleano1 === true && boleano2 === true) ||
    (boleano2 === true && boleano1 === true)
  ) {
    boleano = true;
    return boleano;
  } else if (
    (boleano1 === false && boleano2 === true) ||
    (boleano2 === false && boleano1 === true)
  ) {
    boleano = false;
    return boleano;
  } else if (boleano1 === false && boleano2 === false) {
    boleano = false;
    return boleano;
  }
}

function calcArea(base, height) {
  resultado = (base * height) / 2;
  return resultado;
}

function splitSentence(palavra) {
  let dividindoPalavras = palavra.split(" ");
  return dividindoPalavras;
}

function concatName(nomes) {
  let n = nomes.length;
  return `${nomes[n - 1]}, ${nomes[0]}`;
}

function footballPoints(wins, ties) {
  let pontos = 0;
  wins = wins * 3;
  pontos = ties + wins;
  return pontos;
}

function highestCount(lista) {
  let repeticao = [];
  let maiorNumero = lista[0];

  for (let i in lista) {
    if (lista[i] > maiorNumero) {
      maiorNumero = lista[i];
    }
  }
  for (let j in lista) {
    if (lista[j] == maiorNumero) {
      repeticao += 1;
    }
  }
  return repeticao.length;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Pos = cat1 - mouse;
  let cat2Pos = cat2 - mouse;
  if (cat1Pos < 1) {
    cat1Pos = 1;
  }
  if (cat2Pos < 1) {
    cat2Pos = 1;
  }
  if (cat1Pos == cat2Pos) {
    return "os gatos trombam e o rato foge";
  } else if (cat1Pos > cat2Pos) {
    return `cat2`;
  } else if (cat1Pos < cat2Pos) {
    return `cat1`;
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let retorno = [];
  for (let i in numeros) {
    if (numeros[i] % 3 == 0 && numeros[i] % 5 == 0) {
      retorno.push(`fizzBuzz`);
    } else if (numeros[i] % 5 == 0) {
      retorno.push(`buzz`);
    } else if (numeros[i] % 3 == 0) {
      retorno.push(`fizz`);
    } else {
      retorno.push(`bug!`);
    }
  }
  return retorno;
}

function encode(frase) {
  let resultado = frase;
  for (let i = 0; i < frase.length; i += 1) {
    if (frase.charAt(i) == "a") {
      resultado = resultado.replace(/a/, "1");
    }
    if (frase.charAt(i) == "e") {
      resultado = resultado.replace(/e/, "2");
    }
    if (frase.charAt(i) == "i") {
      resultado = resultado.replace(/i/, "3");
    }
    if (frase.charAt(i) == "o") {
      resultado = resultado.replace(/o/, "4");
    }
    if (frase.charAt(i) == "u") {
      resultado = resultado.replace(/u/, "5");
    }
  }
  return resultado;
}
function decode(frase) {
  let resultado = frase;
  for (let i = 0; i < frase.length; i += 1) {
    if (frase.charAt(i) == "1") {
      resultado = resultado.replace(/1/, "a");
    }
    if (frase.charAt(i) == "2") {
      resultado = resultado.replace(/2/, "e");
    }
    if (frase.charAt(i) == "3") {
      resultado = resultado.replace(/3/, "i");
    }
    if (frase.charAt(i) == "4") {
      resultado = resultado.replace(/4/, "o");
    }
    if (frase.charAt(i) == "5") {
      resultado = resultado.replace(/5/, "u");
    }
  }
  return resultado;
}
function techList(tech, name) {
  techArray = [];
  techObj = {};
  if (tech.length < 1) {
    return `Vazio!`;
  }
  tech.sort();
  for (let i = 0; i < tech.length; i += 1) {
    techObj.tech = tech[i];
    techObj.name = name;
    techArray.push(Object.assign({}, techObj));
  }
  return techArray;
}
// Desafio 11
function generatePhoneNumber(n) {
  let numero;
  let qtdRepeticao = 0;
  let rep = false;
  let maiorMenor = false;

  for (let i = 0; i < n.length; i += 1) {
    numero = n[i];

    if (n[i] < 0 || n[i] > 9) {
      maiorMenor = true;
    }

    for (let j = 0; j < n.length; j += 1) {
      if (n[j] === numero) {
        qtdRepeticao++;
      }
    }

    if (qtdRepeticao >= 3) {
      rep = true;
    }
    qtdRepeticao = 0;
  }
  if(maiorMenor == true || rep == true){
    return `não é possível gerar um número de telefone com esses valores`;
  }
  if (n.length != 11) {
    return `Array com tamanho incorreto.`;
  }
  return `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(bebidas) {}

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
