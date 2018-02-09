const db = require('quick.db');
const Discord = require('discord.js');
const RichEmbed = new Discord.RichEmbed();

exports.run = async(bot,msg,args)=>{
if(!msg.member.hasPermission("ADMINISTRATOR")){ 
    msg.channel.send(new Discord.RichEmbed()
    .setTitle('ERROR')
    .setColor('#ff0000')
    .setDescription('you need the `ADMINISTARTOR` permissions to use this command..'))
    return;
}
    if(!args.join(" ")){
        msg.channel.send(new Discord.RichEmbed()
    .setTitle('ERROR')
    .setColor('#ff0000')
    .setDescription('Please enter the prefix you want.`setprefix <prefix>`'))
    return;
    }

db.updateText(`guildPrefix_${msg.guild.id}`,args.join().trim()).then(i=>{
    
    msg.channel.send(new Discord.RichEmbed()
    .setTitle('SUCCESS')
    .setColor('#00ff00')
    .setDescription('Updated the **prefix** to `'+i.text+'`'));
})

}

exports.config = {
    command : 'setprefix'
}
