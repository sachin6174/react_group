var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html")
})

app.post("/",function (req, res) {
  console.log(req.body)
  res.send(`<h1 class="bg-black">You submitted ${req.body.name}<h1/> <br/> <h1>  ${req.body.age} ${req.body.class} <h1/>`)
})


app.listen(3000, function () {
  console.log('Successfully started calculator application!')
})