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
  let gato1Dist = Math.abs(cat1 - mouse);
  let gato2Dist = Math.abs(cat2 - mouse);
  if (gato1Dist === gato2Dist) {
    return 'os gatos trombam e o rato foge';
  } else if (gato1Dist < gato2Dist) {
    return 'cat1';
  } else if (gato2Dist < gato1Dist) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      array[i] = 'fizz';
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      array[i] = 'buzz';
    } else if (array[i] % 5 === 0 && array[i] % 3 === 0) {
      array[i] = 'fizzBuzz';
    } else {
      array[i] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(frase) {
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
function techList(tech, name) {
  let lista = [];
  tech.sort();
  if (tech.length > 0) {
    for (let i = 0; i < tech.length; i += 1) {
      lista.push(
        {
          tech: tech[i],
          name: name,
        }
      );
    }
    return lista;
  }
  return 'Vazio!';
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
