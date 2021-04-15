class Usuario{
    constructor(nome, email, senha, id){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha
    }
}

module.exports = Usuario;