const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
  // res.send("Hasta la vista, baby");
});

app.get("/homer-simpson", (req, res) => {
  res.send("D'Oh");
});

app.get("/batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/fox-molder", (req, res) => {
  res.send("The truth is out there");
});

app.get("/zeus", (req, res) => {
  res.send("Releasethe Kraken");
});

app.get("/tony-montana", (req, res) => {
  res.send("Say hello to my little friend");
});

app.get("/james-bond", (req, res) => {
  res.send("The name is Bond, James Bond");
});

app.get("/bruce-banner", (req, res) => {
  res.send("Don't make me angry");
});

app.get("/travis-bickle", (req, res) => {
  res.send("You talkin'to me?");
});

app.get("/dorothy", (req, res) => {
  res.send("Toto, I've got a feeling we're not in Kansas anymore");
});

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
  const chooseRandomResponse = (responses) => {
    const randomIndex = Math.round(Math.random() * responses.length);
    return responses[randomIndex];
  };
  res.send(chooseRandomResponse(magic8Responses));
});

module.exports = app;
