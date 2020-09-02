function highestCount(array) {
  let numberHigth = array[0];
  let somNumber = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > numberHigth) {
      numberHigth = array[i];
    }
  }
  for (let j = 0;j < array.length;j += 1){
      if(numberHigth == array[j]){
          somNumber += 1;
      }
  }
  return somNumber
}

console.log(highestCount([9, 1, 2,11, 3, 9, 5, 7,9,10,11]))