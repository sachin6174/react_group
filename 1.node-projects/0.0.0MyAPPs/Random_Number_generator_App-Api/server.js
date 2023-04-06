// const { urlencoded } = require("express");
const express = require("express");
const app = express();

// static file serve setup
app.use(express.static("public"));

//pug template engine setup
const path = require("path");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// for serving static content
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

///////////////////Algorithms/////////////////////////
// john von neuman Algo
var t = 7;
var k = BigInt(293864876245);
function jvn_algo(a, b) {
  if (a > b) {
    [a, b] = [b, a];
  }
  var ans;
  for (i = 0; i <= t; i++) {
    ans = BigInt(k * k);
    ans = ans.toString();
    k = Number(ans.slice(1, 14));
  }
  t *= 5;
  if (t === 0) {
    t = 17;
  }
  t = t % 100000;
  let p = k.toString();
  p = "0." + p;
  p = Number(p);

  return a + Math.floor(p * (b - a + 1));
}

//hardware random number generator
let jvnp;
const os = require("os");
function hrng(a, b) {
  let t1 = Date.now();
  for (i = 0; i < 3; i++) {
    t1 = (t1 * os.cpus()[i].times.user) % 10000000000;
  }
  for (i = 0; i < 3; i++) {
    t1 = (t1 * os.cpus()[i].times.sys) % 1000000000;
  }
  for (i = 0; i < 3; i++) {
    t1 = (t1 * os.cpus()[i].times.idle) % 10000000000;
  }
  for (i = 0; i < 3; i++) {
    t1 = (t1 * os.cpus()[i].times.irq) % 1000000000;
  }
  let p = t1.toString();
  p = "0." + p;
  p = Number(p);
  jvnp=p;
  return a + Math.floor(p * (b - a + 1));
}

//gui
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  // console.log(req.query.num1, req.query.num2);
  let ret = jvn_algo(n1, n2);
  // console.log(ret);
  var obj = {
    f_no: n1,
    s_no: n2,
    r_no: ret,
  };
  res.render("send.pug", obj);
});


app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/About.html");
});

// ///////////////////////////////////endpoints//////////////////////////

app.get("/jvn", function (req, res) {
  var n1 = req.query.num1;
  var n2 = req.query.num2;
  n1 = Number(n1);
  n2 = Number(n2);
  let ret = jvn_algo(n1, n2);
  // console.log(ret);
  var obj = {
    f_no: n1,
    s_no: n2,
    r_no: ret,
  };
  // res.json(JSON.stringify(obj));
  res.json(obj);
});

app.get("/hrng", function (req, res) {
  var n1 = req.query.num1;
  var n2 = req.query.num2;
  n1 = Number(n1);
  n2 = Number(n2);
  let ret = hrng(n1, n2);
  // console.log(ret);
  var obj = {
    f_no: n1,
    s_no: n2,
    r_no: ret,
  };
  // res.send(JSON.stringify(obj));
  res.json(obj);
});

// trnj (true rando number generation algorithum)
const https = require("https");
const geoip = require("geoip-lite");
var requestIp = require("request-ip");

app.get("/trng", (req, res) => {
  let cities = [
    "bangkok",
    "chandigarh",
    "india",
    "newyork",
    "delhi",
    "london",
    "singapore",
    "paris",
    "dubai",
  ];
  let que = cities[Date.now() % 9];
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    que +
    "&unit=metric&appid=44c9a010fc226d7fe3f5823247fada87";
  https.get(url, (response) => {
    if (response.statusCode == 200) {
      response.on("data", function (data) {
        let objapi = JSON.parse(data);

        // var clientIp = requestIp.getClientIp(req);
        // console.log(clientIp);
        // //  var ip = "42.105.9.136";
        //  var ip = String(clientIp);
        // var geo = geoip.lookup(ip);
        let n1 = Number(req.query.num1);
        let n2 = Number(req.query.num2);
        a = n1;
        b = n2;
        let loc = objapi.main;
        let k = parseInt(
          Number(loc.temp_max) *
            Number(loc.pressure) *
            Number(loc.humidity) *
            Number(loc.temp_min) *
            Number(loc.temp_max)
        );
        // console.log();

        if (a > b) {
          [a, b] = [b, a];
        }
        var ans;
        for (i = 0; i <= t; i++) {
          ans = BigInt(k * k);
          ans = ans.toString();
          k = Number(ans.slice(1, 14));
        }
        t *= 5;
        if (t === 0) {
          t = 17;
        }
        t = t % 100000;
        let p = k.toString();
        p = "0." + p;
        p = Number(p);

        let ret = a + Math.floor(p * (b - a + 1));

        var obj = {
          f_no: n1,
          s_no: n2,
          r_no: ret,
        };
        res.json(obj);
        // res.send(geo);
      });
    } else {
      res.send(
        "Not Able to fetch location Environmental condition may be inernet issue as this algorithum work on environmental condition by fetching environmental data from an api."
      );
    }
  });
});


// app.get("/pythonrandom", (req, res) => {
//   const url = "http://localhost:8000/pynum/";
//   https.get(url, (response) => {
//     if(response){
        
//         response.on("data", function (data) {
//             let n1 = Number(req.query.num1);
//             let n2 = Number(req.query.num2);
//             let a = n1;
//             let b = n2;
//             if (a > b) {
//               [a, b] = [b, a];
//             }
//             let objapi = JSON.parse(data);
//             let p = objapi.rno;
      
//             let ret = a + Math.floor(p * (b - a + 1));
//             var obj = {
//                 f_no: n1,
//                 s_no: n2,
//                 r_no: ret,
//               };
//             res.json(obj);

//           });


//     }else{
//         res.send("not able to fetch from django app.");
//     }

//   });
// });
app.get("/jsmathrandom", (req, res) => {
  let n1 = Number(req.query.num1);
  let n2 = Number(req.query.num2);
  let a = n1;
  let b = n2;
  if (a > b) {
    [a, b] = [b, a];
  }
  let p = Math.random();
  let ret = a + Math.floor(p * (b - a + 1));
  var obj = {
    f_no: n1,
    s_no: n2,
    r_no: ret,
  };
  res.json(obj);

});


app.get("/mixed", (req, res) => {

    let n1 = Number(req.query.num1);
    let n2 = Number(req.query.num2);
    let a = n1;
    let b = n2;
    if (a > b) {
      [a, b] = [b, a];
    }
  let p = Math.random()*100;
    ret=(jvn_algo(a,b)*hrng(a, b)* Math.floor(p * (b - a + 1))*1254245121)%100000000000;

    ans=ret.toString();
    
    let newp = ans.toString();
    newp = "0." + newp;
    newp= Number(newp);
//   console.log(newp);
    let ret1=a-1+Math.floor(newp * (b - a + 1));
    var obj = {
        f_no: n1,
        s_no: n2,
        r_no: ret1,
      };
      res.json(obj);
});





//////// listning/////
app.listen(process.env.PORT||3500, function () {
  console.log("server started on port 3500");
});
