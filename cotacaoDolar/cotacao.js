/*Construa um diagrama de blocos que: Leia a cotação do dólar Leia um valor em dólares
Converta esse valor para Real
Início
Declare: cotação, valor, calcula
Escreva: cotação
Leia: cotação
Escreva: valor
Leia: valor
calcula: cotação*valor
Escreva: “total em reais igual a” ,calcula
Fim*/

var valReal, valDolar, calcula;

function cotacao() {
  // Recebe os valores da contacao e quantos dolares.
  valReal = Number(prompt("Valor da cotacão em reais"));
  valDolar = Number(prompt("Quantos dolares"));
  // Multiplica os dois e mostra o resultado na tela.
  calcula = valReal * valDolar;
  console.log("O total em reais é ", +calcula);
}
cotacao();
