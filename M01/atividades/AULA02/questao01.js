/*
 Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário: 
 quantidade de vida de um monstro (entre 10 e 50) e valor do ataque do jogador por turno (entre 5 e 10). 
 Baseado nos valores digitados, exiba a quantidade de turnos que o jogador 
 irá demorar para conseguir derrotar o monstro (o jogador irá derrotar o monstro em 8 turnos).
*/
const prompt = require('prompt-sync')();
console.clear();

let hpBoss = +prompt('Qual a vida do boss? (entre 10 e 50 de hp): ');
let verificado = true;
let allHits = 0;

do{
    if(hpBoss < 10 || hpBoss > 50){
        hpBoss = +prompt(`Valor fora dos limites 
        Entre com valor entre 10 e 50.
        Digite novamente:
        `);
    }else{
        verificado = false;
    }
}while(verificado);


let dmgPlayer = +prompt('Qual a quantidade de dano? (entre 5 e 10 dmg): ');
verificado = true;

do{
    if(dmgPlayer < 5 || dmgPlayer > 10){
        dmgPlayer = +prompt(`Valor fora dos limites 
        Entre com valor entre 5 e 10.
        Digite novamente:
         `);
    }else{
        verificado = false;
    }
}while(verificado);

while(hpBoss > 0){
    hpBoss -= dmgPlayer;
    allHits++;
}

console.log(`a quantidade de hits que precisou para matar o boss é de ${allHits}
que causou ${dmgPlayer * allHits} dmg`);