// Você está na flor da idade?
// Defina uma variável para o valor do ano do nascimento;
// Defina uma variável para o valor do ano atual;
// Defina uma variável que calcula o valor final da idade da pessoa;
// Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".

const PromptSync = require("prompt-sync")();


let anoNascimento = +PromptSync('Digite o ano que nasceu: ');
let anoAtual = 2022;
let idade = anoAtual - anoNascimento;

console.log(`Você tem ${idade} anos e está na flor da idade!`);