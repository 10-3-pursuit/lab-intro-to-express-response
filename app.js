const express = require('express')

const app = express()

app.get('/terminator', (req, res) => {
    res.send(' Ill be back ')
    res.send('Hasta la vista, baby')
  })

  app.get('/terminator2', (req, res) => {
    res.send('Hasta la vista, baby')
  })

  app.get('/Emeril', (req, res) => {
    res.send(' Bam ')
  })

  app.get('/Coach Taylor', (req, res) => {
    res.send(' Clear eyes,full hearts,cant Lose ')
  })
  app.get('/Fraiser', (req, res) => {
    res.send(' Im listening')
  })



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

  app.get('/magic8', (req, res) => {
    const randomMagic = Math.floor(Math.random() * magic8Responses.length);
    const magic8Answer = magic8Responses[randomMagic];
    res.send(magic8Answer);
});

  app.listen(3003)