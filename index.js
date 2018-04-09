const Telegraf = require('telegraf');
const { reply } = Telegraf;

const string_finder = require('./string_finder');


const bot = new Telegraf(process.env.BOT_TOKEN);

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username;
})

bot.on('message', (ctx, next) => {
  if (string_finder(ctx.message.text)) {
    ctx.telegram.sendMessage(ctx.message.chat.id, "/fucktheyankees");
  }
});

bot.startPolling();
