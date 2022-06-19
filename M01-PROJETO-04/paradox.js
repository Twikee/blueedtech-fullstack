'use strict';
// Variáveis para armazenar os status do personagem. (1,0) FEITO
// Perguntas que alteram esses status do personagem. (1,0) FEITO
// Laço de repetição que determinará os ciclos onde a história vai se passar. Determinar o que acontecerá ao final do ciclo e como ficarão os status. (1,0)
// Variável para controle da passagem do tempo. (1,0)
// Variáveis de controle dos status e situações da história. (1,0)
// Condicionais para alterações dessas variáveis. (1,5)
// Funções para executar cada uma das tarefas. (1,5)
// Conteúdo de condicionais, laços, funções e objetos bem aplicados. (2,0)
//OBJETO, REPETIÇÃO, CONDICIONAIS, ARRAYS, VARIÁVEIS
const prompt = require('prompt-sync')();
console.clear();

let nome = prompt('Escolha um nome: ');

const Person = {
    _nome: '',
    _idade: 'DESCONHECIDA',
    _profissao: 'DESCONHECIDO',
    _memoria: 0,
    _gaveta: 
    [
        'Papeis',

        'Caneta',

        'Nintendo Switch',

        'Cartão de acesso'
    ],
    setNome: function(novo){
        this._nome = novo;
    },

    setIdade:function (){
        this._idade = 38;
    },

    setProfissao:function (){
        this._profissao = 'Físico';
    },

    setMemoria:function (){
        this._memoria += 33.3;
    },
    


    getNome: function(){
        return this._nome;
    },

    getMemoria: function(){
        return this._memoria;
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

console.clear();
console.log(`Faça suas escolhas de acordo com o número indicado...`);
prompt('Pressione a tecla ENTER para avançar os textos...');
console.clear();

let ciclo = 1;

while(ciclo <= 4){
    let escolha = 0;
    let verificar = true;
    console.clear();
    prompt(`[NARRADOR] - Esse é o ciclo número ${ciclo}`);
    prompt(`Nome: ${Person.getNome()}`);
    prompt(`Idade: ${Person.getIdade()}`);
    prompt(`Memória: ${Person.getMemoria()}`);
    prompt(`Profissão: ${Person.getProfissao()}`);
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
            prompt(`[NARRADOR] - No caminho até a cafeteria, ${Person.getNome()} passa por algumas pessoas bem vestidas e logo após tropeça, cai e fica um  pouco machucado.`);
            console.log();
            while(verificar){
                console.clear();
                console.log(`[1]: Ir diretamente para cafeteria | [2]: Ir até a farmácia que fica em frente para fazer um curativo`);
                escolha = +prompt();
                verificar = verificarEscolha(escolha);
                prompt('Enter para continuar...');
            }

            verificar = true;

            console.clear();
            prompt('[NARRADOR] - Um assalto aconteceu na cafeteria... Infelizmente... Com várias vítimas fatais...')

            if(escolha === 1){
                prompt(`[NARRADOR] - ...`);
                Person.setMemoria();
            }else{
                prompt(`[NARRADOR] - ${Person.getNome()} viu aquilo tudo acontecer, já imaginou se estivesse lá? O que teria acontecido?`);
                console.clear();
                prompt(`${Person.getNome()} : Se eu fosse diretamente para cafeteria eu teria acabado como aquelas pessoas...`);
                console.clear();
                prompt(`[NARRADOR] - Pensativo(a), ${Person.getNome()} sai da farmácia e continua andando em direção ao trabalho, imaginando o que teria acontecido caso a sua escolha fosse a cafeteria...`);
                prompt(`[NARRADOR] - ...`);
                prompt(`[NARRADOR] - ${Person.getNome()}, você olhou antes de atravessar a rua?`);
                prompt(`[NARRADOR] - ...`);
                prompt(`[NARRADOR] - Pelo jeito não...`);
                console.clear();
                Person.setMemoria();
            }
                break;
            
        case 2:
            console.clear();
            prompt(`[NARRADOR] - ${Person.getNome()} sente uma terrível dor de cabeça e nauseas...`);
            
            console.clear();
            prompt(`[NARRADOR] - Pela manhã ${Person.getNome()} acorda e se prepara para iniciar um novo dia...`);

            console.clear();
            prompt(`${Person.getNome()} : ...`);
            prompt(`${Person.getNome()} : Que sonho estranho...`);
            prompt(`${Person.getNome()} : É... Acho que não irei comer aquela sobra de pizza...`);
            console.clear();

            prompt(`[NARRADOR] - Ao se levantar, sente uma pequena dor no corpo... Como se tivesse caído em algum lugar...`);
            console.clear();

            prompt(`${Person.getNome()} : Ai... Não lembro de me machucar... Deve ter acontecido antes de dormir...`);
            prompt(`${Person.getNome()} : Não lembro ao certo o que aconteceu ontem...`);
            prompt(`${Person.getNome()} : Vou comer fora antes de ir ao trabalho...`);
            prompt(`${Person.getNome()} : Aquela cafeteria... Não foi coincidencia ter sonhado com ela...`);
            prompt(`${Person.getNome()} : Gosto de lá.`);
            console.clear();
            
            prompt(`[NARRADOR] - No caminho até a cafeteria, ${Person.getNome()} passa por algumas pessoas bem vestidas e logo após para e...`);
            console.clear();

            prompt(`${Person.getNome()} :  Acho que já vi essas pessoas antes...`);
            prompt(`${Person.getNome()} :  Que estranho...`);
            console.clear();

            prompt(`[NARRADOR] - ${Person.getNome()} começa a seguir seu caminho...`);
            console.clear();

            prompt(`${Person.getNome()} : Aquele sonho agora me parece tão... real...`);
            prompt(`${Person.getNome()} : Será que devo passar naquela farmácia novamente?`);
            console.log();
            
            while(verificar){
                console.clear();
                console.log(`[1]: Ir à cafeteria | [2]: Ir até a farmácia`);
                escolha = +prompt();
                verificar = verificarEscolha(escolha);
                prompt('Enter para continuar...');
            }

            verificar = true;

            if(escolha === 1){
                prompt(`[NARRADOR] - ${Person.getNome()} entra na cafeteria, se senta perto do balcão e faz seu pedido...`);
                console.clear();
                prompt(`${Person.getNome()} : Quero um capuccino por favor!`);
                console.clear();
                prompt(`[NARRADOR] - Enquanto ${Person.getNome()} espera, algumas pessoas entram e anunciam um assalto...`);
                prompt(`*DEITEM NO CHÃO, MÃOS NA CABEÇA*`);
                console.clear();
                

                while(verificar){
                    console.clear();
                    console.log('[1]: Seguir as instruções dos assaltantes | [2]: Desafia-los');
                    escolha = +prompt();
                    verificar = verificarEscolha(escolha);
                    prompt('Enter para continuar...');
                }

                if(escolha === 1){
                    prompt(`[NARRADOR] - Tudo está indo bem, nada de mais aconteceu...`);
                    prompt(`[NARRADOR] - ${Person.getNome()} sai ileso(a) desse mal entendido.`);
                    prompt(`[NARRADOR] - Mas por conta do susto, ${Person.getNome()} não vai ao trabalho e volta pra casa...`);
                    
                    Person.setMemoria();
                    Person.setIdade();
                }else{
                    prompt(`[NARRADOR] - É ${Person.getNome()}...`);
                    prompt(`[NARRADOR] - Isso não foi uma ideia muito inteligente...`);
                    prompt(`[NARRADOR] - ...`);
                    
                    Person.setMemoria();
                    Person.setIdade();
                }

            }else if(escolha === 2){
                prompt(`[NARRADOR] - ${Person.getNome()} viu tudo acontecer... Novamente?`);
                console.clear()
                prompt(`${Person.getNome()} : Acho que aquilo não foi somente um sonho...`);
                prompt(`${Person.getNome()} : O que está acontecendo comigo?`);
                console.clear()
                prompt(`[NARRADOR] - ${Person.getNome()} se encontra confuso(a) com tudo aquilo, e continua sua jornada até ao trabalho!`);
                prompt(`[NARRADOR] - ${Person.getNome()} dessa vez olhou para os dois lados antes de atravessar a rua...`);
                console.clear()
                prompt(`${Person.getNome()} : Acho que aquelas memórias foram reais, não sei como, mas já vivi esse dia...`);
                prompt(`${Person.getNome()} : Irei voltar pra casa e pensar mais sobre isso.`);
                
                Person.setMemoria();
                Person.setIdade();
            }
                break;

        case 3:
            console.clear();
            prompt(`[NARRADOR] - ${Person.getNome()} sente uma terrível dor de cabeça e nausea...`);
            
            console.clear();
            prompt(`[NARRADOR] - Pela manhã ${Person.getNome()} acorda e se prepara para iniciar um novo dia...`);

            console.clear();
            prompt(`${Person.getNome()} : Será que estou revivendo tudo aquilo?`);
            prompt(`${Person.getNome()} : Porque isso está acontecendo comigo?`);
            console.clear();

            prompt(`[NARRADOR] - Questionamentos tomam sua mente...`);
            prompt(`[NARRADOR] - Após os ultimos "acontecimentos"...`);
            prompt(`[NARRADOR] - ${Person.getNome()} vai diretamente ao trabalho`);
            console.clear();
            
            prompt(`${Person.getNome()} : Não me lembro de trabalhar aqui...`);
            prompt(`${Person.getNome()} : Mas tudo me parece tão familiar...`);
            console.clear();

            prompt(`[SEGURANÇA] : Sr(a), ${Person.getNome()}, desculpe, mas você só pode passar com um cartão de acesso...`);
            
            while(verificar){
                console.clear();
                console.log(`[1]: Tentar passar a força | [2]: Conversar com o segurança`);
                escolha = +prompt();
                verificar = verificarEscolha(escolha);
                prompt('Enter para continuar...');
            }

            verificar = true;

            if(escolha === 1){
                prompt(`[NARRADOR] - ${Person.getNome()} o segurança foi mais forte que você...`);
                ciclo = 2;
            }else{
                prompt(`[SEGURANÇA] : Depois dos ultimos problemas que tivemos no seu setor, a segurança teve que revisar os protocolos...`);
                prompt(`[SEGURANÇA] : Muitos físicos estão querendo sabotar seu projeto, não sabemos quem é confiável!`);
                console.clear();

                Person.setMemoria();
                Person.setProfissao();
            }        
                break;
        
        case 4:
            console.clear();
            prompt(`[NARRADOR] - ${Person.getNome()} sente uma terrível dor de cabeça e nausea...`);
            
            console.clear();
            prompt(`[NARRADOR] - Pela manhã ${Person.getNome()} acorda e se prepara para iniciar um novo dia...`);
            
            console.clear();
            prompt(`${Person.getNome()} : Está tudo cada vez mais confuso, não sei como sair disso...`);
            prompt(`${Person.getNome()} : Mas a resposta pode estar no projeto que estou trabalhando...`);
            prompt(`${Person.getNome()} : Preciso encontrar meu cartão, pode estar na minha gaveta.`);
            prompt(`${Person.getNome()} : Ah, que dor de cabeça terrível...`);
            console.clear();
            
            prompt(`[NARRADOR] - ${Person.getNome()} olha sua gaveta, e tenta encontrar o cartão...`);
            console.clear();

            console.log('GAVETA:');
            Person._gaveta.forEach(item => {
                prompt(item);
            });

            while(verificar){
                console.clear();
                console.log(`[1]: Pegar cartão de acesso | [2]: Pegar o Nintendo Switch e jogar o dia todo`);
                escolha = +prompt();
                verificar = verificarEscolha(escolha);
                prompt('Enter para continuar...');
            }

            verificar = true;

            if(escolha === 1){
                prompt(`[NARRADOR] - ${Person.getNome()} pega seu cartão e se dirige ao trabalho.`);
                prompt(`[NARRADOR] - Passa pelo segurança e sobe até seu laboratório.`);
                prompt(`[NARRADOR] - Onde viu ele(a) mesmo(a) trabalhando no seu projeto`);
                prompt(`[NARRADOR] - ...`);
                prompt(`[NARRADOR] - Tudo aquilo de alguma forma, alterou o espaço tempo...`);
                prompt(`[NARRADOR] - Como ${Person.getNome()} foi parar ali... Exatamente naquele momento...`);
                prompt(`[NARRADOR] - Isso foi onde tudo... começou?`);
            }else{
                prompt(`[NARRADOR] - ${Person.getNome()} jogou o dia todo...`);
                prompt(`[NARRADOR] - ...`);
                prompt(`[NARRADOR] - O que é isso?`);
                prompt(`[NARRADOR] - MINECRAFT?`);
                prompt(`[NARRADOR] - Não tinha nada melhor?`);
    
                ciclo = 3;
            }
    }

    ciclo++;
}


function verificarEscolha(escolha){
    let isTrue = [
        escolha < 1 || escolha > 2,
        isNaN(escolha),
    ];

    try{
        if(isTrue[0]){
            throw 'OPÇÃO ERRADA, TENTE NOVAMENTE';
        }else if(isTrue[1]){
            throw 'OPÇÃO NÃO É UM NÚMERO';
        }else{
            return false;
        }
       
    }catch(e){
        console.log(e);
        return true;
    }

}