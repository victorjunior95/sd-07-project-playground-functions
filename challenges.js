function fizzBuzz(vetor) {
    let numeros = vetor
    let result = [];
    for (let i in numeros) {
      if (numeros[i] % 15 === 0) {
        result.push('fizzBuzz');
      } else if (numeros[i] % 5 === 0) {
        result.push('buzz');
      } else if (numeros[i] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
    }
    return result;
  }


  console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 30, 35, 40, 45, 50, 100, 120, 130, 150, 200])) 