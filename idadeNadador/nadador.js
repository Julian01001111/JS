/*  Elabore um algoritmo que dada a idade de um nadador classifique-o em uma das seguintes categorias:

Infantil A = 5 a 7 anos
Infantil B = 8 a 11 anos
Juvenil A = 12 a 13 anos
Juvenil B = 14 a 17 anos
Adultos = Maiores de 18 anos
*/

var idade;

function nadador(){
    // Recebe a idade.
    idade=Number(prompt('Digite a idade do nadador .'));
    //Verifica se idade menor que 5 e pede para digitar novamente.
    if (idade<5){
      idade = prompt('Idade minima é 5 digite novamente');
    }
    // verifica idade e classifica na respectiva categoria.
    if (idade >= 5 && idade <= 7){
        console.log('Classifica em Infantil A');
    };
    // verifica idade e classifica na respectiva categoria.
    if (idade >= 8 && idade <= 11){
        console.log('Classifica em Infantil B');
    };
    // verifica idade e classifica na respectiva categoria.
    if (idade >= 12 && idade <= 13){
        console.log('Classifica em Juvenil A');
    };
    // verifica idade e classifica na respectiva categoria.
    if (idade >= 14 && idade <= 17){
        console.log('Classifica em Juvenil B');
    };
    // verifica idade e classifica na respectiva categoria.
    if (idade>=18){
        console.log('Classifica em Adulto');
    };
};
nadador();