const { Client, GatewayIntentBits } = require('discord.js');
const { setAndDeployCommands } = require('./src/utils/setAndDeployCommands');
const { readEvents } = require('./src/utils/readEvents');

require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(process.env.TOKEN);

setAndDeployCommands(client);
readEvents(client);
