const restful = require('node-restful')
const mongoose = restful.mongoose

const TipoArquivo = require('../tipo-arquivo/tipoArquivo')

const arquivoSchema = new mongoose.Schema({
	caminho: { type: String, required: true },
  tipoArquivo: TipoArquivo.schema
})

module.schema = () => arquivoSchema
module.exports = restful.model('Arquivo', arquivoSchema)
