class UsuarioDAO {
    constructor(bd) {
        this.bd = bd;
        this.busca;
    }

    listaUsuarios() {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM USUARIOS', (err, rows) => {
                if (err) {
                    reject('{mensagem: Falha ao buscar os usuários}');
                } else {
                    resolve(rows);
                }
            })

        })


    }

    buscaUsuario(busca) {
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM USUARIOS WHERE EMAIL='${busca}'`, (err, rows) => {
                if (rows.length == 0) {
                    reject(`Usuário com email: ${busca} não encontrado!`)
                }else{
                    resolve(rows);
                }

            });

        })

    }

    insereUsuario(user) {

        return new Promise((resolve, reject) => {
            this.bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)", user.nome, user.email, user.senha, (err) => {
                if (err) {
                    reject(`{mensagem: Erro ao rodar consulta: ${err}}`);
                } else {
                    resolve(`{mensagem: usuário de e-mail: ${user.email} inserido devidamente!}`);
                }
            })
        });
    };

    deletaUsuario(user) {

        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM USUARIOS WHERE EMAIL='${user}'`, (err, rows) => {
                if (rows.length == 0) {
                    reject(`Erro: O usuário não existe :(`);
                } else {
                    this.bd.run(`DELETE FROM USUARIOS WHERE EMAIL=?`, user, () => {})
                    resolve(`Usuário de email: ${user} deletado!`);
                }
            })
        });
    }

    atualizaUsuario(user, termoAtualizacao) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM USUARIOS WHERE EMAIL='${termoAtualizacao}'`, (err, rows) => {
                if (err) {
                    reject(`Erro: O usuário não existe :(`);
                } else {
                    this.bd.run(`UPDATE USUARIOS SET NOME='${user.nome}', EMAIL='${user.email}', SENHA='${user.senha}' WHERE EMAIL='${termoAtualizacao}'`, (err) => {
                    })
                    resolve(`Usuário de email: ${user} atualizado devidamente!`);
                }
            })
        });
    }
}

module.exports = UsuarioDAO;