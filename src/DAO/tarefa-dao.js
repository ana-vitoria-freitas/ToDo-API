class TarefaDAO{
    constructor(bd){
        this.bd = bd;
    }

    listaTarefas(){
        return new Promise((resolve, reject) =>{
            this.bd.all("SELECT * FROM TAREFAS", (err, rows) =>{
                if(err){
                  reject(err);
                }else{
                  resolve(rows);
                }
            })
        })
    }

    insereTarefa(tarefa){
        return new Promise((resolve, reject) =>{
            this.bd.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?,?,?,?,?)", tarefa.titulo, tarefa.descricao, tarefa.status, tarefa.datacriacao, tarefa.id_usuario, (err) =>{
                if(err){
                    reject(`Erro ao rodar consulta: ${err}`);
                }else{
                    resolve('Inserido devidamente!');
                }
            })
        });
    }
}


module.exports = TarefaDAO;