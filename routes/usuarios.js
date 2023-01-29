/* ---- Importacoes ---- */

const express = require('express')
const router = express.Router()

const controllerUsuarios = require('../controllers/usuarios')

/* ---- Rotas ---- */

router.get('/', controllerUsuarios.receberUsuarios)
router.post('/', controllerUsuarios.adicionarUsuario)

module.exports = router
