const Arquivo = require('./arquivo')

Arquivo.methods(['get', 'post', 'put', 'delete'])
Arquivo.updateOptions({ new: true, runValidators: true })

module.exports = Arquivo
