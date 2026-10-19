export async function handleFun(sock, msg, command, args, sender) {
  const from = msg.key.remoteJid;
  const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || sender;

  const gifs = {
    '.slap': 'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
    '.hug': 'https://media.giphy.com/media/3oEdv4hwWTzBhWvaU0/giphy.gif',
    '.kiss': 'https://media.giphy.com/media/10UxvF319iCBdK/giphy.gif',
    '.punch': 'https://media.giphy.com/media/12OMY457ZuPYVW/giphy.gif',
    '.brick': 'https://media.giphy.com/media/10fS07X5DSX0Y8/giphy.gif'
  };

  if (gifs[command]) {
    const actionName = command.replace('.', '').toUpperCase();
    await sock.sendMessage(from, { video: { url: gifs[command] }, gifPlayback: true, caption: `💥 @${sender.split('@')[0]} used **${actionName}** on @${mentioned.split('@')[0]}!`, mentions: [sender, mentioned] }, { quoted: msg });
  } else if (command === '.truth') {
    const truths = ["What's your biggest secret?", "Who is your anime crush?"];
    await sock.sendMessage(from, { text: `❓ *TRUTH:* "${truths[Math.floor(Math.random() * truths.length)]}"` }, { quoted: msg });
  }
}
