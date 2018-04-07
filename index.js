const Telegraf = require('telegraf');
const { reply } = Telegraf;

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username;
})

//bot.hears(/.*yankees.*/, reply('/fucktheyankees'));

bot.on('message', (ctx, next) => {
    if (ctx.message.text.indexOf("yankees") != -1) {
      ctx.telegram.sendMessage(ctx.message.chat.id, "/fucktheyankees");
    }
});


bot.startPolling();
