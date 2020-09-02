function triangleCheck(lineA, lineB, lineC) {
    let lados = [lineA, lineB, lineC];
    lados.sort((a, b) => b - a); // encontrei esta forma no StackOverflow: https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
    if (lados[0] <= (lados[1] + lados[2])) {
      return false;
    } else {
      return true;
    }
  }

  console.log(triangleCheck(16, 9, 2));



/* function validaIntervalo (arrayDeNumeros) {
    for (let key in arrayDeNumeros) {
        if (arrayDeNumeros[key] < 0 || arrayDeNumeros > 9) {
            return false;
            break;
        } else {
            return true;
        }
    }
}

function validaRepeticao (arrayDeNumeros) {
    for (let key in arrayDeNumeros) {}
}


// Maior que zero
// Menor que 9
// Repetição menor que 3

// return true;
// else return false; */