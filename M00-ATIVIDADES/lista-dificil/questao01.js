//Faça um programa, que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno:
console.clear();
const prompt = require("prompt-sync")();

let largura = +prompt('Digite a largura: ');
let comprimento = +prompt('Digite a comprimento: ');

console.log(`A área do terreno é de ${largura * comprimento} m²`);