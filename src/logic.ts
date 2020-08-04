import { Message, Client } from "discord.js";
import { respuestas } from "./config.json";


export function saludarBot(message: Message) {

    if (message.member?.hasPermission(['ADMINISTRATOR'])) {

        message.reply('Holiss kapi 🧉');
    }
    else {

        message.reply('Holiss 🧉');
    }
}


export function reaccionarAlMeme(message: Message) {

    if (message.attachments.array().length > 0) {

        const pos = Math.floor(Math.random() * respuestas.length);

        message.reply(respuestas[pos]);
    }
    else {

        message.reply('Adjunta algo bobo');
    }
}


export function pedirAyuda(message: Message) {

    message.reply("__Comandos:__ \n\n**!!hola** o **!!holis**: Saludar al Bot \n**!!meme**: El Bot reacciona a tu meme \n**!!cual es mi foto**: El Bot envia tu avatar \n**!!quien es** seguido de pregunta: Preguntar algo al Bot ");
}


export function avatar(message: Message) {
    
    message.reply(message.author.displayAvatarURL());
}


export function preguntar(message: Message, cliente: Client, content: string) {

    const miembros = [];

    for (let i = 0; i < cliente.users.cache.array().length; i++) {

        miembros.push(cliente.users.cache.array()[i].username);
    }

    const pos = Math.floor(Math.random() * miembros.length);

    const resp = content.slice(8);
    
    message.channel.send(`${resp[0].toUpperCase()}${resp.slice(4)} es ${miembros[pos]}`);
}