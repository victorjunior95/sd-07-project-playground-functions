function fizzBuzz(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1)
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      newArray.push("fizzbuzz");
    } else if (array[i] % 3 == 0) {
      newArray.push("fizz");
    } else if (array[i] % 5 == 0) {
      newArray.push("buzz");
    } else {
      newArray.push("bug!");
    }
  return newArray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
