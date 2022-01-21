/* Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7 (h = altura)
 */
var altura,sexo,homens,mulheres;

function peso(){
   // Recebe dados de entrada.
   altura=prompt('Informe a altura.');
   sexo=prompt('Informe M ou F para sexo.');
   // Recebe formula de poso.
   homens=(72.7*altura)-58;
   mulheres=(62.1*altura)-44.7;   
   // Verifica sexo e mostra seu peso ideal.
   if (sexo=='M') console.log('O peso ideal para homens com altura de' ,altura ,'é' ,homens);
   else console.log('O peso ideal para mulheres com altura de' ,altura ,'é' ,mulheres);
};
peso()