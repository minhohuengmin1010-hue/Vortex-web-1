export async function handleAnime(sock, msg, command, args, sender) {
  const from = msg.key.remoteJid;
  const username = sender.split('@')[0];

  const animeCards = [
    { name: "Sung Jin-Woo (Shadow Monarch)", anime: "Solo Leveling", power: "9,950", rarity: "SSR+", img: "https://i.imgur.com/3Z5VjQh.jpg" },
    { name: "Uzumaki Naruto (Six Paths Sage)", anime: "Naruto Shippuden", power: "9,700", rarity: "SSR", img: "https://i.imgur.com/3Z5VjQh.jpg" },
    { name: "Son Goku (Ultra Instinct)", anime: "Dragon Ball Super", power: "10,000", rarity: "UR", img: "https://i.imgur.com/3Z5VjQh.jpg" },
    { name: "Charizard (Gigantamax Flame)", anime: "Pokémon", power: "9,200", rarity: "SSR", img: "https://i.imgur.com/3Z5VjQh.jpg" },
    { name: "Alien X (Celestial Sapiens)", anime: "Ben 10", power: "10,500", rarity: "UR+", img: "https://i.imgur.com/3Z5VjQh.jpg" },
    { name: "Kamado Tanjiro (Sun Breathing)", anime: "Demon Slayer", power: "9,100", rarity: "SR", img: "https://i.imgur.com/3Z5VjQh.jpg" }
  ];

  if (command === '.summon') {
    const card = animeCards[Math.floor(Math.random() * animeCards.length)];
    const caption = `🎴 *VORTEX MULTI-VERSE CARD SUMMON* 🎴\n\n👤 Summoner: @${username}\n✨ Character: **${card.name}**\n📺 Universe: *${card.anime}*\n⭐ Rarity: ${card.rarity}\n💪 Power Level: ${card.power}`;

    await sock.sendMessage(from, { image: { url: card.img }, caption, mentions: [sender] }, { quoted: msg });
    return;
  }

  if (command === '.auction') {
    const card = animeCards[Math.floor(Math.random() * animeCards.length)];
    const caption = `🏷️ *CARD AUCTION HOUSE* 🏷️\n\n🎴 Item: **[${card.rarity}] ${card.name}**\n📺 Universe: *${card.anime}*\n💰 Starting Bid: 🪙 5,000 Coins\n\nType \`.bid <amount>\` to place your offer!`;
    await sock.sendMessage(from, { image: { url: card.img }, caption }, { quoted: msg });
    return;
  }

  if (command === '.bid') {
    const bidAmount = args[1] || '5500';
    await sock.sendMessage(from, { text: `💰 @${username} placed a bid of 🪙 ${bidAmount} Coins on the active auction card!`, mentions: [sender] }, { quoted: msg });
    return;
  }

  if (command === '.gene-splice') {
    await sock.sendMessage(from, { text: `🧬 @${username} spliced two anime cards and generated an **[UR] Mutated Shadow Saiyan Card**!`, mentions: [sender] }, { quoted: msg });
    return;
  }

  if (command === '.inventory') {
    await sock.sendMessage(from, { text: `📦 *CARD INVENTORY FOR @${username}:*\n\n1. [UR] Son Goku\n2. [SSR] Sung Jin-Woo\n3. [SSR] Uzumaki Naruto\n4. [SR] Tanjiro Kamado`, mentions: [sender] }, { quoted: msg });
    return;
  }

  // Combat Battle GIFs mapping
  const battleGifs = {
    '.naruto-battle': { title: '🌀 NARUTO NINJA SHIPPUDEN CLASH', url: 'https://media.giphy.com/media/13hdW82110c71a/giphy.gif' },
    '.db-battle': { title: '💥 DRAGON BALL SUPER KI BATTLE', url: 'https://media.giphy.com/media/cb9aF9tDyiRkY/giphy.gif' },
    '.demon-battle': { title: '🗡️ DEMON SLAYER BREATHING ASSAULT', url: 'https://media.giphy.com/media/12OwjCwnN3k65u/giphy.gif' },
    '.solo-battle': { title: '👑 SOLO LEVELING SHADOW MONARCH DUEL', url: 'https://media.giphy.com/media/oyQ8Vn9u2pM26n1G41/giphy.gif' },
    '.mha-battle': { title: '🦸 MY HERO ACADEMIA QUIRK SMASH', url: 'https://media.giphy.com/media/VYcRNU4P3vrM4/giphy.gif' },
    '.rezero-battle': { title: '❄️ RE:ZERO ICE BRAND & ONI FURY', url: 'https://media.giphy.com/media/10rsLtGrOcCR0s/giphy.gif' },
    '.ben10-battle': { title: '⌚ BEN 10 OMNITRIX ALIEN TRANSFORMATION', url: 'https://media.giphy.com/media/10Cow6guDtsywE/giphy.gif' },
    '.poke-battle': { title: '⚡ POKÉMON ARENA CHAMPIONSHIP SHOWDOWN', url: 'https://media.giphy.com/media/G8kKuW5rXU5q8/giphy.gif' },
    '.card-duel': { title: '🎴 VORTEX CROSS-UNIVERSE CARD DUEL ARENA', url: 'https://media.giphy.com/media/9jfvW3P31z50Bic8lO/giphy.gif' }
  };

  if (battleGifs[command]) {
    const battle = battleGifs[command];
    await sock.sendMessage(from, { 
      video: { url: battle.url }, 
      gifPlayback: true, 
      caption: `⚔️ *${battle.title}* ⚔️\n\n🔥 Epic battle sequence triggered by @${username}!`, 
      mentions: [sender] 
    }, { quoted: msg });
  }
}
