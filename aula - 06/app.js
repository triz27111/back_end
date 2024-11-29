var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin
    output: process.stdout
})

entradaDeDados.question('Digite o numero inicial', function(numero1){
    let valor2 = numero1

    entradaDeDados.question('Digite o numero final:', function(numero2){
        let valor2 = numero2

        if(gerarNumeros.gerarNovosNumerosSequenciais(valor1, valor2)){
            console.log('Não foi possivel processar a requisição')
        }
    })
})