// Define a porta que será utilizado para rodar o servidor
const port = 3003

// Importa algumas bibliotecas para facilitar o controle do servidor
const bodyParser = require('body-parser') // Responável por tratar as requisições e deixar de uma forma mais simples de responde-las
const express = require('express') // Servidor de aplicação a ser utilizado
const allowCors = require('./cors')

// Define alguns midlewares uteis do servidor
const server = express()
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
	console.log(`BACKEND is running on port ${port}`)
})

module.exports = server
