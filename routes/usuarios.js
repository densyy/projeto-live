/* ---- Importacoes ---- */

const express = require('express')
const router = express.Router()

const controllerUsuarios = require('../controllers/usuarios')
const middlewareToken = require('../middlewares/token')

/* ---- Rotas ---- */

router.get(
  '/',
  middlewareToken.verificarToken,
  controllerUsuarios.receberUsuarios,
)

router.post(
  '/',
  controllerUsuarios.adicionarUsuario
)

module.exports = router
