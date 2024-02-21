//DEPENDENCIES
const express = require("express");

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

let randomMagic8ResponseIndex = Math.floor(
  Math.random() * magic8Responses.length
);

let randomMagic8Response = magic8Responses[randomMagic8ResponseIndex];

//CONFIGURATION
const app = express();
const PORT = 3003;

//ROUTES
app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/terminator", (req, res) => {
  res.send(`<h1>"I'll be back"</h1>`);
});

app.get("/rengoku", (req, res) => {
  res.send("Set your heart ablaze!");
});

app.get("/goku", (req, res) => {
  res.send("AAAAAAAAAHHHHHHH!!!!");
});

app.get("/hulk", (req, res) => {
  res.send("HULK SMASH");
});

app.get("/butterfrog", (req, res) => {
  res.send("mmButter...");
});

app.get("/bee", (req, res) => {
  res.send("Ya like jazz?");
});

app.get("/luffy", (req, res) => {
  res.send("I'm gonna become king of the pirates!");
});

app.get("/wicked-witch", (req, res) => {
  res.send("FLY, MY PRETTIES!");
});

app.get("/raven", (req, res) => {
  res.send("Azarath Metrion ZYNTHOS");
});

app.get("/magic8", (req, res) => {
  res.send(`<h1>${randomMagic8Response}</h1>`);
});

//LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
