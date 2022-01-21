/*
Construa um algoritmo para pagamento de comissão de vendedores de peças
levando-se em consideração que sua comissão será de 5% do total da venda e que você tem os seguintes dados:
    dentificação do vendedor
    Código da peça
    Preço unitário da peça
    Quantidade vendida
    E depois construa o diagrama de blocos do algoritmo desenvolvido
    e por fim faça um teste de mesa.
 */

    var vendedor,val,quant,soma;

    function comissao(){
        // Pergunta qual vendedor,valor e quantidade e guarda na memoria.
        vendedor = prompt('Qual o Vendedor?');
        val =  prompt('Qual o valor da peça?');
        quant = prompt('Qual a quantidade vendida?');
        // Calcula os dados e exibe o resultado na tela.
        soma = val*quant*0.05;
        console.log('O valor da comissão do' ,vendedor ,'é' ,soma);
    };
    comissao();