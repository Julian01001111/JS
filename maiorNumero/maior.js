/* Faça um algoritmo que determine o maior entre N números. A condição de parada é a entrada de um valor 0, ou seja, o algoritmo deve ficar calculando o maior até que a entrada seja igual a 0 (ZERO).
 */

var maior = 0,
  atual;
// Enquanto número digitado diferente de 0 repete o ciclo.
while (atual != 0) {
  // Recebe o número.
  atual = prompt("Digite um número.");
  // Verifica qual o maior número e mostra na tela.
  if (atual > maior) alert("O maior número e o atual.");
  else alert("O maior número é o anterior.");
  // Alerta que os numeros sao iguais.
  if (atual == maior) alert("Os números são iguais.");
  // Coloca o maior numero na var maior.
  if (atual > maior) maior = atual;
  // finaliza o programa se atual =0.
  if (atual == 0) alert("fim do programa");
}
