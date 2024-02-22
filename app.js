
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.status(418).send('Hello there')
})

app.get('/terminator', (req, res) => {
    res.send("I'll be back \nHasta la vista, baby")
})

app.get('/007', (req, res) => {
    res.send("The name is Bond. James Bond")
})

app.get('/tony-montana', (req, res) => {
    res.send("Say hello to my little friend")
})

app.get('/darth-vader', (req, res) => {
    res.send("No. I am your father.")
})

app.get('/princess-leia', (req, res) => {
    res.send("You're our only hope, Obi-wan")
})

app.get('/yoda', (req, res) => {
    res.send("Do, or do not. There is no try.")
})

app.get('/obiwan', (req, res) => {
    res.send("These are not the droids you're looking for.\nI have the high ground")
})

app.get('/jacob', (req, res) => {
    res.send("Where the hell have you been, loca!")
})

app.get('/velma', (req, res) => {
    res.send("Jinkies!")
})

app.get('/scooby', (req, res) => {
    res.send("Ruh-roh")
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
    res.send(`<h1>${magic8Responses[Math.floor(magic8Responses.length * Math.random())]}</h1>`)
})

module.exports = app