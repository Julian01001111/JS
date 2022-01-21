/* Faça um diagrama de bloco que leia um número inteiro e mostre uma mensagem indicando se este número é par ou ímpar, e se é positivo ou negativo.
 */

var n1;

function inteiro(){
    // Recebe o numero.
    n1 = Number(prompt('Digite um numero'));
    // Verifica se par ou impar e mostra na tela.
    if (n1%2==0) console.log('O número é par.')
    else console.log('O número é impar.');
    // Verifica se e positivo,negativo ou nulo e mostra na tela.
    if (n1==0) console.log('O número é nulo');
    if (n1>0) console.log('O número é positivo.');
    if(n1<0) console.log('O número é negativo.');
};
inteiro();