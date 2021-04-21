class TarefaDAO {
    constructor(bd) {
        this.bd = bd;
    }


    listaTarefas() {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM TAREFAS", (err, rows) => {
                if (rows.length == 0) {
                    reject(`Erro ao rodar consulta :()`);
                } else {
                    resolve(rows);
                }
            })
        })
    }

    listaTarefa(tarefa) {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM TAREFAS WHERE ID_USUARIO=?", tarefa, (err, rows) => {
                if (rows.length == 0) {
                    reject(`Erro ao rodar consulta :()`);
                } else {
                    resolve(rows);
                }
            })
        });
    }

    insereTarefa(tarefa) {
        return new Promise((resolve, reject) => {
            this.bd.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?,?,?,?,?)", tarefa.titulo, tarefa.descricao, tarefa.status, tarefa.datacriacao, tarefa.id_usuario, (err, rows) => {
                if (err) {
                    reject(`Erro ao rodar consulta :()`);
                } else {
                    resolve('Inserido devidamente!');
                }
            })
        });
    }

    deletaTarefa(task) {
        return new Promise((resolve, reject) => {
            task = parseInt(task);
            this.bd.all(`SELECT * FROM TAREFAS WHERE ID=${task}`, (err, rows) => {
                if (rows == undefined || rows.length == 0) {
                    reject(`Erro: A tarefa não existe :(`);
                } else {
                    this.bd.run(`DELETE FROM TAREFAS WHERE ID=${task}`, (err) => {})
                    resolve("Tarefa deletada devidamente!");
                }
            })

        });
    }

    atualizaTarefa(task, termoAtualizacao) {
        return new Promise((resolve, reject) => {
            termoAtualizacao = parseInt(termoAtualizacao);
            this.bd.all(`SELECT * FROM TAREFAS WHERE ID=${termoAtualizacao}`, (err, rows) => {
                if (rows == undefined || rows.length == 0) {
                    reject(`Erro: A tarefa não existe :(`);
                } else {
                    this.bd.run(`UPDATE TAREFAS SET TITULO='${task.titulo}', DESCRICAO='${task.descricao}', STATUS='${task.status}', DATACRIACAO='${task.datacriacao}', ID_USUARIO=${task.id_usuario} WHERE ID=${termoAtualizacao}`, (err) => {})
                    resolve(`Tarefa atualizada devidamente!`);
                }
            })
        });
    }
}


module.exports = TarefaDAO;