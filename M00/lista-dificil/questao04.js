/*
Caixa eletrônico: Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao 
usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. 
As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. 
O programa não deve se preocupar com a quantidade de notas existentes na máquina.

Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;

Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota 
de 5 e quatro notas de 1.
*/
const prompt = require('prompt-sync')();
console.clear();

const saque = +prompt('Digite o valor que deseja sacar:');
console.log();

if(saque > 600 || saque < 10){
    console.log('Valor máximo para saque: R$600,00');
}else{
    caixaEletronico(saque);
}

console.log();

function caixaEletronico(saque){

    let notas = [1, 5, 10, 50 ,100];
    let notasSaque = [];
    let valor = 0;

    while(saque > 0){

        if(saque >= notas[4]){
            notasSaque.push(notas[4]);
            valor += notas[4];
            saque -= notas[4];
        }else if(saque < notas[4] && saque >= notas[3]){
            notasSaque.push(notas[3]);
            valor += notas[3];
            saque -= notas[3];
        }else if(saque < notas[3] && saque >= notas[2]){
            notasSaque.push(notas[2]);
            valor += notas[2];
            saque -= notas[2];
        }else if(saque < notas[2] && saque >= notas[1]){
            notasSaque.push(notas[1]);
            valor += notas[1];
            saque -= notas[1];
        }else{
            notasSaque.push(notas[0]);
            valor += notas[0];
            saque -= notas[0];
        }
    }

    const arr = notasSaque.forEach(item => {
        console.log(`Nota retirada: R$${item},00`);
    });
}