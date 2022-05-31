/*
Neste problema, deve-se ler o nome de uma peça que chamaremos de 
peça1, o número de peças1 que o usuário quer, o valor unitário de cada peça1, o nome de uma peça2, o número de peças2 
e o valor unitário de cada peça2. 
Após, calcule e mostre o valor a ser pago.
*/
const prompt = require('prompt-sync')();
console.clear();

let peca1 = prompt('Qual peça deseja? ');
let qtdPeca1 = +prompt('Qual peça deseja? ');
let totalPeca1 = qtdPeca1 * 30;
let peca2 = prompt('Qual peça deseja? ');
let qtdPeca2 = +prompt('Qual peça deseja? ');
let totalPeca2 = qtdPeca2 * 50;

console.log(`Valores para as peças de ${peca1} é de ${totalPeca1}`);
console.log(`Valores para as peças de ${peca2} é de ${totalPeca2}`);