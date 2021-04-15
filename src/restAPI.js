const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('');

const port = 3000;
const routeUser = require('./controllers/usuario-controller');
const routeTask = require('./controllers/tarefa-controller');
const bd = require('./infra/sqlite-db');
const cors = require('cors');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
routeUser(app, bd);
routeTask(app, bd);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})