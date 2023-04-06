// const { urlencoded } = require("express");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

// static file serve setup
app.use(express.static("public"));

//pug template engine setup
const path = require("path");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// for serving static content
app.use(bodyparser.urlencoded({ extended: true }));

const nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({

    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:"1902219.cse.cec@cgc.edu.in",
        pass:"GUDdu1@#"
    }

});


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
  });

  let obj;
  let mailoption;
app.post("/", function (req, res) {
    var name =req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;
    obj = {
        "name" :name,
        "email" : email,
        "subject" : subject,
        "message" : message
    };
    mailoption={
        from:"1902219.cse.cec@cgc.edu.in",
        to:"sachinmehtab@gmail.com",
        subject:obj.subject,
        text: `Name: ${obj.name}\nEmail: ${obj.email}\n\nMessage:\n${obj.message}`
    }
    transporter.sendMail(mailoption,function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log("email has been sent",info.response);
        }
    })
    // res.json(obj);
    res.render("send.pug", obj);
  });




//////// listning/////
app.listen(process.env.PORT||3500, function () {
    console.log("server started on port 3500");
  });
  