module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var roll = Math.floor(Math.random() * 5) +1;
    if ( roll == 1 || roll == 2 || roll == 3 )
    message.reply("bạn nhận được một nụ hôn");
    else
    message.reply("bạn nhận được một nụ hôn nồng thắm");
}

module.exports.help = {
    name: "delibird"
}