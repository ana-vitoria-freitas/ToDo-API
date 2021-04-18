const TarefaModel = require('../models/tarefa-model');

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

    deletaTarefa(task){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM TAREFAS WHERE EMAIL='${task}'`, (err, rows) => {
                if (err) {
                    reject(`Erro: ${err}\nA tarefa não existe :(`);
                } else {
                    resolve(
                        this.bd.run(`UPDATE TAREFAS SET TITULO='null', DESCRICAO='null', STATUS='null', DATACRIACAO='null' WHERE EMAIL='${user}'`, (err) => {
                            if (err) {
                                console.log(`Erro ao rodar consulta: ${err}`);
                            } else {
                                console.log('Deletado devidamente!');
                            }
                        })
                    );
                }
            })
        });
    }

    atualizaTarefa(task, termoAtualizacao){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM TAREFAS WHERE EMAIL='${termoAtualizacao}'`, (err, rows) => {
                if (err) {
                    reject(`Erro: ${err}\nA tarefa não existe :(`);
                } else {
                    resolve(
                        this.bd.run(`UPDATE TAREFAS SET TITULO='${task.titulo}', DESCRICAO='${task.DESCRICAO}', STATUS='${task.status}', DATACRIACAO='${task.datacriacao}' WHERE EMAIL='${termoAtualizacao}'`, (err) => {
                            if (err) {
                                console.log(`Erro ao rodar consulta: ${err}`);
                            } else {
                                console.log('Atualizado devidamente!');
                            }
                        })
                    );
                }
            })
        });
    }
}


module.exports = TarefaDAO;