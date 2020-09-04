// Desafio 1
function compareTrue(a, b) {
  let res = ''
  if (a && b === true) {
    res.push(true)
  } else {
    res.push(false)
  }
  return res
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(a) {
  let arrayS = a.split(' ')
  return arrayS
}

// Desafio 4
function concatName(a) {
  let primeiroA = a[0]
  let ultimoA = a[a.length - 1]
  return `${ultimoA}, ${primeiroA}`
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties
  return pontos
}

// Desafio 6
function highestCount(listN) {
  listN.sort()
  let highest = listN[listN.length - 1]
  let count = 0
  for (let i in listN) {
    if (listN[i] === highest) {
      count += 1
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse)
  let dist2 = Math.abs(cat2 - mouse)
  let res = ''
  if (dist1 === dist2) {
    res = 'os gatos trombam e o rato foge'
  }
  if (dist1 < dist2) {
    res = 'cat1'
  }
  if (dist2 < dist1) {
    res = 'cat2'
  }
  return res
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let res = []
  for (let i = 0; i < arrayNum.length; i += 1) {
    if (arrayNum[i] % 3 === 0 && arrayNum[i] % 5 === 0) {
      res.push('fizzBuzz')
    } if (arrayNum[i] % 3 === 0 && arrayNum[i] % 5 !== 0) { //atencao aki
      res.push('fizz')
    } if (arrayNum[i] % 5 === 0 && arrayNum[i] % 3 !== 0) {
      res.push('buzz')
    } else res.push('bug!')
  }
  return res
}

// Desafio 9
function encode(string) {
  let res = string
  let code = { a: 1, e: 2, i: 3, o: 4, u: 5 }
  for (let letra of string) {
    for (let i in code) { 
      if (letra === i) {
        res = res.replace(i, code[i])
      }
    }
  }
  return res
}
function decode(string) {
  let res = string
  res = res.replace(/1/g, 'a')
  res = res.replace(/2/g, 'e')
  res = res.replace(/3/g, 'i')
  res = res.replace(/4/g, 'o')
  res = res.replace(/5/g, 'u')
  return res
}

// Desafio 10
function techList(array, name) {
  let obj = []
  if (array.length === 0) {
    return 'Vazio!'
  }
  array.sort()
  for (let i of array) {
    obj.push({
      tech: i,
      name: name 
    })
  }
  return obj
}
// Desafio 11
function generatePhoneNumber(arrayN) {
  let res = ''
  for (num in arrayN) {
    let dup = 0
    for (numD in arrayN) {
      if (arrayN[num]==arrayN[numD]) {
        dup += 1;
      }
    } if (arrayN.length !== 11) {
      res = 'Array com tamanho incorreto.'
    } else if (arrayN[num] < 0 || arrayN[num] > 9 || dup >= 3) {
      res = 'não é possível gerar um número de telefone com esses valores'
    }
  }
  res = `(${arrayN[0]} ${arrayN[1]}) ${arrayN[2]}${arrayN[3]}${arrayN[4]}${arrayN[5]}${arrayN[6]}-${arrayN[7]}${arrayN[8]}${arrayN[9]}${arrayN[10]}`
  return res
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
