/*
Faça um programa que leia 2 valores inteiros (A e B). 
Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", 
indicando se os valores lidos são múltiplos entre si.
*/

let num1 = 12;
let num2 = 3;

if(num1 % num2 === 0 || num2 % num1 === 0){
    console.log('São multiplos');
}
