/* Desenvolva um diagrama que:
• Leia 4 (quatro) números;
• Calcule o quadrado de cada um;
• Se o valor resultante do quadrado do terceiro for >= 1000, imprima-o e finalize;
• Caso contrário, imprima os valores lidos e seus respectivos quadrados
 */

var n1, n2, n3, n4, Q1, Q2, Q3, Q4;

function quadrado() {
  // Recebe n1,n2,n3,n4 e salva na memoria.
  n1 = Number(prompt("Digite primeiro número"));
  n2 = Number(prompt("Digite segundo número"));
  n3 = Number(prompt("Digite terceiro número"));
  n4 = Number(prompt("Digite quarto número"));
  // Calcula Q1,Q2,Q3,Q4 e guarda na memoria.
  (Q1 = n1 ** 2), (Q2 = n2 ** 2), (Q3 = n3 ** 2), (Q4 = n4 ** 2);
  // Verifica resultado do terceiro numero e mostra na tela se maior que 1000
  // se não mostra n1,n2,n3,n4 e seu respectivos quadrados.
  if (Q3 >= 1000) console.log("O quadrado do terceiro número é:", Q3);
  else
    console.log("O primeiro número é:", n1, "e seu quadrado é:", Q1) +
      console.log("O segundo número é:", n2, "e seu quadrado é:", Q2) +
      console.log("O terceiro número é:", n3, " e seu quadrado é:", Q3) +
      console.log("O quarto número é:", n4, "e seu quadrado é:", Q4);
}
quadrado();
