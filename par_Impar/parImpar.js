/*
Elabore um diagrama de blocos que leia um número. Se positivo armazene-o em A, se for negativo, em B. No final mostrar o resultado
*/

var A = '';
var B = '';

function parImpar(){
    // Recebe um numero aleatorio.
    var n1 = (prompt("Digite um número"));
    // Mostra na tela se o numero e par ou impar.
    if (n1%2==0) console.log('O numero é par')
    else console.log('O número e impar');
    // Verifica o numero, se par armazena em A se nao em B.
    if (n1%2==0) A = n1;
    else B = n1;
    // Verifica o numero, armazena em A ou B e exibe o local com o numero na tela.
    if (n1%2==0) console.log('A é igual' ,A);
    else console.log('B é igual' ,B);
};
parImpar()