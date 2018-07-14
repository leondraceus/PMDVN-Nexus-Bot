const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var roll = Math.floor(Math.random() * 6) +1;
    var reroll = Math.floor(Math.random() * 6) +1;
    var sum = roll + reroll;

    message.channel.send("Bạn tung được " + roll + " & " + reroll + ". Tổng là " + sum + ".");
}

module.exports.help = {
    name: "roll"
}