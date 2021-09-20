const Discord = require("discord.js");
const keys = require("./config/keys");
const client = new Discord.Client();

client.login(keys.bot_token);

// when the bot logs online, it will be in a "ready" state
client.on("ready", async () => {
  const channel = await client.channels.cache.get(CHANNEL_ID_HERE);
  let dt = new Date();
  const resp = await channel.send(`Bot has logged online at ${dt.toISOString()}`);
  console.log(`Logged in at ${dt.toISOString()}`);
});

client.on("message", async (message) => {
  try {
      // do whatever you wanna do here in terms of message listening server-wide
  } catch (error) {
    console.log(error);
  }
});
