/* ---- Importacoes ---- */

const fs = require('fs')
const path = require('path')

/* ---- Constantes ---- */

const caminho = '../database/usuarios.json'
const caminhoAbsoluto = path.resolve(__dirname, caminho)

/* ---- Methods ---- */

function lerBancoDeDados () {
  const options = { encoding: 'utf8' }
  const dados = fs.readFileSync(caminhoAbsoluto, options)
  return JSON.parse(dados)
}

function gravarBancoDeDados (novoUsuario) {
  const dadosDoBanco = lerBancoDeDados()
  dadosDoBanco.push(novoUsuario)
  fs.writeFileSync(caminhoAbsoluto, JSON.stringify(dadosDoBanco))
}

module.exports = {
  lerBancoDeDados,
  gravarBancoDeDados
}
