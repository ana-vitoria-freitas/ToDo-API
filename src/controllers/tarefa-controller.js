const route = 'task';
const TarefaDAO = require('../DAO/tarefa-dao');
function configroute(app, bd){
  let tarefa = new TarefaDAO(bd);

  app.get(`/${route}`, (req, res) =>{
    tarefa.listaTarefas()
    .then((rows)=> res.send(rows))
    .catch((err) => res.send({mensagem: "Falha ao listar usuários"}));

  });

  app.post(`/${route}`, (req, res) => {
    let TarefaModel = require('../models/tarefa-model');
    let task = new TarefaModel(req.body.TITULO, req.body.DESCRICAO, req.body.STATUS, req.body.DATACRIACAO, req.body.ID_USUARIO);
    tarefa.insereTarefa(task)
    .then((rows)=> res.send(rows))
    .catch((err) => res.send({mensagem: "Falha ao listar usuários"}));

  });


  app.delete(`${route}`, (req, res) =>{


  });

  app.put(`${route}`, (req, res) =>{


  });
}


module.exports = configroute;