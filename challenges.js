//**1 - Usando o operador &&**
console.log ('**1 - Usando o operador &&**')

function compareTrue(val1,val2){
    if(val1 && val2){
        return (true);
    }else{
        return (false);
    }
}
console.log(compareTrue (true,false))
console.log(compareTrue (false,false))
console.log(compareTrue (true,true))