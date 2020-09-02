// Desafio 4
function footballPoints(wins, ties) {
let valorTotalVitoria = wins;
let valorTotalEmpates = ties;
let valorDePontosVitoria = valorTotalVitoria * 3;
let valorDePontosEmpate = valorTotalEmpates * 1;
let valorTotalPontos = valorDePontosVitoria + valorDePontosEmpate;
return valorTotalPontos;

}
console.log(footballPoints(0, 1));

