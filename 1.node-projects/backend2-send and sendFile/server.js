const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/file',(req,res) => {
  res.sendFile(__dirname +'/index.html')
})

app.get('/contact',(req,res) => {
  res.send('<h1>contact me</h1>')
})

app.get('/blog/current',(req,res) => {
  res.send('<h1>current blogs</h1>')
})

app.get('/blog/old',(req,res) => {
  res.send('<h1>old stuff</h1>')
})
app.get('/image',(req,res) => {
  res.sendFile(__dirname+'/wallpaperflare.com_wallpaper (5).jpg')
})


app.listen(port, () => {
  console.log(`Example app listening on port port`)
})
//recieving data as api and data as file
