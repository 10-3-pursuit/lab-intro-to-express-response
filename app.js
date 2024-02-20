const express = require("express")

//config
const app = express();
const PORT = process.env.PORT || 3003

//ROUTES
app.get('/', (req,res)=> {
  res.send('Hello World!');
})

app.get('/terminator', (req,res)=> {
    res.send(`I'll be back`);
    // res.send('Hasta la vista, baby')
  })

app.get('/Emeril', (req, res) => {
  res.send('Bam!')
})

app.get('/Steve-McGarrett', (req, res) => {
  res.send(`Clear eyes, full hearts, can't Lose`)
})

app.get('/Coach-Taylor ', (req, res) => {
  res.send('Make it work')
})

app.get('/Homer-Simpson', (req, res) => {
  res.send(`D'Oh`)
})

app.get('/Bruce-Banner', (req, res) => {
  res.send(`Don't make me angry `)
})

app.get('/JJ-Evans', (req, res) => {
  res.send('Dy-no-myte!')
})

app.get('/Batman', (req, res) => {
  res.send('To the Batmobile!')
})

app.get('/tim-gunn', (req, res) => {
  res.send('Make it work')
})


//Magic8 ball
app.get('/magic8', (req, res) => {

const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ]

  const index = Math.floor(Math.random()*magic8Responses.length)
  res.send(`<h1>${magic8Responses[index]}</h1>`)
})

//Listen, will start the server on this port
app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
})