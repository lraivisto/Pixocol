module.exports.run = async (bot,msg,args) =>{
    const Discord = require('discord.js');
    const RichEmbed = new Discord.RichEmbed();
    const prefix = '!';

    let cont = msg.content.slice(prefix.length).split(" ");
    let argspurge = cont.slice(1);

    msg.delete(9000);    

      async function purge() {
     
         
        if(!msg.member.hasPermission("MANAGE_MESSAGES")){
            var embed = new Discord.RichEmbed()
            .setTitle('Error')
            .setDescription('Error you dont have the required perms - **manage Messages**');

            var msgSent =  msg.channel.send(embed);
           return;
        }

        if(isNaN(argspurge[0])){
         var embed = new Discord.RichEmbed()
          .setTitle('Error')
          .setDescription('Error-please only type in a number');

        var msgSent =  msg.channel.send(embed);
        
         return;
        }
        
       
        const fetched = await msg.channel.fetchMessages({limit: argspurge[0]});
      
       msg.channel.bulkDelete(fetched)
       .catch(error=>{msg.channel.send('```js\n Error-'+error+'\n ```')});
     
    }
      
      purge();
      
     
}
    
    module.exports.config = {
        command : "clear"
    }

   