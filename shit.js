const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const auth = require("./auth.json");
const prefix = "-";
const fs = require("fs");
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const response = require("./response.json");
const keywords = ["shitpost", "AJ-SR", "discord"];

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setGame("shitposts");
});

if(keywords.some(word => message.content.includes(word))) {
  message.reply(response.shitpost);
		}
	}
}

client.on("message", (message) => {
if (!message.content.startsWith(config.prefix) || message.author.bot) return;
	
if (command === "ping")) {
	message.channel.send("pong!");
  } else
if (command === "foo")) {
	message.channel.send("bar!");
  }
}


client.login(auth.token);
