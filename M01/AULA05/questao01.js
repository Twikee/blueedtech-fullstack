// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, 
// mostrando uma mensagem de erro e voltando a pedir as informações.
const prompt = require('prompt-sync')();

let nome = prompt('Digite seu nome: ');
let senha = prompt('Digite sua senha: ');

while(senha.toLowerCase() === nome.toLowerCase()){
    console.log('A senha não pode ser igual ao nome');
    senha = prompt('Digite a senha novamente: ');
}