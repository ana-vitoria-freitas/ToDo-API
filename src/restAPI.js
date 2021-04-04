const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const port = 3000;
const routeUser = require('./controllers/usuario-controller');
const routeTask = require('./controllers/tarefa-controller');

app.use(bodyParser.json());
routeUser(app);
routeTask(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})