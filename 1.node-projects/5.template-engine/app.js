//including express
const express = require('express')
const app = express()

//including pug module (html template engine)
app.set("view engine", "pug");
app.set("views",__dirname+ "/views");

//including body parser module
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }));

//public file declaration
app.use(express.static("public"))//declare a public folder


app.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html")
  // res.send("sachin")
})
app.get('/api', function (req, res) {
  // /api:3002?num1=2&num2=10
  let result={
    sum:(req.query.num1+req.query.num2)
  }
  let jsondata=JSON.stringify(result)
  res.send(jsondata)
})

app.post("/",function (req, res) {
  console.log(req.body)
  /*
    result={
      operation:add
      output:
    }
  */
  res.render("index.pug", req.body);
})


app.listen(3002, function () {
  console.log('Successfully started calculator application!')
})