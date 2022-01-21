/*
Sabendo-se que José tem direito a 15% de reajuste de salário, complete o diagrama
abaixo:
 */
const salario = 1200,
  reajuste = 0.15;

function reajusteSalario() {
  // Calcula valor do reajuste.
  var valorReajuste = salario * reajuste;
  // Calcula valor do novo salario.
  var novoSalario = salario + salario * reajuste;
  // Mostra na tela o reajuste e novo salario.
  console.log("O valor do reajuste é ", valorReajuste);
  console.log("O novo salario é ", novoSalario);
}
reajusteSalario();
