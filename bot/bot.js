import {Telegraf} from 'telegraf';

const API_KEY = '7633142965:AAE8zHTYJJT_r6L40-NO2ly0BDLWDghGLpg';
const bot = new Telegraf(API_KEY);

bot.start((ctx) => {
    const webAppButton = {
        text: 'Open Web App',
        web_app: {url: 'https://test-telegram-project-frontend.vercel.app/'}
    };

    const keyboard = {
        inline_keyboard: [[webAppButton]]
    };

    ctx.reply("Welcome! Click the button below to open the web app:", {
        reply_markup: keyboard
    });
});

bot.launch()
    .then(() => console.log('Bot is running...'))
    .catch(err => console.error('Failed to launch the bot:', err));