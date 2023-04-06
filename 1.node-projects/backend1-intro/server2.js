const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('buthdhdhd!')
})

app.listen(port, () => {
  console.log(`Example app listening on port port`)
})