// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayStrings = [];
  let separatedString = "";

  for(let characterIndex = 0; characterIndex < sentence.length; characterIndex += 1){
      
      if(sentence[characterIndex] !== " "){
          separatedString += sentence[characterIndex];
      } else{//guarda as strings do meio
          arrayStrings.push(separatedString);
          separatedString = "";
      }

  }
  arrayStrings.push(separatedString);

  return arrayStrings;
}

// Desafio 4
function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length - 1] + ", " + arrayStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins)+ ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let repeatTimes = 0;
  let maxNumber = 0;
  for(index = 0; index < arrayNumbers.length; index += 1){
      
      maxNumber = Math.max(maxNumber, arrayNumbers[index]);
  }
  for(let index = 0; index < arrayNumbers.length; index += 1){
      if(arrayNumbers[index] === maxNumber){
          repeatTimes +=1;
      }
  }
  return repeatTimes;
}

// Desafio 7
function catAndMouse(mouse , cat1, cat2) {
  if(Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return "cat1";
} else if(Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)){
    return "os gatos trombam e o rato foge";
} else{
    return "cat2";
}
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayResult = [];
  for(let i = 0; i < arrayNumbers.length; i += 1){
      if(arrayNumbers[i]%3 === 0 && arrayNumbers[i]%5 === 0){
          arrayResult.push("fizzBuzz");
      }else if(arrayNumbers[i]%3 === 0 && arrayNumbers[i]%5 !== 0){
          arrayResult.push("fizz");
      }else if(arrayNumbers[i]%3 !== 0 && arrayNumbers[i]%5 === 0){
          arrayResult.push("buzz");
      }
       else{
          arrayResult.push("bug!");
      }
  }
 return arrayResult;
}

// Desafio 9
function encode(string) {
  let newString = "";
    for(let i = 0; i < string.length; i += 1){
        switch(string[i]){
            case 'a':
                newString += "1";
                break;
            case 'e':
                newString += "2";
                break;
            case 'i':
                newString += "3";
                break; 
            case 'o':
                newString += "4";
                break;
            case 'u':
                newString += "5";
                break;
            default:
                newString += string[i];                   
        }
    }
    return newString;
}
function decode(string) {
  let newString = "";
    for(let i = 0; i < string.length; i += 1){
        switch(string[i]){
            case '1':
                newString += "a";
                break;
            case '2':
                newString += "e";
                break;
            case '3':
                newString += "i";
                break; 
            case '4':
                newString += "o";
                break;
            case '5':
                newString += "u";
                break;
            default:
                newString += string[i];                   
        }
    }
    return newString;
}

// Desafio 10
function techList(techs, name) {
  let list = [];
  techs.sort();

  if(techs.length < 1){
    return "Vazio!";
  }else{
    for(let i = 0; i < techs.length; i += 1){
      let techToLearn = {
          tech: techs[i],
          name: name
      }
      list.push(techToLearn);
  }

  return list;
  }
    
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC ) {
  if((lineA < lineB + lineC) && (lineB < lineC + lineA) &&  (lineC < lineB + lineA) &&
    (lineA > Math.abs(lineB - lineC)) && (lineB > Math.abs(lineC - lineA))
     &&  (lineC > Math.abs(lineB - lineA))){
        return true;
     }else {
         return false;
     }
}

// Desafio 13
function hydrate() {
  let arrayNumbers = [];

  for(let i = 0; i < string.length; i += 1){
    switch(string[i]){
        case '1':
            arrayNumbers.push(1);
            break;
        case '2':
            arrayNumbers.push(2);
            break;
        case '3':
            arrayNumbers.push(3);
            break; 
        case '4':
            arrayNumbers.push(4);
            break;
        case '5':
            arrayNumbers.push(5);
            break;
        case '6':
            arrayNumbers.push(6);
            break;
        case '7':
            arrayNumbers.push(7);
            break;
        case '8':
            arrayNumbers.push(8);
            break;
        case '9':
            arrayNumbers.push(9);
            break;                   
    }
}
let sumNumbers = 0;

if(arrayNumbers.length == 1 && arrayNumbers[0] == 1){
    return "1 copo de água";
}else{
     for(let i = 0; i < arrayNumbers.length; i += 1){
         sumNumbers += arrayNumbers[i];
     }
return sumNumbers + " copos de água";    
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
