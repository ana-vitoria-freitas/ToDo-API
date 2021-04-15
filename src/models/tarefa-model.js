class TarefaModel{

    constructor(titulo, descricao, status, datacriacao, id_usuario){
        this.id_usuario = id_usuario;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.datacriacao = datacriacao
    }

}

module.exports = TarefaModel;