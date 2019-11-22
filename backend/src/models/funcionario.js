const {Schema, model} = require('mongoose');

const FuncionarioSchema= new Schema({
    nome: {
        type: String,
        required: true,
    },
    presente: {
        type: Boolean
    },
    entrada: {
        type: Date,
        required: false
    },
    acessos: [{
        type: Array
    }]
},{
    timestamps: true
})

module.exports =  model("funcionario", FuncionarioSchema)