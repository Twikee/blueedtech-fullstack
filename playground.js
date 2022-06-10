const prompt = require('prompt-sync')();

const condicoes = {
    "linha-1": array[0][0] == array[0][1] && array[0][1] == array[0][2],
    "linha-2": array[1][0] == array[1][1] && array[1][1] == array[1][2],
    "linha-3": array[2][0] == array[2][1] && array[2][1] == array[2][2],
    "coluna-1": array[0][0] == array[1][0] && array[1][0] == array[2][0],
    "coluna-2": array[0][1] == array[1][1] && array[2][1] == array[0][1],
    "coluna-3": array[0][2] == array[2][1] && array[2][1] == array[2][2],
    "diagonal-1": array[0][0] == array[1][1] && array[1][1] == array[2][2],
    "diagonal-2": array[2][0] == array[1][1] && array[1][1] == array[0][2],
  };

  console.log(consicoes.JSON);
