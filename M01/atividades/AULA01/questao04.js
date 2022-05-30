'use strict'
/*
Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. 
Também considere todo ano com 365 dias e todo mês com 30 dias.
*/
const prompt = require('prompt-sync')();
console.clear();

let diasIdade = +prompt('Digite quantos dias vc já viveu: ');


((dias) => {
    
    let meses = 0;
    let anos = 0;
    while(dias >= 30){
        if(dias >= 365){
            anos++;
            dias -= 365;
        }else if(dias >= 30){
            meses++;
            dias -= 30;
        }else{
            break;
        }
    }
    console.log(`Vc tem ${anos} anos, ${meses} meses e ${dias} dias`);
})(diasIdade);

// if(diasIdade => 365){
//     anos++;
//     diasIdade - 365;
// }else if(diasIdade >= 30){
//     meses++;
//     diasIdade - 30;
// }else if(diasIdade == 1){
//     dias++;
//     diasIdade--;
// }
