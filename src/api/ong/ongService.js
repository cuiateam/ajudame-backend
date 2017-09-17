const Ong = require('./ong')

Ong.methods(['get', 'post', 'put', 'delete'])
Ong.updateOptions({ new: true, runValidators: true })

module.exports = Ong
