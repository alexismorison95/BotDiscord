"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Variables de entorno
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
const logic_1 = require("./logic");
const config_json_1 = require("./config.json");
// Instancio un cliente de discord (Bot)
const client = new discord_js_1.Client();
// Eventos
client.on('ready', () => {
    console.log('MorrisBot is ready!');
});
client.on('message', (message) => __awaiter(void 0, void 0, void 0, function* () {
    const content = message.content.toLowerCase();
    if (content.startsWith(`${config_json_1.prefix}hola`) || content.startsWith(`${config_json_1.prefix}holis`)) {
        logic_1.saludarBot(message);
    }
    if (content.startsWith(`${config_json_1.prefix}meme`)) {
        logic_1.reaccionarAlMeme(message);
    }
    if (content.startsWith(`${config_json_1.prefix}ayuda`)) {
        logic_1.pedirAyuda(message);
    }
    if (content.startsWith(`${config_json_1.prefix}cual es mi foto` || `${config_json_1.prefix}cual es mi foto?`)) {
        logic_1.avatar(message);
    }
}));
// Inicio de sesion para el Bot
client.login(process.env.DISCORD_TOKEN);
