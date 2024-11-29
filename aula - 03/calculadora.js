/*********************************************************************
 * Objetivo: Criar uma calculadora de juros compostos
 * Data: 07/08/2024
 * Autor: Beatriz Rosrigues
 * Versão: 1.0
 **********************************************************/

var readline = require('readline')

var entradaDeDdados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDdados.question('Insira o capital inicial:', function(capital){
    var capital = parseFloat(capital)
    
    entradaDeDdados.question('Insira sua taxa em porcentagem: ', function(taxa){
        var taxa = parseFloat(taxa)
        

        entradaDeDdados.question('Insira o número de vezes que os juros são compostos por ano: ', function(n){
        var n = parseFloat(n)

            entradaDeDdados.question('Insira o tempo em anos: ', function(tempo){
            var tempo = parseFloat(tempo)
        
            conversao = taxa/100
            var A = conversao/n
            var B = 1 + A
            var C = n*tempo
            var D = B ** C
            var E = capital * D

            console.log(A)
            console.log(B)
            console.log(C)
            console.log(D)
            console.log(E)

            var montante = capital ((1+ (conversao/n))*(n*tempo))

            console.log(montante)
            entradaDeDdados.close()

            })
        })    
    })
})