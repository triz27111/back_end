const ListaAlunos = require('./alunos')
const ListaCursos = require('./cursos')

const getlistaCursos = function(){
    let cursos = []
    let status = false
   
    listaCursos.cursos.forEach(function(item){
        status = true
        cursos.push(item)
    })
    if(status == true){
        return cursos
    }else{
        return status
    }
}

const getlistaAlunos = function(){
    let alunos = []
    let status = false

    listaAlunos.alunos.forEach(function(item){
        status = true
        alunos.push(item)
    })
    if(status == true){
        return alunos
    }else{
        return status
    }
}

const getlistaMatricula = function(matriculaNumero){
    let Lista = ListaAlunos
    let matricula = parseInt(matriculaNumero)
    let aluno = []

   Lista.alunos.forEach(function(item){
    if(item.matricula == matricula){
        

        aluno.nome = item.nome
        aluno.foto = item.foto
        aluno.matricula = item.matricula
        aluno.sexo = item.sexo
        aluno.curso = item.curso
        aluno.status = item.status

        aluno.push(aluno)
    }
   })
   return aluno
}
//console.log(getlistaMatricula('20151001001'))

const getAlunosCurso = function(curso) {
    let listaCursos = String(curso).toUpperCase()
    let alunosdoCurso = []
    let lista = ListaAlunos

    lista.alunos.forEach(function(item) {
        item.curso.forEach(function(nomeCurso) {
            if(listaCursos == nomeCurso.sigla) {
                alunosdoCurso.push(
                                    {
                                        foto: item.foto,
                                        nome: item.nome,
                                        matricula: item.matricula,
                                        sexo: item.sexo,
                                        curso: nomeCurso.sigla,                                       
                                        status: item.status
                                    }
                                    )
            }
        })
    })
    return alunosdoCurso
}
//console.log(getAlunosCurso('ds'))

const getAlunoStatus = function (alunoStatus){
    let status = false
    let statusAluno = String(alunoStatus).toUpperCase()
    let alunosStatus = {}
    let listaAlunos = []

    ListaAlunos.açunos.forEach(function(item){
        if(String(item.status).toUpperCase() == statusAluno){
            status = true
            listaAlunos.push(item)
        }
        alunoStatus.statusAluno = listaAlunos
    })
    if(status == true){
        return alunoStatus
    }else{
        return status
}
}

console.log(getAlunoStatus('cursando'))

//getlistaMatricula('20151001001')
//console.log(getAlunoStatus('Finalizado'))