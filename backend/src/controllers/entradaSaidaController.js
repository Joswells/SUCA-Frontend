const Funcionario = require('../models/funcionario')

module.exports = {
    async store(req, res) {
        const {funcionarioID} = req.params;

        const targetFuncionario = await Funcionario.findById(funcionarioID);

        if (targetFuncionario) {
            console.log(targetFuncionario.entrada)
            if(targetFuncionario.entrada === null) {
                 
                targetFuncionario.entrada = new Date();
                targetFuncionario.presente = true;

            } else {
                targetFuncionario.acessos.push({entrada: targetFuncionario.entrada, saida: new Date()})

                targetFuncionario.entrada = null;
                targetFuncionario.presente = false;
                
            }
            await targetFuncionario.save()
        }

        return res.json(targetFuncionario);

    }
}