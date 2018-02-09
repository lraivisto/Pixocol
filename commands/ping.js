module.exports.run = async(bot,msg,args) =>{
const Discord = require('discord.js');
const RichEmbed = new Discord.RichEmbed();


var ping = Math.round(bot.ping);
var embed = new Discord.RichEmbed()
.setTitle('Pong! :ping_pong: ')
.setColor('RANDOM')
.setDescription(' Ping is `'+ping+'` ms')


msg.channel.send(embed);
}


module.exports.config = {
    command : "ping"
}

