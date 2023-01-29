/* ---- Importações ---- */

const express = require('express')
const http = require('http')

/* ---- Constants ---- */

const PORTA = 4000

/* ---- Servidor ---- */

const app = express()
app.set('port', PORTA)

const server = http.createServer(app)
server.listen(PORTA)

server.on('error', deuErro)
server.on('listening', taRodando)

/* ---- Funcoes ---- */

function deuErro (erro) {
  console.log(erro)
}

function taRodando () {
  console.log('Já estou capturando os trouxas')
}

/* ---- Rotas ---- */

app.use(express.json())

// GET - Receber
// POST - Adicionar
// PUT - Edições
// DELETE - Deletar
// PATCH - Edições Pontuais

app.get('/bem-vindo', bemVindo)

function bemVindo (_request, response) {

  // 200 201 - SUCESSO
  // 400 401 402 403 404 406 -- ERRO USUARIO
  // 500 501 ... ERRO DO SERVIDOR

  response
    .status(200)
    .json('Bem vindo viu maluco!! Tô feliz por ter você aqui!')
}

/* ---- Routes - RECEBER USUARIO ---- */

app.get('/usuarios', receberUsuarios)

function receberUsuarios (_request, response) {
  const usuarios = require('./usuarios.json')

  response
    .status(200)
    .json(usuarios)
}

/* ---- Routes - ADICIONAR USUARIO ---- */

app.post('/usuarios', adicionarUsuario)

function adicionarUsuario (request, response) {
  const dados = request.body

  const email = dados.email
  const nome = dados.nome

  response
    .status(200)
    .json(`email: ${email} - nome: ${nome}`)
}
