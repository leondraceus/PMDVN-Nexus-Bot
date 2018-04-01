module.exports.run = async (pw, message, args) => {
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var roll = Math.floor(Math.random() * 100) +1;

    message.channel.send("<@&374117121745223680>");
    if (1 <= roll <= 100)
    message.reply("bạn đã quay trúng 10 <:poke:379535433467428867>, chúc mừng!");
}

module.exports.help = {
    name: "vwheel"
}