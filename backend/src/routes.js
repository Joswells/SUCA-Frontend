const express = require('express');
const FuncionarioController = require('./controllers/funcionarioController');
const entradaSaidaController = require('./controllers/entradaSaidaController');

const routes = express.Router();

routes.get('/funcionarios', FuncionarioController.index);
routes.post('/funcionarios', FuncionarioController.store);
routes.post('/funcionario/:funcionarioID/entradaSaida', entradaSaidaController.store );
routes.delete('/funcionarios', FuncionarioController.delete)

module.exports = routes;