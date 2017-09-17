const restful = require('node-restful')
const mongoose = restful.mongoose

const tipoOngSchema = new mongoose.Schema({
	nome: { type: String, required: true }
})

module.schema = () => tipoOngSchema
module.exports = restful.model('TipoOng', tipoOngSchema)
