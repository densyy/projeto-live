/* ---- Importacoes ---- */

const repositoryUsuarios = require('../repositories/usuarios')
const helperResponse = require('../helpers/response')

//
// RECEBER USUARIOS
//

function receberUsuarios (_request, response) {
  const usuarios = repositoryUsuarios.receberTodos()
  helperResponse.enviarResposta(response, 200, usuarios)
}

//
// ADICIONAR USUARIOS
//

function adicionarUsuario (request, response) {
  const dados = request.body

  const usuarioExistente = repositoryUsuarios.receberPorEmail(dados.email)
  if (usuarioExistente) {
    return helperResponse.enviarResposta(response, 406, 'Esse usuário já existe mané')
  }

  repositoryUsuarios.adicionar(dados)
  helperResponse.enviarResposta(response, 200, 'Gravou certinho no banco!')
}

module.exports = {
  receberUsuarios,
  adicionarUsuario
}
