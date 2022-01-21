/*Faça um algoritmo para “Calcular o estoque médio de uma peça”,
sendo que ESTOQUEMÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2
Início
Declare: mínimo, máximo, soma
Escreva: “mínimo”
Leia: mínimo”
Escreva:” máximo”
Leia: máximo
soma: = (mínimo + máximo)/2
Escreva: “total igual a” , soma
Fim*/

var minimo,maximo,soma;

function estoque (){
    // Recebe  o valor do minimo e do maximo.
    minimo = Number(prompt('Informe valor mínimo'));
    maximo = Number(prompt('Informe valor máximo'));
    // Executa o calculo dos dois e mostra a media na tela.
    soma = (minimo+maximo)/2;
    console.log('O estoque medio é ' ,+soma)
    };
estoque();