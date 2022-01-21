/*Faça um algoritmo para somar dois números e multiplicar o resultado pelo primeiro número.
Início
declare: n1,n2,soma
Escreva: “Digite dois números”
Leia: n1,n2
soma: = (n1 + n2) * n2
Escreva: “total ” ,soma 
Fim*/

var n1, n2, calcula;

function somar() {
  //Recebe os numeros n1 e n2.
  n1 = Number(prompt("Digite primeiro número"));
  n2 = Number(prompt("Digite segundo número"));
  // Executa o calculo e mostra o resultado na tela.
  calcula = (n1 + n2) * n1;
  console.log("o total é ", +calcula);
}
somar();
