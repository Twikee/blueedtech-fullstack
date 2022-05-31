'use strict';
/*
Faça um Programa que leia 20 números inteiros e armazene-os num array.
 Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.
*/
const prompt = require('prompt-sync')();
console.clear();

let numeros = [];
let numerosPares = [];
let numerosImpares = [];
const limite = 20;

for(let i = 0; i < limite; i++){
    let num = +prompt(`Digite o número [${i + 1}]: `);
    numeros.push(num);

    if(numeros[i] % 2 == 0){
        numerosPares.push(numeros[i]);
    }else{
        numerosImpares.push(numeros[i]);
    }
}

console.log(`
    Números pares adicionados: ${numerosPares}

    Números ímpares adicionados: ${numerosImpares}

    Lista de todos os números: ${numeros}
`);