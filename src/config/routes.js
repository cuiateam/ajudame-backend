const express = require('express')

module.exports = function(server){
	// Define que esta rota que esta sendo tratada ira responder por tudo que começar por /api
	const router = express.Router()
	server.use('/api', router)

	// Define a rota para cadastrar um Tipo de Ong
	const TipoOng = require('../api/tipo-ong/tipoOngService')
	TipoOng.register(router, '/tipo-ong')

  // Define a rota para cadastrar um Tipo de Arquivo
	const TipoArquivo = require('../api/tipo-arquivo/tipoArquivoService')
	TipoArquivo.register(router, '/tipo-arquivo')

  // Define a rota para cadastrar um novo Arquivo
	const Arquivo = require('../api/arquivo/arquivoService')
	Arquivo.register(router, '/arquivo')

  // Define a rota para cadastrar uma nova Ong
	const Ong = require('../api/ong/ongService')
	Ong.register(router, '/ong')
}
