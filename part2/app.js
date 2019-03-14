// app.js
//
const express = require('express')

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/x', (req, res) => res.send('Hello X!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))