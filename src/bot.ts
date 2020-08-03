// Variables de entorno
import { config } from "dotenv";
config();

import { Client, Message } from "discord.js";
import { prefix, respuestas } from "./config.json";

// Instancio un cliente de discord
const client: Client = new Client();

// Eventos
client.on('ready', () => {
    console.log('MorrisBot is ready!');
});

client.on('message', (message: Message) => {

    console.log(message.content);

    if (message.content.startsWith(`${prefix}hola`) || message.content.startsWith(`${prefix}Hola`)) {

        if (message.member?.hasPermission(['ADMINISTRATOR'])) {

            message.reply('Holiss kapi 🧉');
        }
        else {
            message.reply('Holiss 🧉');
        }
    }

    if (message.content.startsWith(`${prefix}meme`) || message.content.startsWith(`${prefix}Meme`)) {

        //message.reply('Buenardo 🧉');

        const pos = Math.floor(Math.random() * respuestas.length);

        message.reply(respuestas[pos]);
    }

    if (message.content.startsWith(`${prefix}comandos`) || message.content.startsWith(`${prefix}Comandos`)) {

        message.channel.send("Comandos \n\n!!hola: Saludar al Bot \n!!meme: El Bot reacciona a tu meme");
    }
});

// Inicio de sesion para el Bot
client.login(process.env.DISCORD_TOKEN);