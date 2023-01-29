/* ---- Importacoes ---- */

const helperResponse = require('../helpers/response')

//
// RECEBER USUARIOS
//

function receberUsuarios (_request, response) {
  helperResponse.enviarResposta(response, 200, {})
}

//
// ADICIONAR USUARIOS
//

function adicionarUsuario (request, response) {
  const dados = request.body

  const email = dados.email
  const nome = dados.nome

  helperResponse.enviarResposta(response, 200, `email: ${email} - nome: ${nome}`)
}

module.exports = {
  receberUsuarios,
  adicionarUsuario
}
