// Variables de entorno
import { config } from "dotenv";
config();

import { Client, Message } from "discord.js";

import { pedirAyuda, reaccionarAlMeme, saludarBot, avatar, preguntar } from "./logic";
import { prefix } from "./config.json";


// Instancio un cliente de discord (Bot)
const client: Client = new Client();


// Eventos
client.on('ready', () => {

    console.log('Bot is ready!');
});

client.on('message', (message: Message) => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const content = message.content.toLowerCase();

    if (content.startsWith(`${prefix}hola`) || content.startsWith(`${prefix}holis`)) {

        saludarBot(message);
    }

    else if (content.startsWith(`${prefix}meme`)) {

        reaccionarAlMeme(message);
    }

    else if (content.startsWith(`${prefix}ayuda`)) {

        pedirAyuda(message);
    }

    else if (content.startsWith(`${prefix}cual es mi foto`)) {

        avatar(message);
    }

    else if (content.startsWith(`${prefix}quien es`)) {

        preguntar(message, client, content);
    }
});


// Inicio de sesion para el Bot
client.login(process.env.DISCORD_TOKEN);