module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var roll = Math.floor(Math.random() * 10) +1;
    var roll1 = Math.floor(Math.random() * 10) +11;
    var roll2 = Math.floor(Math.random() * 10) +21;
    var roll3 = Math.floor(Math.random() * 10) +31;
    var roll4 = Math.floor(Math.random() * 10) +41;
    var roll5 = Math.floor(Math.random() * 10) +51;
    var roll6 = Math.floor(Math.random() * 10) +61;
    var roll7 = Math.floor(Math.random() * 10) +71;
    var roll8 = Math.floor(Math.random() * 10) +81;
    var roll9 = Math.floor(Math.random() * 10) +91;

    message.channel.send("<@&374117121745223680>");
    if (roll)
    message.reply("chúc mừng ngày quốc tế xạo lone :heart:");

    else if (roll1)
    message.reply("bạn đoé được cái gì hết, tiếc quá ~ :heart:");

    else if (roll2)
    message.reply("xin chúc mừng, bạn đã được 1 triệu :poke:.... có cl í :fakesmile:");

    else if (roll3)
    message.reply("tặng bạn 1 random fact: Con De kém sang");

    else if (roll4)
    message.reply("bạn không được làm thế. Bạn làm thế là bạn xạo lone.");

    else if (roll5)
    message.reply("tặng bạn 1 random fact: Admin Zekrom Đen Hôi đẹp trai 6 múi khoai to soái ca");

    else if (roll6)
    message.reply("let the trigger begin! (┛ಠ□ಠ)┛︵┻━┻");

    else if (roll7)
    message.reply("bạn rất là đẹp.... có cl nha :heart:");

    else if (roll8)
    message.reply("chào mừng đến với thế giới xạo lone");

    else if (roll9)
    message.reply("mình yêu bạn");
}

module.exports.help = {
    name: "vwheel"
}