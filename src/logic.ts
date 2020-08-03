import { Message } from "discord.js";
import { prefix, respuestas } from "./config.json";


export function saludarBot(message: Message) {

    if (message.member?.hasPermission(['ADMINISTRATOR'])) {

        message.reply('Holiss kapi 🧉');
    }
    else {

        message.reply('Holiss 🧉');
    }
}


export function reaccionarAlMeme(message: Message) {

    const pos = Math.floor(Math.random() * respuestas.length);

    message.reply(respuestas[pos]);
}


export function pedirAyuda(message: Message) {

    message.channel.send("Comandos \n\n!!hola o holis: Saludar al Bot \n!!meme: El Bot reacciona a tu meme \n!!cual es mi foto o cual es mi foto?: El Bot reacciona a tu meme");
}

export function avatar(message: Message) {
    
    message.reply(message.author.displayAvatarURL());
}