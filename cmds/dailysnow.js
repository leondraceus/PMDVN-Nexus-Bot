module.exports.run = async (pw, message, args) => {
    var roll = Math.floor(Math.random() * 5) +1;
    message.reply("nhận được " + roll + " <:snowflake1:388938310602457089>");
    message.channel.sendMessage("<@&374117121745223680> - Những ai có Frozen Wand có thể roll 2 lần mỗi ngày. Không spam, hành vi spam command này sẽ bị xử lí nặng!")
}

module.exports.help = {
    name: "dailysnow"
}