const Discord = require ('discord.js'); 

client const = nouveau Discord.Client (); 

 

client.on ('prêt', () => { 

    console.log ('Je suis prêt!'); 

}); 

 

client.on ('message', message => { 

    if (message.content === 'ping') { 

       message.reply ('pong'); 

       } 

}); 

 

// CECI DOIT ÊTRE 

DE CETTE MANIÈRE client.login (process.env.BOT_TOKEN); // BOT_TOKEN est le secret du client
