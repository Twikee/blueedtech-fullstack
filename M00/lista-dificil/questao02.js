// Faça um programa que vai receber como parâmetro o ano de nascimento de uma pessoa,
//  retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições
const prompt = require('prompt-sync')();

console.clear();

let anoNascimento = +prompt('Digite o ano do seu nascimento: ');
let anoAtual = 2022;
const idade = anoAtual - anoNascimento;

if(idade < 16){
    console.log(`Idade: ${idade} anos. Voto NEGADO!`);
}else if(idade >= 16 && idade < 18){
    console.log(`Idade: ${idade} anos. Voto OPCIONAL!`);
}else{
    console.log(`Idade: ${idade} anos. Voto OBRIGATÓRIO!`);
}