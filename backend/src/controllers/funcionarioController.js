const Funcionario = require('../models/funcionario')

module.exports = {
    async store(req, res) {
        const { nome } = req.body
        const funcionario = await Funcionario.create({
            nome,
            presente: false,
            entrada: null,
            acessos: []
        })

        return res.json({funcionario});
    }
}