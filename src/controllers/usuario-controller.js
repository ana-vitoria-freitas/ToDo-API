const route = 'user';
const User = require('../DAO/usuarios-dao');
function configroute(app, bd){
  let usuario = new User(bd);
  app.get(`/${route}`, (req, res) => {
    usuario.listaUsuarios()
    .then((rows)=> res.send(rows))
    .catch((err) => res.send({mensagem: "Falha ao listar usuários"}));

  });
  app.post(`/${route}`, (req, res) => {
    let UsuarioModel = require('../models/usuario-model');
    let user = new UsuarioModel(req.body.NOME, req.body.EMAIL, req.body.SENHA, 0);
    usuario.insereUsuario(user)
    .then((rows)=> res.send(rows))
    .catch((err) => res.send({mensagem: "Falha ao listar usuários"}));

  });

  app.delete(`/${route}`, (req, res) =>{


  });

  app.put(`/${route}`, (req, res) =>{


  });
}

module.exports = configroute;