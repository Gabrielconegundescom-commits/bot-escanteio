const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot("SEU_TOKEN_AQUI", { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🔥 Bot de escanteio ATIVO!");
});
