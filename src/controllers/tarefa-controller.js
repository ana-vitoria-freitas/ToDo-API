const route = 'task';
const TarefaDAO = require('../DAO/tarefa-dao');
const TarefaModel = require('../models/tarefa-model');
function configroute(app, bd){
  let tarefa = new TarefaDAO(bd);

  app.get(`/${route}`, async function (req, res){
    let result = await tarefa.listaTarefas();
    res.send(result);

  });

  app.post(`/${route}`, async function(res, req){
    let task = new TarefaModel(req.body.TITULO, req.body.DESCRICAO, req.body.STATUS, req.body.DATACRIACAO, req.body.ID_USUARIO);
    let result = await tarefa.insereTarefa(task);
    res.send(result);

  });

  app.delete(`/${route}/:email`, async function(res, req){
    let result = await tarefa.deletaTarefa(req.params.email);
    res.send(result);

  });

  app.put(`/${route}/:email`, async function(res, req){
    let task = new TarefaModel(req.body.TITULO, req.body.DESCRICAO, req.body.STATUS, req.body.DATACRIACAO, 0);
    let result = await tarefa.atualizaTarefa(task, req.params.email);
    res.send(result);

  });
}

module.exports = configroute;