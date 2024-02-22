//Dependencies
const express = require ('express');

//Configuration
const app = express();
const PORT = 3003;

//Routes
app.get('/', (request, response) => {
    response.send('Hello, Enoch!')
});

app.get('/John', (request, response) => {
    response.send('Hello, John!')
});

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
  })

  app.get('/terminator', (req, res) => {
    res.send('I/ll be back')
  })

  app.get('/emeril', (req, res) => {
    res.send('Bam')
  })

  app.get('/JJ Evans', (req, res) => {
    res.send('Dy-no-myte!')
  })

  app.get('/Batman', (req, res) => {
    res.send('To the Batmobile! ')
  })

  app.get('/Hannibal Smith', (req, res) => {
    res.send(' I love it when a plan comes together')
  })

  app.get('/james bond', (req, res) => {
    res.send('the name is Bond, James Bond')
  })

  app.get('/Frazier', (req, res) => {
    res.send('I/m listening')
  })

  app.get('/regis', (req, res) => {
    res.send(' Is that your final answer?')
  })

  app.get('/borg', (req, res) => {
    res.send('Resistance is futile')
  })

  app.get('/fox mulder', (req, res) => {
    res.send('The truth is out there')
  })

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
const randomAnswer = Math.floor(Math.random() * magic8Responses.length)

const magic8Answer = magic8Responses[randomAnswer]
res.send(`<h1>${magic8Answer}</h1>`)
} )

//Listen
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});



