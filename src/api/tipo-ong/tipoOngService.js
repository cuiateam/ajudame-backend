const TipoOng = require('./tipoOng')

TipoOng.methods(['get', 'post', 'put', 'delete'])
TipoOng.updateOptions({ new: true, runValidators: true })

module.exports = TipoOng
