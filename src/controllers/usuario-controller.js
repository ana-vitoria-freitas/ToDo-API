const route = 'user';
const User = require('../DAO/usuarios-dao');
const UsuarioModel = require('../models/usuario-model');
function configroute(app, bd){
  let usuario = new User(bd);
  app.get(`/${route}`, (req, res) => {
    usuario.listaUsuarios()
    .then((rows)=> res.send(rows))
    .catch((err) => res.send({mensagem: "Falha ao listar usuários"}));

  });
  app.post(`/${route}`, (req, res) => {
    let user = new UsuarioModel(req.body.NOME, req.body.EMAIL, req.body.SENHA, 0);
    usuario.insereUsuario(user)
    .then((rows)=> res.send(rows))
    .catch((err) => res.send({mensagem: "Falha ao listar usuários"}));

  });

  app.delete(`/${route}/:email`, (req, res) =>{
    usuario.deletaUsuario(req.params.email)
    .then((rows)=> res.send(rows))
    .catch((err) => res.send({mensagem: "Falha ao deletar usuário"}));

  });

  app.put(`/${route}/:email`, (req, res) =>{
    let user = new UsuarioModel(req.body.NOME, req.body.EMAIL, req.body.SENHA, 0);
    usuario.atualizaUsuario(user, req.params.email)
    .then((rows) => res.send(rows))
    .catch((err) => res.send({mensagem: "Falha ao atualizar usuário"}));

  });
}

module.exports = configroute;