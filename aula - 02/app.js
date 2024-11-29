/*********************************************************************
 * Objetivo: Manipular entrada e saida de dados pelo node.js
 * Data: 31/07/2024
 * Autor: Beatriz Rosrigues
 * Versão: 1.0
 *********************************************************************/

//Import da biblioteca readline que será responsavel por manipular entrada de dados
 //via teclado pelo terminal

var readline = require('readline')


var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Permite retornar a entrada de dados fornecida pelo usuario no terminal. 
//isso aconteceatraves de uma função de CallBack
//question habilita para voce escrever
entradaDeDados.question('Digite seu nome:', function(nome){
    var nomeUsuario = nome
   // console.log ('O nome do usuario é:' + nomeUsuario)
    entradaDeDados.question('Digite seu email:', function(email){
      var emailUsuario = email
    //console.log('O email do usuario' + nomedoUsuario + 'é' + emailUsuario)
   // console.log(`O email do usuario' ${nomedoUsuario} é ${emailUsuario}`)

    entradaDeDados.question('Digite o nome do curso', function(curso){
        nomeCurso = curso
        console.log('o email do usuario ${nomeusuario} é ${emailusuario} e o curso é de: ${nomeCurso}')
        entradaDeDados.close()
    })

    })
})