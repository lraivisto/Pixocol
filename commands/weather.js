module.exports.run = async(bot,msg,args) =>{
const Discord = require('discord.js');
var weather = require('yahoo-weather');

  let place = msg.content.split(" ").slice(1).join(" ");
    
   weather(place, 'c').then(info => {
  
msg.channel.send(`Location: ${place}\nTemp: ${info.item.condition.temp}C°\nCond: ${info.item.condition.text}`);
   })
   
}
module.exports.config = {
    command : "weather"
}

