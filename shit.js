const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const auth = require("./auth.json");
const prefix = "-";
const fs = require("fs");
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const response = {
	"shitpost" : "Shitpost. You mean AJ's poetry?",
	"Desoros" : "Desoros. I like that guy."
};


client.on("ready", () => {
  console.log("I am ready!");
  client.user.setGame('shitposts');
});

function isShitpost(message) {
  for (i = 0; i < config.keywords.length; i++) {
    if (message.content.includes(config.keywords[i])) {
     return true;
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


client.on("message", (message) => {
  if (message.author.bot) return;
	
  if (isShitpost(message) === true) {
  	message.channel.send("true");
  } else
	  
  if (response[message.content]) {
  	message.channel.send(response[message.content]);
  }
});

client.login(auth.token);
