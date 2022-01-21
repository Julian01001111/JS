/*
Desenvolva um diagrama que:
Leia 4 (quatro) números
Calcule o quadrado para cada um
Somem todos e mostre o resultado
R __
Início
Declare: n1, n2, n3 , n4
Escreva: n1
Leia: n1
Escreva: n2
Leia: n2
Escreva: n3
Leia: n3
Escreva: n4
Leia: n4
Calcula: (4*n1)+(4*n2)+( 4*n3)+(4*n4) 
Exibir: ”O resultado e ” ,+Calcula
Fim

*/
var n1,n2,n3,n4,calcula;

function leiaNum(){
    // Recebe os valores e guarda em n1,n2,n3,n4.
    n1 = Number(prompt('Primeiro número'));
    n2 = Number(prompt('Segundo número'));
    n3 = Number(prompt('Terceiro número'));
    n4 = Number(prompt('Quarto número'));
    // Faz o calculo dos valores e mostra  o resutado na tela.
    calcula = (4*n1)+(4*n2)+( 4*n3)+(4*n4);
    console.log('O resultado é ' ,+calcula)
};
leiaNum();