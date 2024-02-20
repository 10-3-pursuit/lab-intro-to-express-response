const express = require('express');

const app = express();
const PORT = 3003;

//ROUTES
app.get('/', (request, response) => {
    response.send('Hello World')
});

app.get('/terminator', (request, response) => {
    response.send(`I'll be back`)
    // response.send('Hasta la vista, baby')
});

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
});

app.get('/emeril', (req, res) => {
    res.send('Bam!')
});

app.get('/coach-taylor', (req, res) => {
    res.send(`Clear eyes, full hearts, can't Lose`)
});

app.get('/homer-simpson', (req, res) => {
    res.send(`D'Oh`)
});

app.get('/frankenstein', (req, res) => {
    res.send(`It's alive! It's alive`)
});

app.get('/rocky', (req, res) => {
    res.send('Yo, Adrian') 
});

app.get('/gollum', (req, res) => {
    res.send('My Precious')
});

app.get('/james-bond', (req, res) => {
    res.send('the name is Bond, James Bond')
});

app.get('/dorothy', (req, res) => {
    res.send(`Toto, I've got a feeling we're not in Kansas anymore`)
});

app.get('/tony-montana', (req, res) => {
    res.send('Say hello to my little friend')
});

app.get('/regis', (req, res) => {
    res.send('Is that your final answer?')
});


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
    const position = Math.round(Math.random() * magic8Responses.length)
    res.send(`${magic8Responses[position]}`)
});

//LISTEN
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
});
