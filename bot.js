const settings = require("./settings.json");
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = settings.prefix;
const fs = require("fs");

bot.login(settings.token);

bot.on('ready', () => {
    console.log(`${bot.user.username} is ready!`);
bot.user.setGame('in Lake of Newmoon ⚫')
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

    if(message.content === "Dzô dziên" | message.content === "dzô dziên"){
        message.channel.sendMessage("Nứng lone hả?\nDICHOZZZ!!!!!")
    }

    if(message.content === "Ngộ nghĩnh nhỉ?" | message.content === "ngộ nghĩnh nhỉ?" | message.content === "Ngộ nghĩnh nhỉ" | message.content === "ngộ nghĩnh nhỉ"){
        message.channel.sendMessage("Lạ lùng nhỉ?")
    }

    if(message.content === "Cái ĐM" | message.content === "đm" | message.content === "Đm" | message.content === "ĐM"| message.content === "disme"| message.content === "dis"){
        message.channel.sendMessage("(╯°□°）╯︵ ┻━┻")
    }

    if(message.content === "xoạc không em" | message.content === "xoạc không anh" | message.content === "Ch1ch" | message.content === "ch1ch"| message.content === "xoạc"| message.content === "ch!ch" | message.content === "Ch!ch"){
        message.channel.sendMessage("( ͡° ͜ʖ ͡°)")
    }

});

bot.on('guildMemberAdd', member => {
    member.send(":door: **__CHÀO MỪNG BẠN GIA NHẬP SERVER PMDVN WORLD__** :door:\n\n**__PMDVN-Nexus__**: *Xin tự giới thiệu, tôi là PMDVN Nexus - BOT quản lí Server này. Đây là Server Chat chính thức của Pokémon Mystery Dungeon Vietnam. Trước khi được Chat trên Server, bạn cần phải làm một số việc như sau:*\n\n-Vui lòng khai báo **Tên Facebook**, **Pokémon bạn hoá thân trên Group** tại <#388210942908956682> để Admin xác nhận danh tính.\n-Đọc kĩ <#388258800697737216> trước khi tham gia chat.\n\n*Mong bạn sẽ có khoảng thời gian vui vẻ tại nơi này!*");
});

///////////////////////////////////////////////////////////////////////////////////////
//                          Database of Wikia Members/Admins                         //
///////////////////////////////////////////////////////////////////////////////////////


// info.js : Basic Info //
// inv.js : Inventory //