// Dependencies
const express = require("express");

// Configuration
const app = express();
const PORT = 3003;

// Variables
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
  "Very doubtful",
];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Routes
app.get("/", (request, response) => {
  response.send("Hello, world!");
});

app.get("/tim-gunn", (request, response) => {
  response.send("Make it work");
});

app.get("/steve-mcgarrett", (request, response) => {
  response.send("Book 'em Danno!");
});

app.get("/fox/mulder", (request, response) => {
  response.send("The truth is out there");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back");
  response.send("Hasta la vista, baby");
});

app.get("/magic-8ball", (request, response) => {
  response.send(
    `<h1>${magic8Responses[getRandomInt(1, magic8Responses.length - 1)]}<h1>`
  );
});

// Listen
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
