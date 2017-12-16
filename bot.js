const settings = require("./settings.json");
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = settings.prefix;
const fs = require("fs");

bot.login(settings.token);

bot.on('ready', () => {
    console.log(`${bot.user.username} is ready!`);
    bot.user.setGame('🎄Pokémas Event🎄')
});

bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    var jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        var props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    var messageArray = message.content.split(` `);
    var command = messageArray[0];
    var args = messageArray.slice(1);
    var channelname = messageArray[1];
    var rep = messageArray[2];
    
    if(!command.startsWith(prefix)) return;

    var cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
});

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    var messageArray = message.content.split(` `);
    var command = messageArray[0];
    var args = messageArray.slice(1);
    var channelname = messageArray[1];
    var rep = messageArray[2];

    if(message.content === "Tìm một nơi tình yêu đưa lối, buồn làm chi thôi đã hết rồi"){
        message.channel.sendMessage("O ó o ò%0D%0AO ó o ò 🐔")
    }

    if(message.content === "Sắp đến giờ diễn rồi mà em thấy không muốn diễn, em phải làm gì đây?"){
        message.channel.sendMessage("Sốt 42 độ, huỷ show! <:fakesmile:387588841332146178>")
    }

    if(message.content === "Ai là chủ của tiệm bánh tráng trộn ngon nhất vũ trụ?"){
        message.channel.sendMessage("Bành Thị Bích Nụ ❤")
    }
});

bot.on('guildMemberAdd', member => {
    member.send("Chào mừng bạn đến PMDVN World, Server Chat chính thức của Pokémon Mystery Dungeon Vietnam! Vui lòng khai báo **Tên Facebook**, **Pokémon bạn hoá thân trên Group** tại <#388210942908956682> và đọc kĩ <#388258800697737216> trước khi tham gia chat! Mong bạn sẽ có khoảng thời gian vui vẻ tại nơi này!");
});
  

///////////////////////////////////////////////////////////////////////////////////////
//                          Database of Wikia Members/Admins                         //
///////////////////////////////////////////////////////////////////////////////////////


// info.js : Basic Info //
// inv.js : Inventory //