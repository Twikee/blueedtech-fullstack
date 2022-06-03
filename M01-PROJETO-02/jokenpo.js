'use strict';
// JOKENPO
//  REQUISITOS:
//     Permitir que eu decida quantas rodadas iremos fazer;
//     Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
//     Decidir de forma aleatória a decisão do computador;
//     Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
//     Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
//     Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
//     Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
//     Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.

const prompt = require('prompt-sync')();
console.clear();

let verificadorPrincipal = true;

console.log('Deseja jogar? [1] SIM | [2] NÃO');
let escolhaCondicao = +prompt(': ');

try{
    if(isNaN(escolhaCondicao)) throw "ERROR: Isso não é um NÚMERO!";
    if(escolhaCondicao < 1 || escolhaCondicao > 2) throw "ERROR: Fora do intervalo!"
    if(escolhaCondicao != 1){
        verificadorPrincipal = false;
    }

    //main looping
    while(verificadorPrincipal){
        console.log('Quantas rodadas deseja?');  
        let rodadas = +prompt(': ');
        
        console.clear();
        
        try {
            if(isNaN(rodadas)) throw "ERROR: Isso não é um número!";
            if(rodadas <= 0) throw "ERROR: Número inferior a 0!";
            jogar(rodadas);
        } catch (e) {
            console.log(`Entrada inválida! ${e}`);
            console.log(`Insira um NÚMERO maior que ZERO!`);
        }finally{
            verificadorPrincipal = reiniciarPartida();
            console.log();
            continue;
        }
    }
}catch(e){
    console.log(`Por favor, reinicie o jogo! ${e}`)
}

//function play
function jogar(rodadas){

    const arrEscolhas = ['pedra', 'papel', 'tesoura'];
    let escolhaJogador;
    
    let vitoriaJogador = 0;
    let vitoriaPc = 0;
    
    let verificador = true;
    
    while(rodadas > 0){
        let escolhaPc = Math.floor(Math.random() * 3);

        do{
            console.log('Escolha: [Pedra, Papel ou Tesoura]');
            escolhaJogador = prompt(': ').toLowerCase().trim();

            if(escolhaJogador === 'pedra' || escolhaJogador === 'papel' || escolhaJogador === 'tesoura'){
                verificador = false;
            }else{
                console.log('Opção inválida. Escolha pedra, papel ou tesoura!');
            }
        }while(verificador);
        
        //VERIFICAÇÃO 2.0
        switch(true){
            case escolhaJogador === 'pedra' && arrEscolhas[escolhaPc] === 'papel':
                vitoriaPc++;
                    break;
            case escolhaJogador === 'pedra' && arrEscolhas[escolhaPc] === 'tesoura':
                vitoriaJogador++;
                    break;
            case escolhaJogador === 'papel' && arrEscolhas[escolhaPc] === 'tesoura':
                vitoriaPc++;
                    break;
            case escolhaJogador === 'papel'&& arrEscolhas[escolhaPc] === 'pedra':
                vitoriaJogador++;
                    break;
            case escolhaJogador === 'tesoura' && arrEscolhas[escolhaPc] === 'pedra':
                vitoriaPc++;
                    break;
            case escolhaJogador === 'tesoura' && arrEscolhas[escolhaPc] === 'papel':
                vitoriaJogador++;
                    break;

            default:
                console.log('Empate na rodada!');
        }   

        console.log(`O PC escolheu ${arrEscolhas[escolhaPc]}`);
        console.log();
        console.log(`Resultado da rodada:`);
        console.log(`Jogador ${vitoriaJogador} | PC ${vitoriaPc}`);
        console.log();
        rodadas--; 
    }
    mostrarVencedor(vitoriaJogador, vitoriaPc);
}

//function winner
function mostrarVencedor(vJogador, vPc){
    if(vJogador > vPc){
        console.log();
        console.log(`O jogador foi o vencedor com ${vJogador} rodadas vencidas!`);
        console.log();
    }else if(vPc > vJogador){
        console.log();
        console.log(`O PC foi o vencedor com ${vPc} rodadas vencidas!`);
        console.log();
    }else{
        console.log();
        console.log('O jogardor e o PC empataram!');
        console.log();
    }
}

//function restart
function reiniciarPartida(){
    console.log('Deseja jogar? [1] = SIM | [2] = NÃO');
    let reiniciar = +prompt(': ');

    while(reiniciar != 1 && reiniciar != 2){
        console.clear();
        console.log('Você digitou a opção errada');
        console.log('Deseja jogar novamente? [1] = SIM | [2] = NÃO');
        reiniciar = +prompt(': ');
    }
    
    if(reiniciar === 2){
        return false;
    }else{
        console.clear();
        console.log('Nova partida:');
        return true;
    }
}