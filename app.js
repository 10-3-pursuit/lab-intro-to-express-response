// Saving express into a variable like we would do with hooks
const express = require("express");

// save express into app by invoking it
const app = express();

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});

app.get("/emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/zeus", (req, res) => {
  res.send("Release the Kraken");
});

app.get("/Tim/Gunn", (req, res) => {
  res.send("Make it work");
});

app.get("/frakenstein", (req, res) => {
  res.send("It's alive! It's alive");
});

app.get("/rocky", (req, res) => {
  res.send("Yo, Adrian");
});

app.get("/dorothy", (req, res) => {
  res.send("Toto, I've got a feeling we're not in Kansas anymore");
});

app.get("/james-bond", (req, res) => {
  res.send("the name is Bond, James Bond");
});

// magic 8 ball activity:

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

app.get("/magic8", (req, res) => {
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  res.send(`<h1>${magic8Responses[randomIndex]}</h1>`);
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
