const TelegramApi = require("node-telegram-bot-api");

const token = "6820468107:AAGT9FU26xUbuk2TtkNvolTXn-TRdnqvC6Y";

const bot = new TelegramApi(token, { polling: true });

const start = () => {
  bot.setMyCommands([
    { command: "/start", description: "Initial welcome message" },
    { command: "/info", description: "Geit information about the bot" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    //   bot.sendMessage(chatId, text);

    //   if (text === "/start") {
    //     await bot.sendMessage(chatId, "Welcome to Gallery Genius!");
    //   }
  });
};

start();
