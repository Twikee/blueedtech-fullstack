// Conversor de moedas: Crie um programa que solicite um valor em real ao usuário e converta esse valor, para:
// DOLAR
// EURO
// LIBRA ESTERLINA
// DÓLAR CANADENSE
// PESO ARGENTINO
// PESO CHILENO
// Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real. Mostrar o resultado no formato U$9999.99

const PromptSync = require("prompt-sync")();

const valorEmReal = +PromptSync('Digite o valor em real: ');
const valorMoedas = [4.82, 5.17, 6.04, 3.76, 0.04, 0.0058];
const nomeMoedas = ['DOLAR', 'EURO', 'LIBRA ESTERLINA', 'DÓLAR CANADENSE', 'PESO ARGENTINO', 'PESO CHILENO'];


console.log('0 = DOLAR');
console.log('1 = EURO');
console.log('2 = LIBRA ESTERLINA');
console.log('3 = DÓLAR CANADENSE');
console.log('4 = PESO ARGENTINO');
console.log('5 = PESO CHILENO');
const opcao = +PromptSync('Escolha uma opção: ');

const resultado = valorEmReal * valorMoedas[opcao];

console.log(`R$ ${valorEmReal} é igual a ${resultado} ${nomeMoedas[opcao]}`);


