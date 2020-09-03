// Desafio 1
function compareTrue(primeiroValor, segundoValor) {
  let resultado = false;
  if (primeiroValor && segundoValor) {
    resultado = true;
  }
  else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
}

// Desafio 4
function concatName(arrayDeStrings) {
  arrayResultado = "";
  arrayResultado += arrayDeStrings[arrayDeStrings.length - 1];
  arrayResultado += ", "
  arrayResultado += arrayDeStrings[0];
  return arrayResultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = wins * 3;
  let pontosEmpate = ties * 1;
  let totalPontos = pontosEmpate + pontosVitoria;
  return totalPontos;
}

// Desafio 6
function highestCount(arrayDeInteiros) {

  //funcoes criadas nos exercícios do dia 4.
  function retornaIndiceMaiorValor(arrayEscolhido) {
    let indiceMaiorValor = 0;
    let numeroVitorias = 0;
    //verifica o maior valor do arrayEscolhido.
    for (j = 0; j < arrayEscolhido.length; j += 1) {
      numeroVitorias = 0;
      for (i = 0; i < arrayEscolhido.length; i += 1) {
        if (arrayEscolhido[j] >= arrayEscolhido[i]) {
          numeroVitorias += 1;
        }
      }

      if (numeroVitorias === arrayEscolhido.length) {
        indiceMaiorValor = j;
      }
    }
    return indiceMaiorValor
  }
  function numeroRepeticoes(array, indice) {
    let numeroRepeticoes = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[indice] === array[i]) {
        numeroRepeticoes += 1;
      }
    }
    return numeroRepeticoes;
  }

  let indiceDoElementoMaior = retornaIndiceMaiorValor(arrayDeInteiros);

  return numeroRepeticoes(arrayDeInteiros, indiceDoElementoMaior);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  function comparacaoDistancia(distanciaCat1, distanciaCat2) {
    let resultado = "";
    if (distanciaCat1 > distanciaCat2) {
      resultado = "cat2";
    }
    else if (distanciaCat1 < distanciaCat2) {
      resultado = "cat1";
    }
    else {
      resultado = "os gatos trombam e o rato foge";
    }
    return resultado;
  }

  let dCat1 = 0;
  let dCat2 = 0;

  //cat1,cat2,mouse
  if (mouse > cat1 && mouse > cat2) {
    dCat1 = mouse - cat1;
    dCat2 = mouse - cat2;
  }

  //mouse,cat1,cat2
  if (mouse < cat1 && mouse < cat2) {
    dCat1 = cat1 - mouse;
    dCat2 = cat2 - mouse;
  }

  //cat1,mouse,cat2
  if (mouse > cat1 && mouse < cat2) {
    dCat1 = mouse - cat1;
    dCat2 = cat2 - mouse;
  }

  //cat2,mouse,cat1
  if (mouse < cat1 && mouse > cat2) {
    dCat1 = cat1 - mouse;
    dCat2 = mouse - cat2;
  }

  return comparacaoDistancia(dCat1, dCat2);
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let resultado = [];
  for (i in arrayNumeros)
    if (arrayNumeros[i] % 3 === 0 && arrayNumeros[i] % 5 === 0) {
      resultado.push("fizzBuzz");
    }
    else if (arrayNumeros[i] % 3 === 0) {
      resultado.push("fizz");
    }
    else if (arrayNumeros[i] % 5 === 0) {
      resultado.push("buzz");
    }
    else {
      resultado.push("bug!");
    }
  return resultado;
}

// Desafio 9
function encode(frase) {
  // podemos percorrer a string armazenando cada elemento.
  //podemos também utilizar condições.
}
function decode(codigo) {
  // seu código aqui
}

// Desafio 10
function techList(nomesTec, name) {
  nomesTec.sort();
  let arrayDeAulas = [];
  for (i in nomesTec) {
    let aulas = {
      tech: nomesTec[i],
      name: name,
    };
    arrayDeAulas.push(aulas);
  }
  if (nomesTec.length === 0) {
    let resultado = "";
    resultado = 'Vazio!'
    return resultado;
  }
  else {
    return arrayDeAulas;
  }
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"
));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
