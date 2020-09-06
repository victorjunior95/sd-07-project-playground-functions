function highestCount(arrayOfNumbers) {
    let largestNumber = Math.max.apply(null, arrayOfNumbers);
    let count = 0
    for (j = 0; j < arrayOfNumbers.length; j += 1) {
        if (arrayOfNumbers[j] == largestNumber) {
            count++;
        }
    } return count
}
    console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))


// // Desafio 6
// function highestCount(arrayDeNumeros) {
//     //arrayDeNumeros = [9, 1, 2, 3, 9, 5, 7];
//     var largestNumber = [0];
//     for (j = 0; j < arrayDeNumeros.length; j += 1) {
//         for (i = 0; i < arrayDeNumeros[j].length; i += 1) {
//             largestNumber = Math.max(arrayDeNumeros);

//         }
//     }
//     return largestNumber;
// }
// highestCount([9, 1, 2, 3, 9, 5, 7])
// console.log(highestCount)