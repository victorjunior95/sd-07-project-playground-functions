function fizzBuzz(numeros) {
    let result = [];
    for (let i = 0; i < numeros.length; i += 1) {
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

  console.log(fizzBuzz([2, 15, 7, 9, 45]))