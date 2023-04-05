const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }));
const port = 3000
//receiving data in the form of api query , in request.query.object

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log(req.query)
})

// app.post('/gui', (req, res) => {//works only for gui so we use post instead of get method
//   res.sendFile(__dirname+'/index.html')
//   console.log(req.body)
//   //res.send(req.body.fname)
// })

app.get('/gui', (req, res)=>{
 
  res.sendFile(__dirname+'/index.html')
})

app.post('/gui', (req, res)=>{
  res.send(req.body)
  console.log(req.body)
  // console.log(req.body)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})