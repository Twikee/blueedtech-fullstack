/*
    Reajuste salarial: As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e 
    lhe contrataram para desenvolver o programa que calculará os reajustes.
    Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
    salários até R$ 280,00 (incluindo) : aumento de 20%
    salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    salários de R$ 1500,00 em diante : aumento de 5%
    Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

console.clear();

let salario = 279;
const percentual = [0.2, 0.15, 0.1, 0.05];
const salarios = [280, 700, 1500];

console.log(`O salário antes do reajuste é: ${salario}`);

if(salario <= salarios[0]){
    salario += salario * percentual[0];
    console.log(`O percentual adicionado é de 20%`);
    console.log(`O valor adicionado é de ${salario * percentual[0]}`);
}else if(salario > salarios[0] && salario <= salarios[1]){
    salario += salario * percentual[1];
    console.log(`O percentual adicionado é de 15%`);
    console.log(`O valor adicionado é de ${salario * percentual[1]}`);
}else if(salario > salarios[1] && salario <= salarios[2]){
    salario += salario * percentual[2];
    console.log(`O percentual adicionado é de 10%`);
    console.log(`O valor adicionado é de ${salario * percentual[2]}`);
}else{
    salario += salario * percentual[3];
    console.log(`O percentual adicionado é de 5%`);
    console.log(`O valor adicionado é de ${salario * percentual[3]}`);
}

console.log(`O novo salário é no valor de: ${salario}`);
console.log();
