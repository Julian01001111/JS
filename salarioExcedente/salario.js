/* Elabore um diagrama de bloco que leia as variáveis C e N, respectivamente código e número de horas trabalhadas de um operário.
E calcule o salário sabendo-se que ele ganha R$ 10,00 por hora. Quando o número de horas exceder a 50 calcule o excesso de pagamento armazenando-o na variável E, caso contrário zerar tal variável.
A hora excedente de trabalho vale R$ 20,00. No final do processamento imprimir o salário total e o salário excedente.

 */
var codigo,
  horas,
  horasNor = 10,
  horasExt = 20,
  horasMax = 50,
  salarioTot,
  salarioExt;
var horasExtras = 0;

function salario() {
  // Recebe o numero de horas.
  horas = Number(prompt("Digite o número de horas trabalhadas"));
  // Coloca zero no salario excedente se memor que 50 horas.
  if (horas <= horasMax) salarioExt = 0;
  if (horas <= horasMax) salarioTot = horas * horasNor;
  else horasExtras = horas - horasMax;
  salarioTot = (horas - horasExtras) * horasNor;
  salarioExt = horasExt * horasExtras;
  console.log("O salario total é de:", salarioTot);
  console.log("O salario extra total é de:", salarioExt);
}
salario();
