const route = 'user';
function configroute(app){
  app.get(`/${route}`, (req, res) => {
    res.send(`Rota ativada com get e rota ${route} valores de ${route} devem ser retornados`);
  })
  app.post(`/${route}`, (req, res, next) => {
    res.send("Rota POST de usario ativada: usuario adicionada ao banco de dados");
    res.send(req.body);
    next();
  })
}

module.exports = configroute;