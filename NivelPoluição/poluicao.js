/* A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de
indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável
varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a
suspenderem suas atividades, se o índice crescer para 0,4 as industrias do 1º e 2º grupo
são intimadas a suspenderem suas atividades, se o índice atingir 0,5 todos os grupos
devem ser notificados a paralisarem suas atividades. Faça um diagrama de bloco que leia
o índice de poluição medido e emita a notificação adequada aos diferentes grupos de
empresas.
 */

var poluicao,
  grupo1 = 1,
  grupo2 = 2,
  grupo3 = 3,
  nivel1 = 0.3,
  nivel2 = 0.4,
  nivel3 = 0.5;

function Poluicao() {
  // Recebe o valor da polueção.
  poluicao = Number(
    prompt("Digite o nivel de poluicão separando com o ponto.")
  );
  // Verifica se poluição e maior ou igual a nivel1 se sim aplica regra nivel1 se nao escreve,sem nivel de poluição.
  if (poluicao >= nivel1) console.log("Suspenda as atividades grupo:", grupo1);
  else console.log("Sem nivel excedente de poluição.");
  // Verifica se poluição e nivel2 ou nivel3 e aplica a regra.
  if (poluicao >= nivel2) console.log("Suspenda as atividades grupo:", grupo2);
  if (poluicao >= nivel3) console.log("suspenda as atividades grupo:", grupo3);
}
Poluicao();
