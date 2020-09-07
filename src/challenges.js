// Desafio 1
function compareTrue(param1, param2) {
  if(param1 == true && param2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let arrayResultado = string.split(" ");
  return arrayResultado;
}

// Desafio 4
function concatName(array) {
  let resultado = `${array[array.length -1]}, ${array[0]}`
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties);
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNumero = 0;
  let maiorRepetido = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNumero) {
      maiorNumero = numbers[i];
    }
  }

  for (let j = 0; j < numbers.length; j += 1) {
    if (numbers[j] == maiorNumero) {
      maiorRepetido += 1;
    }
  } return maiorRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {  
  let mouseCat1 = Math.abs(mouse - cat1);
  let mouseCat2 = Math.abs(mouse - cat2);
  
  if (mouseCat1 < mouseCat2) {
    return "cat1";
  } else if (mouseCat1 > mouseCat2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzz = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      fizzBuzz.push("fizzBuzz")
    } else if (array[i] % 3 == 0 && array[i] % 5 !== 0) {
      fizzBuzz.push("fizz")
    } else if (array[i] % 3 !== 0 && array[i] % 5 == 0) {
      fizzBuzz.push("buzz")
    } else if (array[i] % 3 !== 0 && array[i] % 5 !== 0) {
      fizzBuzz.push("bug!")
    }
  } return fizzBuzz;
}

// Desafio 9
function encode(stringCode) {
  for (let i = 0; i < stringCode.length; i += 1) {
    if (stringCode[i] === "a") {
      stringCode[i].psuh(1)
    } else if (stringCode[i] === "e") {
      stringCode[i] = 2
    } else if (stringCode[i] === "i") {
      stringCode[i] = 3;
    } else if (stringCode[i] === "o") {
      stringCode[i] = 4;
    } else if (stringCode[i] === "u") {
      stringCode[i] = 5;
    }
  } return stringCode;
}
function decode(stringDecode) {
  for (let i = 0; i < stringDecode.length; i += 1) {
    if (stringDecode[i] === 1) {
      stringDecode[i].push("a")
    } else if (stringDecode[i] === 2) {
      stringDecode[i] = "e"
    } else if (stringDecode[i] === 3) {
      stringDecode[i] = "i"
    } else if (stringDecode[i] === 4) {
      stringDecode[i] = "o"
    } else if (stringDecode[i] === 5) {
      stringDecode[i] = "u"
    }
  } return stringDecode;
}

// Desafio 10
function techList() {
  // seu código aqui
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
