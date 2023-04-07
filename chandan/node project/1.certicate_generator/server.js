const express=require('express');
const app=express();

const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));


app.set('view-engine','pug');
app.set('views',__dirname+'/views');

app.use(express.static('public'))


// app.use(express.static(public));
app.get('/', function (req, res) {
    res.sendFile(__dirname+"/index.html")
    
  })


  app.post('/',(req,res)=>{

    res.render('index.pug',req.body);
  })
  


app.listen(3000, function () {
    console.log('Successfully started certificate making!!!!   !')
  })