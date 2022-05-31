// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';

class Cadastro {
    constructor(value1, value2, value3) {
      this.nome = value1;
      this.idade = value2;
      this.sexo = value3;
    }
  }

  console.log(Cadastro);
  
  const aluno = new Cadastro("Bruno", 27, "Masculino");
  
  console.log(aluno);
  
  const lista = [];
  
  aluno.sala = 'C17';
  lista.push(aluno);

  console.log(lista);

  console.log(lista.indexOf(aluno));