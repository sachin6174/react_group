var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html")
})

app.post("/",function (req, res) {
  console.log(req.body)
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body{
      background-color: black;
      color:white;
    }
  </style>
</head>
<body>
  <h1>You submitted ${req.body.name}  ${req.body.age} ${req.body.class}</h1>
</body>
</html> 
`)
})


app.listen(3000, function () {
  console.log('Successfully started calculator application!')
})