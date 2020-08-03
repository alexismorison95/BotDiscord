"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preguntar = exports.avatar = exports.pedirAyuda = exports.reaccionarAlMeme = exports.saludarBot = void 0;
const config_json_1 = require("./config.json");
function saludarBot(message) {
    var _a;
    if ((_a = message.member) === null || _a === void 0 ? void 0 : _a.hasPermission(['ADMINISTRATOR'])) {
        message.reply('Holiss kapi 🧉');
    }
    else {
        message.reply('Holiss 🧉');
    }
}
exports.saludarBot = saludarBot;
function reaccionarAlMeme(message) {
    if (message.attachments.array().length > 0) {
        const pos = Math.floor(Math.random() * config_json_1.respuestas.length);
        message.reply(config_json_1.respuestas[pos]);
    }
    else {
        message.reply('Adjunta algo bobo');
    }
}
exports.reaccionarAlMeme = reaccionarAlMeme;
function pedirAyuda(message) {
    message.reply("__Comandos:__ \n\n**!!hola** o **!!holis**: Saludar al Bot \n**!!meme**: El Bot reacciona a tu meme \n**!!cual es mi foto**: El Bot reacciona a tu meme \n**!!quien es** seguido de pregunta: Preguntar algo al Bot ");
}
exports.pedirAyuda = pedirAyuda;
function avatar(message) {
    message.reply(message.author.displayAvatarURL());
}
exports.avatar = avatar;
function preguntar(message, cliente, content) {
    const miembros = [];
    for (let i = 0; i < cliente.users.cache.array().length; i++) {
        miembros.push(cliente.users.cache.array()[i].username);
    }
    const pos = Math.floor(Math.random() * miembros.length);
    const resp = content.slice(8);
    message.channel.send(`${resp[0].toUpperCase()}${resp.slice(4)} es ${miembros[pos]}`);
}
exports.preguntar = preguntar;
