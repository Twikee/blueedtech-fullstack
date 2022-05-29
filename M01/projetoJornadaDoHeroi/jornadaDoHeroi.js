// REGRA DE NEGócio
//criar historia
//ciar 5 perguntas com respostas sim ou não
//contabilizar o número de respostas sim 

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

const prompt = require("prompt-sync")();
console.clear();

console.log(`

        ********************************************************************************
        *        No sonho de migrar de carreira, uma pessoa comum decide fazer um      *
        *             curso intensivo para ser um desenvolvedor fullstack              *
        *            e para isso acontecer, é necessário muita dedicação e             *
        *       comprometimento pois é um caminho difícil e tem que ser percorrido     *
        *   em pouco tempo pois sua condição financeira atual não está das melhores.   *
        ********************************************************************************
        *                                                                              *
        *Para conseguir seu sonho, a pessoa em questão precisa estar atenta à 5 passos:*
        *                                                                              *
        ********************************************************************************
`);


prompt('PRESSIONE ENTER PARA CONTINUAR...');
console.clear();

console.log(`
        ********************************************************************************
        ********************** RESPONDA s PARA SIM E n PARA NÃO ************************
        ********************************************************************************
`);
console.log('');

const perguntas = [
    '        *                      Quer mesmo isso para sua vida?                          * resposta = ',
    '        *Ao começar o curso, está disposto a dar seu melhor para concluí-lo com êxito ?* resposta = ',
    '        *      Está disposto a muitas ocasiões abrir mão de diversão para estudar?     * resposta = ',
    '        * Está disposto a enfrentar ansiedade e estresse para conseguir o que deseja?  * resposta = ',
    '        *           Chegou ao final! Está orgulhoso do seu resultado?                  * resposta = '
];

console.log(`
        *                                                                              *
`);

let resostasSim = 0;

perguntas.forEach((item) => {
    prompt(item) === 's' ? resostasSim++ : console.log('');
});


switch(resostasSim){
    case 1:
        console.log(`
        ********************************************************************************
        * Infelizmente você ainda não tomou uma decisão e vai ficar na carreira atual! *
        ********************************************************************************
        `);
                break;
    case 2:
        console.log(`
        ********************************************************************************
        *Você deu o primeiro passo, mas não  é o suficiente para alcançar o que deseja!*
        ********************************************************************************
        `);
                break;
    case 3:
        console.log(`
        ********************************************************************************
        *              Você pode concluir o curso, mas ele não faz milagre.            *
        *      SUA CARREIRA DEPENDE DE VOCÊ, E O QUE VOCÊ FEZ NÃO FOI O SUFICIENTE     *
        ********************************************************************************
        `);
                break;
    case 4:
        console.log(`
        ********************************************************************************
        *    VOCÊ CHEGOU ONDE SEMPRE QUIS, MAS NÃO COMO O GRANDE DEV QUE QUERIA SER!   *
        ********************************************************************************
        `);
                break;
     case 5:
        console.log(`
        ********************************************************************************
        *        VOCÊ ALCANÇOU O QUE SEMPRE QUIS! PARABÉNS, VOCÊ É UM ÓTIMO DEV!       *
        ********************************************************************************
        `);
                break;
        
    default:
        console.log(`
        ********************************************************************************
        *               Nem uma resposta sim? Você não quer mesmo isso!                *
        ********************************************************************************
        `);
}