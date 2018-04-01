module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var roll = Math.floor(Math.random() * 100) +1;

    message.channel.send("<@&374117121745223680>");
    if (roll < 11)
    message.reply("chúc mừng ngày quốc tế xạo lone :heart:");

    else if (roll < 21)
    message.reply("bạn đoé được cái gì hết, tiếc quá ~ :heart:");

    else if (roll < 31)
    message.reply("xin chúc mừng, bạn đã được 1 triệu <:poke:379535433467428867>.... có cl í <:fakesmile:387588841332146178>");

    else if (roll < 41)
    message.reply("tặng bạn 1 random fact: Con De kém sang");

    else if (roll < 51)
    message.reply("bạn không được làm thế. Bạn làm thế là bạn xạo lone.");

    else if (roll < 61)
    message.reply("tặng bạn 1 random fact: Admin Zekrom Đen Hôi đẹp trai 6 múi khoai to soái ca");

    else if (roll < 71)
    message.reply("let the trigger begin! (┛ಠ□ಠ)┛︵┻━┻");

    else if (roll < 81)
    message.reply("bạn rất là đẹp.... có cl nha :heart:");

    else if (roll < 91)
    message.reply("chào mừng đến với thế giới xạo lone.");

    else
    message.reply("mình yêu bạn :heart:");
}

module.exports.help = {
    name: "vwheel"
}