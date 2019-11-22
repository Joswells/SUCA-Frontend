const express = require('express');
const FuncionarioController = require('./controllers/funcionarioController');
const entradaSaidaController = require('./controllers/entradaSaidaController');

const routes = express.Router();

routes.post('/Funcionario', FuncionarioController.store);
routes.post('/funcionario/:funcionarioID/entradaSaida', entradaSaidaController.store );

module.exports = routes;