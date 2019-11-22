const Funcionario = require('../models/funcionario')

module.exports = {
    index(req, res) {
        Funcionario.find()
        .then( data => {
            return res.json({data})
        } )
        .catch (err => console.log(err));  
    },
    async store(req, res) {
        const { nome } = req.body
        const funcionario = await Funcionario.create({
            nome,
            presente: false,
            entrada: null,
            acessos: []
        })

        return res.json({funcionario});
    },
    delete(req, res) {
        if(req.params._id) {
            Funcionario.remove({_id: req.params._id})
            .then(() => {return res.json({code: 200})})
            .catch(err => console.log(err))
        }
    }


}