// Desafio 1
function compareTrue(a,b) {
  if( a === true && b === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height){
  return calcArea = (base*height)/2; 
}

// Desafio 3
function splitSentence(a) {
  let splitSentence = a.split(" ");
   return splitSentence
}

// Desafio 4
function concatName(array) {
  let n = array.length -1;
    let a = array[n]; 
    let b = array[0]
    return concatName = (`${a}, ${b}`)
}

// Desafio 5
function footballPoints(wins,ties) {
  return footballPoints = (wins*3+ties)
}

// Desafio 6
function highestCount(arr) {
     
  let newarr = arr.sort();
  let maior = arr[arr.length -1];
  let cont = 0;
  for (var i = 0, j = arr.length; i < j; i++){
      if(arr[i] == maior){
          cont += 1;
      }    
 }
 return cont;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let tes1 = Math.abs(mouse-cat1)
  let tes2 =  Math.abs(mouse-cat2)
   if( tes1== tes2 ){
        return "os gatos trombam e o rato foge"
   } else if (tes1 > tes2){
       return "cat2"
   } else if (tes1 < tes2) {
       return "cat1"
   }
}

// Desafio 8
function fizzBuzz(array) {
   
  let n=[];

  for(let i =0 , j = array.length; i<j; i +=1){
      if (array[i] % 3 == 0 && array[i] % 5 ==0){
          n[i] = "fizzBuzz";
      } else if(array[i] % 3 == 0){ 
          n[i] = "fizz";
      } else if (array[i] % 5 == 0){
          n[i] = "buzz";
      } else {
          n[i] = "bug!";
      }

  }
  return n
}

// Desafio 9
function encode(str1) {
  let array = [];
  let str2 = "";
  array = splitSentence = str1.split("")
  
  for(let i = 0, j = array.length; i<j; i +=1 ){
       switch (array[i]) {
          case "a":
              array[i] = "1"
              break;
          case "e":
              array[i] ="2"
              break;
          case "i":
              array[i] ="3"
              break;
          case "o":
              array[i] ="4"
              break;
          case "u":
              array[i] ="5"
              break;
           default:
               break;
       }
   }

   for(let i = 0, j = array.length; i<j; i +=1 ){
   str2 += array[i]}
   return str2
}

function decode(str1) {
  let array = [];
  let str2 = "";
  array = splitSentence = str1.split("")
  
  for(let i = 0, j = array.length; i<j; i +=1 ){
       switch (array[i]) {
          case "1":
              array[i] = "a"
              break;
          case "2":
              array[i] ="e"
              break;
          case "3":
              array[i] ="i"
              break;
          case "4":
              array[i] ="o"
              break;
          case "5":
              array[i] ="u"
              break;
           default:
               break;
       }
   }

   for(let i = 0, j = array.length; i<j; i +=1 ){
   str2 += array[i]}
   return str2
}

// Desafio 10
function techList(array,name) {
  if(array == 0){
      return "Vazio!"
  }
  array = array.sort()
  let ob = [];
  

  for(let i = 0, j = array.length; i<j; i +=1 ){
      ob[i] = {tech: array[i],
              name: name,
      }
  }
  return ob;
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
