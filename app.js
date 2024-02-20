const express = require("express")

const app = express()

const PORT = process.env.PORT || 3003

app.get( "/", (req, res) => {
    res.send("Connection Secure")
});

app.get("/homersimpson", (req, res) => {
    res.send(`D'Oh`)
})

app.get("/terminator", (req, res) => {
    res.send("Hasta la vista, baby")
})

app.get("/magic8", (req, res) => {

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


  const displayRandomHeader = () => {
    const randomIndex = Math.floor(Math.random() * magic8Responses.length)
        const message = magic8Responses[randomIndex]
        return message
  }
  res.send(`<h1>${displayRandomHeader()}<h1>`)
})



app.listen(PORT, () => {
    console.log(`Connected to port: ${PORT}`)
})

