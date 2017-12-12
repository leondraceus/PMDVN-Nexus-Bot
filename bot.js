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

bot.on('guildMemberAdd', member => {
    member.send("Chào mừng bạn đến PMDVN World, Server chat chính thức của Pokémon Mystery Dungeon Vietnam! Vui lòng đọc kĩ <#388258800697737216> trước khi tham gia chat! Mong bạn sẽ có khoảng thời gian vui vẻ tại nơi này!");
});
  

///////////////////////////////////////////////////////////////////////////////////////
//                          Database of Wikia Members/Admins                         //
///////////////////////////////////////////////////////////////////////////////////////


// info.js : Basic Info //
// inv.js : Inventory //