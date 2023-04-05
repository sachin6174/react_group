const { urlencoded } = require("express");
const express= require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});


 // john von neuman Algo
 var  t=7;
var k=BigInt(293864876245);
 function jvn_algo(a,b){
     
     var ans;
     for( i=0;i<=t;i++){
         ans=BigInt(k*k);
         ans=ans.toString();
         k=Number(ans.slice(1, 13));
     }
     t*=5;
     if(t===0){
        t=17;
     }
     t=t%100000;
    let p=k.toString();
    p="0."+p;
    p=Number(p);
    // console.log(p);
    return (a+Math.floor(p*(b-a+1)));
 }
//  console.log(jvn_algo(a=10,b=20));


app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    let ret=jvn_algo(num1,num2);
    console.log(ret);
    var obj={
        "r_no":ret,
    }

    res.send(JSON.stringify(obj));
});


app.listen(3500,function(){
    console.log("server started on port 3500");
});