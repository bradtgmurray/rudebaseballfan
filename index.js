const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username
})

bot.hears('yankees', ({ reply }, next) => reply('/fucktheyankees'));

bot.startPolling()
