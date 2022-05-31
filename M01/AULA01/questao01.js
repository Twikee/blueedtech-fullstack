// Leia 2 valores A e B, que correspondem a 2 notas de um aluno. 
// A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6.
//  Ex: nota a * 4 e nota b * 6.

prompt = require('prompt-sync')();

let a = +prompt('Digite a primeira nota: ') * 4;
let b = +prompt('Digite a segunda nota: ') * 6;

console.log(`Média ponderada = ${a + b}`);