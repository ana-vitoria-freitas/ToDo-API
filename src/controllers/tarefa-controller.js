const route = 'task';
const TarefaModel = require('../models/tarefa-model');
function configroute(app, bd){
  app.get(`/${route}`, (req, res) => {
    //res.send(`Rota ativada com nodemon e rota ${route} valores de ${route} devem ser retornados`);
    res.send(bd);
  })
  app.post(`/${route}`, (req, res) => {
    //res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados");
    const body = req.body;
    let tarefa = new TarefaModel(body.nome, body.email);
    if(body.nome && body.email){
      console.log(body);
      res.send(body);
      bd.tarefa.push(tarefa);
    }else{
      res.send("Deu ruim!");

    }
  });
}


module.exports = configroute;