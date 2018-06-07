const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.sendMessage('Kurallar');
        message.channel.sendMessage('1- Küfür, hakaret, argo gibi kelimeler dozunda kullanılmalıdır. (Eğer bir şahısa hakaret edip ve kendiside bu durumdan rahatsız oluyorsa ceza alabilirsiniz.)');
        message.channel.sendMessage('2- Her kişiye saygı gösterin saygısızlık yapmayınız.');
        message.channel.sendMessage('3- Spam yapmayınız.');
        message.channel.sendMessage('4- Kimsenin başka bir kimseden üstünlük gösterilmemesi gerekir.');
        message.channel.sendMessage('5- Başkalarını rahatsız etmeyiniz.');
        message.channel.sendMessage('6- Odalarda bağırmayınız.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


