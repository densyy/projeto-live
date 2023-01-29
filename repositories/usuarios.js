/* ---- Importacoes ---- */

const helperFile = require('../helpers/file')

/* ---- Methods ---- */

function receberTodos () {
  const usuarios = helperFile.lerBancoDeDados()
  return usuarios
}

function receberPorEmail (email) {
  const usuarios = helperFile.lerBancoDeDados()
  const usuarioEncontrado = usuarios.find(usuario => usuario.email === email)
  return usuarioEncontrado
}

function adicionar (dados) {
  const novoUsuario = {
    nome: dados.nome,
    email: dados.email
  }

  helperFile.gravarBancoDeDados(novoUsuario)
}

module.exports = {
  receberTodos,
  receberPorEmail,
  adicionar
}
