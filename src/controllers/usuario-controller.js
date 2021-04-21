const route = 'user';
const UserDAO = require('../DAO/usuarios-dao');
const UsuarioModel = require('../models/usuario-model');

function configroute(app, bd) {
    let usuario = new UserDAO(bd);

    app.get(`/${route}`, async function (req, res){
        try {
            let result = await usuario.listaUsuarios();
            res.send(result);
        } catch (e) {
            res.send(e);
        }

    });

    app.get(`/${route}/:email`, async function(req, res) {
        try {
            let result = await usuario.buscaUsuario(req.params.email);
            res.send(result);
        } catch (e) {
            res.send(e);
        }
    })

    app.post(`/${route}`, async function(req, res) {
        try {
            let user = new UsuarioModel(req.body.NOME, req.body.EMAIL, req.body.SENHA, 0);
            let result = await usuario.insereUsuario(user)
            res.send(result);
        } catch (e) {
            res.send(e);
        }
    });

    app.delete(`/${route}/:email`, async function(req, res) {
        try {
            let result = await usuario.deletaUsuario(req.params.email);
            res.send(result);
        } catch (e) {
            res.send(e);
        }
    });

    app.put(`/${route}/:email`, async function(req, res) {
        try {
            let user = new UsuarioModel(req.body.NOME, req.body.EMAIL, req.body.SENHA, 0);
            let result = await usuario.atualizaUsuario(user, req.params.email);
            res.send(result);
        } catch (e) {
            res.send(e);
        }
    });
}

module.exports = configroute;