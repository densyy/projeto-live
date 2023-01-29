/* ---- Importações ---- */

const app = require('../app')
const http = require('http')

/* ---- Constants ---- */

const PORTA = 4000

/* ---- Servidor ---- */

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
