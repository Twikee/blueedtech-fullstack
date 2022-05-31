/*
Jogo Jokenpô: Utilizando os conceitos aprendidos até estruturas de repetição, 
crie um programa que jogue pedra, papel e tesoura (Jokenpô) com você.

Permitir que eu decida quantas rodadas iremos fazer;
Ler a minha escolha (Pedra, papel ou tesoura);
Decidir de forma aleatória a decisão do computador;
Mostrar quantas rodadas cada jogador ganhou;
Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);

Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa.
*/
const prompt = require('prompt-sync')();
console.clear();

const arrJkp = ['Pedra', 'Papel', 'Tesoura'];

const escolher = (arr) => {
    let escolha = arr[Math.floor(Math.random() * arr.length)];
    return escolha.toLowerCase();
} 


while(true){
    console.log('Quer jogar? Digite 1 para sim ou qualquer outro caractere para não');
    let jogo = +prompt();
    
    if(jogo == 1){
        
        console.log('Escolha uma opção: Pedra, Papel, Tesoura');
        let escolha = prompt().toLowerCase();
        let rand = escolher(arrJkp);
        

        if(escolha == 'pedra' && rand == 'papel'){
            console.log(`Perdeu, você escolheu ${escolha} e a máquina escolheu ${rand};`);
        }else if(escolha == 'pedra' && rand == 'tesoura'){
            console.log(`Ganhou, você escolheu ${escolha} e a máquina escolheu ${rand};`);
        }else if(escolha == 'pedra' && rand == 'pedra'){
            console.log('EMPATE!');
        }else if(escolha == 'papel' && rand == 'pedra'){
            console.log(`Ganhou, você escolheu ${escolha} e a máquina escolheu ${rand};`);
        }else if(escolha == 'papel' && rand == 'tesoura'){
            console.log(`Perdeu, você escolheu ${escolha} e a máquina escolheu ${rand};`);
        }else if(escolha == 'papel' && rand == 'papel'){
            console.log('EMPATE!');
        }else if(escolha == 'tesoura' && rand == 'pedra'){
            console.log(`Perdeu, você escolheu ${escolha} e a máquina escolheu ${rand};`);
        }else if(escolha == 'tesoura' && rand == 'papel'){
            console.log(`Ganhou, você escolheu ${escolha} e a máquina escolheu ${rand};`);
        }else if(escolha == 'tesoura' && rand == 'tesoura'){
            console.log('EMPATE!');
        }
        prompt('PRESS ENTER');
        console.clear();
    }else{
        console.log('FIM DE JOGO!');
        break;
    }
}