// Desafio 1
function compareTrue(a, b) {
    if ( a === true && b === true ) {
      return true;
    } else {
      return false ;
    };
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangle = (base * height) / 2 ;
  return areaTriangle;
}

// Desafio 3
function splitSentence(separator) {
  let split = separator.split(' ');
  return split;
}

// Desafio 4
function concatName(arrayStrings) {
  let last = arrayStrings[arrayStrings.length - 1];
  let first = arrayStrings[0] ;
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3 ;
  ties = ties * 1 ;
  let points = wins + ties ;
  return points ;
}

// Desafio 6
function highestCount(arrayNum) {
  let highest = 0;
  let highestArrayNum = 0;

  for ( let i in arrayNum ) {
    if ( arrayNum[i] >= highest ){
      highest = arrayNum[i];
    }
  }
  for ( let i in arrayNum) {
    if (highest === arrayNum[i]) {
    highestArrayNum += 1;
    } 
  }
  return highestArrayNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  if ( ((cat1 - mouse) < 0 ? (( cat1 - mouse ) * - 1) : (cat1 -mouse )) === ((cat2 - mouse) < 0 ? (( cat2 - mouse ) * - 1) : (cat2 -mouse ))) {
    return "os gatos trombam e o rato foge";
  } else {
    if ( ((cat1 - mouse) < 0 ? (( cat1 - mouse ) * - 1) : (cat1 -mouse )) < ((cat2 - mouse) < 0 ? (( cat2 - mouse ) * - 1) : (cat2 -mouse ))) {
      return "cat1"
    } else {
      return "cat2"
    }
  }
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  let arrayReturn = [];
  for ( let i in arrayFizzBuzz ) {
    if( arrayFizzBuzz[i] % 3 === 0 && arrayFizzBuzz[i] % 5 === 0 ) {
      arrayReturn.push("fizzBuzz");
    } else if (arrayFizzBuzz[i] % 3 === 0)  {
        arrayReturn.push("fizz");
      } else if( arrayFizzBuzz[i] % 5 === 0 ) {
        arrayReturn.push("buzz");
      } else if (arrayFizzBuzz[i] % 3 != 0 && arrayFizzBuzz[i] % 5 != 0) {
        arrayReturn.push("bug!");
      }
  };
  return arrayReturn;
}

// Desafio 9
function encode(string) {
  let stringReturn = "";

  for ( i in string ) {
    let aFind = string.replace(/a/g, "1" );
    stringReturn = aFind;
    var eFind = stringReturn.replace(/e/g, "2" );
    stringReturn = eFind ;
    let iFind = stringReturn.replace( /i/g, "3" );
    stringReturn = iFind ;
    let oFind = stringReturn.replace( /o/g, "4" );
    stringReturn = oFind ;
    let uFind = stringReturn.replace( /u/g, "5" );
    stringReturn = uFind ;
  }
  return stringReturn ;
}
function decode(string) {
  let stringReturn = "";

  for ( i in string ) {
    let aFind = string.replace(/1/g, "a" );
    stringReturn = aFind;
    var eFind = stringReturn.replace(/2/g, "e" );
    stringReturn = eFind ;
    let iFind = stringReturn.replace( /3/g, "i" );
    stringReturn = iFind ;
    let oFind = stringReturn.replace( /4/g, "o" );
    stringReturn = oFind ;
    let uFind = stringReturn.replace( /5/g, "u" );
    stringReturn = uFind ;
  }

  return stringReturn ;
}

// Desafio 10
function techList(techName, name) {
  techName.sort();
  let techNameList = [];
  if (techName.length == 0 ){
    return "Vazio!";
  } else {
    for (let i in techName) {
      techNameList[i] = { 
      tech: `${techName[i]}`,
      name: `${name}`
      }
    }
    return techNameList;
  }
}

// Desafio 11
function generatePhoneNumber(phoneNum) {
  let repeat3 = 0;
  if (phoneNum.length != 11) {
    return "Array com tamanho incorreto.";
  }
  for (let i in phoneNum) {
    repeat3 = 0;
    if (phoneNum[i] < 0 || phoneNum[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }for ( let j in phoneNum) {
      repeat3 = ( phoneNum[i] == phoneNum[j]) ? repeat3 + 1 : repeat3;
    }
    if (repeat3 >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  let phoneFormat = (`(${phoneNum[0]}`+`${phoneNum[1]}) `+`${phoneNum.slice(2,7).join("")}`+`-${phoneNum.slice(7,12).join("")}`)
    return phoneFormat;
}

// Desafio 12
function triangleCheck( lineA, lineB, lineC ) {
  if ( (Math.abs(lineB - lineC) > lineA) || (lineA > (lineB + lineC)) 
  || (Math.abs(lineA - lineC ) > lineB) || (lineB > (lineA + lineC)) 
  || (Math.abs(lineA - lineB) > lineC) || (lineC > (lineA + lineB)) ) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(water) {
  let waterRegExp = /[0-9]/g;
  let waterWithoutSpaces = water.replace(/ /g, '');
  let waterNum = waterWithoutSpaces.match(waterRegExp);
  let waterCount = 0;
  for ( i in waterNum ){
    waterCount = parseInt(waterNum[i]) + waterCount;
  }
  if ( waterCount > 1){
  return `${waterCount} copos de água`;
  } else {
    return `${waterCount} copos de água`;
  }
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
