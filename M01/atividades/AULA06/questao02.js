'use strict';
/*
Faça um Programa que peça a idade e a altura de 5 pessoas, 
armazene cada informação no seu respectivo array. 
Imprima a média de idade e de altura.
*/
const prompt = require('prompt-sync')();


let listaIdade = [];
let listaAltura = [];
const limite = 5;

let mediaIdade = 0;
let mediaAltura = 0;

for(let i = 0; i < limite; i++){
    const idade = +prompt('Digite a idade: ');
    const altura = +prompt('Digite a altura: ');
    console.log();

    listaIdade.push(idade);
    listaAltura.push(altura);

    mediaIdade += listaIdade[i] / listaIdade.length;
    mediaAltura += listaAltura[i] / listaAltura.length;
}

console.log(`Média das idades: ${mediaIdade}
Média altura: ${mediaAltura}
`);
