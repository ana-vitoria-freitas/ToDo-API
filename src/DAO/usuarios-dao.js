class UsuarioDAO{
    constructor(bd){
        this.bd = bd;
    }

    listaUsuarios(){
        return new Promise((resolve, reject) =>{
            this.bd.all("SELECT * FROM USUARIOS", (err, rows) =>{
                if(err){
                  reject(err);
                }else{
                  resolve(rows);
                }
            })
        })
    }

    insereUsuario(user){
        return new Promise((resolve, reject) =>{
            this.bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)", user.nome, user.email, user.senha, (err) =>{
                if(err){
                    reject(`Erro ao rodar consulta: ${err}`);
                }else{
                    resolve('Inserido devidamente!');
                }
            })
        });
    };
}

module.exports = UsuarioDAO;