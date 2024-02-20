// DEPENDENCIES
const express = require(`express`)


// CONFIGURATION
const app = express()
const PORT = 3003


// ROUTES
app.get('/', (request, response) => {
    response.send(`Hello, world!`)
});

app.get('/terminator', (request, response) => {
    response.send("I'll be back")
    response.send('Hasta la vista, baby')
});

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
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
  
];
app.get('/magic8', (req, res) => {
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);
    const response = magic8Responses[randomIndex];
    res.send(response);
})

// LISTEN
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});