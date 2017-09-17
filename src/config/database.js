const mongoose = require('mongoose')
mongoose.Promise = global.Promise // Apenas para retirar um warning referente ao Promise do mongo

module.exports = mongoose.connect('mongodb://localhost/ajuda-me')

// Deixando em portugues algumas mensagens basicas do mongo
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'!"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'!"
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o '{PATH}'!"
