// Iniciando o projeto:
// Desafio 1
function compareTrue(arg1, arg2) {
    let valor = true;
    if(arg1 && arg2) {
        return valor;
    } else {
        valor = false;
        return valor;
    }
}

// Desafio 2
function calcArea(base, height) {
    let solido = base;
    let altura = height;
    let ponder = "Valores indefinidos";
    let area = 0;
    if (solido == false || altura == false){
        return ponder;
    } else {
        return area = (solido*altura)/2;

    }
    
  }

