/*
Jogo de dados: Crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.
O programa tem que:

*****************************************
Perguntar quantas rodadas você quer fazer;
Perguntar quantos jogadores vão jogar;

Criar um objeto pra cada jogador com nome e número tirado;

Guarda todos os objetos em uma lista;

Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.

Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão.
*/
const prompt = require("prompt-sync")();
console.clear();

//rodadas e quantidade de jogadores
let numeroJogadores = +prompt('Quantos jogadores vão jogar? : ');
const rodadas = +prompt('Digite a quantidade de rodadas: ');

/////////////////////////////////////////////////////////////////////////////////////////
//sistema de dados
const min = 1;
const max = 6;
let dados = (rodadas) => { 
    let valorTotal = 0;
    let rodadaAtual = rodadas;
    let contagem = 0;
    console.log();
    while(rodadaAtual > 0){
        const valor = Math.floor(Math.random() * max - min + 1) + min;
        valorTotal += valor;
        rodadaAtual--;
        if(contagem <= rodadas){
          console.log(`Rodada ${contagem} : ${valor}`);
        }
        contagem++;
    }
    console.log();
    return valorTotal;
}

///////////////////////////////////////////////////////////////////////////////////////
//Jogadores
let listaJogadores = [];

//LÓGICA PARA CRIAR JOGADORES E ADICIONAR A LISTA
function criarJogador(lista){
    const jogador = {
        nome : prompt('Digite o nome do jogador(a): '),
        placar : dados(rodadas)
    }
    lista.push(jogador);
    console.log(`JOGADOR(A): ${jogador.nome} OBTEVE: ${jogador.placar} PONTOS`);
    console.log(`/////////////////////////////////////////////////////////////`)
}

while(numeroJogadores > 0){
    criarJogador(listaJogadores);
    numeroJogadores--;
}


//ORDENAR JOGADORES
function ordenarJogadores(lista){
    lista.sort((a, b) => { 
        if(a.placar < b.placar){//retornar um número negativo se o primeiro objeto é menor que o segundo
            return 1;
        }else if(a.placar > b.placar){//um número positivo se o segundo é menor que o primeiro
            return -1;
        }else{
            return 0;
        }
    })
}
ordenarJogadores(listaJogadores);
///////////////////////////////////////////////////////////////////////////////////
//EXIBIR VENCEDOR
if(listaJogadores[0].placar === listaJogadores[1].placar){
    console.log(`
    
    EMPATE!
    
    `);
}else{
    console.log(`

    O jogador(a) que venceu foi ${listaJogadores[0].nome} com ${listaJogadores[0].placar} pontos!

    `);
}