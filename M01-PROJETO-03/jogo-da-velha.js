// Criação da Matriz de duas dimensões. (1,0) FEITO
// Solicitar coordenadas aos jogadores. (1,0) FEITO
// Sistema para players (COMPLEMENTAR) FEITO
// Sistema para contabilizar vitória (COMPLEMENTAR) FEITO
// Laço de repetição que determinará se os jogadores querem continuar o jogo ou não. (2,0) FEITO
// Variável para controle do vencedor de cada rodada. (2,0) FEITO
// Mostrar o resultado e quem foi o grande vencedor. (2,0) FEITO
// Conteúdo de variáveis, arrays, matrizes, condicionais e laços bem aplicados. (2,0) FEITO

const prompt = require("prompt-sync")();
console.clear();

console.log(`-|-|-|- BEM VINDO AO JOGO DA VELHA -|-|-|-

O Jogador 1 jogará com X e o Jogador 2 com O 

`);
prompt("PRESSIONE ENTER PARA CONTINUAR...");
console.clear();

console.log("Digite seus nomes: ");
let nomeJogador = [];
nomeJogador.push(prompt("Quem será o jogador 1? "));
nomeJogador.push(prompt("Quem será o jogador 2? "));

let controleTurno = 0;

console.clear();
let arrTTT = [
  ["0:0", "0:1", "0:2"],
  ["1:0", "1:1", "1:2"],
  ["2:0", "2:1", "2:2"],
];

//----------------------------------------MAIN
let controleGeral = true;

while (controleGeral) {
  let rodadas
  let verificador = true;

  do{
    console.log("Quantas rodadas desejam jogar?");
    rodadas = +prompt(": ");
    try{
      if(isNaN(rodadas)) throw 'Isso não é um número!';
      if(rodadas < 0) throw 'Não são aceitos números negativos!';
      if(rodadas > 0 && typeof rodadas == 'number') verificador = false;
    }catch(e){
      console.clear();
      console.log('ERROR: ' + e);
    }
  }while(verificador);

  let vitoria = [0, 0];

  while (rodadas > 0) {
    let vitoria = false;

    game(arrTTT, nomeJogador, controleTurno);
    console.log(`RODADAS = ${rodadas}`);

    console.clear();

    vitoria = verificarVitoria(arrTTT, nomeJogador, controleTurno, vitoria);
    if (vitoria) {
      rodadas--;
      arrTTT = [
        ["0:0", "0:1", "0:2"],
        ["1:0", "1:1", "1:2"],
        ["2:0", "2:1", "2:2"],
      ];
      if (rodadas <= 0) break;
      prompt("PRESSIONE ENTER PARA PRÓXIMA RODADA!");
      console.clear();
    }
    controleTurno++;
  }

  if(vitoria[0] > vitoria[1]){
    console.log(`O jogador(a) ${nomeJogador[0]} venceu!`);
  }else if(vitoria[1] > vitoria[0]){
    console.log(`O jogador(a) ${nomeJogador[1]} venceu!`);
  }else{
    console.log('Os jogadores empataram!');
  }

  console.log('Deseja jogar uma nova partida? [1] : SIM | [QUALQUER OUTRO VALOR] : NÃO');

  let reset = +prompt(': ');
  if (reset == 1) {
    continue;
  } else {
    break;
  }
}

function game(array, nomeJ, cTurno) {
  let simbolo = "";
  let verificador = true;
  let escolhaLinha;
  let escolhaColuna;

  console.table(array);

  if (cTurno % 2 == 0) {
    simbolo = "X";
    console.log(`Turno: ${nomeJ[0]}`);
  } else {
    simbolo = "O";
    console.log(`Turno: ${nomeJ[1]}`);
  }

  do {
    escolhaLinha = +prompt("Linha: ");
    escolhaColuna = +prompt("Coluna: ");
    let lTry = escolhaLinha < 0 || escolhaLinha > 2;
    let cTry = escolhaColuna < 0 || escolhaColuna > 2;
    try {
      if (isNaN(escolhaColuna)) throw "A escolha na coluna não é um número!";
      if (isNaN(escolhaLinha)) throw "A escolha na linha não é um número!";
      if (lTry) throw "Escolha da linha fora do intervalo!";
      if (cTry) throw "Escolha da coluna fora do intervalo!";
      if (!(cTry || lTry)) verificador = false;
    } catch (e) {
      console.clear();
      console.table(arrTTT);
      console.log('ERROR:' + e);
    }
  } while (verificador);

  while (
    array[escolhaLinha][escolhaColuna] == "X" ||
    array[escolhaLinha][escolhaColuna] == "O"
  ) {
    console.log("O campo já foi escolhido!");
    console.log("Escolha uma coordenada sem marcação de outro jogador!");
    escolhaLinha = +prompt("Linha: ");
    escolhaColuna = +prompt("Coluna: ");
  }

  array[escolhaLinha].splice(escolhaColuna, 1, simbolo);
}

function verificarJogador(nomeJ, cTurno, contadorVitoria) {
  if (cTurno % 2 == 0) {
    console.log(`O jogador ${nomeJ[0]} ganhou esse turno!`);
    contadorVitoria[0] += 1;
  } else {
    console.log(`O jogador ${nomeJ[1]} ganhou esse turno!`);
    contadorVitoria[1] += 1;
  }
}

function verificarVitoria(array, nomeJ, cTurno, contadorVitoria) {
  const condicoes = {
    "linha-1": array[0][0] == array[0][1] && array[0][1] == array[0][2],
    "linha-2": array[1][0] == array[1][1] && array[1][1] == array[1][2],
    "linha-3": array[2][0] == array[2][1] && array[2][1] == array[2][2],
    "coluna-1": array[0][0] == array[1][0] && array[1][0] == array[2][0],
    "coluna-2": array[0][1] == array[1][1] && array[2][1] == array[0][1],
    "coluna-3": array[0][2] == array[2][1] && array[2][1] == array[2][2],
    "diagonal-1": array[0][0] == array[1][1] && array[1][1] == array[2][2],
    "diagonal-2": array[2][0] == array[1][1] && array[1][1] == array[0][2],
  };

  switch (true) {
    case condicoes["linha-1"]:
      verificarJogador(nomeJ, cTurno, contadorVitoria);
      return true;
    case condicoes["linha-2"]:
      verificarJogador(nomeJ, cTurno, contadorVitoria);
      return true;
    case condicoes["linha-3"]:
      verificarJogador(nomeJ, cTurno, contadorVitoria);
      return true;
    case condicoes["coluna-1"]:
      verificarJogador(nomeJ, cTurno, contadorVitoria);
      return true;
    case condicoes["coluna-2"]:
      verificarJogador(nomeJ, cTurno, contadorVitoria);
      return true;
    case condicoes["coluna-3"]:
      verificarJogador(nomeJ, cTurno, contadorVitoria);
      return true;
    case condicoes["diagonal-1"]:
      verificarJogador(nomeJ, cTurno, contadorVitoria);
      return true;
    case condicoes["diagonal-2"]:
      verificarJogador(nomeJ, cTurno, contadorVitoria);
      return true;
      
    default:
      console.log('Empate'); 
      return true;
  }

}
