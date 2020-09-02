// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;

}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;

}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(" ");

}

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  return `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3 + ties * 1);

}

// Desafio 6
function highestCount(Array) {
  // seu código aqui
  let uniqueKeys = Array.values()
  let greaterValue = 0;
  let greaterValueCont = 0
  for (let key of uniqueKeys) {
    let cont = 0;

    for (let chave in Array) {
      if (Array[chave] === key) {
        cont += 1;

      }
    }

    if (greaterValue <=key) {
      greaterValue = key
      greaterValueCont = cont;

    }

  }
  return greaterValueCont;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = Math.abs(cat1 - mouse)
  let distCat2 = Math.abs(cat2 - mouse)
  if (distCat1 > distCat2) {
    return 'cat2';

  }
  else if (distCat2 > distCat1) {
    return 'cat1';

  }
  else if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';

  }

}

// Desafio 8
function fizzBuzz(numbersArray) {
  // seu código aqui
  let returnArray = []
  for (value of numbersArray) {
    if (value % 3 === 0 && value % 5 === 0) {
      returnArray.push('fizzBuzz')

    }
    else if (value % 3 === 0) {
      returnArray.push('fizz')

    }
    else if (value % 5 === 0) {
      returnArray.push('buzz')

    }
    else {
      returnArray.push('bug!')
    }
  }

  return returnArray;

}

// Desafio 9
function encode(string) {
  // seu código aqui
  let auxString = string.split("");
  let code = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5

  }

  for (let value in auxString) {
    for (let compareValue in code) {
      if (auxString[value] === compareValue) {
        auxString[value] = code[compareValue];

      }

    }

  }
  return auxString.join("");
}
function decode(string) {
  // seu código aqui
  let auxString = string.split("");
  let code = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5

  }

  for (let value in auxString) {
    for (let compareValue in code) {
      if (auxString[value] === String(code[compareValue])) {
        auxString[value] = compareValue;

      }

    }
  }
  return auxString.join("");
}

// Desafio 10
function techList(technologies, name) {
  // seu código aqui
  if (technologies.length === 0) {
    return "Vazio!";
  }
  let techs = [];

  for( let value of technologies.sort()){
    techs.push({
      tech: value,
      name: name
    })

  }
  return techs;
}

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
