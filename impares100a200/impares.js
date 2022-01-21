/* Elabore um algoritmo que gera e escreve os números ímpares dos números lidos entre 100 e 200.
 */
// Declara N1
var N1 = 100;
// Gera loop de N1 mais 1 enquanto menor que 200.
while (N1 < 200) {
  N1++;
  // Se N1 for impar mostra na tela.
  if (N1 % 2 == 1) console.log(N1);
}
