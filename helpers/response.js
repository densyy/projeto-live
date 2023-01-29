function enviarResposta (response, status, mensagem) {
  response
    .status(status)
    .json(mensagem)
}

module.exports = { enviarResposta }
