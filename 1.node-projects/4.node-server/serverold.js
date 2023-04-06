//https://expressjs.com/en/starter/hello-world.html
//https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc
/*
Multiline
comment
*/
// js behave like python but syntax is like c++



const express = require('express');
const { dirname } = require('path');
const app = express()// return object

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const port = 5000

//camelcase
//sachinKumarIsAGoodBoy

//snake casing or chain casing
//sachin-is-a-good-boy

//pascal casing
//SachinKumarIsAGoodBoy

app.get('/', function(req,res){
    res.sendFile(__dirname+"/index.html");
}  );

app.post('/', function(req,res){

    let sachin={
      fname:req.body.fname,
      lname:req.body.lname,
      email:req.body.email,
      date:req.body.dob,
    }

    res.json(sachin);
});



app.get('/sachin', function(req,res){
    res.send("sachin");
}  );



app.get('/bunty/college', function(req,res){
  console.log(req.query.fname,req.query.age);
    res.send(req.query.fname+req.query.age);
}  );
app.get('/bunty/home', (req,res)=>{
    res.send("/bunty/home");
}  );
// http://localhost:5000/bunty/college
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// https://api.openweathermap.org/data/2.5/weather?q=chandigarh&unit=metric&appid=44c9a010fc226d7fe3f5823247fada87