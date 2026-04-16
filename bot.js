const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot("8653218083:AAH2kgAtpRinlaocNCpNF17XT9QkK5FskZc", { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🔥 Bot de escanteio ATIVO!");
});
