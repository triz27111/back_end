/************************************************************************************************
 * Objetivo: Arquivo responsavel pela criação de funções e utilização de estruturas de repetição
 * Data: 04/09/2024
 * Autor: Beatriz Rodrigues
 * Versão: 1.0
 * ************************************************************************************************/

function gerarNumerosSequenciais(numeroInicial, NumeroFinal){
   let numeroI = numeroInicial
   let numeroF = NumeroFinal
   let contador
   let status = false

    if(!validarDados(numeroI, numeroF)){
    contador = parseInt(numeroI)

       while(contador <= parseInt(numeroF)){
            status = true
            console.log(contador)

             //contador = contador + 1
             //contador ++
             contador +=1
       }
   }
   return status
}

//função anonima
const validarDados = function(numeroInicial, NumeroFinal){
    let numeroI = numeroInicial
    let numeroF = NumeroFinal
    let status = false

    
//validação de entrada de dados em branco
   if(numeroI =='' || numeroF ==''){
    status = true
    console.log('ERRO: O preencimento dos dados são obrigatorios.')
//validação de entrada de caracteres invalidos
   }else if(isNaN(numeroI) || isNaN(numeroF)){
    status = true
    console.log('ERRO: Não é permitido a entrada de Letras.')
   }

}

//Arrow Funtion
const gerarNovosNumerosSequenciais =(numeroInicial, NumeroFinal) =>{
   let numeroI = numeroInicial
   let numeroF = NumeroFinal
   let status = false

   if(validarDados(numeroI, numeroF)){
    //for é uma estrutura de repetição que reduz os codigos na linhas
    for(let contador = parseInt(numero); contador <= parseInt(numeroF); contador++){
        status = true
        console.log(contador)
    }
   }
   return status
}

console.log(gerarNumerosSequenciais(2, 10))

module.exports ={
    gerarNovosNumerosSequenciais,
    gerarNovosNumerosSequenciais
}