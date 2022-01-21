/* João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho.
Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar um multa de R$ 4,00 por quilo excedente.
João precisa que você faça um diagrama de blocos que leia a variável P (peso de peixes) e verifique se há excesso.
 Se houver, gravar na variável E (Excesso) e na variável M o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.
 */

 var peso,pesoMaximo=50,excesso,multa,valorMulta=4;

 function excedente(){
    // Recebe o peso dos peixes.
    peso = prompt('Digite o peso');
    // Verifica se tem ou não excedente de peso e guarda na memoria.
    if (pesoMaximo>peso) excesso=0;
    else excesso=peso-pesoMaximo;
   //Se tiver excesso calcula a multa se nao mostra zero.
    if (excesso>0) multa=excesso*valorMulta
    else multa=0;
    // Exibe o resultado.
    console.log('O excesso é de:' ,excesso);
    console.log('A multa é de:' ,multa);
 };
 excedente();