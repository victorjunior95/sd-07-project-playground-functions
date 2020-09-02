function concatName(array){
    
    let parArray = array;
    let arrayFirst = parArray[0]
    let arrayLast = parArray[parArray.length-1]
    return concatName = `${arrayLast}, ${arrayFirst}`

}
console.log(concatName(['josiel','manuel','rick','cleyton']))