module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var treasure = Math.floor(Math.random() * 20) +1;

    if (treasure < 10)
    message.reply("bạn không đào được gì cả.");
    else 
    message.reply("bạn đào được 1 Gold Bar.");

}
module.exports.help = {
    name: "dig"
}