const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.sendMessage('__**Kurallar**__
**1-** Küfür, hakaret, argo gibi kelimeler dozunda kullanılmalıdır. (Eğer bir şahısa hakaret edip ve kendiside bu durumdan rahatsız oluyorsa ceza alabilirsiniz.)
**2-** Her kişiye saygı gösterin saygısızlık yapmayınız.
**3-** Spam yapmayınız.
**4-** Kimsenin başka bir kimseden üstünlük gösterilmemesi gerekir.
**5-** Başkalarını rahatsız etmeyiniz.
**6-** Odalarda bağırmayınız.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


