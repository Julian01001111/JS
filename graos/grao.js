/* Uma rainha requisitou os serviços de um monge e disse-lhe que pagaria qualquer preço.
 O monge, necessitando de alimentos , indagou à rainha sobre o pagamento, se poderia ser feito com grãos de trigo dispostos em um tabuleiro de xadrez, de tal forma que o primeiro quadro deveria conter apenas um grão e os quadros subseqüentes , o dobro do quadro anterior.
 A rainha achou o trabalho barato e pediu que o serviço fosse executado, sem se dar conta de que seria impossível efetuar o pagamento. Faça um algoritmo para calcular o número de grãos que o monge esperava receber.
 */
// Recebe variaveis.
var quadro = 0,
  grao = 1,
  total = 1;
// soma 1 emqnato menor que 64.
while (quadro < 64) {
  quadro++;
  // Calcula N de graos.
  grao = grao * 2;
  // Calcula o total.
  total = total + grao;
}
// Mostra o resultado.
console.log("O total será:", total);
