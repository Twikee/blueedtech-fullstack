// Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo e 
// implemente a funcionalidade de não aceitar o número 0.

const PromptSync = require("prompt-sync")();

let parada = true;

while(parada){
    let valor = +PromptSync('Digite um valor: ');

    if(valor === 0){
        console.log('O valor 0 não é aceito! Digite outro valor');
    }else if(valor < 0){
        console.log('O número é negativo!');
        parada = false;
    }else if(valor > 0){
        console.log('O número é positivo');
        parada = false;
    }
}