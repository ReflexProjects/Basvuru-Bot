const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  if (!["911658767148535888"].includes(message.author.id))
    return message.channel.send(
      "❌ Bu Komutu Sadece Yapımcılar Kullanabilir!"
    );

  message.channel.send(`✅ Başarılı! Bot Kapatıldı.`);
  message.delete(60).then(msg => {
    console.log(`Bot Kapatıldı!`);

    process.exit(0);
  });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["close", "exit", "çık", "çıkış-yap"],
  permLevel: 0
};

module.exports.help = {
  name: "kapat",
  description: "",
  usage: "kapat"
};