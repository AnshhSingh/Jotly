const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile("pages/login.html",{root: __dirname})
})
app.get('/app', (req, res) => {
  res.sendFile("pages/app.html",{root: __dirname})
})
app.get('/script', (req, res) => {
  res.sendFile("script.js",{root: __dirname})
})
app.get('/style', (req, res) => {
  res.sendFile("style.js",{root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})