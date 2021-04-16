class UsuarioDAO {
    constructor(bd) {
        this.bd = bd;
    }

    listaUsuarios() {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM USUARIOS", (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }

    insereUsuario(user) {
        return new Promise((resolve, reject) => {
            this.bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)", user.nome, user.email, user.senha, (err) => {
                if (err) {
                    reject(`Erro ao rodar consulta: ${err}`);
                } else {
                    resolve('Inserido devidamente!');
                }
            })
        });
    };

    deletaUsuario(user) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM USUARIOS WHERE EMAIL='${user}'`, (err, rows) => {
                if (err) {
                    reject(`Erro: ${err}\nO usuário não existe :(`);
                } else {
                    resolve(
                        this.bd.run(`UPDATE USUARIOS SET NOME='null', EMAIL='null', SENHA='null' WHERE EMAIL='${user}'`, (err) => {
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

    atualizaUsuario(user, termoAtualizacao){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM USUARIOS WHERE EMAIL='${termoAtualizacao}'`, (err, rows) => {
                if (err) {
                    reject(`Erro: ${err}\nO usuário não existe :(`);
                } else {
                    resolve(
                        this.bd.run(`UPDATE USUARIOS SET NOME='${user.nome}', EMAIL='${user.email}', SENHA='${user.senha}' WHERE EMAIL='${termoAtualizacao}'`, (err) => {
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

module.exports = UsuarioDAO;