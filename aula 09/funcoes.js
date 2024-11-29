 /***************************************************
 * Objetivo: Manipular dados ultilizando ARRAY e JSON
 * Data: 25/09/2024
 * Autor: Fabricio
 * Versão: 1.0
**************************************************/
/******************************************
 * ARRAY -> [ ] É ultilizado para manipular uma lista de dados 
 * JSON -> { } É ultilizado para organizar os dados
 ******************************************/

const comandosBasicos = function (){
    //Primeira maneira de usar o ARRAY
    let listaDeNomes = ['Maria', 'José', 'Joao', 'André'] 
    
    //Imprimindo os dados do objeto listaDeNomes (array)
    console.log(listaDeNomes)
    
    //Imprime os dados do objeto listaDeNomes (array) em formato de tabela
    console.table(listaDeNomes)
    
    //Imprime o conteudo de um indice 
    console.log(listaDeNomes[1]) 

    //Retorna o tipo de dados de um indice e do array
    console.log(typeof(listaDeNomes[5]))

    //Segunda maneira de criar um array
    let listaDeClientes = []


    listaDeClientes[0] = 'Luiz da Silva'
    listaDeClientes[1] = 'Andre da silva'
    listaDeClientes[2] = 'Carlos da Silva'

    console.table(listaDeClientes)

    listaDeClientes[1] = 'Antonio da Silva'
    console.table(listaDeClientes)
    
    listaDeClientes[8] = 'Hugo da Silva'
    console.table(listaDeClientes)
    
    listaDeClientes[5] = 'Ana da Silva'
    console.table(listaDeClientes)

    console.log(typeof(listaDeClientes[6]))

    //Terceira maneira de criar um array
    let listaDeProdutos = []

    //Adiciona elementos no array no final 
    listaDeProdutos.push('Mouse')
    listaDeProdutos.push('Teclado')
    listaDeProdutos.push('Monitor')
    listaDeProdutos.push('Memoria')
    listaDeProdutos.push('HD')
    listaDeProdutos.push('SSD', 'Caixa de Som', 'Impressora')
    listaDeProdutos.push('Processador')
  
    console.table(listaDeProdutos)


    //Adiciona elementos no array no inicio
    listaDeProdutos.unshift('Placa de Video')

    console.table(listaDeProdutos)

    //Permite remover o ultimo elemtno do array
    listaDeProdutos.pop()
    console.table(listaDeProdutos)

    //Permite remover o primeiro elemento do array
    listaDeProdutos.shift()
    console.table(listaDeProdutos)

    //Permite remover um elemento conforme o respsctivo indice, tambem podemos indicar a qtde
    //de elementos a serem removidos
    //EX. Remove o indice 3 e a quantidade de 2 elementos
    listaDeProdutos.splice(3,2)
    console.table(listaDeProdutos)


}


const percorrerArray = function(){
    let listaDeDisciplinas =[]
    listaDeDisciplinas.push('Banco de Dados',
                            'Linguagem de Marcação',
                            'Projetos',
                            'Programação Back-end',
                            'Programação Front-end',
                            'Programação Mobile',
                            'Projetos 2'
                          )

                          //exemplo utilizando o While
                          console.log('***********WHILE*************')
                          let contador = 0
                          while(contador < listaDeDisciplinas.length){
                            console.table(listaDeDisciplinas[contador])
                            contador +=1
                        }
                        
                        //exemplo utilizando o FOR
                        console.log('*********FOR**********')
                        for(let contador = 0; contador < listaDeDisciplinas.length; contador++){
                            console.log(listaDeDisciplinas[contador])
                        }

                        //exemplo utilizando ForEach
                        //ForEach é uma estrutura de repetição aplicada somente para objetos do
                        //ARRAY, ele retorna cada item do array através e uma call back
                        console.log('******FOREACH******')
                        listaDeDisciplinas.forEach(function(){
                            console.log(item)
                        })
}

const filtrarProduto = function(nomeProduto){
    let nome = String(nomeProduto).toUpperCase()
    let status = false

    let produtos = []
    produtos.push(
                    'Mouse',
                    'Teclado',
                    'Monitor',
                    'Gabinete',
                    'Caixa de som',
                    'Placa de Video',
                    'Placa mãe'
                 )

//     produtos.forEach(function(item){
//         if(String(item).toUpperCase() == nome){
//            status = true
//          }
//     })

// produtos.forEach(function(item){
//     console.log(String(item).toUpperCase().includes(nome))
// })

produtos.forEach(function(item){
    if(String(item).toUpperCase().index0f(nome) == 0){
        status= true
    }
})

  return status 
}

const conceitoJSON = function(){
    //cria um JSON de atributos de clientes
    //primeira forma de criar objetos JSON
    let cliente = {nome: 'José da Silva', telefone: '1194024567', email: 'josé@gmail.com'}
    //Exibe o objeto JSON com os sues atributos
    console.log(cliente)
    console.table(cliente)
    //exibe atributos individuais de onjeto JSON
    console.log(cliente.nome)
    console.log(cliente.email)

    //segunda forma de criar um JSON
    let cliente2 = {}
    cliente2.nome = 'Maria da Silva'
    cliente2.telefone = '1190006789'
    cliente2.email = 'maria@gmail.com'

    console.log(cliente2)
    //console.table apenas para ARRAY

    let listaDeClientes = []
    listaDeClientes.push(cliente, cliente2)

    console.log(listaDeClientes)
    console.table(listaDeClientes)
    
    console.log(listaDeClientes[1].nome)
    console.log(listaDeClientes[1].email)

    //Percorreu o array de clientes e exibiu apenas o atributo nome
    listaDeClientes.forEach(function(clientes){
        console.log(clientes.nome)
    })
    

}

const cadastroProdutros = function(){
    let cores = []
    cores.push(
                {nome: 'Preto', hexadecimal:'#000000'},
                {nome: 'Branco', hexadecimal:'#ffffff'},
                {nome: 'Azul', hexadecimal:'#04398f'},
                {nome: 'Cinza', hexadecimal:'#686869'},
                {nome: 'Rosa', hexadecimal:'#ca07db'},
              )
    let categorias = []
    categorias.push(
                    {nome: 'Hardware'},
                    {nome: 'Periféicos'},
                    {nome: 'Computadores'},
                    {nome: 'Games'},
                    {nome: 'Acessórios'},
                    {nome: 'Escritório'},
                   )

    let marcas = []
    marcas.push(
                {nome: 'Dell Computadores LTDA',
                 nomeFantasia:"Dell",
                 telefone: '45678956',
                 email:'compras@dell.com.br'
                },
                {nome: 'Microsoft Tecnologia SA',
                nomeFantasia:"Microsoft",
                telefone: '2323232565',
                email:'microsoft@microsoft.com.br'
                },
                {nome: 'Positivo SA',
                nomeFantasia:"Positivo",
                telefone: '7485969552',
                email:'pedidos@positivos.com.br'
                },
                {nome: 'Apple Computadores BIA',
                nomeFantasia:"Apple",
                telefone: '235685855',
                email:'appl@compras.com'
                }
               )

    let produtos = []
    produtos.push(
                  {
                    nome: 'Mouse',
                    descricao:'Mouse com fio',
                    preco:'80.50',
                    quantidade: 50,
                    cor: cores,
                    categorias:[
                                categorias[1],
                                categorias[2],
                                categorias[3],
                                categorias[4],
                                categorias[5]
                              ],
                    marca:[
                            {
                                nome: marcas[0].nomeFantasia,
                                nomeCompleto: marcas[0].nome
                            }
                          ]
                  },
                  {
                    nome:'Teclado',
                    descrição:'Teclado com fio',
                    preco: '120,00',
                    quantidade: 35,
                    cor:[
                         cores[0],
                         cores[1],
                         cores[3]
                        ],
                    categorias:[
                        categorias[1],
                        categorias[2],
                        categorias[3],
                        categorias[4],
                        categorias[5]
                    ],
                    marca: [
                             {
                               nome: marcas[1].nomeFantasia,
                               nomeCompleto: marcas[1].nomr
                             }
                          ]

                  },
                  {
                    
                    nome:'Gabinete',
                    descrição:'Gabinete Dell',
                    preco: '500,00',
                    quantidade: 15,
                    cor:[
                         cores[0],
                         cores[1],
                         cores[3]
                        ],
                    categorias:[
                        categorias[1],
                        categorias[2],
                        categorias[3],
                        categorias[4],
                        categorias[5]
                    ],
                    marca: [
                             {
                               nome: marcas[1].nomeFantasia,
                               nomeCompleto: marcas[1].nomr
                             }
                          ]
                  },
                  {
                    nome:'Monitor',
                    descrição:'Monitor 30 polegadas',
                    preco: '520,00',
                    quantidade: 35,
                    cor:[
                         cores[0],
                         cores[1],
                         cores[3]
                        ],
                    categorias:[
                        categorias[2],
                        categorias[3],
                        categorias[4],
                        categorias[5]
                    ],
                    marca: [
                             {
                               nome: marcas[1].nomeFantasia,
                               nomeCompleto: marcas[1].nomr
                             }
                          ]
                  }
                )
return produtos



}

const pesquisarProduto = function(nome){
    let nomeProduto = String(nome).toUpperCase()
    let listaDeProdutos = cadastroProdutros()
    let produtosEncontrados = []

    listaDeProdutos.forEach(function(item){
        if(String(item.nome).toUpperCase() == nomeProduto){
        produtosEncontrados.push(item)
        }
    })
    if(produtosEncontrados.length > 0){
        return produtosEncontrados
    }else{
        return false
    }
    
}

const listarProdutos = function(nome){
  let resultadoPesquisa = pesquisarProduto(nome)

  if(resultadoPesquisa != false){
    resultadoPesquisa.forEach(function(item){
        console.log(`Nome do Produto: ${item.nome}`)
        console.log(`Detalhes do Produto: ${item.descricao}`)
        console.log(`Preco do Produto: ${item.preco}`)
        console.log(`Quantidade em Estoque: ${item.quantidade}`)

        item.cor.forEach(function(itemCor){
            console.log(`-- Cor: ${itemCor.nome}`)
        })

        item.categorias.forEach(function(itemCategorias){
            console.log(` -- Categoria: ${itemCategorias.nome}`)
        })

        item.marca.forEach(function(itemMarca){
            console.log(` -- Marca: ${itemMarca.nome}`)
        })
    })
  }
}




//comandoBasico()
//percorrerArray()
//console.log(filtrarProduto('Placa'))
//conceitoJSON()
//cadastroProdutros()
//console.log(pesquisarProduto('monitor'))
listarProdutos('gabinete')