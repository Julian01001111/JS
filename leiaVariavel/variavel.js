/*Construa um diagrama de blocos para ler uma variável numérica N e imprimi-la somente se a mesma for maior que 100, caso contrário imprimi-la com o valor zero */

function leiaN() {
  // Recebe o valor de N.
  var N = Number(prompt("Digite um numero"));
  // Verifica se N e maior que 100 se for imprime N se nao imprime 0.
  if (N > 100) console.log("O número é", N);
  else console.log("O numero é", "0");
}
leiaN();
