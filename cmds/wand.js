module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var roll = Math.floor(Math.random() * 100) +1;
    var wand1 = Math.floor(Math.random() * 8) +1;
    var wand2 = Math.floor(Math.random() * 8) +8;
    if (roll < 95)
    message.reply("bạn nhận được " + wand1 + " <:snowflake1:388938310602457089>");
    else
    message.reply("bạn nhận được " + wand2 + " <:snowflake1:388938310602457089>");
}

module.exports.help = {
    name: "wand"
}