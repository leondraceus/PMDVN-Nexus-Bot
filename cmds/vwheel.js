module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var roll = Math.floor(Math.random() * 100) +1;

    message.channel.send("<@&374117121745223680>");
    if (roll < 11)
    message.reply("chúc mừng ngày quốc tế xạo lone :heart:");

    else if (10 < roll < 21)
    message.reply("bạn đoé được cái gì hết, tiếc quá ~ :heart:");

    else if (20 < roll < 31)
    message.reply("xin chúc mừng, bạn đã được 1 triệu :poke:.... có cl í :fakesmile:");

    else if (30< roll < 41)
    message.reply("tặng bạn 1 random fact: Con De kém sang");

    else if (40 < roll < 51)
    message.reply("bạn không được làm thế. Bạn làm thế là bạn xạo lone.");

    else if (50 < roll < 61)
    message.reply("tặng bạn 1 random fact: Admin Zekrom Đen Hôi đẹp trai 6 múi khoai to soái ca");

    else if (60 < roll < 71)
    message.reply("let the trigger begin! (┛ಠ□ಠ)┛︵┻━┻");

    else if (70 < roll < 81)
    message.reply("bạn rất là đẹp.... có cl nha :heart:");

    else if (80 < roll < 91)
    message.reply("chào mừng đến với thế giới xạo lone.s");

    else
    message.reply("mình yêu bạn :heart:");
}

module.exports.help = {
    name: "vwheel"
}