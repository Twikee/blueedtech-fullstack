//Faça um programa de cadastro de clientes que mostre um menu de opções e 
// permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

const Prompt = require("prompt-sync")();

console.log('Escolha uma opção:');
console.log('1 = Prato 1');
console.log('2 = Prato 2');
console.log('3 = Prato 3');

const opcao = +Prompt('Digite a opção: ');

switch(opcao){
    case 1:
        console.log(`Prato ${opcao}`);
            break;
    case 2:
        console.log(`Prato ${opcao}`);
            break;
    case 3:
        console.log(`Prato ${opcao}`);
            break;

    default:
        console.log('Opção não existe!');
}
