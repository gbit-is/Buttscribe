import { Client, Attachment } from 'discord.js';
import { MessageAttachment } from '../src/attachment';
import { discordAttachment } from './types/attachment';
// const { getPDF } = require('./rosters/index');

const client = new Client();

client.on('ready', () => {
  console.log(`Connected as ${client.user.tag}`);
});

client.on('message', async (receivedMessage) => {
  if (receivedMessage.author === client.user) {
    // Do nothing
  }
  try {
    const attachment: any = receivedMessage.attachments.first();
    const messageAttachemnt = new MessageAttachment(attachment);
    // const [pdf, name] = await getPDF(attachment.url);
    // const msg = new Attachment(pdf, `${name}.pdf`);
    // await receivedMessage.reply(msg);
  } catch (e) {
    if (e) throw e;
  }
});

client.login(process.env.TOKEN);