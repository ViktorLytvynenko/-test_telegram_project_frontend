import { Telegraf } from "telegraf";
const TOKEN = "7633142965:AAE8zHTYJJT_r6L40-NO2ly0BDLWDghGLpg";
const bot = new Telegraf(TOKEN);

const web_link = "https://test-telegram-project-frontend.vercel.app/";

bot.start((ctx) =>
    ctx.reply("Welcome :)))))", {
        reply_markup: {
            keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
        },
    })
);

bot.launch();