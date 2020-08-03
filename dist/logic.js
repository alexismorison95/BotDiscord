"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avatar = exports.pedirAyuda = exports.reaccionarAlMeme = exports.saludarBot = void 0;
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
    const pos = Math.floor(Math.random() * config_json_1.respuestas.length);
    message.reply(config_json_1.respuestas[pos]);
}
exports.reaccionarAlMeme = reaccionarAlMeme;
function pedirAyuda(message) {
    message.channel.send("Comandos \n\n!!hola o holis: Saludar al Bot \n!!meme: El Bot reacciona a tu meme \n!!cual es mi foto o cual es mi foto?: El Bot reacciona a tu meme");
}
exports.pedirAyuda = pedirAyuda;
function avatar(message) {
    message.reply(message.author.displayAvatarURL());
}
exports.avatar = avatar;
