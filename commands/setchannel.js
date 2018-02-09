const db = require('quick.db');
const Discord = require('discord.js');
const RichEmbed = new Discord.RichEmbed();


exports.run = async(bot,msg,args) => {

var newChannel;

if(!msg.member.hasPermission("ADMINISTRATOR")) {
    var messagesent = msg.channel.send(new Discord.RichEmbed()
    .setTitle('Error')
    .setColor('#ff0000')
    .setDescription('You dont have the `ADMINSTRATOR` permission.You require it.'));

return;
}




if(args.join(" ").toUpperCase() === "NONE") newChannel='';
else newChannel = msg.channel.id;


db.updateText(`messageChannel_${msg.guild.id}`,newChannel).then(i=>{

    if(newChannel==''){
        msg.channel.send(new Discord.RichEmbed()
        .setTitle('Success')
        .setColor('#00ff00')
        .setDescription('Successfully removed the logging channels'));
        return;
    }
    msg.channel.send(new Discord.RichEmbed()
.setTitle('Success')
.setColor('#00ff00')
.setDescription('Successfully updated the logging channel to `'+msg.channel+'`'));
})
    
}

exports.config = {
    command :"setchannel"
}


