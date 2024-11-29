/*********************************************************************
 * Objetivo: Conhecer os primeiros comandos de JS dentro do NODE
 * Data: 31/07/2024
 * Autor: Beatriz Rosrigues
 * Versão: 1.0
 **********************************************************/

// permite exibir uma mensagem no terminal
console.log('exercicio 01 com Node.js')

var nome = 'josé'
var valor1 = '10'
var valor2 = '20'

//Criação de variaveis em JS
//var -> permite criar uma variavel (espaço na memoria) no escopo global da programação
//let -> permite criar uma variavel (espoçl na memoria) no escopo local de programação
//(bloco de programação),  essa variavel nasce e deixa de existir dentro do bloco
//const -> permite criar uma constante (espaço em memoria que não sofre mudança) tanto no espaço local como global na programação

//concatenar -> é juntar conceitos distintos em um mesmo lugar
console.log('O nome de usuario é:' + nome) //Tradicional
console.log(`O nome do usuario é: ${nome}`) //Forma reduzida

//Permite identificar o tipo de dados  de uma variavél
console.log(typeof(nome))

var resultado = Number(valor1) + Number(valor2) 

//Conversão de tipos de dados de String para numero
//parseInt() -> permite converter uma String para numero inteiro
//parseFloat() -> permite converter uma String para numero inteiro ou real conforme a necessidade
//Number() -> permite converter uma String  para numero real conforme a necessidade (mais apos a nova versão do js)

console.log(resultado)
