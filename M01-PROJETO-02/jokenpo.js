/*JOKENPO
REQUISITOS:
    Permitir que eu decida quantas rodadas iremos fazer;
    Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
    Decidir de forma aleatória a decisão do computador;
    Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
    Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
    Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
    Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
    Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.
*/

const prompt = require('prompt-sync')();
console.clear();

let verificadorPrincipal = true;

//main looping
while(verificadorPrincipal){
    console.log('Quantas rodadas deseja?');  
    let rodadas = +prompt(': ');

    console.clear();
    
    jogar(rodadas);

    console.log('Deseja jogar novamente? [1] = SIM | [2] = NÃO');
    let reiniciar = +prompt(': ');

    //secundary looping
    while(reiniciar != 1 && reiniciar != 2){
        console.log('Você digitou a opção errada');
        console.log('Deseja jogar novamente? [1] = SIM | [2] = NÃO');
        reiniciar = +prompt(': ');
    }
    
    if(reiniciar === 1){
        continue;
    }else{
        verificadorPrincipal = false;
    }
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
        let rodadaAtual = 1;

        do{
            console.log('Escolha: [Pedra, Papel ou Tesoura]');
            escolhaJogador = prompt(': ').toLowerCase().trim();

            if(escolhaJogador === 'pedra' || escolhaJogador === 'papel' || escolhaJogador === 'tesoura'){
                verificador = false;
            }else{
                console.log('Opção inválida. Escolha pedra, papel ou tesoura!');
            }

        }while(verificador);
        
        //VERIFICAÇÃO 0.01
        if(escolhaJogador === 'pedra' && arrEscolhas[escolhaPc] === 'papel'){
            console.log();
            console.log('Vencedor da rodada: PC!');
            console.log();
            vitoriaPc++;
        }else if(escolhaJogador === 'pedra' && arrEscolhas[escolhaPc] === 'tesoura' ){
            console.log();
            console.log('Vencedor da rodada: Jogador!');
            console.log();
            vitoriaJogador++;
        }else if(escolhaJogador === 'papel' && arrEscolhas[escolhaPc] === 'tesoura' ){
            console.log();
            console.log('Vencedor da rodada: PC!');
            console.log();
            vitoriaPc++;
        }else if(escolhaJogador === 'papel' && arrEscolhas[escolhaPc] === 'pedra' ){
            console.log();
            console.log('Vencedor da rodada: Jogador!');
            console.log();
            vitoriaJogador++;
        }else if(escolhaJogador === 'tesoura' && arrEscolhas[escolhaPc] === 'pedra' ){
            console.log();
            console.log('Vencedor da rodada: PC!');
            console.log();
            vitoriaPc++;
        }else if(escolhaJogador === 'tesoura' && arrEscolhas[escolhaPc] === 'papel' ){
            console.log();
            console.log('Vencedor da rodada: Jogador!');
            console.log();
            vitoriaJogador++;
        }else{
            console.log('EMAPTE!');
        }

        console.log(`O PC escolheu ${arrEscolhas[escolhaPc]}`);
        console.log();
        
        rodadas--;
        rodadaAtual++;
    }

    if(vitoriaJogador > vitoriaPc){
        console.log();
        console.log(`O jogador foi o vencedor com ${vitoriaJogador} rodadas vencidas!`);
        console.log();
    }else if(vitoriaPc > vitoriaJogador){
        console.log();
        console.log(`O PC foi o vencedor com ${vitoriaPc} rodadas vencidas!`);
        console.log();
    }else{
        console.log();
        console.log('O jogardor e o PC empataram!');
        console.log();
    }
}