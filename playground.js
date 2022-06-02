const prompt = require('prompt-sync')();


let arr = [];
let arrAux = [];
let linhas = +prompt('Linhas: ');
let colunas = +prompt('Colunas: ');

for(let i = 0; i < linhas; i++){
    arr.push(arrAux);
    for(let j = 1; j < colunas -1; j++){
        arrAux.push(j);
    }
}

console.table(arr);