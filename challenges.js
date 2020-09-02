// Iniciando o projeto:
function compareTrue(arg1, arg2) {
    let valor = true;
    if(arg1 && arg2) {
        return valor;
    } else {
        valor = false;
        return valor;
    }
}
   

console.log(compareTrue(0, NaN));