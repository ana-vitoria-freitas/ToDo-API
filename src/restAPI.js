//objetivo desse arquivo é subir o servidor no ar

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const port = 3000;
const routeUser = require('./controllers/usuario-controller');
const routeTask = require('./controllers/tarefa-controller');
const bd = require('../infra/bd');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
routeUser(app, bd);
routeTask(app, bd);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})