function triangleCheck(lineA, lineB, lineC) {
    let condition1;
    let condition2;
    if (lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA) {
      condition1 = true;
    } else {
      condition1 = false;
    }
    let modulo1 = Math.abs(lineA - lineB) < lineC;
    let modulo2 = Math.abs(lineA - lineC) < lineB;
    let modulo3 = Math.abs(lineB - lineC) < lineA;
    if (modulo1 && modulo2 && modulo3) {
      condition2 = true;
    } else {
      condition2 = false;
    }
    if (condition1 && condition2) {
      return true;
    }
    return false;
  }