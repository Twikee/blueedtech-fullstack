/*
Jogo da adivinhação: Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 
e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. 
O programa deverá escrever na tela se o usuário venceu ou perdeu.
*/
const prompt = require('prompt-sync')();
console.clear();


let numero = +prompt('Digite um número: ');
let randNum = Math.floor(Math.random() * 11);

numero === randNum ? console.log(`Número ${randNum}, acertou`) : console.log(`Número ${randNum}, errou`);
