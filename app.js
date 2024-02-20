const express = require("express")
const app = express()

const PORT = process.env.PORT || 3003

app.get("/", (request, response) => {
    response.send('Hello World!')
})

app.get("/terminator", (request, response) => {
    response.send(`I'll be back`)
})
app.get("zeus", (request, response) => {
    response.send(`Release the Kraken`)
})
app.get("emeril", (request, response) => {
    response.send(`Bam!`)
})
app.get("steve-mcgarrett", (request, response) => {
    response.send(`Book 'em Danno!`)
})
app.get("fraiser", (request, response) => {
    response.send(`I'm listening`)
})
app.get("regis", (request, response) => {
    response.send(`Is that your final answer?`)
})
app.get("batman", (request, response) => {
    response.send(`To the Batmobile!`)
})
app.get("borg", (request, response) => {
    response.send(`Resistance is futile`)
})
app.get("dorothy", (request, response) => {
    response.send(`Toto, I've got a feeling we're not in Kansas anymore`)
})
app.get("rocky", (request, response) => {
    response.send(`Yo, Adrian`)
})

app.get("/magic8", (request, response) => {
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
      const randomQuote = Math.floor(Math.random() * magic8Responses.length);
      const magic8Answer = magic8Responses[randomQuote]
    response.send(`<h1> ${magic8Answer}<h1>`)
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})