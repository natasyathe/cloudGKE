'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Nama: Natasya The\n')
app.get('/', (req, res) => {
    res.send('NIM: 52019022\n')
app.get('/', (req, res) => {
    res.send('Jurusan: Teknik Informatika\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
