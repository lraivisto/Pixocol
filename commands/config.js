const db = require('quick.db');
const Discord = require('discord.js');
const RichEmbed = new Discord.RichEmbed();

exports.run = async(bot,msg,args) =>{
   var channel;
   var joinText;
   var leaveText;
   var gprefix;

    db.fetchObject(`messageChannel_${msg.guild.id}`).then(channelIDFetched => {
        if(!msg.guild.channels.get(channelIDFetched.text))  channel = "*No channel set*";
        else channel = msg.guild.channels.get(channelIDFetched.text);

    db.fetchObject(`joinMessage_${msg.guild.id}`).then(joinTextFetched =>{
        if(!joinTextFetched.text)  joinText = '*No message set*';
        else  joinText = joinTextFetched.text;

    db.fetchObject(`leaveMessage_${msg.guild.id}`).then(leaveTextFetched =>{
        if(!leaveTextFetched.text)  leaveText = '*No message set*';
        else  leaveText = leaveTextFetched.text;
 
    db.fetchObject(`guildPrefix_${msg.guild.id}`).then(guildPrefixFetched=>{
        if(!guildPrefixFetched) gprefix = '*no prefix set.Prefix is the default `-`';
        else gprefix = guildPrefixFetched.text;
   
        msg.channel.send( new Discord.RichEmbed()
        .setTitle('Guild Config')
        .setDescription(`** Logging Channel**\n ${channel}\n\n **Welcome Message**\n ${joinText}\n\n **Leave Message**\n ${leaveText}\n\n **Guild Prefix**\n ${gprefix}\n\n `));
    })
    })
    })
    })


}

exports.config = {
    command : "config"
}