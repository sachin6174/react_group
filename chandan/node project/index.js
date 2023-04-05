const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('start calculating !!!!')
})

app.get('/add', function (req, res) {
  var number1 = parseInt(req.query.a)
  var number2 = parseInt(req.query.b)
  var sum = (number1 + number2).toString()
  res.send(sum)
})

app.get('/subtract', function (req, res) {
  var number1 = parseInt(req.query.a)
  var number2 = parseInt(req.query.b)
  var difference = (number1 - number2).toString()
  res.send(difference)
})

app.get('/multiply', function (req, res) {
  var number1 = parseInt(req.query.a)
  var number2 = parseInt(req.query.b)
  var product = (number1 * number2).toString()
  res.send(product)
})

app.get('/divide', function (req, res) {
  var number1 = parseInt(req.query.a)
  var number2 = parseInt(req.query.b)
  var quotient = (number1 / number2).toString()
  res.send(quotient)
})

app.listen(3000, function () {
  console.log('Successfully started calculator application!')
})