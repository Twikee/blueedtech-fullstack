// Faça um programa que peça dois números, 
// imprima o maior deles ou imprima "Números iguais" se os números forem iguais.

const PromptSync = require("prompt-sync")();

let valor1 = +PromptSync('Digite o primeiro valor: ');
let valor2 = +PromptSync('Digite o segundo valor: ');

if(valor1 > valor2){
    console.log(`O valor ${valor1} é maior que o valor ${valor2}`);
}else if(valor2 > valor1){
    console.log(`O valor ${valor2} é maior que o valor ${valor1}`);
}else{
    console.log(`Os valores ${valor1} e ${valor2} são iguais`);
}