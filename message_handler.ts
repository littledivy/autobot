// message_handler.ts
import {
  MESSAGE_CREATE
} from "https://deno.land/x/cordeno@v0.3.3/mod.ts";

import pilot from "./deps.ts";

export default async function Handler(msg: MESSAGE_CREATE): Promise<any> {
  return new Promise(async (resolve, reject) => {
    switch (msg.content) {
      case "!ping":
        await msg.reply(`Pong!`);
        await msg.reply(`Message author: ${msg.author.username}`);
        await msg.reply(`User created at: ${msg.author.createdOn}`);
        await msg.reply(`Created at: ${msg.createdAt}`);
        resolve();
        break;

      default:
      if(msg.content.startsWith("!")) {
        if(typeof (pilot as any)[msg.content] === 'function') {
          await msg.reply(`Executing...`)
          return resolve();
        }
        await msg.reply(`No method ${msg.content} found`)
        return resolve();
      }
      resolve();
      break;
    }
  });
};
