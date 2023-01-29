/* ---- Importações ---- */

const express = require('express')

const app = express()

/* ---- Rotas ---- */

app.use(express.json())

const routeBemVindo = require('./routes/bem-vindo')
const routeUsuarios = require('./routes/usuarios')

app.use('/bem-vindo', routeBemVindo)
app.use('/usuarios', routeUsuarios)

module.exports = app
