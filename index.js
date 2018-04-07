const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.hears('yankees', ({ reply }, next) => reply('/fucktheyankees'));

bot.startPolling()
