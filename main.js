const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');
const db = require('quick.db');
const func = require('./function.js');

// -->COMMANDS<--
bot.commands = new Discord.Collection();
fs.readdir('./commands/',(err,files) =>{

    if(err) console.error(err);
     var jsfiles = files.filter(f => f.split('.').pop()==='js');
     if(jsfiles.length<= 0){console.log('No commands found');}
     else{console.log(jsfiles.length + 'founded');}

     jsfiles.forEach((f,i) =>{
         var cmds = require(`./commands/${f}`);
         console.log(`command ${f} loading....`);
         bot.commands.set(cmds.config.command,cmds);
     })
})


bot.on('message',msg =>{



db.fetchObject(`guildPrefix_${msg.guild.id}`).then(i=>{

    let prefix;
if(i.text){
    prefix=i.text;
}
else{
    prefix='-';
}


if(msg.channel.type !='text') return msg.channel.send(`Please use commands in servers not in DMS`);
var cont = msg.content.slice(prefix.length).split(" ");
var args = cont.slice(1);
if(msg.author.bot) return;
if(!msg.content.startsWith(prefix)) return;

var cmd = bot.commands.get(cont[0]);
if(cmd) cmd.run(bot,msg,args);
})

});


bot.on('guildMemberAdd',member =>{
db.fetchObject(`messageChannel_${member.guild.id}`).then(i=>{
    if(!member.guild.channels.get(i.text)) return;
db.fetchObject(`joinMessage_${member.guild.id}`).then(a=>{
    if(!a.text) return;
    else{
       func.embed(member.guild.channels.get(i.text),a.text.replace(`{user}`,member.user.username).replace(`{server}`,member.guild.name).replace(`{users}`,member.guild.memberCount))
    }
})
})

});


bot.on('guildMemberRemove', member=>{
    db.fetchObject(`messageChannel_${member.guild.id}`).then(i=>{
        if(!member.guild.channels.get(i.text)) return;
    db.fetchObject(`leaveMessage_${member.guild.id}`).then(a=>{
        if(!a.text) return;
        else{
            func.embed(member.guild.channels.get(i.text),a.text.replace(`{user}`,member.user.username).replace(`{server}`,member.guild.name).replace(`{users}`,member.guild.memberCount))
            
        }

    })
    })
});

bot.on('ready',()=> {
console.log('SGB is ready ');
bot.user.setActivity(`over ${bot.guilds.size} servers.. ;)`,{type : "WATCHING"});
});

//bot.login(process.env.token);
