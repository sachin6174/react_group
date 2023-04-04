const app = require("express")();

/*
const express = require("express");
const app = express();
*/

app.get("/", function(req,res){
//   res.sendFile(__dirname+"/index.html");
    res.send("welcome to /")
});


app.get("/sachin", function(req,res){
//   res.sendFile(__dirname+"/index.html");
    res.send("welcome to sachin")
});

app.get("/chandan", function(req,res){
//   res.sendFile(__dirname+"/index.html");
    res.send("welcome to chandan")
});

app.get("/search", function(req,res){
  
    let obj=req.query
    console.log(req.query.q)
    
    res.sendFile(__dirname+"/index.html");
    //res.send(`welcome to google search here is ur ${obj.q} ${obj.f}`)
});

let port=3000;
app.listen(port, function(){
  console.log(`Server is running on port ${port}`);
});
