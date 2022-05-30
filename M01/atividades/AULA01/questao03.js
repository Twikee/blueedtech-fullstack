/*
Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. 
Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. Calcule e exiba o total de dias que essa pessoa já viveu. 
Obs.: apenas para facilitar o cálculo, 
considere todo ano com 365 dias e todo mês com 30 dias.
*/

const prompt = require('prompt-sync')();

const idadeAnos = +prompt('Digite quantos anos você tem: ');
const idadeMeses = +prompt('Digite quantos meses: ');
const idadeDias = +prompt('Digite quantos dias: ');

const diasTotais = (idadeAnos * 365) + (idadeMeses * 30) + idadeDias;

console.log(`Você já viveu ${diasTotais} dias`);