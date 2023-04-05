//including express
const express = require('express')
const app = express()

//including path module , it is important for pug and parser module
const path = require("path");

//including pug module (html template engine)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//including body parser module
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }));

//public file declaration
app.use(express.static("public"))//declare a public folder

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
})

app.post('/', (req, res) => {
    //  res.send(req.body)
    let betterobj={
        uid : req.body.uid[0].toUpperCase() + req.body.uid.slice(1),
        firstName : req.body.firstName[0].toUpperCase() + req.body.firstName.slice(1),
        lName : req.body.lName[0].toUpperCase() + req.body.lName.slice(1),
        gender : req.body.gender[0].toUpperCase() + req.body.gender.slice(1)
        
    }
    res.render('next.pug',betterobj)
    console.log(betterobj)
})



app.listen(port, () => {
  console.log(`Example app listening on ${port} port`)
})