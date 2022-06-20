const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js"); 

exports.run = (client, message) => {
  const Embed = new MessageEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setDescription(`[ Invite Link ](bot inv url)`)
  
  message.channel.send(Embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invitelink"]
};

exports.help = {
  name: 'invite'
};
