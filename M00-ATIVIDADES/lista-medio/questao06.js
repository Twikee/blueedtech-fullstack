// Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista.
// Caso o número já esteja lá dentro, ele não será adicionado. No final, serão exibidos todos os valores únicos 
// digitados, em ordem crescente.

const prompt = require("prompt-sync")();

console.clear();


let numeros = [];
let chave = 0;


do{
    numeros.push(+prompt('Digite um número: '));
    chave++;
}
while(chave < 10);

numeros.sort();

// ordenarNumeros(numeros);

// function ordenarNumeros(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let k = 0; k < arr.length - 1; k++){
//             if(arr[k] > arr[k + 1]){
//                 let aux = arr[k];
//                 arr[k] = arr[k + 1];
//                 arr[k + 1] = aux;
//             }
//         }
//     }
// }

console.log(`Números presentes no array em ordem crescente:${numeros}`);