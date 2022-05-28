const express = require('express')
const app = express()
const cors = require('cors')
const gamesRouter = require('./controllers/games').gamesRouter
const middleware = require('./utils/middleware')
const dotenv = require('dotenv')

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/games', gamesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app