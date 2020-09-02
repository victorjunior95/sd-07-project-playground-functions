// Desafio 1
function compareTrue(a, b) {
  return (a && b);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentença) {
  let splitedSentece = [];
  sentença = sentença.split(' ');
  for (const i of sentença) {
    splitedSentece.push(i);
  }
  return splitedSentece;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(array) {
  let helper = 0;
  for (const i of array) {
    if (Math.max.apply(null, array) === i) {
      helper++;
    }
  }
  return helper;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > cat2 && cat1 < mouse) {
    return cat1;
  } else if (cat2 > cat1 && cat2 < mouse) {
    return cat2;
  } else if (cat1 < cat2 && cat1 > mouse) {
    return cat1;
  } else if (cat2 < cat1 && cat2 > mouse) {
    return cat2
  } else if (cat1 === cat2) {
    return 'Os gatos trombam e o rato foge.';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resposta = [];
  for (const i of array) {
    if (i % 3 === 0 && i % 5 !== 0) {
      resposta.push('fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
      resposta.push('buzz');
    } else if (i % 5 === 0 && i % 3 === 0) {
      resposta.push('fizzbuzz');
    } else {
      resposta.push('bug!');
    }
  }
  return resposta;
}

// Desafio 9
function encode(frase) {
  frase = frase.toLowerCase();
  let trocasAto1 = {
    a: '1', e: '2',
    i: '3', o: '4',
    u: '5'
  };
  for (let i = 0; i < frase.length; i += 1) {
    for (const j in trocasAto1) {
      if (frase[i] === j) {
        frase = frase.replace(frase[i], trocasAto1[j]);
      }
    }
  }
  return frase;
}

function decode(fraseEstranha) {
  let trocasAto1 = {
    1: 'a', 2: 'e',
    3: 'i', 4: 'o',
    5: 'u'
  };
  for (let i = 0; i < fraseEstranha.length; i += 1) {
    for (const j in trocasAto1) {
      if (fraseEstranha[i] === j) {
        fraseEstranha = fraseEstranha.replace(fraseEstranha[i], trocasAto1[j]);
      }
    }
  }
  return fraseEstranha;
}

// Desafio 10
function techList() {

}

// Desafio 11
function generatePhoneNumber() {
  
}

// Desafio 12
function triangleCheck() {

}

// Desafio 13
function hydrate() {

}

console.log(decode('KMKDD v1545dd'));
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
