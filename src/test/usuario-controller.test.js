const request = require('supertest');
const usuarioController = require('../controllers/usuario-controller');
const sqlite3 = require('sqlite3');
const bd = new sqlite3.Database('../infra/database_test.db');

const express = require('express');
const app = express();

usuarioController(app, bd);

request(app)
    .get('/user')
    .expect(200)
    .end((err,res) =>{
        if(err){
            {throw err};
        }else{
            console.log("Passou!");
        }
    });

