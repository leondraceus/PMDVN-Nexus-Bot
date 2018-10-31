module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var treasure = Math.floor(Math.random() * 50) +1;

    if (treasure < 10)
    message.reply("bạn không đào được gì cả.");
    else if (treasure == 11 || treasure == 13)
    message.reply("bạn đào được 1 Gold Bar.");
    else
    message.reply("bạn không đào được gì cả.");

}
module.exports.help = {
    name: "dig"
}