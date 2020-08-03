"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variables de entorno
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
const config_json_1 = require("./config.json");
// Instancio un cliente de discord
const client = new discord_js_1.Client();
// Eventos
client.on('ready', () => {
    console.log('MorrisBot is ready!');
});
client.on('message', (message) => {
    var _a;
    console.log(message.content);
    if (message.content.startsWith(`${config_json_1.prefix}hola`) || message.content.startsWith(`${config_json_1.prefix}Hola`)) {
        if ((_a = message.member) === null || _a === void 0 ? void 0 : _a.hasPermission(['ADMINISTRATOR'])) {
            message.reply('Holiss kapi 🧉');
        }
        else {
            message.reply('Holiss 🧉');
        }
    }
    if (message.content.startsWith(`${config_json_1.prefix}meme`) || message.content.startsWith(`${config_json_1.prefix}Meme`)) {
        //message.reply('Buenardo 🧉');
        const pos = Math.floor(Math.random() * config_json_1.respuestas.length);
        message.reply(config_json_1.respuestas[pos]);
    }
    if (message.content.startsWith(`${config_json_1.prefix}comandos`) || message.content.startsWith(`${config_json_1.prefix}Comandos`)) {
        message.channel.send("Comandos \n\n!!hola: Saludar al Bot \n!!meme: El Bot reacciona a tu meme");
    }
});
// Inicio de sesion para el Bot
client.login(process.env.DISCORD_TOKEN);
