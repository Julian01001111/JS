/* Elabore um diagrama de blocos para verificar que produtos precisam ser comprados e a
quantidade a ser adquirida:
Tendo as seguintes informações
Código do produto (CODPROD), Quantidade Mínima (QTDMIN), Quantidade Máxima
(QTDMAX) e a quantidade em estoque (QTDEST) de cada produto.
Um produto somente deverá ser comprado quando: a quantidade em estoque for menor ou
igual a quantidade mínima:
QTCOMPRAR = (QTDMAX – QTDEST)
Grave em outro arquivo: Código do Produto e Quantidade a Comprar
 */

var CODPROD = 1,
  QTDMIN = 15,
  QTDMAX = 50,
  QTDEST,
  QTDCCOMPRAR = QTDMAX - QTDEST,
  COMPRAR;

function estoque() {
  // Pergunta quantidade estoque.
  QTDEST = Number(prompt("Digite a aquantidade de 0 a 50"));
  // Verifica quantidade digitada.
  if (QTDEST <= QTDMIN) COMPRAR = 1;
  else COMPRAR = 2;
  // Calcula quantidade a comprar.
  if (COMPRAR == 1) QTDCCOMPRAR = QTDMAX - QTDEST;
  // Mostra na tela a quantidade a comprar se for o caso se nao diz estoque OK.
  if (COMPRAR == 1)
    console.log(
      "O codigo do produto é",
      CODPROD,
      "e a quantiade a comprar é:",
      QTDCCOMPRAR
    );
  else console.log("O estoque esta OK");
}
estoque();
