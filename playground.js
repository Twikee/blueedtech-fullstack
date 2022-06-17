function passarTempo(){
 
    let timing1 = 1000;
    let timing2 = 2000;
    let timing3 = 3000;

        setTimeout(() => {
            console.clear();
            console.log('.');
        }, timing1);
        setTimeout(() => {
            console.clear();
            console.log('..');
        }, timing2);
        setTimeout(() => {
            console.clear();
            console.log('...');
        }, timing3);

}

function game(){
    passarTempo();
}

game();