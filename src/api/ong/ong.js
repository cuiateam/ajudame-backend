const restful = require('node-restful')
const mongoose = restful.mongoose

const Arquivo = require('../arquivo/arquivo')
const TipoOng = require('../tipo-ong/tipoOng')

const ongSchema = new mongoose.Schema({
	nome: { type: String, required: true },
  tipoOng: TipoOng.schema,
  descricao: { type: String },
  trabalhos: { type: String },
  favorecidos: { type: String },
  endereco: { type: String },
  localizacao: { type: String },
  arquivos: [Arquivo.schema]
})

module.schema = () => ongSchema
module.exports = restful.model('Ong', ongSchema)
