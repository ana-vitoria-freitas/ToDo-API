const route = 'task';
function configroute(app){
  app.get(`/${route}`, (req, res) => {
    res.send(`Rota ativada com nodemon e rota ${route} valores de ${route} devem ser retornados`);
  })
  app.post(`/${route}`, (req, res) => {
    res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados");
    res.send(req.body);
    next();
  });
}


module.exports = configroute;