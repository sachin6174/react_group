const express = require("express");

const app = express();

const port = 5000;

//pug template engine setup
const path = require("path");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// routes
// send
// sendFile

app.get("/", function (req, res) {
  // res.send(`<!DOCTYPE html>
  // <html lang="en">
  // <head>
  //   <meta charset="UTF-8">
  //   <meta http-equiv="X-UA-Compatible" content="IE=edge">
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //   <title>Document</title>
  // </head>
  // <body>
  //   <p style="color:pink">hello bunty</p>
  // </body>
  // </html>`);
  res.sendFile(__dirname + "/index.html");
  console.log(req.query.name);
  res.render("index.pug", req.query);
});
app.get("/sachin", function (req, res) {
  res.send("sachin1");
});

app.get("/contact/sachin", function (req, res) {
  res.send("contect");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port port`);
});
