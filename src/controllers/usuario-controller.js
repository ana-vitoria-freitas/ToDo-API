const route = 'user';
const UsuarioModel = require('../models/usuario-model');
function configroute(app, bd){
  app.get(`/${route}`, (req, res) => {
    // res.send(`Rota ativada com get e rota ${route} valores de ${route} devem ser retornados`);
    res.send(bd);
  })
  app.post(`/${route}`, (req, res) => {
    //res.send("Rota POST de usario ativada: usuario adicionada ao banco de dados");
    //console.log(res.send(req.body));
    // const {nome, email, senha} = req.body;
    const body = req.body;
    let user = new UsuarioModel(body.nome, body.email, body.senha);
    if(body.senha && body.nome && body.email){
      console.log(body);
      res.send(body);
      bd.usuario.push(user);
    }else{
      res.send("Deu ruim!");

    }
  })
}

module.exports = configroute;