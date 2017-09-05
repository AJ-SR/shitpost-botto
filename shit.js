const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const auth = require("./auth.json");
const prefix = "-";
const fs = require("fs");

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setGame('shitposts');
});

function isShitpost(message) {
  for (i = 0; i < config.keywords.length; i++) {
    if (message.content.includes(config.keywords[i])) {
      return true;
}

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(config.prefix + "foo")) {
    message.channel.send("bar!");
  }
});

client.login(auth.token);
