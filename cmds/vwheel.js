module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var roll = Math.floor(Math.random() * 100) +1;

    message.channel.send("<@&374117121745223680>");
    if (1 <= roll <= 10)
    message.reply("chúc mừng ngày quốc tế xộn lào :heart:");

    else if (11 <= roll <= 20)
    message.reply("bạn đoé được cái gì hết, tiếc quá ~ :heart:");

    else if (21 <= roll <= 30)
    message.reply("xin chúc mừng, bạn đã được 1 triệu :poke:.... có cl í :fakesmile:");

    else if (31 <= roll <= 40)
    message.reply("tặng bạn 1 random fact: Con De kém sang");

    else if (41 <= roll <= 50)
    message.reply("bạn không được làm thế. Bạn làm thế là bạn xộn lào.");

    else if (51 <= roll <= 60)
    message.reply("tặng bạn 1 random fact: Admin Zekrom Đen Hôi đẹp trai 6 múi khoai to soái ca");

    else if (61 <= roll <= 70)
    message.reply("let the trigger begin! (┛ಠ□ಠ)┛︵┻━┻");

    else if (71 <= roll <= 80)
    message.reply("bạn rất là đẹp.... có cl nha :heart:");

    else if (81 <= roll <= 90)
    message.reply("chào mừng đến với thế giới xộn lào");

    else if (91 <= roll <= 100)
    message.reply("mình yêu bạn");
}

module.exports.help = {
    name: "vwheel"
}