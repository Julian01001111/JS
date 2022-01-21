/* Faça um algoritmo que conte de 1 a 100 e a cada múltiplo de 10 emita uma mensagem:
“Múltiplo de 10”. */
// Declara a variavel.
var n1 = 0;
// Conta de 1 a 100.
while (n1 < 100) {
  n1++;
  // Mostra mensagem qundo multiplo de 10.
  if (n1 % 10 == 0) console.log(n1, "E multiplo de 10");
}
