console.clear();
const prompt = require("prompt-sync")();

// O projeto é extenso, e temos muito o que fazer! Mas vamos começar por partes. Para hoje seus objetivos são:
// Criar uma lista com os elementos a serem escolhidos;
// Criar as variáveis que receberão as escolhas do usuário e do computador (prompt para o usuário, e aleatório para o computador);
// Fazer a validação da entrada do usuário (o programa só deve aceitar o que foi definido por você como entradas válidas);
// Exibir o elemento da lista correspondente à escolha de cada um;
// Comparar os elementos e exibir quem foi o vencedor dessa rodada.

// Quantidade de rodadas 
let rodadas = +prompt("Quantas rodadas você deseja? ")

while (rodadas){
    // Array lista de opções
    let lista = ["Pedra","Papel","Tesoura"];

    // Variaveis usuario e computador 
    let user;
    let cpu = lista[Math.floor(Math.random()*lista.length)];

    // Opções de escolha 
    console.log(`Escolha uma opção abaixo: 
    [1] Pedra
    [2] Papel
    [3] Tesoura `
    );
    // Resposta do usuário 
    user = +prompt("Qual é sua escolha? ")

    //Validacao resposta do usuario 
    while (isNaN(user)|| user != 1 && user != 2 && user != 3){
        console.log("Escolha Errada!");
        console.log();
        console.log(`Escolha uma opção abaixo: 
        [1] Pedra
        [2] Papel
        [3] Tesoura `
        );

        user = +prompt("Qual é sua escolha? ")
        console.log();
    }

    // Escolha dos jogadores
    if (user == 1){
        console.log("O Jogador escolheu: Pedra");
        console.log();
    } else if (user == 2){
        console.log("O Jogador escolheu: Papel");
        console.log();
    } else {
        console.log("O Jogador escolheu: Tesoura");
        console.log();
    }
    console.log("O Computador escolheu:", cpu);
    console.log();

    // Resultado 

    if (user == 1 && cpu == "Tesoura"){
        console.log("Você venceu!");
    } else if (user == 2 && cpu == "Pedra"){
        console.log("Você venceu!");
    } else if (user == 3 && cpu == "Papel"){
        console.log("Você venceu!");
    } else if (user == 1 && cpu == "Papel"){
        console.log("Você perdeu!");
    } else if (user == 2 && cpu == "Tesoura"){
        console.log("Você perdeu!");
    } else if (user == 3 && cpu == "Pedra"){
        console.log("Você perdeu!");
    } else {
        console.log("Você empatou!");
    }
    console.log();
    rodadas--;
}