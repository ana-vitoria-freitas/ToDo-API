const route = 'task';
const TarefaDAO = require('../DAO/tarefa-dao');
const TarefaModel = require('../models/tarefa-model');
function configroute(app, bd){
  let tarefa = new TarefaDAO(bd);

  app.get(`/${route}`, async function (req, res){
    try{
      let result = await tarefa.listaTarefas();
      res.send(result);
    }catch (e){
      res.send(e);
    }

  });

  app.get(`/${route}/:id`, async (req, res) =>{
    try{
      let result = await tarefa.listaTarefa(req.params.id);
      res.send(result);
    }catch (e){
      res.send(e);
    }
  });

  app.post(`/${route}`, async function(req, res){
    try {
      let task = new TarefaModel(req.body.TITULO, req.body.DESCRICAO, req.body.STATUS, req.body.DATACRIACAO, req.body.ID_USUARIO);
      let result = await tarefa.insereTarefa(task);
      res.send(result);
    } catch (error) {
      res.send(error);
    }

  });

  app.delete(`/${route}/:id`, async function(req, res){
    try {
      let result = await tarefa.deletaTarefa(req.params.id);
      res.send(result);
    } catch (error) {
      res.send(error);
    }

  });

  app.put(`/${route}/:id`, async function(req, res){
    try {
      let task = new TarefaModel(req.body.TITULO, req.body.DESCRICAO, req.body.STATUS, req.body.DATACRIACAO, req.body.ID_USUARIO);
      let result = await tarefa.atualizaTarefa(task, req.params.id);
      res.send(result);
    } catch (error) {
      res.send(error);
    }

  });
}

module.exports = configroute;