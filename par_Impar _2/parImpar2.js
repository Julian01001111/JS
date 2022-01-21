/*
Ler um número e verificar se ele é par ou ímpar. Quando for par armazenar esse valor em P e quando for ímpar armazená-lo em I. Exibir P e I no final do processamento.
*/

var P = "";
var I = "";
function parImpar() {
  //REcebe um numero aleatorio.
  var n1 = Number(prompt("Digite um número"));
  //Verifica se o numero e par ou impar e mostra na tela.
  if (n1 % 2 == 0) console.log("O numero é par");
  else console.log("O número e impar");
  // Verifica se resto igual a zero e coloca  n1 em P se verdade se nao coloca n1 em I .
  if (n1 % 2 == 0) P = n1;
  else I = n1;
  // Verifica se I ou P esta vazio e coloca Vazio dentro.
  if (n1 % 2 == 0) I = "Vazio";
  else P = "Vazio";
  //Mostra o resultsdo de P e I.
  console.log("P é igual a", P);
  console.log("I é igual a", I);
}
parImpar();
