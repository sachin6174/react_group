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
  
})

app.post("/",function (req, res) {
  console.log(req.body);
  
  let oprator=JSON.stringify(req.body);
  let arr=oprator.split(',');
  console.log(arr);
  if(arr[2][1]==='a'){
    let result={ans:parseInt(req.body.num1)+parseInt(req.body.num2),key:"additon"}

      res.render("index.pug", result);
  }else if(arr[2][1]==='s'){
    let result={ans:parseInt(req.body.num1)-parseInt(req.body.num2),key:"subtraction"}

    res.render("index.pug", result);
  }else if(arr[2][1]==='m'){

    let result={ans:parseInt(req.body.num1)*parseInt(req.body.num2),key:"multiplication"}
      res.render("index.pug", result);


  }else if(arr[2][1]==='d'){

    let result={ans:parseInt(req.body.num1)/parseInt(req.body.num2),key:"division"}

      res.render("index.pug", result);

  }

  //WE HAVE TO CHECK HOW THE OPERATORS IS COMMING IN KEY
  
  /*for(key in req.body){
    if(key=="add"){
      let result={ans:parseInt(req.body.num1)+parseInt(req.body.num2),key:"additon"}

      res.render("index.pug", result);
    }else if(key=="subtract"){
      let result={ans:parseInt(req.body.num1)-parseInt(req.body.num2),key:"subtraction"}

      res.render("index.pug", result);
    }else if(key=="multiply"){
      let result={ans:parseInt(req.body.num1)*parseInt(req.body.num2),key:"multiplication"}
      res.render("index.pug", result);

    }else if(key=="divide"){
      let result={ans:parseInt(req.body.num1)/parseInt(req.body.num2),key:"division"}

      res.render("index.pug", result);
    }
  }
  */
 
  
})


app.listen(3000, function () {
  console.log('Successfully started calculator application!')
})