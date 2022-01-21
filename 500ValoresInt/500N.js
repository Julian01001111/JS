/* Construa um algoritmo que leia 500 valores inteiros e positivos e:
• Encontre o maior valor
• Encontre o menor valor
• Calcule a média dos números lidos
 */

// Declara as variaveis.
var n1,maior=0,menor=500,media,contador=0;
// Memoriza 500 números aleatorios.
while (contador<500) {
    contador++;
    // Gera um número aleatorio.
    n1 = Math.floor(Math.random() * 500 +1);
    // Verifica menor número.
    if (n1 < menor) menor=n1;
    // Verifica maior número.
    if (n1 > maior) maior=n1;
    // Calcula a media do menor e maior.
    media = (maior+menor)/2;
};
function resultado(){
    console.log('O menor número é:' ,menor);
    console.log('O maior  número é:' ,maior);
    console.log('A média é:' ,media);
}
resultado();
