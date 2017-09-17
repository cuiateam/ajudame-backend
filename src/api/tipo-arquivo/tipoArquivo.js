const restful = require('node-restful')
const mongoose = restful.mongoose

const tipoArquivoSchema = new mongoose.Schema({
	nome: { type: String, required: true }
})

module.schema = () => tipoArquivoSchema
module.exports = restful.model('TipoArquivo', tipoArquivoSchema)
