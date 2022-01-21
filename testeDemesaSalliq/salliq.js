/* Elabore um algoritmo levando-se em conta o diagrama apresentado:

Inicio
Declara: SalBase,Gratif,Salbruto,Ir20=Salbruto*0.20,Ir15=Salbruto*0.15,Salliq;
Recebe: Salbase;
Recebe:Gratif;
Calcula: Salbrutto = Salbase+Gratif;
Se Salbruto menor que 1000 calcula Ir15 e mostra salliq
se nao calcula Ir20 e mostra salliq;
Fim
 */

var SalBase,Gratif,Salbruto,Ir20=0.20,Ir15=0.15,Salliq,IrFinal;

function teste(){
    // Recebe valor de salario e gratificação.
    SalBase = Number(prompt('Digite o salario'));
    console.log('Salario' ,SalBase);
    Gratif = Number(prompt('Digite a gratificação'));
    console.log('Extra' ,Gratif);
    // Calcula o salario bruto.
    Salbruto = SalBase+Gratif;
    console.log('total' ,Salbruto);
    // Verifica se salario bruto é menor que 1000, se sim calcula em 15% se nao em 20%.
    if (Salbruto<1000) IrFinal = Salbruto*Ir15
    else IrFinal = Salbruto*Ir20;
    //Retira IR do salario e mostra resultado.
    Salliq = Salbruto-IrFinal;
    console.log('Ir' ,IrFinal);
    console.log('O salario liquido é' ,Salliq);
};
teste()