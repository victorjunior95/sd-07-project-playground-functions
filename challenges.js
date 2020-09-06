
function triangleCheck(lineA, lineB, lineC) {
 let condition1;
 let condition2;
  if(lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA){
    condition1 =  true;
  } else {
        condition1 = false;
  }
  if(Math.abs(lineA - lineB) < lineC && Math.abs(lineA - lineC) < lineB && Math.abs(lineB - lineC) < lineA){
    condition2 = true;
  } else {
    condition2 = false
  }
  if(condition1 && condition2) {
    return true;
  } else {
    return false;
  }

}




  console.log(triangleCheck(10, 18, 28));



 

  
  

    




  