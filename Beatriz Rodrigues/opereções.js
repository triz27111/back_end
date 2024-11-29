/***************************************************************
 * Objetivo: Calcular as principais operações matemáticas.
 * Data: 21/08/2024
 * Autor: Beatriz Rodrigues
 * Versao: 1.0
 **************************************************************/
 
var readline = require('readline')


var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o numero desejado: ',function(numero1){
    let valor1 = (numero1.replace(',','.'));
    entradaDeDados.question('Digite o segundo numero desejado: ', function(numero2){
        let valor2 = (numero2.replace(',', '.'))
        let soma
        let muliplicacao
        let divisao
        let subtracao
        // verifica se a operação é verdadeira

        if(valor1 == '' || valor2 == ''){
            console.log('ERRO: é obrigatorio inserir um valor')

        }else{
            if(isNaN(valor1) || isNaN(valor2)){
                console.log('ERRO: Digite um valor permitido')
            
            } 
        }
            entradaDeDados.question('Escolha a operação = soma [+] -- subtração [-] -- divisão [/] -- multiplicação [*] = ', function(escolheroperacao){
                let operacao = escolheroperacao
                if(operacao !== '+' && operacao !== '-' && operacao !== '/' && operacao !== '*'){
                    console.log('ERRO: é obrigatorio escolher uma operação')
                }else{
                    if(operacao === '+'){
                        soma = Number(valor1) + Number(valor2)
                        console.log(`O resultado da operaçao é ${soma.toFixed(2)}`)
                    }else{
                        if(operacao === '-'){
                            subtracao = Number(valor1) - Number(valor2)
                            console.log(`O resultado da operaçao é ${subtracao.toFixed(2)}`)
                        }else{
                            if(operacao === '*'){
                                muliplicacao = Number(valor1) * Number(valor2)
                                console.log(`O resultado da operaçao é ${muliplicacao.toFixed(2)}`)
                            }else{
                                if(operacao === '/'){
                                    if(Number(valor1) == 0 || Number(valor2) == 0){
                                        console.log('IMPOSSIVEL REALIZAR A DIVISÃO POR 0')
                                       
                                    }else{
                                        divisao = Number(valor1) / Number(valor2)
                                        console.log(`O resultado da operaçao é ${divisao.toFixed(2)}`)
                                    }
                                }
                            }
                        }

                
                    } 
                }entradaDeDados.close()
            })
    })
})