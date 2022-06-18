'use strict';
// Variáveis para armazenar os status do personagem. (1,0) FEITO
// Perguntas que alteram esses status do personagem. (1,0) FEITO
// Laço de repetição que determinará os ciclos onde a história vai se passar. Determinar o que acontecerá ao final do ciclo e como ficarão os status. (1,0)// Variável para controle da passagem do tempo. (1,0)
// Variáveis de controle dos status e situações da história. (1,0)
// Condicionais para alterações dessas variáveis. (1,5)
// Funções para executar cada uma das tarefas. (1,5)
// Conteúdo de condicionais, laços, funções e objetos bem aplicados. (2,0)
//OBJETO, REPETIÇÃO, CONDICIONAIS, 
const prompt = require('prompt-sync')();
console.clear();

let nome = prompt('Escolha um nome: ');

const Person = {
    _nome: '',
    _idade: 'DESCONHECIDA',
    _profissao: 'DESCONHECIDO',
    _cargo: 'DESCONHECIDO',
    _memorias: 
    [
        '',

        '',

        '',
    ],
    setNome: function(novo){
        this._nome = novo;
    },

    setIdade:function (){
        this._idade = 38;
    },


    getNome: function(){
        return this._nome;
    },

    getIdade: function(){
        return this._idade;
    },

    getProfissao: function(){
        return this._profissao;
    },

    getCargo: function(){
        return this._cargo;
    },

    getMemoria: function(){
        return this._memoria;
    },
}

Person.setNome(nome);
Person._memorias[0]();

passarTempo()

console.clear();
console.log(`Faça suas escolhas de acordo com o número indicado...`);
prompt('Pressione a tecla ENTER para avançar os textos...');
console.clear();
passarTempo();
let ciclo = 1;

while(ciclo <= 5){
    let escolha = 0;

    prompt(`[NARRADOR] - Esse é o ciclo número ${ciclo}`);
    prompt(`Nome: ${Person.getNome()}`);
    prompt(`Idade: ${Person.getIdade()}`);
    prompt(`Profissão: ${Person.getProfissao()}`);
    prompt(`Cargo: ${Person.getCargo()}`);
    console.clear()

    switch(ciclo){
        case 1:
            console.log(`[NARRADOR] - Pela manhã ${Person.getNome()} acorda e se prepara para iniciar um novo dia...`);

            prompt('');
            console.clear()
            prompt(`${Person.getNome()} : Acho que hoje irei comer aquela sobra de pizza que ficou na geladeira, ainda pode estar boa...`);
            prompt(`${Person.getNome()} : No caminho irei passar pela cafeteria para comprar algo e depois vou para o trabalho.`);
            prompt(`${Person.getNome()} : Espero não ter nem um contratempo!`);
            console.clear();
            prompt(`[NARRADOR] - No caminho até a cafeteria, ${Person.getNome()} passa por algumas Persons bem vestidas e logo após tropeça, cai e fica um  pouco machucado.`);
            console.log();
            console.log(`[1]: Ir diretamente para cafeteria | [2]: Ir até a farmácia que fica em frente para fazer um curativo`);
            escolha = +prompt();

            console.clear();
            prompt('[NARRADOR] - Um assalto aconteceu na cafeteria... Infelizmente... Com várias vítimas fatais...')

            if(escolha === 1){
                prompt(`[NARRADOR] - ...`);
            }else{
                prompt(`[NARRADOR] - ${Person.getNome()} viu aquilo tudo acontecer, já imaginou se estivesse lá? O que teria acontecido?`);
                console.clear();
                prompt(`${Person.getNome()} : Se eu fosse diretamente para cafeteria eu teria acabado como aquelas Persons...`);
                console.clear();
                prompt(`[NARRADOR] - Pensativo, ${Person.getNome()} sai da farmácia e continua andando em direção ao trabalho, imaginando o que teria acontecido caso a sua escolha fosse a cafeteria...`);
                prompt(`[NARRADOR] - ...`);
                prompt(`[NARRADOR] - ${Person.getNome()}, você olhou antes de atravessar a rua?`);
                prompt(`[NARRADOR] - ...`);
                prompt(`[NARRADOR] - Pelo jeito não...`);
                console.clear();
                
            }
                break;
            
        case 2:
            console.clear();
            prompt(`[NARRADOR] - ${Person.getNome()} sente uma terrível dor de cabeça e nausea...`);
            
            console.clear();
            prompt(`[NARRADOR] - Pela manhã ${Person.getNome()} acorda e se prepara para iniciar um novo dia...`);

            console.clear();
            prompt(`${Person.getNome()} : ...`);
            prompt(`${Person.getNome()} : Que sonho estranho...`);
            prompt(`${Person.getNome()} : É... Acho que irei comer aquela sobra de pizza que ficou na geladeira...`);
            console.clear();

            prompt(`[NARRADOR] - Ao se levantar, sente uma pequena dor no corpo... Como se tivesse caído em algum lugar...`);
            console.clear();

            prompt(`${Person.getNome()} : Ai... Não lembro de me machucar... Deve ter acontecido antes de dormir...`);
            prompt(`${Person.getNome()} : Não lembro ao certo o que aconteceu ontem...`);
            prompt(`${Person.getNome()} : Vou comer fora antes de ir ao trabalho...`);
            prompt(`${Person.getNome()} : Aquela cafeteria... Não foi coincidencia ter sonhado com ela...`);
            prompt(`${Person.getNome()} : Gosto de lá.`);
            console.clear();
            
            prompt(`[NARRADOR] - No caminho até a cafeteria, ${Person.getNome()} passa por algumas Persons bem vestidas e logo após para e...`);
            console.clear();

            prompt(`${Person.getNome()} :  Acho que já vi essas Persons antes...`);
            prompt(`${Person.getNome()} :  Que estranho...`);
            console.clear();

            prompt(`[NARRADOR] - ${Person.getNome()} começa a seguir seu caminho...`);
            console.clear();

            prompt(`${Person.getNome()} : Aquele sonho agora me parece tão... real...`);
            prompt(`${Person.getNome()} : Será que devo passar naquela farmácia novamente?`);
            console.log();
            console.log(`[1]: Ir à cafeteria | [2]: Ir até a farmácia`);
            escolha = +prompt();

            if(escolha === 1){
                prompt(`[NARRADOR] - ${Person.getNome()} entra na cafeteria, se senta perto do balcão e faz seu pedido...`);
                console.clear();
                prompt(`${Person.getNome()} : Quero um capuccino por favor!`);
                console.clear();
                prompt(`[NARRADOR] - Enquanto ${Person.getNome()} espera, algumas Persons entram e anunciam um assalto...`);
                prompt(`*DEITEM NO CHÃO, MÃOS NA CABEÇA*`);
                console.clear();
                console.log('[1]: Seguir as instruções dos assaltantes | [2]: Desafia-los');
                escolha = +prompt();
                if(escolha === 1){
                    prompt(`[NARRADOR] - Tudo está indo bem, nada de mais aconteceu...`);
                    prompt(`[NARRADOR] - ${Person.getNome()} sai ileso desse mal entendido.`);
                    prompt(`[NARRADOR] - Mas por conta do susto, ${Person.getNome()} não vai ao trabalho e volta pra casa...`);
                    

                    Person.setMemorias(0);
                }else{
                    prompt(`[NARRADOR] - É ${Person.getNome()}...`);
                    prompt(`[NARRADOR] - Isso não foi uma ideia muito inteligente...`);
                    prompt(`[NARRADOR] - ...`);
                    
                    
                    Person.setMemorias(0);
                }

            }else if(escolha === 2){
                prompt(`[NARRADOR] - ${Person.getNome()} você viu tudo acontecer... Novamente?`);
                console.clear()
                prompt(`${Person.getNome()} : Acho que aquilo não foi somente um sonho...`);
                prompt(`${Person.getNome()} : O que está acontecendo comigo?`);
                console.clear()
                prompt(`[NARRADOR] - ${Person.getNome()} se encontra confuso com tudo aquilo, e continua sua jornada até ao trabalho!`);
                prompt(`[NARRADOR] - ${Person.getNome()} dessa vez olhou para os dois lados antes de atravessar a rua...`);
                console.clear()
                prompt(`${Person.getNome()} : Acho`);
            }
                break;
    }

    ciclo++;
}

function passarTempo(){

}