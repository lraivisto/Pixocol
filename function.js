
module.exports = { 
    
        embed : function (channel,msg,deleteTimer) {
            channel.send({
              embed:{
               description:msg,
               color:0x1D82B6
              }
            }).then(message=>{
                if(!isNaN(deleteTimer)){
                    message.delete(deleteTimer)
                }
            })
        }
    
    }