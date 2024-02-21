// DEPENDENCIES
const express = require("express");

// this is what gives us access to the req and res
// CONFIGURATION
const app = express();
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
  "Very doubtful",
];

// here we are defining our first endpoint
// req is coming from the client side
app.get("/", (req, res) => {
  res.send("Hello Jermany");
});

// ROUTES
app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});
app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});

app.get("/emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/homer-simpson", (req, res) => {
  res.send("D'Oh");
});
app.get("/fraiser", (req, res) => {
  res.send("I'm listening");
});

app.get("/frankenstein", (req, res) => {
  res.send("It's alive! It's alive");
});

app.get("/gollum", (req, res) => {
  res.send("My precious");
});

app.get("/jack-dawson", (req, res) => {
  res.send("I'm the king of the world!");
});

app.get("/james-bond", (req, res) => {
  res.send("the name is Bond, James Bond");
});

const magic8Answer = (array) => {
  const random = Math.floor(Math.random() * array.length);
  const answer = array[random];
  return answer;
};

console.log(magic8Answer(magic8Responses));
console.log(magic8Responses);
magic8Answer(magic8Responses);
app.get("/magic", (req, res) => {
  res.send(`<h1>Answer: ${magic8Answer(magic8Responses)}</h1>`);
});

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});
