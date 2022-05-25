const prompt = require("prompt-sync")();


// O programa deve fazer 5 perguntas ao usuário com respostas de sim ou não.
// Caso o usuário responda sim, a 4 perguntas ou mais, devemos retornar que ele é culpado.
// Caso o usuário responda sim, a 3 perguntas, devemos retornar que ele é suspeito.
// Caso o usuário responda sim, a 2 perguntas ou menos, devemos retornar que ele é inocente.
// Critérios de aceitação:
// Precisa retornar resposta para todas as possibilidades de culpado, suspeito ou inocente.
// Precisa ter condicionais.

console.log('***************************************************');
console.log('*          RESPONDA s PARA SIM E n PARA NÃO       *');
console.log('***************************************************');
console.log(' ');

const perguntas = [
    prompt('Você estava no jantar? '),
    prompt('Tinha alguma faca ou algo afiado perto de você? '),
    prompt('Tinha algo com você que pudesse causar algum mal ao próximo? '),
    prompt('Você tinha desavenças com alguém do jantar? '),
    prompt('Gostou do que aconteceu lá? ')
];

let count = 0;

perguntas.forEach((item) => {
    if(item === 's'){
        count++;
    }
});

if(count <= 2){
    console.log(' ');
    console.log('*      Você é inocente!        *');
    console.log(' ');
}else if(count === 3){
    console.log(' ');
    console.log('*      Você é suspeito!        *');
    console.log(' ');
}else if(count >= 4){
    console.log(' ');
    console.log('*      Você é culpado!!!         *');
    console.log(' ');
}
