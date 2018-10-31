module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var treasure = Math.floor(Math.random() * 50) +1;

    if (treasure == 1)
    message.reply("bạn đào được .");
    else if (treasure == 2)
    message.reply("bạn đào được 2 Gold Bar.");
    else
    message.reply("bạn không đào được gì cả.");

}
module.exports.help = {
    name: "dig"
}