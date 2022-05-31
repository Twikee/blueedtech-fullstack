const prompt =  require('prompt-sync')();

let reiniciar = +prompt(': ');
    
while(reiniciar != 1 && reiniciar != 2){
    console.log('Você digitou a opção errada');
    console.log('Deseja jogar novamente? [1] = SIM | [2] = NÃO');
    reiniciar = +prompt(': ');
}

if(reiniciar === 1){
    console.log('PORRA ');
}else{
    console.log('true')
}