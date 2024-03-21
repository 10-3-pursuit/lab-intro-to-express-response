// DEPENDENCIES
const express = require("express");

// CONFIGURATION
//require("dotenv").config();
const app = express()
const PORT = process.env.PORT || 3003;

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
// ROUTES

app.get("/magic8", (req, res) => {
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);
    const response = magic8Responses[randomIndex];
    res.send(`<h1>${response}</h1>`);
});

app.get("/", (req, res) => {
  res.send("Hello Word");
}); 

app.get("/luis", (req, res) => {
  res.send("The Begining Of The End");
}); 

app.get("/terminator", (req, res) => {
  res.send("I'll be back. Hasta la vista, baby");
  
}); 

app.get("/Emeril", (req, res) => {
  res.send("Bam!");
}); 

app.get("/Steve-McGarrett", (req, res) => {
  res.send("Book 'em Danno!");
}); 

app.get("/Coach-Taylor", (req, res) => {
  res.send("Clear eyes, full hearts, can't Lose");
  });

  app.get("/Homer-Simpson", (req, res) => {
  res.send("D'Oh");
  });

  app.get("/Bruce-Banner", (req, res) => {
  res.send("Don't make me angry");
  });

  app.get("/JJ-Evans", (req, res) => {
  res.send("Dy-no-myte!");
  });

  app.get("/Batman", (req, res) => {
  res.send("To the Batmobile!");
  });

  app.get("/Hannibal Smith ", (req, res) => {
  res.send("I love it when a plan comes together");
  });
// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});