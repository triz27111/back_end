/***************************************
 * Objetivo: Manipular tratamento de entrada de Dados, conversao de tipos de 
 * dados, através de um exercicio para calcular medidas escolares e ultilizar estruturas concdicionais.
 * Data: 07/08/2024
 * Autor: Beatriz Rodrigues
 * Versao: 1.0
 ***************************************/


//import da biblioteca para entrada de dados 
var readline = require('readline')

//cria um projeto para receber entrada de dados
var entradadedados = readline.createInterface({
    input: process.stdin,
    output:process.stdout

})

entradadedados.question(' Digite o nome do aluno: ', function(nome){
    let nomeAluno = nome 

    entradadedados.question(' digite o nome do curso do aluno:', function(curso){
        let cursoAluno = curso
    
        entradadedados.question('digite a nota 1:',function (valor1){
            let nota1= valor1

            entradadedados.question (' digite a nota 2:', function (valor2){
                let nota2 = valor2

                entradadedados.question (' digite a nota 3:', function (valor3){
                    let nota3 = valor3

                    entradadedados.question (' digite a nota 4:', function (valor4){
                        let nota4 = valor4
                        let resultado
                    
                     /* 
                        
                        Operadores de comparaçao
                        == Verifica a igualdade entre dois conteudos
                        != Verifica a diferenca entre dois conteudos
                        < Verificar se eo valor é menor
                        > Verificar se o vslor é maior 
                        <= Verificar se o valor é menor ou se é igual 
                        >= Verifica se o valor é maior ou se é igual
                        === Verifica a igualdade entre conteudos e igualdade de tipos de dados 
                        ==! Verifica a igualdade entre dois conteudos e a diferenca entre tipos de dados 
                        !== Verifica a diferenca entre dois conteudos e a igualdade entre tipos de dados 
                        !=! Verifica a diferenca entre dois conteudos e a difrenca entre od tipos de dados 

                    /*

                    /* Operadores lógicos 

                    E       &&           AND
                    OU      ||(pipe)     OR
                    NAO     !            NOT

                    */
  
                  
                  //Validação de entrada de dados vazio
                    if(nomeAluno == '' || cursoAluno == '' || nota1 == '' ||  nota2 == '' ||  nota3 == '' || nota4 == ''){
                       console.log ('ERRO: É obrigatorio preencher todas as entradas.')
                    }else{
                        //Validação de entrada de caracteres invalidos
                        if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                            console.log('ERRO: é obrigatorio a entrada de notas apenas com números.')
                        }else{
                            //validação de entrada de valores somente de 0 a 10
                            if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota > 10){
                                console.log('ERRO: Não é permitido a ntrada de valores maior que 10 e menor que')
                            }else{
                                resultado =  (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4
                                console.log(resultado.toFixed(1))
                            
                            }//fecha a validação de 0 a 10
                        }//fecha a validação de caracter inválido
                    }//fecha a validação de entrada vazia
                    
                    })
                })
            })
        })
     })
})