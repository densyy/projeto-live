/* ---- Importacoes ---- */

const helperResponse = require('../helpers/response')

/* ---- Funcoes ---- */

function verificarToken (request, response, next) {
  const headers = request.headers

  const token = headers['x-access-token']
  if (token === '123456') return next()

  helperResponse.enviarResposta(response, 403, 'Tá bloqueado pra você maluco!!')
}

module.exports = { verificarToken }
