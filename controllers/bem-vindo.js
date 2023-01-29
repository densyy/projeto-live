/* ---- Importacoes ---- */

const helperResponse = require('../helpers/response')

//
// BEM VINDO
//

function bemVindo (_request, response) {
  helperResponse.enviarResposta(response, 200, 'Bem vindo 4!')
}

module.exports = { bemVindo }
