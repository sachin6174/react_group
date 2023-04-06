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

//including mysql
const mysql= require('mysql');
const { userInfo } = require('os');
const db=mysql.createConnection({
    host:'b5faam2cuacswoln8vxe-mysql.services.clever-cloud.com',//do not pass domain name with https.
    user: 'u13qguvhian3v7r3',
    password: 'uC9ahCmGxEKLgMK8WnVz',
    database:'b5faam2cuacswoln8vxe'
})
db.connect((error)=>{
    if(error){
      console.log(error)
    }else{
      console.log('connection established')
    }
})

const port = 3000

//handling sign
app.get('/signin', (req, res) => {
  res.sendFile(__dirname+'/sign_in.html')
  
})

app.post('/signin', (req, res)=>{
  // console.log(req.body)
  var sql = `SELECT * FROM users where username='${req.body.uname}'`;  
  db.query(sql,(error, result)=>{
        if(error){
          console.log(error)
          res.send('failed to fetch')
        }else{
          console.log(result)
          // res.send('fectched successfully')
          if(result.length==0){
            res.send('you are not a user')
          }else{
            res.send(`${req.body.uname} logged in`)
          }
        }
  })
})



app.get('/getdata', (req, res) => {
  var sql = `SELECT * FROM users`;  
  db.query(sql,(error, result)=>{
        if(error){
          console.log(error)
          res.send('failed to fetch')
        }else{
          console.log(result)
          // res.send('fectched successfully')
          res.send(result)
        }
  })
})



app.post('/signup', (req, res)=> {
     console.log(req.body)
    // let user={
    //   username: req.body.uname,
    //   password: req.body.pwd
    // }

    // let sql=`insert into users(username , password) values('${req.body.uname}', '${req.body.pwd}')`
    var sql = `INSERT INTO users VALUES ('${req.body.uname}', '${req.body.pwd}')`;  
    db.query(sql,(error, result)=>{
          if(error){
            console.log(error)
            res.send('profile not created')
          }else{
            console.log(result)
            res.send('your account has succesfully created')
          }
    })
})
// db.end()

app.listen(process.env.PORT||port,  () => {
  console.log(`Example app listening on ${port} port`)
})