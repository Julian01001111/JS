/* Foi feita uma pesquisa entre os habitantes de uma região. Foram coletados os dados de idade, sexo (M/F) e salário. Faça um algoritmo que informa:
a) A média de salário do grupo
b) Maior e menor idade do grupo
c) Quantidade de mulheres com salário até R$ 100,00
d) Quantidade de homens
  */
// Declara as variaveis.
var H=0,idadeMa=0,idadeMi=999,idade1,idade2,idade3,
feminino=0,masculino=0,sexo1,sexo2,sexo3,salario1,
salario2,salario3,mediaSalario,M100=0;
// Algoritmo.
function habitante(){
  // Recebe novo habitante.
  var novoH = prompt('Digite 1 para novo habitante ou 2 para finalizar.');
  if (novoH==1) {
    H++;
  // Recebe idade e verifica maior e menor.
    idade1=prompt('Digite idade 1');
    if (idade1>idadeMa) idadeMa=idade1;
    if (idade1<idadeMi) idadeMi= idade1;
    // Recebe sexo e verifica se masculino ou feminino.
    sexo1=prompt('Digite sexo 1');
    if (sexo1=='F')
    feminino++
    else masculino++;
    // Recebe salario.
    salario1= Number(prompt('Digite salario 1'));
  };
    // Recebe novo habitante.
  var novoH = prompt('Digite 1 para novo habitante ou 2 para finalizar.');
  if (novoH==1) { 
    H++;
    // Recebe idade e verifica maior e menor.
    idade2=prompt('Digite idade 2');
    if (idade2>idadeMa) idadeMa=idade2;
    if (idade2<idadeMi) idadeMi= idade2;
    // Recebe sexo e verifica se masculino ou feminino.
    sexo2=prompt('Digite sexo 2');
    if (sexo2=='F')
    feminino++
    else masculino++;
    // Recebe salario.
    salario2= Number(prompt('Digite salario 2'));
  };
   // Recebe novo habitante.
  var novoH = prompt('Digite 1 para novo habitante ou 2 para finalizar.');
  if (novoH==1) { 
    H++;
    // Recebe idade e verifica maior e menor.
    idade3=prompt('Digite idade 3');
    if (idade3>idadeMa) idadeMa=idade3;
    if (idade3<idadeMi) idadeMi= idade3;
    // Recebe sexo e verifica se masculino ou feminino.
    sexo3=prompt('Digite sexo 3');
    if (sexo3=='F')
    feminino++
    else masculino++;
    // Recebe salario.
    salario3= Number(prompt('Digite salario 3'));
  };
    // verifica mulheres com salario ate 100.
  if (sexo1=='F' && salario1<=100)
  M100++;
  if (sexo2=='F' && salario2<=100)
  M100++;
  if (sexo3=='F' && salario3<=100)
  M100++;
  // Calculaa media do salario.
  mediaSalario=(salario1+salario2+salario3)/H;
  // Mostra os resutados.
  console.log('Habitantes entrevistados:' ,H);
  console.log('A media do salario é:' ,mediaSalario);
  console.log('A maior idade é:' ,idadeMa);
  console.log('A menor idade é:' ,idadeMi);
  console.log('A quantidade de mulheres com salario ate 100 é:' ,M100);
  console.log('A quantidade de homens é:' ,masculino);  
};
habitante();
