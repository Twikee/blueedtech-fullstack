//criar historia
//ciar 5 perguntas com respostas sim ou não
//contabilizar o número de respostas sim 

const prompt = require("prompt-sync")();

/* 
    No sonho de migrar de carreira, uma pessoa comum decide fazer um curso intensivo para ser um desenvolvedor fullstack
    e para isso acontecer, é necessário muita dedicação e comprometimento pois é um caminho difícil e tem que ser percorrido em pouco tempo
    pois sua condição financeira atual não está das melhores. Para conseguir seu sonho, a pessoa em questão precisa estar atenta à 5 passos:
        1: Quer mesmo isso para sua vida?
        2: Ao começar o curso, está disposto a dar seu melhor para concluí-lo com êxito?
        3: Está disposto a muitas ocasiões abrir mão de diversão para estudar?
        4: Está disposto a enfrentar ansiedade e estresse para conseguir o que deseja?
        5: Chegou ao final! Está orgulhoso do seu resultado?
*/
console.clear();
console.log('********************************************************************************');
console.log('*        No sonho de migrar de carreira, uma pessoa comum decide fazer um      *');
console.log('*             curso intensivo para ser um desenvolvedor fullstack              *');
console.log('*            e para isso acontecer, é necessário muita dedicação e             *');
console.log('*       comprometimento pois é um caminho difícil e tem que ser percorrido     *');
console.log('*   em pouco tempo pois sua condição financeira atual não está das melhores.   *');
console.log('********************************************************************************');
console.log('*                                                                              *');
console.log('*Para conseguir seu sonho, a pessoa em questão precisa estar atenta à 5 passos:*');
console.log('*                                                                              *');
console.log('********************************************************************************');
console.log('********************** RESPONDA s PARA SIM E n PARA NÃO ************************');
console.log('********************************************************************************');

console.log('*                                                                              *');

const perguntas = [
    prompt('*                      Quer mesmo isso para sua vida?                          * resposta = '),
    prompt('*Ao começar o curso, está disposto a dar seu melhor para concluí-lo com êxito ?* resposta = '),
    prompt('*      Está disposto a muitas ocasiões abrir mão de diversão para estudar?     * resposta = '),
    prompt('* Está disposto a enfrentar ansiedade e estresse para conseguir o que deseja?  * resposta = '),
    prompt('*           Chegou ao final! Está orgulhoso do seu resultado?                  * resposta = ')
];

console.log('*                                                                              *');


let resostasSim = 0;

perguntas.forEach((item) => {
    if(item === 's'){
        resostasSim++;
    }
});


switch(resostasSim){
    case 1:
        console.log('********************************************************************************');
        console.log('* Infelizmente você ainda não tomou uma decisão e vai ficar na carreira atual! *');
        console.log('********************************************************************************');
        break;
        case 2:
        console.log('********************************************************************************');
        console.log('*Você deu o primeiro passo, mas não  é o suficiente para alcançar o que deseja!*');
        console.log('********************************************************************************');
        break;
        case 3:
        console.log('********************************************************************************');
        console.log('*              Você pode concluir o curso, mas ele não faz milagre.            *');
        console.log('*      SUA CARREIRA DEPENDE DE VOCÊ, E O QUE VOCÊ FEZ NÃO FOI O SUFICIENTE     *');
        console.log('********************************************************************************');
        break;
        case 4:
            console.log('********************************************************************************');
            console.log('*    VOCÊ CHEGOU ONDE SEMPRE QUIS, MAS NÃO COMO O GRANDE DEV QUE QUERIA SER!   *');
            console.log('********************************************************************************');
            break;
            case 5:
        console.log('********************************************************************************');
        console.log('*        VOCÊ ALCANÇOU O QUE SEMPRE QUIS! PARABÉNS, VOCÊ É UM ÓTIMO DEV!       *');
        console.log('********************************************************************************');
        break;
        
        default:
        console.log('********************************************************************************');
        console.log('*               Nem uma resposta sim? Você não quer mesmo isso!                *');
        console.log('********************************************************************************');
}