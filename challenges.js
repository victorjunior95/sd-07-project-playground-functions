//Voltar nesta função 1 mais tarde :c
function compareTrue(parameters1 , parameters2){
    if(parameters1 === true && parameters2 === true){
        return true;
    }else {
        return false;
    }
}
//Função 2 funcionando por enquanto :3
function calcArea(base, height){
    let soma= (base * height) / 2;
    return soma;
}
//Função 03
function splitSentence(stringName){
    return stringName.split(" ");
}
//Função 04
function concatName(arrayString){
    let first = arrayString[0];
    let last =  arrayString[arrayString.length-1];
    let fullName= last + ", " + first;
    return fullName;
}
//Função 05
function footballPoints(wins, ties){
    let sumWin = wins * 3;
    let sumTies = ties * 1;
    let sun = sumWins + sumTies;
return sun;
}
//Função 06
function highestCount(arrayNumber){
    let result = 0;
    let greater = 0;
    for(let cont in arrayNumber){
        if(arrayNumber[cont] > greater){
            greater = arrayNumber[cont];
        }
    }
    for(let cont in arrayNumber){
        if(greater === arrayNumber[cont]){
            result += 1;
        }
    }
    return result;
}
//Função 07
catAndMouse(5 , 10, 6)
function catAndMouse(mouse, cat1, cat2){
    let gato1= (cat1 - mouse);
    let gato2= (cat2 - mouse);
    if(gato1 > gato2){
        //console.log(cat2)
        return cat2;
    }else if(gato2 > gato1){
        //console.log(cat1)
        return cat1;
    }else if(gato1 === gato2){
        var mengs= "os gatos trombam e o rato foge"
        //console.log(mengs)
        /return mengs;
    }
}
//Função 08
function fizzBuzz( entrada ){
    if(typeof entrada !== 'number'){
        return 'Não é um numero';
    }
    if((entrada % 3 === 0) && (entrada % 5 === 0)){
        let fb= "fizzbuzz";
    }
    if((entrada % 3 !== 0) && (entrada % 5 !== 0)){
        let dif= "bug!"
    }
    if((entrada % 3 === 0)){
        let string1= "fizz";
    }else if((entrada % 5 === 0)){
        let string2= "buzz";
    }

}

