// Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
// Crie uma variável para receber o valor, com conversão para inteiro
// Para um número ser par, a divisão dele por 2 tem que dar resto 0

const PromptSync = require("prompt-sync")();

let valor = +PromptSync('Digite um número: ');

if(valor % 2 === 0){
    console.log('O número é par');
}else{
    console.log('O número é impar');
}