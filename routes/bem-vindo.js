/* ---- Importacoes ---- */

const express = require('express')
const router = express.Router()

const controllerBemVindo = require('../controllers/bem-vindo')

/* ---- Rotas ---- */

router.get('/', controllerBemVindo.bemVindo)

module.exports = router
