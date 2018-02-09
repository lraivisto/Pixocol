const db = require('quick.db');
const Discord = require('discord.js');
const RichEmbed = new Discord.RichEmbed();


exports.run = async(bot,msg,args) => {

var newWelcome;

if(!msg.member.hasPermission("ADMINISTRATOR")) {
    var messagesent = msg.channel.send(new Discord.RichEmbed()
    .setTitle('Error')
    .setColor('#ff0000')
    .setDescription('You dont have the `ADMINSTRATOR` permission.You require it.'));

return;
}
if(!args.join(" ") && args.join(" ").toUpperCase() !=='NONE'){
    var messagesent = msg.channel.send(new Discord.RichEmbed()
    .setTitle('Error')
    .setColor('#ff0000')
    .setDescription('Please type in the welcome message you want.If you already have a message and want to disable it please type `none` after it.'));

return; 
}

if(args.join(" ").toUpperCase() === "NONE") newWelcome='';
else newWelcome =args.join(" ").trim();

db.updateText(`joinMessage_${msg.guild.id}`,newWelcome).then(i=>{
    if(newWelcome==''){
        msg.channel.send(new Discord.RichEmbed()
        .setTitle('Success')
        .setColor('#00ff00')
        .setDescription('Successfully removed the message..'));
        return;
    }
    msg.channel.send(new Discord.RichEmbed()
.setTitle('Success')
.setColor('#00ff00')
.setDescription('Successfully updated the welcome message to `'+args.join(" ").trim()+'`'));
})
    
}

exports.config = {
    command :"setwelcomemsg"
}


