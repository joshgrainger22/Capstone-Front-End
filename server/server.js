const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const { Lakes } = require('./models')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser')
const { response } = require('express')
const res = require('express/lib/response')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (request, response) => {
    response.send('This is Root!')
})

app.get('api/lakes', async (request, response) => {
    const alllakes = await Lakes.find()
    console.log('All Lakes')
    res.json(alllakes)
})



app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})