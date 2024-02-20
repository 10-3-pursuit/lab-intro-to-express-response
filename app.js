


const app = express()



// app.get('/', (request ,response) => {
//     response.send('I love to code!!!!!!')
// })

// extra
app.get('/', (request, response) => {
    response.status(200).send('Hello, world!')
})

app.get('/poetic-justice', (req,res) => {
    res.send(`I ain't in the business of keeping no ninja that don't wanna be kept!!!!!`)
})

app.get('/terminator', (req, res) => {
    res.send(`Hasta la vista, baby`)
  })

// app.get('/poetic-justice', (req,res) => {
//     res.send(`I ain't in the business of keeping no ninja that don't wanna be kept!!!!!`)
// })

app.get('/jerry-McGuire', (req,res) => {
    res.send(`Show me the Money!!!!!!!!!`)
})

app.get('/DenzelWashington', (req,res) => {
    res.send(`King Kong Aint got nothing on me!!!!!!!`)
})

app.get('/JackDawson', (req,res) => {
    res.send(` I'm king of the world!!`)
})

app.get('/JamesBond', (req,res) => {
    res.send(`the name is Bond, James Bond!`)
})

app.get('/theShining', (req,res) => {
    res.send(`Here's Johnny!!`)
})

app.get('/waitingToExhale', (req,res) => {
    res.send(`He's A good Man Savannah!!`)
})

app.get('/NewJackCity', (req,res) => {
    res.send(`am i my brothers keeper?? yes i am!!!`)
})

app.get('/MikeTyson', (req,res) => {
    res.send(`I'm The Best Eva!!!!!`)
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

 const ramdomindex = Math.floor(Math.random() * magic8Responses.length)
 const randomResponse = magic8Responses[ramdomindex]

app.get('/magic8', (req,res) => {
    res.send(`<h1>${randomResponse}<h1>`)
})








module.exports = app;