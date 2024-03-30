const express = require('express')
const app = express()

app.get('/', (request, response) => {
  const now = new Date()
  response.send(`${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`)
})

module.exports = app
