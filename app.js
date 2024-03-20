const express = require("express")
const app = express()
const PORT = 3003

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})

app.get('/', (req,res)=> {
    res.send('Hello World')
})

app.get('/emeril', (req,res)=> {
    res.send("Bam!")
})

app.get("/jj-evans", (req,res)=>{
    res.send("Dy-no-myte!")
})

app.get("/bruce-banner", (req,res)=>{
    res.send("Don't make me angry")
})

app.get("/tony-montana", (req,res)=>{
    res.send("Say hello to my little friend")
})

app.get("/james-bond", (req,res)=>{
    res.send("The name is Bond, James Bond")
})

app.get("/travis-bickle", (req,res)=>{
    res.send("You talkin to me?")
})

app.get("/gollum", (req,res)=>{
    res.send("My precious")
})

app.get("/wesker", (req,res)=>{
    res.send("7 minutes. 7 minutes is all I can spare to play with you")
})

app.get("/homer", (req,res)=>{
    res.send("D'Oh")
})

app.get("/jimlovell", (req,res)=>{
    res.send("")
})

app.get("/rocky", (req,res)=>{
    res.send("Yo, Adrian")
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

  app.get('/magic8', (req,res)=> {
    const magic8Answer = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    res.send(`<h1>${magic8Answer}</h1>`)
})