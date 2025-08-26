var aluno = {
    nome : "Rodolfo",
    anoEscolar : "2°",
    turma: "C",
    notas: [6, 8 , 7],
    estudar: function(){
        console.log("Estou estudando")
    },
    //metodo com função interna
    media : function(n1,n2,n3){
            return ((n1+n2+n3) / 3)
    }
}
//Acessa as propriedades de objeto alluno-
console.log("O aluno", aluno.nome, "está no", aluno.anoEscolar, "ano escolar.")
//Executar um método de dentro do objeto
aluno.estudar()
console.log("Média final:", aluno.media(aluno.notas[0],aluno.notas[1],aluno.notas[2]))

//Cria função externa para a utilixação do objeto
function listaDeocorrencias(){
    console.log("Comeu na biblioteca")
    console.log("Xingou no corredor")
    console.log("Não fez trabalho")
}