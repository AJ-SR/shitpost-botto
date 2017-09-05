const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = "-";
const fs = require("fs");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(config.prefix + "foo")) {
    message.channel.send("bar!");
  } else
  if (message.content.includes("AJ-SR")) {
    message.channel.send("AJ-SR is my dad");
});

client.login(config.token);
