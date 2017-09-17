const TipoArquivo = require('./tipoArquivo')

TipoArquivo.methods(['get', 'post', 'put', 'delete'])
TipoArquivo.updateOptions({ new: true, runValidators: true })

module.exports = TipoArquivo
