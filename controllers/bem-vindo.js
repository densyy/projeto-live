/* ---- Importacoes ---- */

const helperResponse = require('../helpers/response')

//
// BEM VINDO
//

function bemVindo (_request, response) {
  helperResponse.enviarResposta(response, 200, 'Bem vindo viu maluco!! Tô feliz por ter você aqui!')
}

module.exports = { bemVindo }
