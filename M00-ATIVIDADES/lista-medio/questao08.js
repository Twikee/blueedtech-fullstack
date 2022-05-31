//Agora, imprima todas as tabuadas do número 1 ao 10.

console.log('Tabuada completa: ');

for(let i = 1; i <= 10; i++){
    console.log(`Tabuada do ${i}:`);
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}